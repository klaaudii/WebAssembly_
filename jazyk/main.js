import antlr4 from './antlr4/index.web.js';
import SchemeLikeLLexer from './SchemeLikeLLexer.js';
import SchemeLikeLParser from './SchemeLikeLParser.js';
import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
import binaryen from './binaryen/index.js'
import * as AST from './ast.js';
import TerminalNodeImpl from "./antlr4/tree/TerminalNodeImpl.js";
import * as JSZIP from './jszip.js'

class TypeError extends Error {
    constructor(message) {
        super(message);
        this.name = "TypeError";
    }
}

class SchemeError extends Error {
    constructor(message) {
        super(message);
        this.name = "Error";
    }
}


const ErrorType = {
    ExpectedNumberActualList: 0,
    ExpectedNumberActualVector: 1,
    ExpectedListActualVector: 2,
    ExpectedListActualNumber: 3,
    ExpectedVectorActualList: 4,
    ExpectedVectorActualNumber: 5,
    ExpectedNumberActualVoid: 6,
    ExpectedListActualVoid: 7,
    ExpectedVectorActualVoid: 8,
    ExpectedListActualEmpty: 9,
    ExpectedVectorActualEmpty: 10,
    IndexOutOfBounds: 11,
    InvalidArgument: 12
}


function throwError(value) {

    switch (value) {
        case ErrorType.ExpectedNumberActualList:
            throw new TypeError("expected type: Number, actual type: List");
        case ErrorType.ExpectedNumberActualVector:
            throw new TypeError("expected type: Number, actual type: Vector");
        case ErrorType.ExpectedListActualVector:
            throw new TypeError("expected type: List, actual type: Vector");
        case ErrorType.ExpectedListActualNumber:
            throw new TypeError("expected type: List, actual type: Number");
        case ErrorType.ExpectedVectorActualList:
            throw new TypeError("expected type: Vector, actual type: List");
        case ErrorType.ExpectedVectorActualNumber:
            throw new TypeError("expected type: Vector, actual type: Number");
        case ErrorType.ExpectedVectorActualVoid:
            throw new TypeError("expected type: Vector, actual type: Void");
        case ErrorType.ExpectedListActualVoid:
            throw new TypeError("expected type: List, actual type: Void");
        case ErrorType.ExpectedNumberActualVoid:
            throw new TypeError("expected type: Number, actual type: Void");
        case ErrorType.ExpectedListActualEmpty:
            throw new SchemeError("cannot perform the operation on an empty List");
        case ErrorType.ExpectedVectorActualEmpty:
            throw new SchemeError("cannot perform the operation on an empty Vector");
        case ErrorType.IndexOutOfBounds:
            throw new SchemeError("index out of bounds");
        case ErrorType.InvalidArgument:
            throw new SchemeError("invalid argument value UNDEFINED");
        default:
            throw new SchemeError("unspecified error")
    }
}


class MyVisitor extends SchemeLikeLVisitor {
    visitStart(ctx) {
        let body = [];
        for (let i = 0; i < ctx.children.length - 1; i++){
            switch (ctx.children[i].constructor) {
                case SchemeLikeLParser.ExprContext:
                case SchemeLikeLParser.DefineGlobalVarContext:
                case SchemeLikeLParser.DefineFncContext:
                case SchemeLikeLParser.CallFncContext:
                case SchemeLikeLParser.CallLambdaFncContext:
                case SchemeLikeLParser.IfExprContext:
                case SchemeLikeLParser.BiExprContext:
                case SchemeLikeLParser.OperatorExprContext:
                case SchemeLikeLParser.LocalFncBodyExprContext:
                case SchemeLikeLParser.FncBodyExprContext:
                case SchemeLikeLParser.VarPairExprContext:
                case SchemeLikeLParser.SetExprContext:
                case SchemeLikeLParser.BeginExprContext:
                case SchemeLikeLParser.VectorExprContext:
                case SchemeLikeLParser.ListExprContext:
                case SchemeLikeLParser.DisplayExprContext:
                case SchemeLikeLParser.UniExprContext:
                case SchemeLikeLParser.LiteralContext:
                case SchemeLikeLParser.ExportExprContext:
                case SchemeLikeLParser.SExprContext:
                case SchemeLikeLParser.IdentifierContext:
                case SchemeLikeLParser.WhileExprContext:
                    body.push(this.visit(ctx.children[i]));
                    break;
                case TerminalNodeImpl:
                    break;
                default:
                    throw new Error('Unsupported command type');
            }
        }
        console.log("created AST: ")
        console.log(new AST.ProgramNode(body));
        return new AST.ProgramNode(body);
    }

    visitWhileExpr(ctx) {
        let condition;
        let body = [];
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                if (condition === undefined) condition = this.visit(child);
                else body.push(this.visit(child));
            }
        }

        console.log(new AST.WhileNode(condition, body))
        return new AST.WhileNode(condition, body)
    }

    visitLiteral(ctx) {
        let literal = ""
        for (let i = 0; i < ctx.children.length; i++){
            literal += ctx.children[i].symbol.text
        }
        return new AST.LiteralNode(literal);
    }

    visitIdentifier(ctx) {
        let identifier = ""
        for (let i = 0; i < ctx.children.length; i++) {
            identifier += ctx.children[i].symbol.text
        }
        return new AST.IdentifierNode(identifier);
    }

    visitVectorExpr(ctx) {
        let values = [];
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                values.push(this.visit(child));
            }
        }
        return new AST.VectorNode(values)
    }

    visitListExpr(ctx) {
        let values = [];
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                values.push(this.visit(child))
            }
        }
        return new AST.ListNode(values);
    }

    visitDefineGlobalVar(ctx) {
        let identifier;
        let value;
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            //we can have (define x y)
            if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined) {
                identifier = this.visit(child);
            } else if (child.constructor !== TerminalNodeImpl) {
                value = this.visit(child);
            }
        }
        return new AST.DefineVarNode(identifier, value);
    }

    visitExpr(ctx) {
        let operator = "";
        let values = [];
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.OperatorExprContext) {
                operator = this.visit(child);
            }
            else if (child.constructor !== TerminalNodeImpl) {
                values.push(this.visit(child));
            }
        }
        return new AST.MultiOpNode(operator, values);
    }

    visitLogExpr(ctx) {
        let operator = "";
        let values = [];
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.LogOperatorExprContext) {
                operator = this.visit(child);
            }
            else if (child.constructor !== TerminalNodeImpl) {
                values.push(this.visit(child));
            }
        }
        return new AST.LogMultiOpNode(operator, values);
    }

    visitBiExpr(ctx) {
        let operator;
        let left;
        let right;
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                let expr = this.visit(child);
                if (operator === undefined) operator = expr;
                else if (left === undefined) left = expr;
                else right = expr;
            }
        }
        return new AST.BiOpNode(operator, left, right);
    }

    visitLogBiExpr(ctx) {
        let operator;
        let left;
        let right;
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                let expr = this.visit(child);
                if (operator === undefined) operator = expr;
                else if (left === undefined) left = expr;
                else right = expr;
            }
        }
        return new AST.LogBiOpNode(operator, left, right);
    }

    visitOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.OperatorNode(operator);
    }

    visitExportExpr(ctx) {
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i].constructor === SchemeLikeLParser.IdentifierContext) {
                return new AST.ExportNode(this.visit(ctx.children[i]));
            }
        }
    }

    visitSExpr(ctx) {
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i].constructor !== TerminalNodeImpl) {
                return this.visit(ctx.children[i]);
            }
        }
    }

    visitLogOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.LogOperatorNode(operator);
    }

    visitBiOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.BiOperatorNode(operator);
    }

    visitLogBiOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.LogBiOperatorNode(operator);
    }

    visitUniOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.UniOperatorNode(operator);
    }

    visitLogUniOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.LogUniOperatorNode(operator);
    }

    visitUniExpr(ctx) {
        let operator;
        let operand;
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                let expr = this.visit(child);
                if (operator === undefined) operator = expr;
                else operand = expr;
            }
        }
        return new AST.UniOpNode(operator, operand);
    }

    visitLogUniExpr(ctx) {
        let operator;
        let operand;
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                let expr = this.visit(child);
                if (operator === undefined) operator = expr;
                else operand = expr;
            }
        }
        return new AST.LogUniOpNode(operator, operand);
    }

    visitDefineFnc(ctx) {
        let identifier;
        let body = [];
        let params = [];

        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];

            if (child.constructor === SchemeLikeLParser.IdentifierContext) {
                if (identifier === undefined) {
                    identifier = this.visit(child);
                } else {
                    params.push(this.visit(child));
                }
            } else if (child.constructor !== TerminalNodeImpl) {
                body = this.visit(child);
            }
        }

        return new AST.DefineFuncNode(identifier, params, [], body);
    }




    visitBeginExpr(ctx) {
        let expressions = [];
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i].constructor !== TerminalNodeImpl) {
                expressions.push(this.visit(ctx.children[i]));
            }
        }
        return new AST.BeginNode(expressions);
    }

    visitLocalFncBodyExpr(ctx) {
        let vars = [];
        let body;
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.VarPairExprContext) {
                vars.push(this.visit(child));
            } else if (child.constructor === SchemeLikeLParser.FncBodyExprContext) {
                body = this.visit(child);
            }

        }
        return new AST.LocalFncBodyNode(body, vars);
    }

    visitFncBodyExpr(ctx) {
        let body = [];
        if (ctx.children === null) return new AST.FncBodyNode(body);
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                body.push(this.visit(child));
            }
        }
        return new AST.FncBodyNode(body);
    }

    visitVarPairExpr(ctx) {
        let identifier;
        let value;
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined) {
                identifier = this.visit(child);
            } else if (child.constructor !== TerminalNodeImpl) {
                value = this.visit(child);
            }
        }
        return new AST.VarPairNode(identifier, value);
    }

    visitCallFnc(ctx)  {
        let identifier;
        let params = [];
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined){
                identifier =  this.visit(child);
            } else if (child.constructor !== TerminalNodeImpl) {
                params.push(this.visit(child));
            }
        }
        return new AST.CallFuncNode(identifier, params);
    }

    visitCallLambdaFnc(ctx) {
        let params = [];
        let body = [];

        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.IdentifierContext) {
                params.push(this.visit(child));
            } else if (child.constructor !== TerminalNodeImpl) {
                body = this.visit(child);
            }
        }
        return new AST.CallLambdaFuncNode(params, body);
    }


    visitIfExpr(ctx) {
        let condition;
        let ifTrue;
        let ifFalse;
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                if (condition === undefined) condition = this.visit(child);
                else if (ifTrue === undefined) ifTrue = this.visit(child);
                else ifFalse = this.visit(child);
            }
        }
        return new AST.IfNode(condition, ifTrue, ifFalse);
    }

    visitDisplayExpr(ctx) {
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                return new AST.DisplayNode(this.visit(child));
            }
        }
    }

    visitSetExpr(ctx) {
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                return new AST.SetNode(this.visit(child));
            }
        }
    }
}


let wasmModule;
let tableName = "mTable";
let tableSize = 0;
let canvasMap;
let table;
let memory;
let mem_f32;
let mem_i32;
let mem_i8;
let memoryName = "mem"
let memoryBase;
let freeMemIndex;
let editor;
let exportedFunctions;
let whileIndex;

export function initEditor() {
     editor = ace.edit("editor", {
        theme: "ace/theme/tomorrow_night_eighties",
        mode: "ace/mode/schemeLike",
        autoScrollEditorIntoView: true,
    });
    editor.resize();
    editor.renderer.updateFull();
    editor.setFontSize(16)
}

export function compileToWasm(option){
    document.getElementById("output").innerHTML = "";
    document.getElementById("canvas-container").replaceChildren();
    // wasmModule = new binaryen.Module();


    wasmModule = new binaryen.Module();
    wasmModule.addFunction("add",
        binaryen.createType([binaryen.i32, binaryen.i32]),
        binaryen.i32,
        [],
        wasmModule.i32.add(wasmModule.local.get(0, binaryen.i32), wasmModule.local.get(1, binaryen.i32))
        )


    // binaryen.setOptimizeLevel(0) ziadne opti
    // console.log(wasmModule.getFeatures())
    wasmModule.setFeatures([binaryen.Features.BulkMemory])
    tableSize = 0;
    table = wasmModule.addTable(tableName, 10, 50, binaryen.funcref)
    canvasMap = new Map();

    wasmModule.addMemoryImport(memoryName, "env", "memory")
    memoryBase = wasmModule.i32.const(0);
    freeMemIndex = 0;
    whileIndex = 0;
    exportedFunctions = [];
    memory = new WebAssembly.Memory({initial:100, maximum: 65536});
    mem_f32 = new Float32Array(memory.buffer);
    mem_i32 = new Int32Array(memory.buffer);
    mem_i8 = new Uint8Array(memory.buffer);

    const input = editor.getValue();
    const chars = new antlr4.InputStream(input);
    const lexer = new SchemeLikeLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new SchemeLikeLParser(tokens);
    const parseTree = parser.start();
    // console.log(parseTree)

    const visitor = new MyVisitor();
    const tree = visitor.visit(parseTree);



    generateWasm(tree);
    wasmModule.addGlobal("freeMemIndex", binaryen.i32, true, wasmModule.i32.const(0))
    wasmModule.addGlobalExport("freeMemIndex","freeMemIndex")
    wasmModule.addGlobal("startStructMemIndex", binaryen.i32, true, wasmModule.i32.const(0))

    const wasmText = wasmModule.emitText();
    // console.log(wasmText);
    if (!option) {
        try {
            wasmModule.optimize();
        } catch (e) {
            if (e.message.includes("values.size() > 0")) {
                throwError(ErrorType.InvalidArgument);
            }
        }
    }

    const wasmTextOptimized = wasmModule.emitText();
    console.log("optimized Wat")
    console.log(wasmTextOptimized)

    let binary = wasmModule.emitBinary();
    wasmModule.dispose();
    return {binary: binary, text: wasmTextOptimized};
}

let reservedWords = ["display", "car", "cdr", "lambda", "set!", "list", "vector-ref", "vector-set!", "set-car!",
    "set-cdr!", "canvas", "fill-rect", "fill-circle", "color", "canvas-onclick", "vector", "list-ref", "fill-text",
    "export", "newline", "vector-length", "let*", "if", "begin", "and", "or", "null?", "quotient", "floor", "round",
    "ceiling", "truncate", "remainder"];
let exports;

export async function downloadWasm(option, wasmData) {

    if (option === 1) {
        const zip = new JSZip();
        zip.file('binary.wasm', wasmData.binary);
        zip.file('text.wat', wasmData.text)
        const htmlResponse = await fetch('template.html');
        const htmlText = await htmlResponse.text();
        zip.file('index.html', htmlText);
        const batResponse = await fetch('run.bat');
        const batText = await batResponse.text();
        zip.file('run.bat', batText);
        zip.generateAsync({type: 'blob'}).then(blob => {
            const zipBlob = new Blob([blob], {type: 'application/zip'});
            const zipUrl = URL.createObjectURL(zipBlob);
            const a = document.createElement('a');
            a.href = zipUrl;
            a.download = 'wasm-folder.zip';
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(zipUrl);
        });
    } else if (option === 2 || option === 3) {
        const wasmUint8Array = new Uint8Array(wasmData.binary);
        const wasmBinBlob = new Blob([wasmUint8Array], { type: 'application/wasm' });
        const wasmTextBlob = new Blob([wasmData.text], { type: 'text/plain' });
        const wasmURL = URL.createObjectURL(option === 2 ? wasmBinBlob : wasmTextBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = wasmURL;
        downloadLink.download = option === 2 ? 'binary.wasm' : 'text.wat';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        URL.revokeObjectURL(wasmURL);
    }
}



export function runWasm(wasm) {
    document.getElementById("output").innerHTML = "";
    document.getElementById("canvas-container").replaceChildren();
    const wasmBytes = new Uint8Array(wasm.binary);

    const importObject = {
        env: {
            memory: memory,
            throwError: throwError,
            displayNumber: displayNumber,
            displayList: displayList,
            displayVec: displayVec,
            displayUndef: displayUndef,
            newline: newline,
            createCanvasElement: createCanvasElement,
            updateCanvasData: updateCanvasData,
            canvasFillText: canvasFillText,
            addCanvasOnClickListener: addCanvasOnClickListener,
        }};



    WebAssembly.instantiate(wasmBytes, importObject)
        .then(obj => {
            let result = obj.instance.exports.main();
            exports = obj.instance.exports;
            console.log(mem_f32);
            console.log(mem_i32);
            console.log(mem_i8);
        }).catch(error => {
            document.getElementById("output").innerHTML = error.message;
            throw error;
    });
}


function createCanvasElement(address, width, height) {
    let canvas = document.createElement('canvas');
    canvas.height = height;
    canvas.width = width;
    document.getElementById("canvas-container").appendChild(canvas);
    canvasMap.set(address, {canvas: canvas, clickHandler: undefined });
}

function updateCanvasData(address) {
    let canvas = canvasMap.get(address).canvas;
    let width = mem_f32[address/4];
    let height = mem_f32[address/4 + 1];
    const image_data = new ImageData( new Uint8ClampedArray(mem_i32.buffer, address + 8,
        width*height*4), width, height);
    canvas.getContext('2d').putImageData(image_data, 0, 0);
}


function addCanvasOnClickListener(address, fncNum) {
    let canvas = canvasMap.get(address).canvas;
    let clickHandler = canvasMap.get(address).clickHandler;
    if (clickHandler) {
        canvas.removeEventListener('click',  clickHandler);
    }
    clickHandler = (e) => {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        //checkni ci berie dva argumenty
        let xValue = new Uint32Array(new Float32Array([x]).buffer)[0] & -2;
        let yValue = new Uint32Array(new Float32Array([y]).buffer)[0] & -2;
        Object.entries(exports).at(fncNum).at(1)(xValue, yValue);
    };
    canvasMap.get(address).clickHandler = clickHandler;
    canvas.addEventListener('click', clickHandler);
}

function rgbaToHex(r, g, b, a) {
    var red = r.toString(16).padStart(2, '0');
    var green = g.toString(16).padStart(2, '0');
    var blue = b.toString(16).padStart(2, '0');
    var alpha = a.toString(16).padStart(2, '0');
    var hexColor = '#' + red + green + blue + alpha;

    return hexColor;
}



function canvasFillText(address, vector, x, y, r, g, b, a) {
    let canvas = canvasMap.get(address).canvas;
    let text = "";
    let pointer = vector >> 2;
    let length = mem_i32[pointer/4];
    for (let i = 1; i <= length; i++) {
        text += String.fromCharCode(mem_f32[(pointer+i*4)/4]);
    }
    let x_pos = new Float32Array(new Uint32Array([x]).buffer)[0];
    let y_pos = new Float32Array(new Uint32Array([y]).buffer)[0];
    let ctx = canvas.getContext('2d');
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = rgbaToHex(r,g,b,a)

    ctx.fillText(text, x_pos, y_pos);
}


function generateWasm(ast) {
    init();
    initCanvas();

    let wasmExpressions = [];
    for (let i = 0; i < ast.instructions.length; i++) {
        let ret = generateExpr(ast.instructions[i])
        if (ret !== undefined) {
            if (i !== ast.instructions.length - 1 && getNodeReturnType(ast.instructions[i]) === binaryen.i32) {
                wasmExpressions.push(wasmModule.drop(ret));
            } else {
                wasmExpressions.push(ret);
            }
        }
    }

    let type = getNodeReturnType(ast.instructions[ast.instructions.length - 1]);
    let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);

    wasmModule.addFunction('main', [], type, [], mainBlock);
    wasmModule.addFunctionExport('main', 'main');
}

function init() {
    wasmModule.addFunction("checkNumberTypeAndGetValue", binaryen.createType([binaryen.i32]), binaryen.i32, [],
        wasmModule.block("", [
            wasmModule.if(
                wasmModule.i32.ne(wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(1
                )), wasmModule.i32.const(0)),
                wasmModule.if(wasmModule.i32.eq(wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3
                )), wasmModule.i32.const(3)),
                 wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),
            wasmModule.local.get(0, binaryen.i32)
        ], binaryen.i32))

    wasmModule.addFunction("checkListTypeAndGetList", binaryen.createType([binaryen.i32]), binaryen.i32, [],
        wasmModule.block("", [
            wasmModule.if(
                wasmModule.i32.ne(wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3
                )), wasmModule.i32.const(1)),
                wasmModule.if(wasmModule.i32.eq(wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3
                    )), wasmModule.i32.const(3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),
            wasmModule.local.get(0, binaryen.i32)
        ], binaryen.i32))

    wasmModule.addFunctionImport("error", "env", "throwError", binaryen.createType([binaryen.i32]), binaryen.none);
    wasmModule.addFunctionImport("displayNumber", "env", "displayNumber", binaryen.createType([binaryen.f32]), binaryen.none);
    wasmModule.addFunctionImport("displayList", "env", "displayList", binaryen.createType([binaryen.i32]), binaryen.none);
    wasmModule.addFunctionImport("displayVec", "env", "displayVec", binaryen.createType([binaryen.i32]), binaryen.none);
    wasmModule.addFunctionImport("displayUndef", "env", "displayUndef", [], binaryen.none);
    wasmModule.addFunctionImport("newline", "env", "newline", binaryen.createType([]), binaryen.none);

    wasmModule.addFunction("display", binaryen.createType([binaryen.i32]), binaryen.none, [],
        wasmModule.block("", [
            wasmModule.if(
                wasmModule.i32.eq(wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(1)),
                    wasmModule.i32.const(0)),
                wasmModule.call("displayNumber", [wasmModule.f32.reinterpret(wasmModule.local.get(0, binaryen.i32))], binaryen.none),
                wasmModule.if(wasmModule.i32.ne(wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                         wasmModule.i32.const(3)),
                    wasmModule.call("displayList", [wasmModule.local.get(0, binaryen.i32)], binaryen.none),
                    wasmModule.call("displayVec", [wasmModule.local.get(0, binaryen.i32)], binaryen.none),
                    )),
        ], binaryen.none))


    let emptyListError = wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-3)),
        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualEmpty)], binaryen.none));

    let numberOrVectorError = wasmModule.if(wasmModule.i32.ne(
            wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
            wasmModule.i32.const(1)),
        wasmModule.if(wasmModule.i32.eq(
                wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(3)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none)));

    wasmModule.addFunction("car", binaryen.createType([binaryen.i32]), binaryen.i32, [binaryen.i32],
        wasmModule.block("",
        [


            // emptyListError,
            // numberOrVectorError,
            // wasmModule.if(wasmModule.i32.ne(
            //         wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
            //         wasmModule.i32.const(1)),
            //     wasmModule.if(wasmModule.i32.eq(
            //             wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
            //             wasmModule.i32.const(3)),
            //         wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
            //         wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),
            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-3)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualEmpty)], binaryen.none)),
            wasmModule.if(wasmModule.i32.ne(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                    wasmModule.i32.const(1)),
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),
            wasmModule.i32.load(0,0,
                wasmModule.i32.shr_u(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(-4)),
                    wasmModule.i32.const(2))),
        ], binaryen.i32));

    wasmModule.addFunction("cdr", binaryen.createType([binaryen.i32]), binaryen.i32, [binaryen.i32],
    wasmModule.block("",
        [
            // emptyListError,
            // numberOrVectorError,
            // wasmModule.if(wasmModule.i32.ne(
            //         wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
            //         wasmModule.i32.const(1)),
            //     wasmModule.if(wasmModule.i32.eq(
            //             wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
            //             wasmModule.i32.const(3)),
            //         wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
            //         wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),
            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-3)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualEmpty)], binaryen.none)),
            wasmModule.if(wasmModule.i32.ne(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                    wasmModule.i32.const(1)),
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),
            wasmModule.local.set(1, wasmModule.i32.load(0,0,
                wasmModule.i32.add(
                    wasmModule.i32.shr_u(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32),
                            wasmModule.i32.const(-4)),
                        wasmModule.i32.const(2)),
                    wasmModule.i32.const(4)))),

            wasmModule.i32.or(
            wasmModule.i32.shl(
                wasmModule.local.get(1, binaryen.i32),
            wasmModule.i32.const(2)), wasmModule.i32.const(1)),
        ], binaryen.auto));


    let notNumberError = wasmModule.if(wasmModule.i32.eq(
        wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
        wasmModule.i32.const(3)),
        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
        wasmModule.if(wasmModule.i32.eq(
                wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(1)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none)));


    wasmModule.addFunction("list-ref", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.i32,
        [binaryen.i32,     //i         2
            binaryen.i32,  //index     3
            binaryen.i32,  //i-pointer 4
        ],
        wasmModule.block("",
            [
                //notEmptyList
                // nemoze sa pouzit jeden spolocny node, nakolko binareyn pri optimalizacii,
                // jeden optimalizovany pre jeden pripad pouzil aj pre druhy pripad kde sa dana optimalizacia uz nemusi hodit
                wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualEmpty)], binaryen.none)),
                //notList
                wasmModule.if(wasmModule.i32.ne(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(1)),
                    wasmModule.if(wasmModule.i32.eq(
                            wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                            wasmModule.i32.const(3)),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),
                //notNumber
                // emptyListError,
                // numberOrVectorError,
                // notNumberError,
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
                    wasmModule.if(wasmModule.i32.eq(
                            wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                            wasmModule.i32.const(1)),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),

                wasmModule.local.set(2, wasmModule.i32.const(0)),
                wasmModule.local.set(3, wasmModule.i32.trunc_s.f32(wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)))),
                wasmModule.local.set(4,  wasmModule.i32.shr_u(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(-4)),
                    wasmModule.i32.const(2))),

                wasmModule.loop("loop", wasmModule.block("", [
                    wasmModule.if(
                    wasmModule.i32.eq(wasmModule.local.get(2, binaryen.i32), wasmModule.local.get(3, binaryen.i32)),
                    wasmModule.return(wasmModule.i32.load(0,0, wasmModule.local.get(4, binaryen.i32))),),
                    wasmModule.local.set(4, wasmModule.i32.load(4,0, wasmModule.local.get(4, binaryen.i32))),
                      wasmModule.local.set(2, wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(1))),
                    wasmModule.br("loop")
                ], binaryen.i32)),
            ], binaryen.auto));

    wasmModule.addFunction("set-car!", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.none, [],
        wasmModule.block("",
            [
                wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualEmpty)], binaryen.none)),

                wasmModule.if(wasmModule.i32.ne(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(1)),
                    wasmModule.if(wasmModule.i32.eq(
                            wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                            wasmModule.i32.const(3)),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),

                wasmModule.i32.store(0,0,
                    wasmModule.i32.shr_u(
                        wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(2)), wasmModule.local.get(1, binaryen.i32)),

            ], binaryen.auto));




    wasmModule.addFunction("set-cdr!", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.none, [],
        wasmModule.block("",
            [
                wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualEmpty)], binaryen.none)),

                wasmModule.if(wasmModule.i32.ne(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(1)),
                    wasmModule.if(wasmModule.i32.eq(
                            wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                            wasmModule.i32.const(3)),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),


                wasmModule.if(wasmModule.i32.ne(
                        wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(1)),
                    wasmModule.if(wasmModule.i32.eq(
                            wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                            wasmModule.i32.const(3)),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualVector)], binaryen.none),
                        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedListActualNumber)], binaryen.none))),

                wasmModule.i32.store(4,0,
                    wasmModule.i32.shr_u(
                        wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(2)),

                    wasmModule.i32.shr_s(
                        wasmModule.local.get(1, binaryen.i32),
                        wasmModule.i32.const(2))
                ),

            ], binaryen.auto));


    let vectorEmptyError = wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-1)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualEmpty)], binaryen.none));

    let notVectorError = wasmModule.if(wasmModule.i32.ne(
                wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(3)),
            wasmModule.if(wasmModule.i32.eq(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(1)),
                    wasmModule.i32.const(0)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualNumber)], binaryen.none),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualList)], binaryen.none)));


    wasmModule.addFunction("process-int-input", binaryen.createType([binaryen.i32]), binaryen.i32, [],
        wasmModule.block("", [
            wasmModule.i32.trunc_s.f32(wasmModule.f32.reinterpret(
                wasmModule.call("checkNumberTypeAndGetValue", [wasmModule.local.get(0, binaryen.i32)], binaryen.i32)))
        ], binaryen.i32));


    wasmModule.addFunction("vector-ref", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.i32, [
            binaryen.i32, //vectorBase
            binaryen.i32, //index
        ],
        wasmModule.block("", [

            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-1)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualEmpty)], binaryen.none)),
            notVectorError,
            notNumberError,

            wasmModule.local.set(3, wasmModule.i32.trunc_s.f32(wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)))),

            wasmModule.local.set(2, wasmModule.i32.shr_u(
                wasmModule.local.get(0, binaryen.i32),
                wasmModule.i32.const(2))),

            wasmModule.if(wasmModule.i32.lt_s(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(0)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.IndexOutOfBounds)], binaryen.none)
            ),

            wasmModule.if(wasmModule.i32.ge_s(wasmModule.local.get(3, binaryen.i32),
                    wasmModule.i32.load(0,0, wasmModule.local.get(2, binaryen.i32))),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.IndexOutOfBounds)], binaryen.none)),

            wasmModule.i32.load(0,0, wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32),
                wasmModule.i32.mul(wasmModule.i32.add(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(1)),
                    wasmModule.i32.const(4)))),

        ], binaryen.auto));

    wasmModule.addFunction("vector-length", binaryen.createType([binaryen.i32]), binaryen.i32, [],
        wasmModule.block("", [

            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-1)),
                wasmModule.return(wasmModule.i32.const(0))),

            wasmModule.if(wasmModule.i32.ne(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                    wasmModule.i32.const(3)),
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(1)),
                        wasmModule.i32.const(0)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualNumber)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualList)], binaryen.none))),

                wasmModule.i32.reinterpret(
                wasmModule.f32.convert_s.i32(
                wasmModule.i32.load(0,0,
                wasmModule.i32.shr_u(
                wasmModule.local.get(0, binaryen.i32),
                wasmModule.i32.const(2))))),

        ], binaryen.auto));


    wasmModule.addFunction("vector-set!", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none, [
            binaryen.i32, //vector base
            binaryen.i32, //index
        ],
        wasmModule.block("", [
            vectorEmptyError,
            notVectorError,
            notNumberError,

            wasmModule.if(wasmModule.i32.ne(
                wasmModule.i32.and(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(1)),
                    wasmModule.i32.const(0)),
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(3)),
                        wasmModule.i32.const(3)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),

            wasmModule.local.set(4, wasmModule.i32.trunc_s.f32(wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)))),

            wasmModule.local.set(3, wasmModule.i32.shr_u(
                wasmModule.local.get(0, binaryen.i32),
                wasmModule.i32.const(2))),

            wasmModule.if(wasmModule.i32.lt_s(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(0)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.IndexOutOfBounds)], binaryen.none)
            ),

            wasmModule.if(wasmModule.i32.ge_u(wasmModule.local.get(4, binaryen.i32),
                    wasmModule.i32.load(0,0, wasmModule.local.get(3, binaryen.i32))),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.IndexOutOfBounds)], binaryen.none)),

            wasmModule.i32.store(0,0, wasmModule.i32.add(wasmModule.local.get(3, binaryen.i32),
                wasmModule.i32.mul(wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(1)),
                    wasmModule.i32.const(4))), wasmModule.local.get(2, binaryen.i32)),

        ], binaryen.none));

    wasmModule.addFunction("vectorAdd", binaryen.createType([
        binaryen.i32,      // 0 vector1
            binaryen.i32,  // 1 odkial
            binaryen.i32,   //2 pokial
            binaryen.i32,   //3 vector 2
            binaryen.i32,    //4  odkial2
            binaryen.i32   // 5 odkial 3
        ]), binaryen.i32, [
            // binaryen.i32, //vectorBase
            // binaryen.i32, //vectorEnd   3
            // binaryen.i32, //currentPointer 4

            binaryen.i32,  //6 rozdiel1
            binaryen.i32,   //7 rozdiel2
            binaryen.i32,   //8  final rozdiel

            binaryen.i32, //9 vectorBase1
            binaryen.i32, //10 vectorBase2
            binaryen.i32, //11 currentPointer1
            binaryen.i32, //12 currentPointer2
            binaryen.i32, //13 index

        ],
        wasmModule.block("", [
            //emptyVector
            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-1)),
                wasmModule.return(wasmModule.local.get(0, binaryen.i32))),

            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(-1)),
                wasmModule.return(wasmModule.local.get(0, binaryen.i32))),

            // notVectorError,
            wasmModule.if(wasmModule.i32.ne(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(3)),
                    wasmModule.i32.const(3)),
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(1)),
                        wasmModule.i32.const(0)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualNumber)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualList)], binaryen.none))),

            wasmModule.if(wasmModule.i32.ne(
                    wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(3)),
                    wasmModule.i32.const(3)),
                wasmModule.if(wasmModule.i32.eq(
                        wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(1)),
                        wasmModule.i32.const(0)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualNumber)], binaryen.none),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualList)], binaryen.none))),
            //notNumberError
        wasmModule.if(wasmModule.i32.eq(
            wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
            wasmModule.i32.const(3)),
        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
        wasmModule.if(wasmModule.i32.eq(
                wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(1)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),

    wasmModule.if(wasmModule.i32.eq(
            wasmModule.i32.and(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(3)),
            wasmModule.i32.const(3)),
        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
        wasmModule.if(wasmModule.i32.eq(
                wasmModule.i32.and(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(1)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),

    wasmModule.if(wasmModule.i32.eq(
            wasmModule.i32.and(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(3)),
            wasmModule.i32.const(3)),
        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
        wasmModule.if(wasmModule.i32.eq(
                wasmModule.i32.and(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(1)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),

    wasmModule.if(wasmModule.i32.eq(
            wasmModule.i32.and(wasmModule.local.get(5, binaryen.i32), wasmModule.i32.const(3)),
            wasmModule.i32.const(3)),
        wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
        wasmModule.if(wasmModule.i32.eq(
                wasmModule.i32.and(wasmModule.local.get(5, binaryen.i32), wasmModule.i32.const(3)),
                wasmModule.i32.const(1)),
            wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none))),




            wasmModule.local.set(9, wasmModule.i32.shr_u(
                wasmModule.local.get(0, binaryen.i32),
                wasmModule.i32.const(2))),

            wasmModule.local.set(10, wasmModule.i32.shr_u(
                wasmModule.local.get(3, binaryen.i32),
                wasmModule.i32.const(2))),

            wasmModule.local.set(11, wasmModule.i32.add( wasmModule.local.get(9, binaryen.i32),
                wasmModule.i32.add(
                wasmModule.i32.mul(wasmModule.i32.const(4),
                    wasmModule.i32.trunc_s.f32(
                    wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)))), wasmModule.i32.const(4)))),

            wasmModule.local.set(12, wasmModule.i32.add(wasmModule.local.get(10, binaryen.i32),
                    wasmModule.i32.add(
                    wasmModule.i32.mul(wasmModule.i32.const(4),
                        wasmModule.i32.trunc_s.f32(
                            wasmModule.f32.reinterpret(
                        wasmModule.local.get(4, binaryen.i32)))), wasmModule.i32.const(4)))),

            wasmModule.local.set(6, wasmModule.i32.trunc_s.f32(
            wasmModule.f32.sub(
            wasmModule.f32.reinterpret(wasmModule.local.get(2, binaryen.i32)),
                wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32))))),

            wasmModule.local.set(7,  wasmModule.i32.trunc_s.f32(
                wasmModule.f32.sub(
                    wasmModule.f32.reinterpret(wasmModule.local.get(5, binaryen.i32)),
                    wasmModule.f32.reinterpret(wasmModule.local.get(4, binaryen.i32))))),

            wasmModule.local.set(8,
                wasmModule.if(wasmModule.i32.lt_s(wasmModule.local.get(6, binaryen.i32), wasmModule.local.get(7, binaryen.i32)),
                wasmModule.local.get(6, binaryen.i32),
                    wasmModule.local.get(7, binaryen.i32))),

            wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(8, binaryen.i32), wasmModule.i32.const(0)),
                wasmModule.return(wasmModule.local.get(0, binaryen.i32))),

            wasmModule.local.set(13, wasmModule.i32.const(0)),


            wasmModule.if(wasmModule.i32.lt_s(wasmModule.i32.load(0,0, wasmModule.local.get(9, binaryen.i32)),
                  wasmModule.i32.trunc_s.f32(wasmModule.f32.reinterpret( wasmModule.local.get(2, binaryen.i32)))),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.IndexOutOfBounds)], binaryen.none)),

            wasmModule.if(wasmModule.i32.lt_s(wasmModule.i32.load(0,0, wasmModule.local.get(10, binaryen.i32)),
                    wasmModule.i32.trunc_s.f32(wasmModule.f32.reinterpret( wasmModule.local.get(5, binaryen.i32)))),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.IndexOutOfBounds)], binaryen.none)),


            // (display (+v (vector 1 2 3 4 5) 0 4 (vector 2 7 8 9 10 11) 1 5))


            wasmModule.loop("loopAdd",
                wasmModule.if(wasmModule.i32.gt_s(
                        wasmModule.i32.add(wasmModule.local.get(13, binaryen.i32), wasmModule.i32.const(4)),
                        wasmModule.local.get(8, binaryen.i32)), wasmModule.loop("innerLoop",

                            wasmModule.if(wasmModule.i32.lt_s(
                                wasmModule.local.get(13, binaryen.i32), wasmModule.local.get(8, binaryen.i32)),
                                wasmModule.block("", [

                wasmModule.i32.store(0,0, wasmModule.local.get(11, binaryen.i32),
                            wasmModule.i32.and(
                            wasmModule.i32.reinterpret(
                            wasmModule.f32.add(
                            wasmModule.f32.load(0,0, wasmModule.local.get(11, binaryen.i32)),
                            wasmModule.f32.load(0,0, wasmModule.local.get(12, binaryen.i32)))),
                                wasmModule.i32.const(-2))
                            ),
                            wasmModule.local.set(11, wasmModule.i32.add(wasmModule.local.get(11, binaryen.i32), wasmModule.i32.const(4))),
                            wasmModule.local.set(12, wasmModule.i32.add(wasmModule.local.get(12, binaryen.i32), wasmModule.i32.const(4))),
                            wasmModule.local.set(13, wasmModule.i32.add(wasmModule.local.get(13, binaryen.i32), wasmModule.i32.const(1))),
                                        wasmModule.br("innerLoop"),
                            ]
                        , binaryen.auto),),),
                wasmModule.block("", [


                    wasmModule.v128.store(0,0, wasmModule.local.get(11, binaryen.i32),

                        wasmModule.f32x4.add(
                            wasmModule.v128.load(0,0, wasmModule.local.get(11, binaryen.i32)),
                            wasmModule.v128.load(0,0, wasmModule.local.get(12, binaryen.i32)))),



                wasmModule.v128.store(0,0, wasmModule.local.get(11, binaryen.i32),
                    wasmModule.v128.and(
                        wasmModule.v128.load(0,0, wasmModule.local.get(11, binaryen.i32)),
                        wasmModule.v128.const({0:254, 1:255, 2:255, 3:255, 4:254, 5:255, 6:255, 7:255,
                            8:254, 9:255, 10:255, 11:255, 12:254, 13:255, 14:255, 15:255,
                            length:16}))
                ),

                    wasmModule.local.set(11, wasmModule.i32.add(wasmModule.local.get(11, binaryen.i32), wasmModule.i32.const(16))),
                    wasmModule.local.set(12, wasmModule.i32.add(wasmModule.local.get(12, binaryen.i32), wasmModule.i32.const(16))),
                    wasmModule.local.set(13, wasmModule.i32.add(wasmModule.local.get(13, binaryen.i32), wasmModule.i32.const(4))),
                    wasmModule.br("loopAdd"),
                ], binaryen.i32)
                )
            ),


            // wasmModule.loop("loopRest",
            //     wasmModule.if(wasmModule.i32.gt_s(
            //             wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(4)),
            //             wasmModule.local.get(3, binaryen.i32)), wasmModule.nop(),
            //         wasmModule.block("", [
            //             wasmModule.f32.store(0,0, wasmModule.local.get(4, binaryen.i32),
            //                 wasmModule.f32.add(
            //                     wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)),
            //                     wasmModule.f32.load(0,0, wasmModule.local.get(4, binaryen.i32)))),
            //             wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(4))),
            //             wasmModule.br("loopRest")
            //         ], binaryen.auto))
            // ),
             wasmModule.local.get(0, binaryen.i32),












        ], binaryen.none));


    // wasmModule.addFunction("vectorAdd", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.i32, [
    //         // binaryen.i32, //vectorBase
    //         // binaryen.i32, //vectorEnd   3
    //         // binaryen.i32, //currentPointer 4
    //
    //         binaryen.i32, //vectorBase1  2
    //         binaryen.i32, //vectorEnd1   3
    //         binaryen.i32, //currentPointer1 4
    //
    //         binaryen.i32, //vectorBase2   5
    //         binaryen.i32, //vectorEnd2   6
    //         binaryen.i32, //currentPointer2 7
    //     ],
    //     wasmModule.block("", [
    //
    // //         (define v (vector 1 2 3 4))
    // // (define v2 (vector 2 4 6 8))
    // // (display (+v v v2))
    //
    //         // (define v (vector 1 2 3 4 5))
    //         // (display (+v v 10))
    //
    //         // vectorEmptyError,
    //         notVectorError,
    //         // notNumberError,
    //
    //         wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-1)),
    //             wasmModule.return(wasmModule.local.get(0, binaryen.i32))),
    //
    //         wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(-1)),
    //             wasmModule.return(wasmModule.local.get(0, binaryen.i32))),
    //
    //         wasmModule.local.set(2, wasmModule.i32.shr_u(
    //             wasmModule.local.get(0, binaryen.i32),
    //             wasmModule.i32.const(2))),
    //
    //         wasmModule.local.set(5, wasmModule.i32.shr_u(
    //             wasmModule.local.get(1, binaryen.i32),
    //             wasmModule.i32.const(2))),
    //
    //         wasmModule.local.set(3, wasmModule.i32.add(
    //             wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32),wasmModule.i32.const(4)),
    //             wasmModule.i32.mul(wasmModule.i32.load(0,0, wasmModule.local.get(2, binaryen.i32)),
    //                 wasmModule.i32.const(4)))),
    //         wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(4))),
    //
    //         wasmModule.local.set(6, wasmModule.i32.add(
    //             wasmModule.i32.add(wasmModule.local.get(5, binaryen.i32),wasmModule.i32.const(4)),
    //             wasmModule.i32.mul(wasmModule.i32.load(0,0, wasmModule.local.get(5, binaryen.i32)),
    //                 wasmModule.i32.const(4)))),
    //         wasmModule.local.set(7, wasmModule.i32.add(wasmModule.local.get(5, binaryen.i32), wasmModule.i32.const(4))),
    //
    //         wasmModule.loop("loopAdd",
    //             // wasmModule.if(wasmModule.i32.ge_s(
    //             //         wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(16)),
    //             //         wasmModule.local.get(3, binaryen.i32)), wasmModule.nop(),
    //                 wasmModule.block("", [
    //                     wasmModule.v128.store(0,0, wasmModule.local.get(4, binaryen.i32),
    //                         wasmModule.f32x4.add(
    //                             wasmModule.v128.load(0,0, wasmModule.local.get(4, binaryen.i32)),
    //                             wasmModule.v128.load(0,0, wasmModule.local.get(7, binaryen.i32)))),
    //                     wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(16))),
    //                     wasmModule.local.set(7, wasmModule.i32.add(wasmModule.local.get(7, binaryen.i32), wasmModule.i32.const(16))),
    //                     // wasmModule.br("loopAdd"),
    //                 ], binaryen.auto)
    //         // )
    //         ),
    //
    //
    //         // wasmModule.loop("loopRest",
    //         //     wasmModule.if(wasmModule.i32.gt_s(
    //         //             wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(4)),
    //         //             wasmModule.local.get(3, binaryen.i32)), wasmModule.nop(),
    //         //         wasmModule.block("", [
    //         //             wasmModule.f32.store(0,0, wasmModule.local.get(4, binaryen.i32),
    //         //                 wasmModule.f32.add(
    //         //                     wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)),
    //         //                     wasmModule.f32.load(0,0, wasmModule.local.get(4, binaryen.i32)))),
    //         //             wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(4))),
    //         //             wasmModule.br("loopRest")
    //         //         ], binaryen.auto))
    //         // ),
    //         wasmModule.local.get(0, binaryen.i32)
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //         // plus 10
    //         // wasmModule.if(wasmModule.i32.eq(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(-1)),
    //         //     wasmModule.return(wasmModule.local.get(0, binaryen.i32))),
    //         //
    //         // wasmModule.local.set(2, wasmModule.i32.shr_u(
    //         //     wasmModule.local.get(0, binaryen.i32),
    //         //     wasmModule.i32.const(2))),
    //         //
    //         // wasmModule.local.set(3, wasmModule.i32.add(
    //         //     wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32),wasmModule.i32.const(4)),
    //         //         wasmModule.i32.mul(wasmModule.i32.load(0,0, wasmModule.local.get(2, binaryen.i32)),
    //         //             wasmModule.i32.const(4)))),
    //         // wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(4))),
    //         //
    //         // wasmModule.loop("loopAdd",
    //         //     wasmModule.if(wasmModule.i32.ge_s(
    //         //         wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(16)),
    //         //         wasmModule.local.get(3, binaryen.i32)), wasmModule.nop(),
    //         //         wasmModule.block("", [
    //         //             wasmModule.v128.store(0,0, wasmModule.local.get(4, binaryen.i32),
    //         //             wasmModule.f32x4.add(
    //         //             wasmModule.f32x4.splat(wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32))),
    //         //             wasmModule.v128.load(0,0, wasmModule.local.get(4, binaryen.i32)))),
    //         //             wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(16))),
    //         //
    //         //             wasmModule.br("loopAdd")
    //         //         ], binaryen.auto))
    //         // ),
    //         //
    //         //
    //         // wasmModule.loop("loopRest",
    //         //     wasmModule.if(wasmModule.i32.gt_s(
    //         //             wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(4)),
    //         //         wasmModule.local.get(3, binaryen.i32)), wasmModule.nop(),
    //         //         wasmModule.block("", [
    //         //             wasmModule.f32.store(0,0, wasmModule.local.get(4, binaryen.i32),
    //         //                 wasmModule.f32.add(
    //         //                     wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32)),
    //         //                     wasmModule.f32.load(0,0, wasmModule.local.get(4, binaryen.i32)))),
    //         //             wasmModule.local.set(4, wasmModule.i32.add(wasmModule.local.get(4, binaryen.i32), wasmModule.i32.const(4))),
    //         //             wasmModule.br("loopRest")
    //         //         ], binaryen.auto))
    //         //     ),
    //         // wasmModule.local.get(0, binaryen.i32)
    //
    //
    //
    //
    //
    //     ], binaryen.auto));


}

function initCanvas() {

    wasmModule.addFunctionImport("create-canvas-js", "env", "createCanvasElement",
        binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none);

    wasmModule.addFunctionImport("update-canvas-data-js", "env", "updateCanvasData",
        binaryen.createType([binaryen.i32]), binaryen.none);

    wasmModule.addFunctionImport("add-canvas-onclick-listener-js", "env", "addCanvasOnClickListener",
        binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.none);

    wasmModule.addFunctionImport("canvas-fill-text-js", "env", "canvasFillText",
        binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none);


    wasmModule.addFunction("canvas", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.i32,
        [binaryen.i32, //canvas base
         binaryen.i32, //processed width
         binaryen.i32, //processed height
         binaryen.i32  //canvas memory size
        ],
        wasmModule.block("",
            [
                wasmModule.local.set(2, wasmModule.global.get("freeMemIndex", binaryen.i32)),
                wasmModule.local.set(3, wasmModule.call("process-int-input", [wasmModule.local.get(0, binaryen.i32)], binaryen.i32)),
                wasmModule.local.set(4, wasmModule.call("process-int-input", [wasmModule.local.get(1, binaryen.i32)], binaryen.i32)),
                wasmModule.call("create-canvas-js", [wasmModule.local.get(2, binaryen.i32),
                    wasmModule.local.get(3, binaryen.i32), wasmModule.local.get(4, binaryen.i32)], binaryen.none),
                wasmModule.i32.store(0,0, wasmModule.local.get(2, binaryen.i32),
                    wasmModule.local.get(0, binaryen.i32)),
                wasmModule.i32.store(4,0, wasmModule.local.get(2, binaryen.i32),
                    wasmModule.local.get(1, binaryen.i32)),
                wasmModule.global.set("freeMemIndex", wasmModule.i32.add( wasmModule.i32.const(8),
                    wasmModule.global.get("freeMemIndex", binaryen.i32))),
                wasmModule.local.set(5, wasmModule.i32.mul(
                    wasmModule.i32.mul(wasmModule.local.get(3, binaryen.i32), wasmModule.local.get(4, binaryen.i32)),
                    wasmModule.i32.const(4))),
                wasmModule.memory.fill(wasmModule.global.get("freeMemIndex", binaryen.i32), wasmModule.i32.const(-1),
                    wasmModule.local.get(5, binaryen.i32)),
                wasmModule.call("update-canvas-data-js",
                    [wasmModule.local.get(2, binaryen.i32)], binaryen.none),
                wasmModule.global.set("freeMemIndex",
                    wasmModule.i32.add(wasmModule.global.get("freeMemIndex", binaryen.i32),
                    wasmModule.local.get(5, binaryen.i32))),
                wasmModule.local.get(2, binaryen.i32),
            ], binaryen.i32))

    wasmModule.addFunction("color", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.i32,
        [binaryen.i32,
            binaryen.i32],
        wasmModule.block("",
            [
                    wasmModule.i32.or(
                        wasmModule.i32.or(
                            wasmModule.i32.or(
                                wasmModule.i32.shl(
                                    wasmModule.i32.and(wasmModule.call("process-int-input", [wasmModule.local.get(3, binaryen.i32)], binaryen.i32),
                                        wasmModule.i32.const(0xFF)),
                                    wasmModule.i32.const(24)),
                                wasmModule.i32.shl(
                                    wasmModule.i32.and(wasmModule.call("process-int-input", [wasmModule.local.get(2, binaryen.i32)], binaryen.i32),
                                        wasmModule.i32.const(0xFF)), wasmModule.i32.const(16))
                            ),
                            wasmModule.i32.shl(
                                wasmModule.i32.and(wasmModule.call("process-int-input", [wasmModule.local.get(1, binaryen.i32)], binaryen.i32),
                                    wasmModule.i32.const(0xFF)), wasmModule.i32.const(8))
                        ),
                        wasmModule.i32.and(wasmModule.call("process-int-input", [wasmModule.local.get(0, binaryen.i32)], binaryen.i32),
                            wasmModule.i32.const(0xFF))),
            ], binaryen.i32))


    wasmModule.addFunction("fill-rect", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none,
        [binaryen.i32,     //i 6
            binaryen.i32,  //j 7
            binaryen.i32,  //col_start 8
            binaryen.i32,  //canvas_width 9
            binaryen.i32,  //process_start_x 10
            binaryen.i32,  //process_start_y 11
            binaryen.i32,  //process_end_x 12
            binaryen.i32,  //process_end_y 13
        ],
        wasmModule.block("",
            [
                wasmModule.local.set(10, wasmModule.call("process-int-input", [wasmModule.local.get(1, binaryen.i32)], binaryen.i32)),
                wasmModule.local.set(11, wasmModule.call("process-int-input", [wasmModule.local.get(2, binaryen.i32)], binaryen.i32)),
                wasmModule.local.set(12, wasmModule.call("process-int-input", [wasmModule.local.get(3, binaryen.i32)], binaryen.i32)),
                wasmModule.local.set(13, wasmModule.call("process-int-input", [wasmModule.local.get(4, binaryen.i32)], binaryen.i32)),

                wasmModule.local.set(6, wasmModule.i32.const(0)),
                wasmModule.local.set(7, wasmModule.i32.const(0)),
                wasmModule.local.set(9, wasmModule.call("process-int-input", [wasmModule.i32.load(0, 0, wasmModule.local.get(0, binaryen.i32))], binaryen.i32)),

                wasmModule.local.set(8, wasmModule.i32.add(wasmModule.i32.add(wasmModule.local.get(0, binaryen.i32),
                    wasmModule.i32.const(8)),  wasmModule.i32.mul(wasmModule.i32.add(wasmModule.local.get(10, binaryen.i32),
                        wasmModule.i32.mul(wasmModule.local.get(11, binaryen.i32), wasmModule.local.get(9, binaryen.i32))),
                    wasmModule.i32.const(4)))),

                wasmModule.loop("height", wasmModule.block("", [
                    wasmModule.local.set(6, wasmModule.i32.const(0)),
                    wasmModule.loop("width", wasmModule.block("", [
                        wasmModule.i32.store(0,0,
                            wasmModule.i32.add(
                            wasmModule.local.get(8, binaryen.i32),
                                wasmModule.i32.add(
                            wasmModule.i32.mul(wasmModule.local.get(7, binaryen.i32), wasmModule.i32.const(4)),
                                wasmModule.i32.mul(wasmModule.local.get(9, binaryen.i32),
                                wasmModule.i32.mul(wasmModule.local.get(6, binaryen.i32), wasmModule.i32.const(4))))),
                            wasmModule.local.get(5, binaryen.i32),
                        ),
                        wasmModule.local.set(6, wasmModule.i32.add(wasmModule.local.get(6, binaryen.i32), wasmModule.i32.const(1))),
                        wasmModule.if(wasmModule.i32.lt_s(wasmModule.local.get(6, binaryen.i32), wasmModule.local.get(13, binaryen.i32)),
                            wasmModule.br("width")),])),
                    wasmModule.local.set(7, wasmModule.i32.add(wasmModule.local.get(7, binaryen.i32), wasmModule.i32.const(1))),
                    wasmModule.if(wasmModule.i32.lt_s(wasmModule.local.get(7, binaryen.i32), wasmModule.local.get(12, binaryen.i32)),
                        wasmModule.br("height")),])),
                wasmModule.call("update-canvas-data-js",
                    [wasmModule.local.get(0, binaryen.i32)], binaryen.none),
            ], binaryen.none))


    wasmModule.addFunction("fill-circle", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none,
        [binaryen.f32,     //i 5
            binaryen.f32,  //j 6
            binaryen.f32,  //col_start 7
            binaryen.f32,  //canvas_width 8
            binaryen.f32,  //processed_center_x 9
            binaryen.f32,  //processed_center_y 10
            binaryen.f32,  //processed_radius 11
            binaryen.f32,  //end_check 12
            binaryen.i32,  //helper 13
        ],
        wasmModule.block("",
            [

                wasmModule.local.set(9, wasmModule.f32.convert_s.i32(wasmModule.call("process-int-input", [wasmModule.local.get(1, binaryen.i32)], binaryen.i32))),
                wasmModule.local.set(10, wasmModule.f32.convert_s.i32(wasmModule.call("process-int-input", [wasmModule.local.get(2, binaryen.i32)], binaryen.i32))),
                wasmModule.local.set(11, wasmModule.f32.convert_s.i32(wasmModule.call("process-int-input", [wasmModule.local.get(3, binaryen.i32)], binaryen.i32))),

                wasmModule.local.set(5, wasmModule.f32.const(0)),
                wasmModule.local.set(6, wasmModule.f32.const(0)),

                wasmModule.local.set(12, wasmModule.f32.add(wasmModule.local.get(11, binaryen.f32), wasmModule.local.get(11, binaryen.f32))),

                wasmModule.local.set(8, wasmModule.f32.convert_s.i32(wasmModule.call("process-int-input", [wasmModule.i32.load(0, 0, wasmModule.local.get(0, binaryen.i32))], binaryen.i32))),

                wasmModule.local.set(7, wasmModule.f32.add(wasmModule.f32.add(wasmModule.f32.convert_s.i32(wasmModule.local.get(0, binaryen.i32)),
                    wasmModule.f32.const(8)),  wasmModule.f32.mul(wasmModule.f32.add(wasmModule.f32.sub(wasmModule.local.get(9, binaryen.f32),
                            wasmModule.local.get(11, binaryen.f32)),
                        wasmModule.f32.mul(wasmModule.f32.sub(wasmModule.local.get(10, binaryen.f32),
                            wasmModule.local.get(11, binaryen.f32)), wasmModule.local.get(8, binaryen.f32))),
                    wasmModule.f32.const(4)))),
                // wasmModule.local.get(8, binaryen.f32),

                wasmModule.loop("height", wasmModule.block("", [
                    wasmModule.local.set(5, wasmModule.f32.const(0)),
                    wasmModule.loop("width", wasmModule.block("", [

                        wasmModule.if(wasmModule.f32.lt(
                        wasmModule.f32.sqrt(
                        wasmModule.f32.add(wasmModule.f32.mul(
                            wasmModule.f32.sub(wasmModule.local.get(11, binaryen.f32), wasmModule.local.get(5, binaryen.f32)),
                            wasmModule.f32.sub(wasmModule.local.get(11, binaryen.f32), wasmModule.local.get(5, binaryen.f32))),
                            wasmModule.f32.mul(
                                wasmModule.f32.sub(wasmModule.local.get(11, binaryen.f32), wasmModule.local.get(6, binaryen.f32)),
                                wasmModule.f32.sub(wasmModule.local.get(11, binaryen.f32), wasmModule.local.get(6, binaryen.f32))))),
                                wasmModule.local.get(11, binaryen.f32)),

                        wasmModule.block("", [
                            wasmModule.local.set(13, wasmModule.i32.trunc_s.f32(wasmModule.f32.add(
                                wasmModule.local.get(7, binaryen.f32),
                                wasmModule.f32.add(
                                    wasmModule.f32.mul(wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(4)),
                                    wasmModule.f32.mul(wasmModule.local.get(8, binaryen.f32),
                                        wasmModule.f32.mul(wasmModule.local.get(5, binaryen.f32), wasmModule.f32.const(4))))))),

                            wasmModule.if(wasmModule.i32.gt_s(wasmModule.local.get(13, binaryen.i32), wasmModule.i32.add(wasmModule.local.get(0, binaryen.i32), wasmModule.i32.const(4))),
                            wasmModule.i32.store(0,0,wasmModule.local.get(13, binaryen.f32), wasmModule.local.get(4, binaryen.i32))),


                        ], binaryen.auto),),








                        wasmModule.local.set(5, wasmModule.f32.add(wasmModule.local.get(5, binaryen.f32), wasmModule.f32.const(1))),
                        wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(5, binaryen.f32), wasmModule.local.get(12, binaryen.f32)),
                            wasmModule.br("width")),])),
                    wasmModule.local.set(6, wasmModule.f32.add(wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(1))),
                    wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(6, binaryen.f32), wasmModule.local.get(12, binaryen.f32)),
                        wasmModule.br("height")),])),

                wasmModule.call("update-canvas-data-js",
                    [wasmModule.local.get(0, binaryen.i32)], binaryen.none),
            ], binaryen.none))

    wasmModule.addFunction("fill-text", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none, [],
    wasmModule.call("canvas-fill-text-js",
        [wasmModule.local.get(0, binaryen.i32), wasmModule.local.get(1, binaryen.i32),
            wasmModule.local.get(2, binaryen.i32), wasmModule.local.get(3, binaryen.i32),
            wasmModule.i32.and(
            wasmModule.local.get(4, binaryen.i32),
                wasmModule.i32.const(255)
                ),
            wasmModule.i32.shr_u(
            wasmModule.i32.and(
                wasmModule.local.get(4, binaryen.i32),
                wasmModule.i32.const(65280)
            ), wasmModule.i32.const(8)),

            wasmModule.i32.shr_u(
            wasmModule.i32.and(
                wasmModule.local.get(4, binaryen.i32),
                wasmModule.i32.const(16711680)
            ), wasmModule.i32.const(16)),
            wasmModule.i32.shr_u(
            wasmModule.i32.and(
                wasmModule.local.get(4, binaryen.i32),
                wasmModule.i32.const(4278190080)
            ), wasmModule.i32.const(24)),
        ], binaryen.none));



}

function generateCanvasOnClick(node, ctxVars) {

    if (node.params.length !== 2 || node.params[1].constructor !== AST.IdentifierNode) {
        throw new Error("Expected two params: canvas, functionName")
    }
    // if (wasmModule.getFunction(node.params[1].value) === 0) {
    //     throw new Error("Function does NOT exists")
    // }

    if (wasmModule.getExport(node.params[1].value) === 0) {
        exportedFunctions.push(node.params[1].value)
        wasmModule.addFunctionExport(node.params[1].value, node.params[1].value)
    }
    return wasmModule.call("add-canvas-onclick-listener-js", [generateExpr(node.params[0], ctxVars), wasmModule.i32.const(exportedFunctions.indexOf(node.params[1].value))], binaryen.none)
}

function newline() {
    document.getElementById("output").innerHTML += '\n';
}

function displayNumber(value) {
    document.getElementById("output").innerHTML += value;
}

function displayList(listPointer) {
    document.getElementById("output").innerHTML += "(";

    let pointer = listPointer >> 2;
    while (true) {
        if (pointer === -1) {
            document.getElementById("output").innerHTML += ")";
            break;
        }
        if ((mem_i32[pointer/4] & 1) === 1 ) {
                if ((mem_i32[pointer/4] & 3) === 3 ) displayVec(mem_i32[pointer/4])
                else displayList(mem_i32[pointer/4])
        } else {
            document.getElementById("output").innerHTML += mem_f32[pointer/4];
        }
        pointer = mem_i32[(pointer + 4)/4];
        if (pointer === -1) {
            document.getElementById("output").innerHTML += ")";
            break;
        }
        document.getElementById("output").innerHTML += " ";
    }
}

function displayVec(vectorPointer) {
    document.getElementById("output").innerHTML += "#(";
    let pointer = vectorPointer >> 2;
    let length = mem_i32[pointer/4];
    for (let i = 1; i <= length; i++) {
        document.getElementById("output").innerHTML += mem_f32[(pointer+i*4)/4];
        if (i !== length) {
            document.getElementById("output").innerHTML += " ";
        }
    }
    document.getElementById("output").innerHTML += ")";
}

function displayUndef() {
    document.getElementById("output").innerHTML += "#<undef>";
}


function generateExpr(node, ctxVars) {
    switch (node.constructor) {
        case AST.MultiOpNode:
            return generateMultiOpExpr(node, ctxVars);
        case AST.LogMultiOpNode:
            return generateLogMultiOpExpr(node, ctxVars);
        case AST.LiteralNode:
            return generateLiteralExpr(node);
        case AST.DefineVarNode:
            return generateDefineGlobalVarExpr(node, ctxVars);
        case AST.IdentifierNode:
            return generateIdentifierValue(node, ctxVars);
        case AST.DefineFuncNode:
            return generateDefineFuncExpr(node, ctxVars);
        case AST.CallFuncNode:
            return generateCallFuncExpr(node, ctxVars);
        case AST.CallLambdaFuncNode:
            return generateCallLambdaFuncExpr(node, ctxVars);
        case AST.IfNode:
            return generateIfExpr(node, ctxVars);
        case AST.BiOpNode:
            return generateBiOpExpr(node, ctxVars);
        case AST.LogBiOpNode:
            return generateLogBiOpExpr(node, ctxVars);
        case AST.LocalFncBodyNode:
            return generateLocalFncBodyExpr(node, ctxVars);
        case AST.FncBodyNode:
            return generateFncBodyExpr(node, ctxVars);
        case AST.SetNode:
            return generateSetExpr(node, ctxVars);
        case AST.BeginNode:
            return generateBeginExpr(node, ctxVars);
        case AST.ListNode:
            return generateListExpr(node, ctxVars);
        case AST.DisplayNode:
            return generateDisplayExpr(node, ctxVars);
        case AST.UniOpNode:
            return generateUniOpExpr(node, ctxVars);
        case AST.LogUniOpNode:
            return generateLogUniOpExpr(node, ctxVars);
        case AST.VectorNode:
            return generateVectorExpr(node, ctxVars);
        case AST.ExportNode:
            return generateExportExpr(node, ctxVars);
        case AST.WhileNode:
            return generateWhileExpr(node, ctxVars);
        default:
            throw new Error('Unsupported node type');
    }
}

function generateLiteralExpr(node) {
    return wasmModule.i32.and(wasmModule.i32.reinterpret(wasmModule.f32.const(node.value)), wasmModule.i32.const(-2))
}

function generateIdentifierValue(node, ctxVars){
    if (ctxVars && ctxVars.includes(node.value)) {
        return wasmModule.local.get(ctxVars.indexOf(node.value), binaryen.i32);
    }
    if (wasmModule.getGlobal(node.value) !== 0) {
        return wasmModule.global.get(node.value, binaryen.i32);
    }
    throw new Error("Unbound variable: " + node.value);
}

function generateDefineFuncExpr(node, ctxVars) {

    if (reservedWords.includes(node.identifier.value)) {
        throw new SchemeError( node.identifier.value +   " is reserved word")
    }

    if (wasmModule.getFunction(node.identifier.value)) {
        throw new SchemeError("The function " + node.identifier.value + " already exists")
    }

    if (ctxVars === undefined) ctxVars = [];

    for (let i = 0; i < node.params.length; i++){
        let param = node.params[i].value;
        if (ctxVars.includes(param)) {
            throw new Error("The identifier '" + param +"' is already defined in the scope");
        }
        ctxVars.push(param);
    }

    let type = [];
    for (let i = 0; i < ctxVars.length; i++){
        type.push(binaryen.i32);
    }
    let paramsType = binaryen.createType(type);

    let varsType = [];
    if (node.body.constructor === AST.LocalFncBodyNode) {
        for (let i = 0; i < node.body.vars.length; i++) {
            varsType.push(binaryen.i32);
        }
    }

    let fncType = getNodeReturnType(node.body, ctxVars);
    let fncRef = wasmModule.addFunction(node.identifier.value, paramsType, fncType, varsType, wasmModule.block("", [], binaryen.auto));
    let body = generateExpr(node.body, ctxVars);

    binaryen.Function.setBody(fncRef , body)
}

function getNodeReturnType(node, ctxVars) {
    if (node.constructor === AST.LiteralNode ||
        node.constructor === AST.MultiOpNode ||
        node.constructor === AST.UniOpNode ||
        node.constructor === AST.BiOpNode ||
        node.constructor === AST.IdentifierNode ||
        node.constructor === AST.ListNode ||
        node.constructor === AST.VectorNode ) {
        return binaryen.i32
    } else if (node.constructor === AST.DisplayNode ||
        node.constructor === AST.SetNode) {
        return binaryen.none;
    } else if (node.constructor === AST.CallFuncNode) {
        let funRef = wasmModule.getFunction(node.identifier.value);
        if (funRef !== 0) {
            if (binaryen.getFunctionInfo(funRef).results === 2 || binaryen.getFunctionInfo(funRef).results === 4 ||
                binaryen.getFunctionInfo(funRef).results === 3 || binaryen.getFunctionInfo(funRef).results === 1) return binaryen.i32
            return binaryen.none;
        }
        if (ctxVars && ctxVars.includes(node.identifier.value)) return binaryen.i32 //lebo lambda
    } else if (node.constructor === AST.IfNode) {
        let type = getNodeReturnType(node.ifTrue, ctxVars);
        if (type === undefined) {type = node.ifFalse !== undefined ?  getNodeReturnType(node.ifFalse, ctxVars) : binaryen.none;}
        return type;
    }
    else if (node.constructor === AST.BeginNode) {
        if (node.expressions.length === 0) return binaryen.none;
        return getNodeReturnType(node.expressions[node.expressions.length - 1], ctxVars);
    } else if (node.constructor === AST.FncBodyNode) {
        if (node.body.length === 0) return binaryen.none;
        return getNodeReturnType(node.body[node.body.length - 1], ctxVars);
    } else if (node.constructor === AST.LocalFncBodyNode) {
        if (node.fncBody.body.length === 0) return binaryen.none;
        return getNodeReturnType(node.fncBody.body[node.fncBody.body.length - 1], ctxVars);
    }
}

function generateLocalFncBodyExpr(node, ctxVars){
    let expressions = [];
    let paramsLength;
    if (ctxVars) {
        paramsLength = ctxVars.length;
    } else {
        ctxVars = [];
        paramsLength = 0;
    }
    for (let i = 0; i < node.vars.length; i++) {
        expressions.push(wasmModule.local.set(paramsLength + i, generateExpr(node.vars[i].value, ctxVars)));
        if (reservedWords.includes(node.vars[i].identifier.value)) {
            throw new SchemeError(node.vars[i].identifier.value+ " is reserved word")
        }
        ctxVars.push(node.vars[i].identifier.value);
    }
    expressions.push(generateExpr(node.fncBody, ctxVars));
    return wasmModule.block('', expressions, binaryen.auto);

}

function generateFncBodyExpr(node, ctxVars){
    let expressions = generateSequenceExpr(node.body, ctxVars);
    return wasmModule.block("", expressions, binaryen.auto);
}

function generateWhileExpr(node, ctxVars) {
    let loopName = "while"+whileIndex;
    whileIndex++;
    let body = generateSequenceExpr(node.body, ctxVars);
    body.push(wasmModule.br(loopName));
    return wasmModule.loop(loopName, wasmModule.if(generateExpr(node.condition, ctxVars),
        wasmModule.block("", body, binaryen.auto )));
}



function generateSetExpr(node, ctxVars) {
    let value = generateExpr(node.pair.value, ctxVars);
    if (ctxVars && ctxVars.includes(node.pair.identifier.value)) {
        return wasmModule.local.set(ctxVars.indexOf(node.pair.identifier.value), value);
    }
    if (wasmModule.getGlobal(node.pair.identifier.value) !== 0) {
        return wasmModule.global.set(node.pair.identifier.value, value);
    }
    throw new Error("Unbound variable " + node.pair.identifier.value);
}

function generateSequenceExpr(nodes, ctxVars) {
    let expressions = [];
    for (let i = 0; i < nodes.length; i++) {
        if (i !== nodes.length - 1 && getNodeReturnType(nodes[i], ctxVars) === binaryen.i32) {
            expressions.push(wasmModule.drop(generateExpr(nodes[i], ctxVars)));
        } else {
            expressions.push(generateExpr(nodes[i], ctxVars));
        }
    }
    return expressions;
}


function generateBeginExpr(node, ctxVars) {
    let expressions = generateSequenceExpr(node.expressions, ctxVars);
    return wasmModule.block("", expressions, getNodeReturnType(node, ctxVars));
}


function generateCallFuncExpr(node, ctxVars){
    let operands = [];
    let type = [];
    if(node.identifier.value === 'canvas-onclick') return generateCanvasOnClick(node, ctxVars);

    for (let i = 0; i < node.params.length; i++){

        operands.push(generateExpr(node.params[i], ctxVars))
        type.push(binaryen.i32);
    }

    let paramsType = binaryen.createType(type);
    if (wasmModule.getFunction(node.identifier.value) === 0) {
        if (ctxVars === undefined || !ctxVars.includes(node.identifier.value)) {
            if (wasmModule.getGlobal(node.identifier.value) === 0) {
                throw new Error("Unbound variable: " + node.identifier.value)
            } else {
                throw new Error("Invalid application of " + node.identifier.value)
            }
        }
        let localVariable = wasmModule.local.get(ctxVars.indexOf(node.identifier.value), wasmModule.i32);
        return wasmModule.call_indirect(tableName, localVariable, operands, paramsType, binaryen.i32) //TODO? result type proste neviem zistit dopredu
    }

    return wasmModule.call(node.identifier.value, operands, binaryen.getFunctionInfo(wasmModule.getFunction(node.identifier.value)).results);
}

function generateCallLambdaFuncExpr(node, ctxVars) {
    node.identifier.value = "_" + tableSize;
    generateDefineFuncExpr(node, ctxVars);
    wasmModule.addActiveElementSegment(tableName, "e"+tableSize, [node.identifier.value], wasmModule.i32.const(tableSize));

    tableSize++;

    return wasmModule.i32.const(tableSize - 1);
}

function generateDefineGlobalVarExpr(node, ctxVars) {
    if (reservedWords.includes(node.identifier.value)) {
        throw new Error(node.identifier.value + " is reserved word");
    }
    if (!wasmModule.getGlobal(node.identifier.value)) {
        wasmModule.addGlobal(node.identifier.value, binaryen.i32,
            true, wasmModule.i32.const(0));
    }
    return wasmModule.global.set(node.identifier.value,
        generateExpr(node.value, ctxVars));
}


function generateMultiOpExpr(node, params) {
    switch (node.operator.value) {
        case '+':
            let resultAdd = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultAdd = wasmModule.f32.add(resultAdd,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.and(wasmModule.i32.reinterpret(resultAdd), wasmModule.i32.const(-2));
        case '*':
            let resultMul = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultMul = wasmModule.f32.mul(resultMul,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.and(wasmModule.i32.reinterpret(resultMul), wasmModule.i32.const(-2));
        case '-':
            if (node.values.length === 1) {
                return wasmModule.i32.and(
                    wasmModule.i32.reinterpret(
                    wasmModule.f32.mul(wasmModule.f32.const(-1),
                        wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32)))),
                    wasmModule.i32.const(-2));
            }
            let resultSub = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultSub = wasmModule.f32.sub(resultSub,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.and(wasmModule.i32.reinterpret(resultSub), wasmModule.i32.const(-2));
        case '/':
            if (node.values.length === 1) {
                return wasmModule.i32.and(
                    wasmModule.i32.reinterpret(
                        wasmModule.f32.div(wasmModule.f32.const(1),
                            wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32)))),
                    wasmModule.i32.const(-2));
            }
            let resultDiv = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultDiv = wasmModule.f32.div(resultDiv,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.and(wasmModule.i32.reinterpret(resultDiv), wasmModule.i32.const(-2));
            case '+v':
            return wasmModule.call("vectorAdd", [generateExpr(node.values[0], params), generateExpr(node.values[1], params),
                generateExpr(node.values[2], params),generateExpr(node.values[3], params),generateExpr(node.values[4], params),
                generateExpr(node.values[5], params)], binaryen.i32);
        default:
            throw new Error('Unsupported operator ' + node.operator.value);
    }
}

function generateLogMultiOpExpr(node, params) {
    switch (node.operator.value) {
        case 'and':
            let resultAnd = wasmModule.i32.const(1);
            for (let i = 0; i < node.values.length; i++) {
                resultAnd = wasmModule.i32.and(resultAnd, generateExpr(node.values[i], params));
            }
            return resultAnd;
        case 'or':
            let resultOr = wasmModule.i32.const(0);
            for (let i = 0; i < node.values.length; i++) {
                resultOr = wasmModule.i32.or(resultOr, generateExpr(node.values[i], params));
            }
            return resultOr;
        default:
            throw new Error('Unsupported operator ' + node.operator.value);
    }
}

function generateBiOpExpr(node, ctxVars) {
    switch (node.operator.value) {
        case 'quotient':
            return wasmModule.i32.and(wasmModule.i32.reinterpret(
                wasmModule.f32.trunc(
                wasmModule.f32.div(
                wasmModule.f32.reinterpret(
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32)),
                wasmModule.f32.reinterpret(
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32))))), wasmModule.i32.const(-2));
        case 'remainder':
            return wasmModule.i32.and( wasmModule.i32.reinterpret(wasmModule.f32.convert_s.i32(
                wasmModule.i32.rem_s(
                    wasmModule.i32.trunc_s.f32(
                        wasmModule.f32.reinterpret(
                            wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32))),
                    wasmModule.i32.trunc_s.f32(
                        wasmModule.f32.reinterpret(
                            wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32)))))),
                wasmModule.i32.const(-2));

        default:
            throw new Error('Unsupported operator ' + node.operator.value);
    }
}

function generateLogBiOpExpr(node, ctxVars) {
    switch (node.operator.value) {
        case '=':
            return wasmModule.i32.eq(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        case '<=':
            return wasmModule.i32.le_s(
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        case '<':
            return wasmModule.i32.lt_s(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        case '>=':
            return wasmModule.i32.ge_s(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        case '>':
            return wasmModule.i32.gt_s(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        case '!=':
            return wasmModule.i32.ne(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        default:
            throw new Error('Unsupported operator ' + node.operator.value);
    }
}

function generateUniOpExpr(node, ctxVars) {

    switch (node.operator.value) {
        case 'truncate':
            return wasmModule.i32.and(
            wasmModule.i32.reinterpret(
                wasmModule.f32.trunc(
                wasmModule.f32.reinterpret(
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.operand, ctxVars)], binaryen.i32)))),
            wasmModule.i32.const(-2));
        case 'ceiling':
            return wasmModule.i32.and(
                wasmModule.i32.reinterpret(
                    wasmModule.f32.ceil(
                        wasmModule.f32.reinterpret(
                            wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.operand, ctxVars)], binaryen.i32)))),
                wasmModule.i32.const(-2));
        case 'round':
            return wasmModule.i32.and(
                wasmModule.i32.reinterpret(
                    wasmModule.f32.round(
                        wasmModule.f32.reinterpret(
                            wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.operand, ctxVars)], binaryen.i32)))),
                wasmModule.i32.const(-2));
        case 'floor':
            return wasmModule.i32.and(
                wasmModule.i32.reinterpret(
                    wasmModule.f32.floor(
                        wasmModule.f32.reinterpret(
                            wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.operand, ctxVars)], binaryen.i32)))),
                wasmModule.i32.const(-2));
        default:
            throw new Error('Unsupported operator');
    }
}

function generateLogUniOpExpr(node, ctxVars) {
    switch (node.operator.value) {
        case 'null?':
            return wasmModule.i32.eq(wasmModule.call("checkListTypeAndGetList", [generateExpr(node.operand,ctxVars)], binaryen.i32),
                wasmModule.i32.const(-3));
        default:
            throw new Error('Unsupported operator');
    }
}

function generateIfExpr(node, ctxVars) {
    return wasmModule.if(generateExpr(node.condition, ctxVars),
        generateExpr(node.ifTrue, ctxVars),
        generateExpr(node.ifFalse, ctxVars));
}

function generateVectorExpr(node, ctxVars) {
    if (node.values.length === 0) {
        return wasmModule.block("", [wasmModule.i32.const(-1)], binaryen.i32)
    }
    let values = [];

    values.push(saveVectorBody(node,ctxVars))
    values.push(
        wasmModule.i32.or(
            wasmModule.i32.shl(
                wasmModule.i32.sub(
                    wasmModule.global.get("freeMemIndex", binaryen.i32),
                    wasmModule.i32.mul(wasmModule.i32.const(4), wasmModule.i32.const(node.values.length + 1))
                ),
                wasmModule.i32.const(2)), wasmModule.i32.const(3)))

    return wasmModule.block("", values, binaryen.i32);
}

function saveVectorBody(node, ctxVars) {
    let values = [];
    values.push(wasmModule.i32.store(0,0,
        wasmModule.global.get("freeMemIndex", binaryen.i32), wasmModule.i32.const(node.values.length)));
    values.push(wasmModule.global.set("freeMemIndex",
        wasmModule.i32.add(wasmModule.global.get("freeMemIndex", binaryen.i32), wasmModule.i32.const(4))));

    let offset = 0
    for (let i = 0; i < node.values.length; i++) {
        values.push(wasmModule.i32.store(offset,0,
            wasmModule.global.get("freeMemIndex", binaryen.i32),
            wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], ctxVars)], binaryen.i32)));
        offset += 4;
    }
    values.push(wasmModule.global.set("freeMemIndex",
        wasmModule.i32.add(wasmModule.global.get("freeMemIndex", binaryen.i32), wasmModule.i32.const(offset))));
    return wasmModule.block("", values, binaryen.auto);
}


function generateListExpr(node, ctxVars) {
    if (node.values.length === 0) {
        return wasmModule.block("", [wasmModule.i32.const(-3)], binaryen.i32)
    }

    let values = [];
    values.push(wasmModule.global.set("startStructMemIndex",wasmModule.i32.or(
        wasmModule.i32.shl(
            wasmModule.global.get("freeMemIndex", binaryen.i32),
            wasmModule.i32.const(2)),
        wasmModule.i32.const(1))))

    function getPointerInc(hNode) {
        let num = 0;
        if (hNode.constructor === AST.ListNode) {
            num += 8;
            for (let i = 0; i < hNode.values.length; i++) {
                num += getPointerInc(hNode.values[i]);
            }
        } else if (hNode.constructor === AST.VectorNode) {
            num += (hNode.values.length * 4 + 12);
        } else {
            num += 8
        }
        return num
    }


    function helper(hNode) {
        let hValues = [];

        for (let i = 0; i < hNode.values.length; i++) {
            if (hNode.values[i].constructor === AST.CallFuncNode && wasmModule.getFunction(hNode.values[i].identifier.value) === 0) {
                throw new Error("No value provided");
            }

            if (hNode.values[i].constructor === AST.ListNode || hNode.values[i].constructor === AST.VectorNode) {
                hValues.push(wasmModule.i32.store(0,0, wasmModule.global.get("freeMemIndex", binaryen.i32),
                    wasmModule.i32.or(
                        wasmModule.i32.shl(hNode.values[i].values.length === 0 ? wasmModule.i32.const(-1) :
                                wasmModule.i32.add(
                                    wasmModule.global.get("freeMemIndex", binaryen.i32), wasmModule.i32.const(8)),
                            wasmModule.i32.const(2)),
                        wasmModule.i32.const(hNode.values[i].constructor === AST.ListNode ? 1 : 3))))
            } else {
                hValues.push(wasmModule.i32.store(0,0, wasmModule.global.get("freeMemIndex", binaryen.i32),
                    generateExpr(hNode.values[i], ctxVars)));
            }

            if (i === hNode.values.length - 1) {
                hValues.push(wasmModule.i32.store(4, 0, wasmModule.global.get("freeMemIndex", binaryen.i32),
                    wasmModule.i32.const(-1)));
            } else {
                hValues.push(wasmModule.i32.store(4,0, wasmModule.global.get("freeMemIndex", binaryen.i32),
                    wasmModule.i32.add(wasmModule.global.get("freeMemIndex", binaryen.i32),
                        wasmModule.i32.const(getPointerInc(hNode.values[i])))));
            }
            hValues.push(wasmModule.global.set("freeMemIndex",
                wasmModule.i32.add(wasmModule.global.get("freeMemIndex", binaryen.i32), wasmModule.i32.const(8))));

            if (hNode.values[i].constructor === AST.VectorNode) hValues.push(saveVectorBody(hNode.values[i]))
            if (hNode.values[i].constructor === AST.ListNode) hValues.push(...helper(hNode.values[i]))
        }
        return hValues;
    }

    values.push(...helper(node))
    values.push(wasmModule.global.get("startStructMemIndex", binaryen.i32));

    return wasmModule.block("", values, binaryen.i32)
}


function generateDisplayExpr(node, ctxVars) {
    if (node.value.constructor === AST.CallFuncNode && binaryen.getFunctionInfo(wasmModule.getFunction(node.value.identifier.value)).results === 0)
        return   wasmModule.block("",   [generateExpr(node.value, ctxVars), wasmModule.call("displayUndef", [], binaryen.none)], binaryen.none);
    return wasmModule.call("display", [generateExpr(node.value, ctxVars)], binaryen.none);
}

function generateExportExpr(node, ctxVars) {
    if (wasmModule.getFunction(node.identifier.value) === 0) {
        throw new Error("Function " + node.identifier.value + " does NOT exists")
    }
    if (wasmModule.getExport(node.identifier.value) === 0) {
        exportedFunctions.push(node.identifier.value)
        wasmModule.addFunctionExport(node.identifier.value, convertToCamelCase( node.identifier.value));
    }

    function convertToCamelCase(name) {
        const parts = name.split('-');
        const camelCaseName = parts[0] + parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        return camelCaseName;
    }
}

