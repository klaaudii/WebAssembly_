// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError";
//     }
// }
//
//
// import antlr4 from './antlr4/index.web.js';
// import SchemeLikeLLexer from './SchemeLikeLLexer.js';
// import SchemeLikeLParser from './SchemeLikeLParser.js';
// import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
// import binaryen from './binaryen/index.js'
// import * as AST from './ast.js';
// import TerminalNodeImpl from "./antlr4/tree/TerminalNodeImpl.js";
//
//
//
//
// class MyVisitor extends SchemeLikeLVisitor {
//     visitStart(ctx) {
//         let body = [];
//         for (let i = 0; i < ctx.children.length - 1; i++){
//             switch (ctx.children[i].constructor) {
//                 case SchemeLikeLParser.ExprContext:
//                 case SchemeLikeLParser.DefineGlobalVarContext:
//                 case SchemeLikeLParser.DefineFncContext:
//                 case SchemeLikeLParser.CallFncContext:
//                 case SchemeLikeLParser.CallLambdaFncContext:
//                 case SchemeLikeLParser.IfExprContext:
//                 case SchemeLikeLParser.BiExprContext:
//                 case SchemeLikeLParser.OperatorExprContext:
//                 case SchemeLikeLParser.LocalFncBodyExprContext:
//                 case SchemeLikeLParser.FncBodyExprContext:
//                 case SchemeLikeLParser.VarPairExprContext:
//                 case SchemeLikeLParser.SetExprContext:
//                 case SchemeLikeLParser.LoopExprContext:
//                 case SchemeLikeLParser.BeginExprContext:
//                 case SchemeLikeLParser.VectorExprContext:
//                 case SchemeLikeLParser.ListExprContext:
//                 case SchemeLikeLParser.DisplayExprContext:
//                     body.push(this.visit(ctx.children[i]));
//                     break;
//                 default:
//                     throw new Error('Unsupported command type');
//             }
//         }
//         console.log("created AST: ")
//         console.log(new AST.ProgramNode(body));
//         return new AST.ProgramNode(body);
//     }
//
//     visitLiteral(ctx) {
//         return new AST.LiteralNode(ctx.children[0].symbol.text);
//     }
//
//     visitIdentifier(ctx) {
//         return new AST.IdentifierNode(ctx.children[0].symbol.text);
//     }
//
//     visitExpr(ctx) {
//         let operator = "";
//         let values = [];
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.OperatorExprContext) {
//                 operator = this.visit(child);
//             }
//             else if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child));
//             }
//         }
//         return new AST.MultiOpNode(operator, values);
//     }
//
//
//
//     visitBiExpr(ctx) {
//         let operator;
//         let left;
//         let right;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 let expr = this.visit(child);
//                 if (operator === undefined) operator = expr;
//                 else if (left === undefined) left = expr;
//                 else right = expr;
//             }
//         }
//         return new AST.BiOpNode(operator, left, right);
//     }
//
//     visitOperatorExpr(ctx) {
//         let operator = "";
//         for (let i = 0; i < ctx.children.length; i++) {
//             operator += ctx.children[i].symbol.text;
//         }
//         return new AST.OperatorNode(operator);
//     }
//
//     visitBiOperatorExpr(ctx) {
//         let operator = "";
//         for (let i = 0; i < ctx.children.length; i++) {
//             operator += ctx.children[i].symbol.text;
//         }
//         return new AST.BiOperatorNode(operator);
//     }
//
//     visitBeginExpr(ctx) {
//         let expressions = [];
//         for (let i = 0; i < ctx.children.length; i++) {
//             if (ctx.children[i].constructor !== TerminalNodeImpl) {
//                 expressions.push(this.visit(ctx.children[i]));
//             }
//         }
//         return new AST.BeginNode(expressions);
//     }
//
//     visitDefineGlobalVar(ctx) {
//         let identifier;
//         let value;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             //we can have (define x y)
//             if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined) {
//                 identifier = this.visit(child);
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 value = this.visit(child);
//             }
//         }
//         return new AST.DefineVarNode(identifier, value);
//     }
//
//     visitLoopExpr(ctx) {
//         let identifier;
//         let vars = [];
//         let body;
//
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext ) {
//                 identifier = this.visit(child);
//             } else if (child.constructor === SchemeLikeLParser.VarPairExprContext) {
//                 vars.push(this.visit(child));
//             } else if (child.constructor === SchemeLikeLParser.FncBodyExprContext) {
//                 body = this.visit(child);
//             }
//         }
//         return new AST.LoopNode(identifier, vars, body);
//     }
//
//     visitDefineFnc(ctx) {
//         let identifier;
//         let body = [];
//         let params = [];
//         let vars = this.traverse(ctx, []);
//         let lastReturnExprIndex = 0;
//
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
//                 lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
//             }
//         }
//
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext) {
//                 if (identifier === undefined) {
//                     identifier = this.visit(child);
//                 } else {
//                     params.push(this.visit(child));
//                 }
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 body = this.visit(child);
//             }
//             // } else if (child.constructor === SchemeLikeLParser.CallFncContext ||
//             //         child.constructor === SchemeLikeLParser.ExprContext) {
//             //     if (lastReturnExprIndex === i) body.push(this.visit(child));
//             // } else if (child.constructor !== TerminalNodeImpl) {
//             //     body.push(this.visit(child));
//             // }
//
//         }
//
//         return new AST.DefineFuncNode(identifier, params, vars, body);
//     }
//
//     traverse(ctx, vars) {
//         if (ctx.children !== undefined) {
//             for (let i = 0; i < ctx.children.length; i++) {
//                 if (ctx.children[i].constructor === SchemeLikeLParser.LoopExprContext) {
//                     let child = this.visit(ctx.children[i])
//                     for (let j = 0; j < child.vars.length; j++) {
//                         vars.push(child.vars[j].identifier.value);
//                     }
//                 } else {
//                     this.traverse(ctx.children[i], vars);
//                 }
//             }
//         }
//         return vars;
//     }
//
//     visitLocalFncBodyExpr(ctx) {
//         let vars = [];
//         let body;
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.VarPairExprContext) {
//                 vars.push(this.visit(child));
//             } else if (child.constructor === SchemeLikeLParser.FncBodyExprContext) {
//                 body = this.visit(child);
//             }
//
//         }
//         return new AST.LocalFncBodyNode(body, vars);
//     }
//
//     visitFncBodyExpr(ctx) {
//         let body = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 body.push(this.visit(child));
//             }
//
//             // TODO aby sa iba jedno mohlo vratit
//             // } else if (child.constructor === SchemeLikeLParser.CallFncContext ||
//             //         child.constructor === SchemeLikeLParser.ExprContext) {
//             //     if (lastReturnExprIndex === i) body.push(this.visit(child));
//             // } else if (child.constructor !== TerminalNodeImpl) {
//             //     body.push(this.visit(child));
//             // }
//         }
//         return new AST.FncBodyNode(body);
//     }
//
//     visitListExpr(ctx) {
//         let values = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child))
//             }
//         }
//         return new AST.ListNode(values);
//     }
//
//     visitVarPairExpr(ctx) {
//         let identifier;
//         let value;
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined) {
//                identifier = this.visit(child);
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 value = this.visit(child);
//             }
//         }
//         return new AST.VarPairNode(identifier, value);
//     }
//
//     visitCallFnc(ctx)  {
//         let identifier;
//         let params = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined){
//                 identifier =  this.visit(child);
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 params.push(this.visit(child));
//             }
//         }
//         return new AST.CallFuncNode(identifier, params);
//     }
//
//     visitCallLambdaFnc(ctx) {
//         let params = [];
//         let body = [];
//         let lastReturnExprIndex = 0;
//
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
//                 lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
//             }
//         }
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext) {
//                 params.push(this.visit(child));
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 body = this.visit(child);
//             }
//             // else if (child.constructor === SchemeLikeLParser.CallFncContext ||
//             //     child.constructor === SchemeLikeLParser.ExprContext) {
//             //     if (lastReturnExprIndex === i) body.push(this.visit(child));
//             // } else if (child.constructor !== TerminalNodeImpl) {
//             //     body.push(this.visit(child));
//             // }
//         }
//         return new AST.CallLambdaFuncNode(params, body);
//     }
//
//
//     visitIfExpr(ctx) {
//         let condition;
//         let ifTrue;
//         let ifFalse;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 if (condition === undefined) condition = this.visit(child);
//                 else if (ifTrue === undefined) ifTrue = this.visit(child);
//                 else ifFalse = this.visit(child);
//             }
//         }
//         return new AST.IfNode(condition, ifTrue, ifFalse);
//     }
//
//     visitDisplayExpr(ctx) {
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 return new AST.DisplayNode(this.visit(child));
//             }
//         }
//     }
//
//     visitSetExpr(ctx) {
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 return new AST.SetNode(this.visit(child));
//             }
//         }
//     }
//
//     visitVectorExpr(ctx) {
//         let values = [];
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child));
//             }
//         }
//         return new AST.VectorNode(values)
//     }
// }
//
// let wasmModule;
// let runner;
// let globalsMap = new Map(); //name, expression
// let fncMap = new Map();  //name, expression
// let  ctx;
// let tableName = "mTable";
// let tableSize = 0;
// let fncList;
// let loopList;
// let vecPointerMap;
// let listPointerMap;
// let canvasMap;
// let canvasList;
// let table;
// let memory;
// let mem_f32;
// let mem_i32;
// let mem_i8;
// let memoryName = "mem"
// let memoryBase;
// let freeMemIndex;
// let canvas;
//
// export function runWasm(wasmBinary) {
//     document.getElementById("output").innerHTML = ""
//     const wasmBytes = new Uint8Array(wasmBinary);
//
//     const importObject = {
//         env: {
//             memory: memory,
//             throwError: throwError,
//             displayVal: displayVal,
//             createCanvasElement: createCanvasElement,
//             updateCanvasData: updateCanvasData,
//         }};
//
//
//
//     WebAssembly.instantiate(wasmBytes, importObject)
//         .then(obj => {
//             let result = obj.instance.exports.main();
//             if (result !== undefined) document.getElementById("output").innerHTML += result;
//             // console.log(obj.instance.exports.main());
//             console.log(mem_f32);
//             console.log(mem_i32);
//             console.log(mem_i8)
//         })
// }
//
//
// function createCanvasElement(address, width, height) {
//     console.log("this is address: " +address)
//     canvasMap.set(address, {index: canvasList.length ,width: width, height: height})
//     console.log(canvasMap)
//     canvas = document.createElement('canvas');
//     canvas.height = height;
//     canvas.width = width;
//     document.body.appendChild(canvas)
//     canvasList.push(canvas);
// }
//
// function updateCanvasData(address) {
//     let canvasData = canvasMap.get(address);
//
//     const image_data = new ImageData( new Uint8ClampedArray(mem_i32.buffer, address + 8,
//         canvasData.width*canvasData.height*4), canvasData.width, canvasData.height);
//     canvasList[canvasData.index].getContext('2d').putImageData(image_data, 0, 0);
// }
//
// export function compileToWasm(){
//     wasmModule = new binaryen.Module();
//     wasmModule.setFeatures(binaryen.Features.Multivalue)
//     globalsMap = new Map();
//     vecPointerMap = new Map();
//     listPointerMap = new Map();
//     ctx = new Map();
//     fncList = [];
//     tableSize = 0;
//     loopList = [];
//     table = wasmModule.addTable(tableName, 10, 50, binaryen.funcref)
//     wasmModule.addMemoryImport(memoryName, "env", "memory")
//     memoryBase = wasmModule.i32.const(0);
//     freeMemIndex = 0;
//     canvasMap = new Map();
//     canvasList = [];
//
//
//     memory = new WebAssembly.Memory({initial:100, maximum: 65536});
//     mem_f32 = new Float32Array(memory.buffer);
//     mem_i32 = new Int32Array(memory.buffer);
//     mem_i8 = new Uint8Array(memory.buffer);
//
//
//     const input = document.getElementById('userCode').value;
//     const chars = new antlr4.InputStream(input);
//     const lexer = new SchemeLikeLLexer(chars);
//     const tokens = new antlr4.CommonTokenStream(lexer);
//     const parser = new SchemeLikeLParser(tokens);
//     const tree = parser.start();
//
//     const visitor = new MyVisitor();
//     const ast = visitor.visit(tree);
//
//     generateWasm(ast);
//     freeMemIndex *= 4;
//     wasmModule.addGlobal("freeMemIndex", binaryen.f32, true, wasmModule.f32.const(freeMemIndex))
//
//     const wasmText = wasmModule.emitText();
//     console.log(wasmText);
//     // wasmModule.optimize();
//     // if (!wasmModule.validate()) {
//     //     console.error("Module validation error:", wasmModule.validate());
//     // }
//
//     // const wasmTextOptimized = wasmModule.emitText();
//     // console.log("optimized wat")
//     // console.log(wasmTextOptimized)
//     let binary = wasmModule.emitBinary()
//     wasmModule.dispose();
//     return binary;
// }
//
//
// function generateWasm(ast) {
//     wasmModule.addGlobal("returnType", binaryen.f32, true, wasmModule.f32.const(0));
//     // addInitFunctions()
//     addTestFunctions()
//     let wasmExpressions = [];
//     // let returnType = binaryen.none;
//     for (let i = 0; i < ast.instructions.length; i++){
//         let ret = generateExpr(ast.instructions[i])
//
//         if (ret !== undefined) {
//             wasmExpressions.push(ret);
//             // if (binaryen.getExpressionType(ret) !== binaryen.none) {
//             //     console.log(binaryen.getExpressionType(ret))
//             //     console.log(binaryen.getExpressionType(ret) !== binaryen.none)
//             //     if (returnType === binaryen.none) returnType = binaryen.f32;
//             //     else throw new CustomError("Can't return more than 1 value")
//             // }
//         }
//     }
//     // wasmExpressions = [];
//     // wasmExpressions.push(wasmModule.f32.store(0, 4, memoryBase , wasmModule.f32.const(8)))
//     // wasmExpressions.push(wasmModule.f32.store(4, 4, wasmModule.i32.const(4), wasmModule.i32.const(10)))
//     // wasmExpressions.push(wasmModule.i32.store(4, 0, wasmModule.i32.const(0), wasmModule.i32.const(15)))
//     // wasmExpressions.push(wasmModule.f32.store(wasmModule.f32.const(0), wasmModule.f32.const(20), wasmModule.f32.const(11)))
//     // wasmExpressions.push( wasmModule.f32.store(wasmModule.f32.const(4), wasmModule.f32.const(20), wasmModule.f32.const(12)))
//
//
//
//     let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);
//
//     console.log(wasmExpressions)
//
//
//     wasmModule.addFunction('main', [], binaryen.getExpressionType(mainBlock), [], mainBlock);
//     wasmModule.addFunctionExport('main', 'main');
//
//     // let mainBlock3 = wasmModule.block(null, [], binaryen.auto);
//     // let mainBlock2 = wasmModule.block(null, [mainBlock3], binaryen.auto);
//     // wasmModule.addFunction('main2', [], binaryen.getExpressionType(mainBlock2), [], mainBlock2);
//
// }
//
// function throwError(value) {
//     if (value === 0) console.log("Index out of bounds");
//     else console.log("error unspecified");
//     throw new CustomError("Can't return more than 1 value")
//
// }
//
// function displayVal(value, isAsciiCode) {
//     console.log(value)
//     if (isAsciiCode) document.getElementById("output").innerHTML += String.fromCharCode(value);
//     else document.getElementById("output").innerHTML += value;
// }
//
// function addTestFunctions() {
//
//     wasmModule.addFunctionImport("error", "env", "throwError", binaryen.createType([binaryen.f32]), binaryen.none);
//     wasmModule.addFunctionImport("displayVal", "env", "displayVal", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.none);
//
//     wasmModule.addFunction("car", binaryen.createType([binaryen.f32]), binaryen.f32, [binaryen.i32],
//         wasmModule.block("",
//             [
//                 // wasmModule.if(wasmModule.f32.eq(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(0)),
//                 //     wasmModule.call("error", [wasmModule.f32.const(15)], binaryen.none)
//                 // ),
//
//
//                 wasmModule.local.set(1, wasmModule.i32.load(0,0, //prvy prvok
//                      wasmModule.i32.mul(
//                 wasmModule.i32.and(
//                     wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                     wasmModule.i32.const(1073741823)), wasmModule.i32.const(4))
//                  )),
//
//                 //1073741824 list , 0 je to hodnota
//
//                  wasmModule.if(wasmModule.i32.eq(
//                      wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(-1073741824)),
//                          wasmModule.i32.const(0)),
//                      wasmModule.block("", [
//                          wasmModule.global.set("returnType",  wasmModule.f32.const(0)),
//                          wasmModule.f32.load(0,0,
//                              wasmModule.i32.mul(
//                                  wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(1073741823)),
//                                  wasmModule.i32.const(4))),
//                      ], binaryen.f32),
//                      wasmModule.block("", [
//                      wasmModule.global.set("returnType",  wasmModule.f32.const(1)),
//                      wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32))],
//                          binaryen.f32),)
//             ], binaryen.f32))
//
//     wasmModule.addFunction("cdr", binaryen.createType([binaryen.f32]), binaryen.f32, [binaryen.i32],
//         wasmModule.block("",
//             [
//                 wasmModule.global.set("returnType", wasmModule.f32.const(1)),
//                 wasmModule.f32.reinterpret(
//                 wasmModule.i32.or(
//                     wasmModule.i32.load(0,0,
//                      wasmModule.i32.mul(
//                 // wasmModule.f32.reinterpret(
//                 wasmModule.i32.add(
//                         wasmModule.i32.and(
//                             wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                             wasmModule.i32.const(1073741823)), wasmModule.i32.const(1)),
//                   wasmModule.i32.const(4))), wasmModule.i32.const(1073741824)))
//             ], binaryen.auto))
//
//     wasmModule.addFunction("set-car!", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.none,
//         [binaryen.i32,   //adresa prveho cons (1)
//             binaryen.i32,    //adresa + type hodnoty (3 0)
//         ],
//         wasmModule.block("",
//             [
//                 wasmModule.local.set(2,
//                 wasmModule.i32.mul(
//                     wasmModule.i32.and(
//                         wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                         wasmModule.i32.const(1073741823)), wasmModule.i32.const(4))),
//
//
//                 wasmModule.local.set(3, wasmModule.i32.load(0,0, //cons prveho prvku
//                     wasmModule.local.get(2, binaryen.f32))),
//
//                 wasmModule.if(wasmModule.f32.ne(wasmModule.f32.const(0), wasmModule.global.get("returnType", binaryen.f32)),
//                     wasmModule.f32.store(0,0, wasmModule.local.get(2, binaryen.i32),  wasmModule.local.get(1, binaryen.f32)),
//                 wasmModule.block("", [
//                     wasmModule.i32.store(0,0,  wasmModule.local.get(2, binaryen.i32),
//                         wasmModule.i32.and(
//                             wasmModule.local.get(3, binaryen.i32),
//                             wasmModule.i32.const(1073741823))),
//
//                     wasmModule.f32.store(0,0,
//                         wasmModule.i32.mul(
//                             wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(1073741823)),
//                             wasmModule.i32.const(4)), wasmModule.local.get(1, binaryen.f32))
//                 ], binaryen.auto))], binaryen.auto))
//
//     wasmModule.addFunction("set-cdr!", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.none,
//         [binaryen.i32,   //adresa prveho cons (1)
//             binaryen.i32,    //adresa + type hodnoty (3 0)
//         ],
//         wasmModule.block("",
//             [
//                 wasmModule.local.set(2,
//                     wasmModule.i32.mul(
//                         wasmModule.i32.and(
//                             wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                             wasmModule.i32.const(1073741823)), wasmModule.i32.const(4))),
//
//
//                 // wasmModule.if(wasmModule.f32.ne(wasmModule.f32.const(0), wasmModule.global.get("returnType", binaryen.f32)),
//                     wasmModule.i32.store(0,0,
//                         wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(4)),
//                         wasmModule.i32.and(wasmModule.i32.reinterpret(wasmModule.local.get(1, binaryen.f32)), wasmModule.i32.const(1073741823)))
//
//
//                 // ),
//
//
//                 // wasmModule.local.set(3, wasmModule.i32.load(0,0, //cons prveho prvku
//                 //     wasmModule.local.get(2, binaryen.f32))),
//                 //
//                 // wasmModule.i32.store(0,0,  wasmModule.local.get(2, binaryen.i32),
//                 //     wasmModule.i32.or(
//                 //         wasmModule.i32.and(
//                 //             wasmModule.local.get(3, binaryen.i32),
//                 //             wasmModule.i32.const(1073741823)),
//                 //         wasmModule.i32.reinterpret(wasmModule.global.get("returnType", binaryen.f32)))),
//                 //
//                 // wasmModule.f32.store(0,0,
//                 //     wasmModule.i32.mul(
//                 //         wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(1073741823)),
//                 //         wasmModule.i32.const(4)), wasmModule.local.get(1, binaryen.f32))
//
//             ], binaryen.auto))
// }
//
// function addInitFunctions() {
//     // needs to go inside the main function
//     // wasmModule.memory.fill(wasmModule.f32.const(0),wasmModule.f32.const(-999),wasmModule.f32.const(20) )
//     // wasmModule.addGlobal("canvas-base", binaryen.f32, true, wasmModule.f32.const(-1));
//     wasmModule.addFunctionImport("error", "env", "throwError", binaryen.createType([binaryen.f32]), binaryen.none);
//     wasmModule.addFunctionImport("create-canvas-element", "env", "createCanvasElement",
//         binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none);
//     wasmModule.addFunctionImport("update-canvas-data", "env", "updateCanvasData",
//         binaryen.createType([binaryen.f32]), binaryen.none);
//
//
//     wasmModule.addFunction("vector-ref", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.f32, [
//         binaryen.f32 //vectorSize
//         ],
//         wasmModule.block("", [
//
//             // wasmModule.f32.convert_s.i32(
//             //     wasmModule.i32.and(
//             //  wasmModule.i32.load(0, 4,
//             //      wasmModule.i32.const(0)),
//             //     wasmModule.i32.const(1))),
//
//
//
//               wasmModule.local.set(2,
//                 wasmModule.f32.load(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                     wasmModule.f32.mul(
//                         wasmModule.local.get(0, binaryen.f32), wasmModule.f32.const(4)))
//                 )),
//
//               wasmModule.if(wasmModule.f32.le(wasmModule.local.get(2), wasmModule.local.get(1)),
//                   wasmModule.block("", [wasmModule.call("error", [wasmModule.f32.const(0)], binaryen.none), wasmModule.f32.const(-1)], binaryen.auto),
//                      wasmModule.f32.load(0, 4,
//                          wasmModule.i32.trunc_s.f32(
//                              wasmModule.f32.mul(
//                         wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//                              wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.local.get(1))),
//                                  wasmModule.f32.const(4)))))
//         ], binaryen.auto));
//
//     wasmModule.addFunction("vector-set!", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none, [
//             binaryen.f32 //vectorSize
//         ],
//         wasmModule.block("", [
//             wasmModule.local.set(3,
//                 wasmModule.f32.load(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                         wasmModule.f32.mul(
//                             wasmModule.local.get(0, binaryen.f32), wasmModule.f32.const(4)))
//                 )),
//
//             wasmModule.if(wasmModule.f32.le(wasmModule.local.get(3), wasmModule.local.get(1)),
//                 wasmModule.call("error", [wasmModule.f32.const(0)], binaryen.none),
//                 wasmModule.f32.store(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                         wasmModule.f32.mul(
//                             wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//                                 wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.local.get(1))),
//                             wasmModule.f32.const(4))), wasmModule.local.get(2)))
//         ], binaryen.none));
//
//     wasmModule.addFunction("create-canvas", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.f32, [binaryen.f32],
//         wasmModule.block("",
//             [   wasmModule.local.set(2, wasmModule.global.get("freeMemIndex", binaryen.f32)),
//                 wasmModule.call("create-canvas-element", [wasmModule.local.get(2, binaryen.f32), wasmModule.local.get(0, binaryen.f32), wasmModule.local.get(1, binaryen.f32)], binaryen.none),
//                 wasmModule.f32.store(0,0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.f32)),
//                     wasmModule.local.get(0, binaryen.f32)),
//                 wasmModule.f32.store(4,0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.f32)),
//                     wasmModule.local.get(1, binaryen.f32)),
//                 wasmModule.global.set("freeMemIndex",
//                     wasmModule.f32.add(wasmModule.f32.add(wasmModule.f32.const(8), wasmModule.f32.mul(
//                         wasmModule.f32.mul(wasmModule.local.get(0, binaryen.f32), wasmModule.local.get(1, binaryen.f32)),
//                         wasmModule.f32.const(4))
//                     ), wasmModule.local.get(2, binaryen.f32))),
//                 wasmModule.local.get(2, binaryen.f32)
//             ], binaryen.auto))
//
//     wasmModule.addFunction("color", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.f32,
//     //     [binaryen.f32,
//     //         binaryen.i32],
//         [binaryen.f32,
//         binaryen.f32],
//         wasmModule.block("",
//             [
//                 wasmModule.f32.reinterpret(
//                 wasmModule.i32.or(
//                     wasmModule.i32.or(
//                         wasmModule.i32.or(
//                             wasmModule.i32.shl(
//                                 wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(3, binaryen.i32)),
//                                     wasmModule.i32.const(0xFF)),
//                                 wasmModule.i32.const(24)),
//                             wasmModule.i32.shl(
//                                 wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.i32)),
//                                     wasmModule.i32.const(0xFF)), wasmModule.i32.const(16))
//                         ),
//                         wasmModule.i32.shl(
//                             wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(1, binaryen.i32)),
//                                 wasmModule.i32.const(0xFF)), wasmModule.i32.const(8))
//                     ),
//                     wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.i32)),
//                         wasmModule.i32.const(0xFF))
//                 )),
//
//                 // wasmModule.local.set(4, wasmModule.global.get("freeMemIndex", binaryen.f32)),
//                 // wasmModule.local.set(5,  wasmModule.i32.trunc_s.f32(wasmModule.local.get(4, binaryen.f32))),
//                 // wasmModule.i32.store8(0,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.f32))),
//                 // wasmModule.i32.store8(1,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(1, binaryen.f32))),
//                 // wasmModule.i32.store8(2,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.f32))),
//                 // wasmModule.i32.store8(3,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(3, binaryen.f32))),
//                 // wasmModule.global.set("freeMemIndex", wasmModule.f32.add(wasmModule.f32.const(4), wasmModule.local.get(4, binaryen.f32))),
//                 // wasmModule.local.get(4, binaryen.f32),
//
//             ], binaryen.auto))
//
//
//     wasmModule.addFunction("fill-rect", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none,
//         [binaryen.f32,  //i
//             binaryen.f32, //j
//             binaryen.f32,  //rec_start 8
//             binaryen.f32, //canvas_width 9
//             binaryen.f32 //canvas_height 10
//         ],
//          wasmModule.block("",
//             [
//
//                 wasmModule.local.set(6, wasmModule.f32.const(0)),
//                 wasmModule.local.set(7, wasmModule.f32.const(0)),
//                 wasmModule.local.set(9,
//                     wasmModule.f32.load(4, 0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.f32)))),
//                 wasmModule.local.set(8, wasmModule.f32.add(wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//                     wasmModule.f32.const(8)),  wasmModule.f32.mul(wasmModule.f32.add(wasmModule.local.get(1, binaryen.f32),
//                     wasmModule.f32.mul(wasmModule.local.get(2, binaryen.f32), wasmModule.local.get(9, binaryen.f32))),
//                         wasmModule.f32.const(4))  )),
//
//
//
//
//                 wasmModule.loop("height", wasmModule.block("", [
//
//                 wasmModule.local.set(6, wasmModule.f32.const(0)),
//                 wasmModule.loop("width", wasmModule.block("", [
//                 wasmModule.f32.store(0,0,
//                     wasmModule.i32.trunc_s.f32(wasmModule.f32.add(
//                     wasmModule.local.get(8, binaryen.f32),
//                             wasmModule.f32.add(
//                                 wasmModule.f32.mul(wasmModule.f32.mul(
//                                 wasmModule.local.get(9, binaryen.f32),wasmModule.f32.const(4)),  wasmModule.local.get(7, binaryen.f32)),
//                         wasmModule.f32.mul(
//                         wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(4))))),
//                     wasmModule.local.get(5, binaryen.f32),
//                 ),
//                 wasmModule.local.set(6, wasmModule.f32.add(wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(1))),
//                 wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(6, binaryen.f32), wasmModule.local.get(3, binaryen.f32)),
//                     wasmModule.br("width")),])),
//                 wasmModule.local.set(7, wasmModule.f32.add(wasmModule.local.get(7, binaryen.f32), wasmModule.f32.const(1))),
//                 wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(7, binaryen.f32), wasmModule.local.get(4, binaryen.f32)),
//                     wasmModule.br("height")),])),
//
//                 wasmModule.call("update-canvas-data",
//                     [wasmModule.local.get(0, binaryen.f32)], binaryen.none),
//              ], binaryen.none))
//
//
//         wasmModule.addFunction("car", binaryen.createType([binaryen.f32]), binaryen.i32, [binaryen.f32],
//             wasmModule.block("",
//                 [
//
//                     // 1073741824 list
//
//                      wasmModule.i32.shr_u(
//                      wasmModule.i32.and(
//                          wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                          wasmModule.i32.const(0xC0000000)),
//
//                         wasmModule.i32.const(30)
//                         )
//
//             // )
//
//
//                    // wasmModule.if(wasmModule.i32.ne(
//                    //  wasmModule.i32.and(wasmModule.i32.reinterpret(
//                    //      wasmModule.local.get(0, binaryen.f32)), wasmModule.i32.const(0xC0000000)),
//                    //     wasmModule.i32.const(1073741824)
//                    //     ), wasmModule.call('error', [wasmModule.f32.const(2)])),
//                    //
//                    //  wasmModule.i32.const(10)
//                     //      wasmModule.i32.shr_s(
//                     // wasmModule.i32.reinterpret(
//                     //        wasmModule.local.get(0, binaryen.f32)), wasmModule.i32.const(20))
//                     //     // )
//
//
//
//                 ], binaryen.auto))
// }
//
// function generateExpr(node, ctxVars) {
//     switch (node.constructor) {
//         case AST.MultiOpNode:
//             return generateMultiOpExpr(node, ctxVars);
//         case AST.LiteralNode:
//             return generateLiteralExpr(node);
//         case AST.DefineVarNode:
//             return generateDefineGlobalVarExpr(node, ctxVars);
//         case AST.IdentifierNode:
//             return generateIdentifierValue(node, ctxVars);
//         case AST.DefineFuncNode:
//             return generateDefineFuncExpr(node, ctxVars);
//         case AST.CallFuncNode:
//             return generateCallFuncExpr(node, ctxVars);
//         case AST.CallLambdaFuncNode:
//             return generateCallLambdaFuncExpr(node, ctxVars);
//         case AST.IfNode:
//             return generateIfExpr(node, ctxVars);
//         case AST.BiOpNode:
//             return generateBiOpExpr(node, ctxVars);
//         case AST.LocalFncBodyNode:
//             return generateLocalFncBodyExpr(node, ctxVars);
//         case AST.FncBodyNode:
//             return generateFncBodyExpr(node, ctxVars);
//         case AST.SetNode:
//             return generateSetExpr(node, ctxVars);
//         case AST.LoopNode:
//             return generateLoopExpr(node, ctxVars);
//         case AST.BeginNode:
//             return generateBeginExpr(node, ctxVars);
//         case AST.ListNode:
//             return generateListExpr(node, ctxVars);
//         case AST.DisplayNode:
//             return generateDisplayExpr(node, ctxVars);
//         // case AST.VectorNode:
//         //     return generateVectorExpr(node, ctxVars);
//         default:
//             throw new Error('Unsupported node type');
//     }
// }
//
//
// function generateLiteralExpr(node) {
//
//     return wasmModule.block("", [
//         wasmModule.global.set("returnType", wasmModule.f32.const(0)),
//         wasmModule.f32.const(node.value),
//         ], binaryen.f32)
//
// }
//
// function generateIdentifierValue(node, ctxVars){
//     if (vecPointerMap.has(node.value)) {
//         return wasmModule.f32.const(vecPointerMap.get(node.value));
//     }
//     if (listPointerMap.has(node.value)) {
//         return wasmModule.block("", [
//             wasmModule.global.set("returnType", wasmModule.f32.const(1)),
//             wasmModule.global.get(node.value, binaryen.f32)
//         ], binaryen.f32)
//
//     }
//     if (ctxVars && ctxVars.includes(node.value)) {
//         return wasmModule.local.get(ctxVars.indexOf(node.value), binaryen.f32);
//     }
//     return wasmModule.global.get(node.value, binaryen.f32);
// }
//
// function generateDefineFuncExpr(node, ctxVars) {
//     // ctx = new Map();
//     // ctx.set("functionNeededParams", ctxVars)
//     fncList.push(node.identifier.value);
//     let expressions = [];
//
//     if (ctxVars === undefined) {
//         ctxVars = [];
//     }
//
//     for (let i = 0; i < node.params.length; i++){
//         let param = node.params[i].value;
//         if (ctxVars.includes(param)) {
//             throw new CustomError("The identifier '" + param +"' is already defined in the scope"); //TODO? we should be able to use an identifier with the same name in the inner func
//             // ctxVars.splice(i, 1);
//         }
//         ctxVars.push(param);
//     }
//
//     let type = [];
//     for (let i = 0; i < ctxVars.length; i++){
//         type.push(binaryen.f32);
//     }
//
//     let paramsType = binaryen.createType(type);
//
//
//
//
//     // for (let i = 0; i < node.body.length; i++){
//     //     // if (node.body[i].constructor === AST.DefineFuncNode) generateExpr(node.body[i], ctxVars);
//     //     else expressions.push(generateExpr(node.body[i], ctxVars));
//     // }
//
//     let varsType = [];
//
//     if (node.body.constructor === AST.LocalFncBodyNode) {
//         for (let i = 0; i < node.body.vars.length; i++) {
//             varsType.push(binaryen.f32);
//         }
//     }
//
//     for (let i = 0; i < node.localVars.length; i++) {
//         varsType.push(binaryen.f32);
//     }
//
//
//
//
//     let body = generateExpr(node.body, ctxVars);
//
//     // let block = wasmModule.block(null, body, binaryen.auto);
//
//     fncMap.set(node.identifier.value, body);
//     wasmModule.addFunction(node.identifier.value, paramsType, binaryen.getExpressionType(body), varsType, body);
//
// }
//
// function generateLocalFncBodyExpr(node, ctxVars){
//
//     let expressions = [];
//     let paramsLength;
//     if (ctxVars) {
//         paramsLength = ctxVars.length;
//     } else {
//         ctxVars = [];
//         paramsLength = 0;
//     }
//     for (let i = 0; i < node.vars.length; i++) {
//         expressions.push(wasmModule.local.set(paramsLength + i, generateExpr(node.vars[i].value, ctxVars)));
//         ctxVars.push(node.vars[i].identifier.value);
//     }
//     expressions.push(generateExpr(node.fncBody, ctxVars));
//     return wasmModule.block('', expressions, binaryen.auto);
//
// }
//
// function generateFncBodyExpr(node, ctxVars){
//     let expressions = [];
//     for (let i = 0; i < node.body.length; i++) {
//             expressions.push(generateExpr(node.body[i], ctxVars));
//     }
//     return wasmModule.block("", expressions, binaryen.auto);
// }
//
// function generateSetExpr(node, ctxVars) {
//     let value = generateExpr(node.pair.value, ctxVars);
//     if (ctxVars && ctxVars.includes(node.pair.identifier.value)) {
//         return wasmModule.local.set(ctxVars.indexOf(node.pair.identifier.value), value);
//     }
//     return wasmModule.global.set(node.pair.identifier.value, value);
// }
//
// function generateLoopExpr(node, ctxVars) {
//     let len = ctxVars.length;
//     loopList.push(node.identifier.value);
//     let expressions = [];
//
//     for (let i = 0; i < node.vars.length; i++) {
//         ctxVars.push(node.vars[i].identifier.value);
//     }
//
//     for (let i = 0; i < node.vars.length; i++) {
//         expressions.push(wasmModule.local.set(i + len, generateExpr(node.vars[i].value, ctxVars)))
//     }
//
//     expressions.push(wasmModule.loop(node.identifier.value, generateExpr(node.fncBody, ctxVars)))
//     return wasmModule.block("", expressions, binaryen.auto);
//
//
//
//     // let operands = [];
//     // let paramsType = [];
//     // for (let j = 0; j < ctxVars.length; j++) {
//     //     operands.push(wasmModule.local.get(j, binaryen.f32));
//     //     paramsType.push(binaryen.f32);
//     // }
//     // for (let j = 0; j < node.vars.length; j++) {
//     //     operands.push(generateExpr(node.vars[j].value, ctxVars));
//     //     paramsType.push(binaryen.f32);
//     //     ctxVars.push(node.vars[j].identifier.value)
//     // }
//     // let body = generateExpr(node.fncBody, ctxVars);
//     // let block = wasmModule.block("", [body], binaryen.auto)
//     //
//     // wasmModule.addFunction(node.identifier.value, binaryen.createType(paramsType), binaryen.getExpressionType(block), [],block )
//     // return wasmModule.call(node.identifier.value, operands, binaryen.f32);
//
// }
//
// function generateBeginExpr(node, ctxVars) {
//     let expressions = [];
//     for (let i = 0; i < node.expressions.length; i++) {
//         expressions.push(generateExpr(node.expressions[i], ctxVars));
//     }
//     return wasmModule.block("", expressions, binaryen.auto);
// }
//
//
// function generateCallFuncExpr(node, ctxVars){
//     let operands = [];
//
//     let type = [];
//     for (let i = 0; i < node.params.length; i++){
//         operands.push(generateExpr(node.params[i], ctxVars));
//         type.push(binaryen.f32);
//     }
//     if (loopList.includes(node.identifier.value)) {
//         let expressions = [];
//         let diff = ctxVars.length - node.params.length;
//         for (let i = 0; i < node.params.length; i++) {
//             expressions.push(wasmModule.local.set(i + diff, generateExpr(node.params[i], ctxVars)));
//         }
//         expressions.push(wasmModule.br(node.identifier.value));
//         return wasmModule.block("", expressions, binaryen.auto);
//     }
//     let paramsType = binaryen.createType(type);
//     if (wasmModule.getFunction(node.identifier.value) === 0 && !fncList.includes(node.identifier.value)) {
//         let localVariable = wasmModule.local.get(ctxVars.indexOf(node.identifier.value), wasmModule.f32);
//         let truncatedVariable = wasmModule.i32.trunc_s.f32(localVariable);
//         return wasmModule.call_indirect(tableName, truncatedVariable, operands, paramsType, binaryen.f32) //TODO? result type proste neviem zistit dopredu
//     }
//
//     console.log(ctxVars)
//     console.log("results")
//     console.log(wasmModule.getFunction(node.identifier.value))
//
//     //problem pri rekurziach, a zaroven f32 nemoze ostat kvoli void funkciam
//     // binaryen.getFunctionInfo(wasmModule.getFunction(node.identifier.value)).results
//     return wasmModule.call(node.identifier.value, operands, binaryen.f32);
//     // return wasmModule.call(node.identifier.value, operands, binaryen.getFunctionInfo(wasmModule.getFunction(node.identifier.value)).results);
// }
//
// function generateCallLambdaFuncExpr(node, ctxVars) {
//     // indirect()
//
//     // wasmModule.addTable("tab", 10, 10, binaryen.funcref)
//     node.identifier.value = "_" + tableSize;
//     generateDefineFuncExpr(node, ctxVars);
//     // wasmModule.addFunction(node.identifier.value, )
//     wasmModule.addActiveElementSegment(tableName, "e"+tableSize, [node.identifier.value], wasmModule.i32.const(tableSize));
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "0", ["func0"], wasmModule.i32.const(0)))
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "1", ["func1"], wasmModule.i32.const(1)))
//     // console.log(wasmModule.addPassiveElementSegment("1", ["ahoj"]))
//
//     tableSize++;
//
//
//
//
//
//     // let table = wasmModule.addTable("ahoj", 10, 10, binaryen.funcref)
//
//     // console.log(binaryen.getTableInfo(table))
//     // let func0 = wasmModule.addFunction("func0", [], binaryen.i32, [], wasmModule.block("", [wasmModule.i32.const(10)], binaryen.auto) );
//     // let func1 = wasmModule.addFunction("func1", [], [binaryen.i32], [], wasmModule.i32.const(80) );
//
//
//
//
//     // console.log(binaryen.getExpressionInfo(wasmModule.table.set("ahoj", 1, func0)));
//     // console.log(binaryen.getExpressionInfo(wasmModule.table.size("ahoj")));
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "0", ["func0"], wasmModule.i32.const(0)))
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "1", ["func1"], wasmModule.i32.const(1)))
//     // console.log(wasmModule.addPassiveElementSegment("2", ["func0", "func1"]))
//
//
//
//
//
//     //
//     // console.log("get")
//     // console.log(binaryen.getExpressionInfo(wasmModule.table.get("ahoj", wasmModule.i32.const(1))));
//     //
//     // console.log("get function")
//     // console.log()
//
//     // console.log(binaryen.getTableInfo(wasmModule.getTableByIndex(0)));
//     // console.log(binaryen.getExpressionInfo(wasmModule.call_indirect(wasmModule.i32.const(1), [], [], binaryen.i32)))
//     // binaryen.addFunctionType
//
//     return wasmModule.f32.const(tableSize - 1);
//     // call_indirect(table: string, target: ExpressionRef, operands: ExpressionRef[], params: Type, results: Type): ExpressionRef;
//     // return wasmModule.call_indirect("ahoj", wasmModule.i32.const(0), [], [], binaryen.i32)
//
// }
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
//
// function getExpressionValue(expression, params){
//     runner = new binaryen.ExpressionRunner(wasmModule);
//     for (let [key, value] of globalsMap) {
//         runner.setGlobalValue(key, value);
//     }
//     // runner.setGlobalValue("sum3", );
// //     TODO define var using fnc call
// //     runner.setLocalValue(0, wasmModule.f32.const(10));
// //         runner.setLocalValue(1, wasmModule.f32.const(10));
// //         runner.setLocalValue(2, wasmModule.f32.const(10));
// // console.log(runner.runAndDispose(wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
// //     wasmModule.local.get(1, binaryen.f32))))
//     // // console.log(runner.runAndDispose(wasmModule.f32.add(wasmModule.global.get('x', binaryen.f32), wasmModule.global.get('y', binaryen.f32))));
//     return binaryen.getExpressionInfo(runner.runAndDispose(expression)).value;
// }
//
// function generateDefineGlobalVarExpr(node, params){
//
//     if (node.value.constructor === AST.CallFuncNode) {
//         wasmModule.addGlobal(node.identifier.value, binaryen.f32 , true, wasmModule.f32.const(0));
//         return wasmModule.global.set(node.identifier.value, generateExpr(node.value));
//     }
//
//
//
//     let value;
//     if (node.value.constructor === AST.VectorNode) {
//         const rawValue = getAndSetVectorValue(node.value, params);
//         vecPointerMap.set(node.identifier.value, rawValue);
//         value = wasmModule.f32.const(rawValue);
//     } else {
//         value = getValueExpr(node.value, params);
//         globalsMap.set(node.identifier.value, value);
//     }
//
//     if (wasmModule.getGlobal(node.identifier.value)) {
//         return wasmModule.global.set(node.identifier.value, value);
//     }
//
//     if (node.value.constructor === AST.ListNode) {
//         listPointerMap.set(node.identifier.value, value)
//     }
//
//     wasmModule.addGlobal(node.identifier.value, binaryen.f32 , true, value);
// }
//
// function getValue(node, params) {
//     let value;
//     if (node.constructor === AST.IdentifierNode) value = getVarValue(node, params);
//     else if (node.constructor === AST.CallFuncNode) value = getFncValue(node, params);
//     else if (node.constructor === AST.VectorNode) value = getAndSetVectorValue(node, params);
//     else value = getExpressionValue(generateExpr(node, params), params);
//     return value;
// }
//
//
// function getValueExpr(node, params) {
//     return wasmModule.f32.const(getValue(node, params));
// }
//
// function getFncValue(node, params) {
//
//     let localValues = []
//     for (let i = 0; i < node.params.length; i++){
//         // console.log(node.params[i]);
//         localValues.push(getValueExpr(node.params[i], params))
//     }
//     runner = new binaryen.ExpressionRunner(wasmModule);
//     for (let [key, value] of globalsMap) {
//         runner.setGlobalValue(key, value);
//     }
//     for (let i = 0; i < node.params.length; i++){
//         runner.setLocalValue(i, localValues[i]);
//     }
//
//     return binaryen.getExpressionInfo(runner.runAndDispose(fncMap.get(node.identifier.value))).value;
// }
//
// function getVarValue(node, params){
//     // console.log("g identifier");
//     if (params && params.has(node.value)) {
//         return wasmModule.local.get(params.get(node.value), binaryen.f32);
//     }
//     runner = new binaryen.ExpressionRunner(wasmModule);
//     for (let [key, value] of globalsMap) {
//         runner.setGlobalValue(key, value);
//     }
//     return binaryen.getExpressionInfo(runner.runAndDispose(wasmModule.global.get(node.value, binaryen.f32))).value;
// }
//
//
//
//
// function generateMultiOpExpr(node, params) {
//
//     switch (node.operator.value) {
//         case '+':
//             let resultAdd = wasmModule.f32.const(0);
//             for (let i = 0; i < node.values.length; i++) {
//                 resultAdd = wasmModule.f32.add(resultAdd,  wasmModule.block("", [
//                     generateExpr(node.values[i], params),
//                     wasmModule.if(wasmModule.f32.ne(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(0)),
//                         wasmModule.call("error", [wasmModule.f32.const(10)], binaryen.none),
//                     ), ], binaryen.f32))
//             }
//             return resultAdd;
//
//             // let resultAdd = wasmModule.f32.add(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
//             // for (let i = 2; i < node.values.length; i++) {
//             //     resultAdd = wasmModule.f32.add(resultAdd, generateExpr(node.values[i], params));
//             // }
//             // // console.log("add")
//             // // console.log(wasmModule.emitText());
//             // return resultAdd;
//         case '*':
//             if (node.values.length === 1) return generateExpr(node.values[0], params);
//             let resultMul = wasmModule.f32.mul(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultMul = wasmModule.f32.mul(resultMul, generateExpr(node.values[i], params));
//             }
//             return resultMul;
//         case '-':
//             if (node.values.length === 1) return generateExpr(node.values[0], params);
//             let resultSub = wasmModule.f32.sub(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultSub = wasmModule.f32.sub(resultSub, generateExpr(node.values[i], params));
//             }
//             return resultSub;
//
//
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
// function generateBiOpExpr(node, ctxVars) {
//     switch (node.operator.value) {
//         case '=':
//             return wasmModule.f32.eq(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '<=':
//             return wasmModule.f32.le(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '<':
//             return wasmModule.f32.lt(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '>=':
//             return wasmModule.f32.ge(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '>':
//             return wasmModule.f32.gt(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '!=':
//             return wasmModule.f32.ne(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case 'and':
//             return wasmModule.i32.and(wasmModule.i32.trunc_s.f32(generateExpr(node.right, ctxVars)),
//                 wasmModule.i32.trunc_s.f32(generateExpr(node.left, ctxVars)));
//         case 'or':
//             return wasmModule.i32.or(wasmModule.i32.trunc_s.f32(generateExpr(node.right, ctxVars)),
//                 wasmModule.i32.trunc_s.f32(generateExpr(node.left, ctxVars)));
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
//
//
//
//
// function generateIfExpr(node, ctxVars) {
//     let condition;
//     if (node.condition.constructor === AST.BiOpNode) {
//         condition = generateExpr(node.condition, ctxVars)
//     }
//     if (node.ifFalse === undefined) return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars));
//     return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars), generateExpr(node.ifFalse, ctxVars));
// }
//
// function getAndSetVectorValue(node, ctxVars) {
//     let vecPointer = freeMemIndex;
//
//     let values = [];
//     for (let i = 0; i < node.values.length; i++) {
//
//         values.push(getValue(node.values[i], ctxVars));
//     }
//
//     mem_f32[freeMemIndex] = values.length;
//     freeMemIndex++
//
//     for (let i = 0; i < node.values.length; i++) {
//         mem_f32[freeMemIndex] = values[i];
//         freeMemIndex++;
//     }
//
//
//     // let vecPointer = freeMemIndex;
//     //
//     // let values = [];
//     // for (let i = 0; i < node.values.length; i++) {
//     //
//     //     values.push(getValue(node.values[i], ctxVars));
//     // }
//     //
//     // function floatToBinary(number) {
//     //     let buffer = new ArrayBuffer(4);
//     //     let floatView = new Float32Array(buffer);
//     //     let intView = new Uint32Array(buffer);
//     //     floatView[0] = number;
//     //
//     //     let sign = (intView[0] >>> 31) & 1;
//     //     let exponent = (intView[0] >>> 23) & 0xFF;
//     //     let mantissa = intView[0] & 0x7FFFFF;
//     //
//     //     return `${sign}${exponent.toString(2).padStart(8, '0')}${mantissa.toString(2).padStart(23, '0')}`;
//     // }
//     //
//     //
//     //
//     //
//     // mem_f32[freeMemIndex] = 5
//     // mem_f32[freeMemIndex+1] = 5
//     // let mem_u8 = new Uint8Array(mem_f32.buffer);
//     // mem_u8[0] |= 0x01;
//     // let view = new DataView(mem_f32.buffer);
//     //
//     //
//     // console.log("index: " + freeMemIndex)
//     // console.log(floatToBinary(mem_f32[freeMemIndex]))
//     // console.log("index: " + freeMemIndex+1)
//     // console.log(floatToBinary(mem_f32[freeMemIndex+1]))
//     // console.log(floatToBinary(mem_i32[freeMemIndex]))
//     // // console.log(memory.buffer[0])
//     // // mem_f32[freeMemIndex] = mem_f32[freeMemIndex] | 0x00000001;
//     // // console.log(memory.buffer[0])
//     // freeMemIndex++
//     //
//     // for (let i = 0; i < node.values.length; i++) {
//     //     mem_f32[freeMemIndex] = 8.0;
//     //     mem_f32[freeMemIndex] = mem_f32[freeMemIndex] | 0x00000001
//     //     freeMemIndex++;
//     // }
//     // //
//     // // console.log(mem_f32[freeMemIndex-1])
//     // // console.log(Number(mem_f32[freeMemIndex-1]).toString(2))
//     // //
//     // // console.log(((mem_f32[freeMemIndex-1] | 0x00000001) >>> 0).toString(2))
//     // // console.log(mem_i32[freeMemIndex-1])
//     // // console.log(((mem_i32[freeMemIndex-1] | 0x00000001) >>> 0).toString(2))
//
//     return vecPointer;
// }
//
//
// function generateListExpr(node, ctxVars) {
//
//
//     function saveListToMem(node) {
//         let listPointer = freeMemIndex;
//         // mem_i32[freeMemIndex] = (freeMemIndex+1) | 0x40000000;
//         // freeMemIndex++;
//         let carIndex;
//         let cdrIndex;
//
//
//         for (let i = 0; i < node.values.length; i++) {
//             carIndex = freeMemIndex;
//             cdrIndex = freeMemIndex + 1;
//             freeMemIndex += 2;
//             if (node.values[i].constructor === AST.ListNode) {
//                 mem_i32[carIndex] = saveListToMem(node.values[i]) ;
//             } else if (node.values[i].constructor === AST.LiteralNode) {
//                 mem_i32[carIndex] = freeMemIndex;
//                 mem_f32[freeMemIndex] = node.values[i].value;
//                 freeMemIndex++;
//             }
//             if (i === node.values.length - 1) {
//                 mem_i32[cdrIndex] = 0
//             } else {
//                 mem_i32[cdrIndex] = freeMemIndex;
//             }
//         }
//         // console.log(freeMemIndex)
//         return listPointer | 0x40000000;
//     }
//
//     return wasmModule.block("", [ wasmModule.global.set("returnType", wasmModule.f32.const(1)),
//         wasmModule.f32.reinterpret(wasmModule.i32.const(saveListToMem(node)))], binaryen.auto)
// }
//
//
// function generateDisplayExpr(node, ctxVars) {
//     //ak returnType je 0 tak iba vypis, inak skus list vypisat
//
//
//     // let generatedExpr =
//     // return wasmModule.block("", [
//     //     generateExpr(node.value, ctxVars),
//     //     wasmModule.if(wasmModule.f32.eq(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(0)),
//     //         wasmModule.call("displayVal", [generatedExpr, wasmModule.f32.const(0)], binaryen.none),
//     //
//     //         wasmModule.loop("outer",
//     //             wasmModule.call("displayVal", [wasmModule.f32.const(40), wasmModule.f32.const(1)], binaryen.none),
//     //
//     //
//     //         )
//     // )
//     //
//     // ], binaryen.auto)
//
//     // if (node.value.constructor === AST.ListNode) {
//     //
//     //
//     //     return wasmModule.call("displayVal", [wasmModule.f32.convert_s.i32(wasmModule.i32.reinterpret(generateExpr(node.value, ctxVars))), wasmModule.f32.const(1)], binaryen.none);
//     //
//     // }
//
//
//
//     // return wasmModule.call("displayVal", [generateExpr(node.value, ctxVars), wasmModule.f32.const(0)], binaryen.none);
// }
//
//
//
//
//




// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError";
//     }
// }
//
// const Type = {
//     Number: "Number",
//     List: "List",
//     Vector: "Vector",
//     Unknown: "Unknown",
//     None: "None"
// }
//
// const MemType = {
//     Number: 0,
//     List: 1,
//     Vector: 2,
//     Char: 3
// }
//
//
// import antlr4 from './antlr4/index.web.js';
// import SchemeLikeLLexer from './SchemeLikeLLexer.js';
// import SchemeLikeLParser from './SchemeLikeLParser.js';
// import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
// import binaryen from './binaryen/index.js'
// import * as AST from './ast.js';
// import TerminalNodeImpl from "./antlr4/tree/TerminalNodeImpl.js";
//
//
// class MyVisitor extends SchemeLikeLVisitor {
//     visitStart(ctx) {
//         let body = [];
//         for (let i = 0; i < ctx.children.length - 1; i++){
//             switch (ctx.children[i].constructor) {
//                 case SchemeLikeLParser.ExprContext:
//                 case SchemeLikeLParser.DefineGlobalVarContext:
//                 case SchemeLikeLParser.DefineFncContext:
//                 case SchemeLikeLParser.CallFncContext:
//                 case SchemeLikeLParser.CallLambdaFncContext:
//                 case SchemeLikeLParser.IfExprContext:
//                 case SchemeLikeLParser.BiExprContext:
//                 case SchemeLikeLParser.OperatorExprContext:
//                 case SchemeLikeLParser.LocalFncBodyExprContext:
//                 case SchemeLikeLParser.FncBodyExprContext:
//                 case SchemeLikeLParser.VarPairExprContext:
//                 case SchemeLikeLParser.SetExprContext:
//                 case SchemeLikeLParser.LoopExprContext:
//                 case SchemeLikeLParser.BeginExprContext:
//                 case SchemeLikeLParser.VectorExprContext:
//                 case SchemeLikeLParser.ListExprContext:
//                 case SchemeLikeLParser.DisplayExprContext:
//                 case SchemeLikeLParser.TypeContext:
//                 case SchemeLikeLParser.UniExprContext:
//                     body.push(this.visit(ctx.children[i]));
//                     break;
//                 default:
//                     throw new Error('Unsupported command type');
//             }
//         }
//         console.log("created AST: ")
//         console.log(new AST.ProgramNode(body));
//         return new AST.ProgramNode(body);
//     }
//
//     visitLiteral(ctx) {
//         return new AST.LiteralNode(ctx.children[0].symbol.text);
//     }
//
//     visitIdentifier(ctx) {
//         return new AST.IdentifierNode(ctx.children[0].symbol.text);
//     }
//
//     visitVectorExpr(ctx) {
//         let values = [];
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child));
//             }
//         }
//         return new AST.VectorNode(values)
//     }
//
//     visitListExpr(ctx) {
//         let values = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child))
//             }
//         }
//         return new AST.ListNode(values);
//     }
//
//     visitDefineGlobalVar(ctx) {
//         let identifier;
//         let value;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             //we can have (define x y)
//             if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined) {
//                 identifier = this.visit(child);
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 value = this.visit(child);
//             }
//         }
//         return new AST.DefineVarNode(identifier, value);
//     }
//
//     visitExpr(ctx) {
//         let operator = "";
//         let values = [];
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.OperatorExprContext) {
//                 operator = this.visit(child);
//             }
//             else if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child));
//             }
//         }
//         return new AST.MultiOpNode(operator, values);
//     }
//
//     visitBiExpr(ctx) {
//         let operator;
//         let left;
//         let right;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 let expr = this.visit(child);
//                 if (operator === undefined) operator = expr;
//                 else if (left === undefined) left = expr;
//                 else right = expr;
//             }
//         }
//         return new AST.BiOpNode(operator, left, right);
//     }
//
//     visitOperatorExpr(ctx) {
//         let operator = "";
//         for (let i = 0; i < ctx.children.length; i++) {
//             operator += ctx.children[i].symbol.text;
//         }
//         return new AST.OperatorNode(operator);
//     }
//
//     visitBiOperatorExpr(ctx) {
//         let operator = "";
//         for (let i = 0; i < ctx.children.length; i++) {
//             operator += ctx.children[i].symbol.text;
//         }
//         return new AST.BiOperatorNode(operator);
//     }
//
//     visitUniOperatorExpr(ctx) {
//         let operator = "";
//         for (let i = 0; i < ctx.children.length; i++) {
//             operator += ctx.children[i].symbol.text;
//         }
//         return new AST.UniOperatorNode(operator);
//     }
//
//     visitUniExpr(ctx) {
//         let operator;
//         let operand;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 let expr = this.visit(child);
//                 if (operator === undefined) operator = expr;
//                 else operand = expr;
//             }
//         }
//         return new AST.UniOpNode(operator, operand);
//     }
//
//     visitType(ctx) {
//         switch (ctx.children[0].symbol.text) {
//             case "num":
//                 return Type.Number;
//             case "vec":
//                 return Type.Vector;
//             case "list":
//                 return Type.List;
//             case "none":
//                 return Type.None;
//             default:
//                 return Type.Unknown;
//         }
//     }
//
//     visitDefineFnc(ctx) {
//         let identifier;
//         let body = [];
//         let params = [];
//         let vars = this.traverse(ctx, []);
//         // let lastReturnExprIndex = 0;
//         let returnType;
//         let paramTypes = [];
//
//
//         // for (let i = 0; i < ctx.children.length; i++){
//         //     let child = ctx.children[i];
//         //     if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
//         //         lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
//         //     }
//         // }
//         //
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//
//             if (child.constructor === SchemeLikeLParser.TypeContext) {
//                 if (returnType === undefined) returnType = this.visit(child);
//                 else paramTypes.push(this.visit(child));
//             }
//             else if (child.constructor === SchemeLikeLParser.IdentifierContext) {
//                 if (identifier === undefined) {
//                     identifier = this.visit(child);
//                 } else {
//                     params.push(this.visit(child));
//                 }
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 body = this.visit(child);
//             }
//             // } else if (child.constructor === SchemeLikeLParser.CallFncContext ||
//             //         child.constructor === SchemeLikeLParser.ExprContext) {
//             //     if (lastReturnExprIndex === i) body.push(this.visit(child));
//             // } else if (child.constructor !== TerminalNodeImpl) {
//             //     body.push(this.visit(child));
//             // }
//         }
//
//         return new AST.DefineFuncNode(identifier, params, paramTypes, vars, body, returnType);
//     }
//
//
//
//
//     visitBeginExpr(ctx) {
//         let expressions = [];
//         for (let i = 0; i < ctx.children.length; i++) {
//             if (ctx.children[i].constructor !== TerminalNodeImpl) {
//                 expressions.push(this.visit(ctx.children[i]));
//             }
//         }
//         return new AST.BeginNode(expressions);
//     }
//
//     visitLoopExpr(ctx) {
//         let identifier;
//         let vars = [];
//         let body;
//
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext ) {
//                 identifier = this.visit(child);
//             } else if (child.constructor === SchemeLikeLParser.VarPairExprContext) {
//                 vars.push(this.visit(child));
//             } else if (child.constructor === SchemeLikeLParser.FncBodyExprContext) {
//                 body = this.visit(child);
//             }
//         }
//         return new AST.LoopNode(identifier, vars, body);
//     }
//
//     traverse(ctx, vars) {
//         if (ctx.children !== undefined) {
//             for (let i = 0; i < ctx.children.length; i++) {
//                 if (ctx.children[i].constructor === SchemeLikeLParser.LoopExprContext) {
//                     let child = this.visit(ctx.children[i])
//                     for (let j = 0; j < child.vars.length; j++) {
//                         vars.push(child.vars[j].identifier.value);
//                     }
//                 } else {
//                     this.traverse(ctx.children[i], vars);
//                 }
//             }
//         }
//         return vars;
//     }
//
//     visitLocalFncBodyExpr(ctx) {
//         let vars = [];
//         let body;
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.VarPairExprContext) {
//                 vars.push(this.visit(child));
//             } else if (child.constructor === SchemeLikeLParser.FncBodyExprContext) {
//                 body = this.visit(child);
//             }
//
//         }
//         return new AST.LocalFncBodyNode(body, vars);
//     }
//
//     visitFncBodyExpr(ctx) {
//         let body = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 body.push(this.visit(child));
//             }
//
//             // TODO aby sa iba jedno mohlo vratit
//             // } else if (child.constructor === SchemeLikeLParser.CallFncContext ||
//             //         child.constructor === SchemeLikeLParser.ExprContext) {
//             //     if (lastReturnExprIndex === i) body.push(this.visit(child));
//             // } else if (child.constructor !== TerminalNodeImpl) {
//             //     body.push(this.visit(child));
//             // }
//         }
//         return new AST.FncBodyNode(body);
//     }
//
//     visitVarPairExpr(ctx) {
//         let identifier;
//         let value;
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined) {
//                 identifier = this.visit(child);
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 value = this.visit(child);
//             }
//         }
//         return new AST.VarPairNode(identifier, value);
//     }
//
//     visitCallFnc(ctx)  {
//         let identifier;
//         let params = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext && identifier === undefined){
//                 identifier =  this.visit(child);
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 params.push(this.visit(child));
//             }
//         }
//         return new AST.CallFuncNode(identifier, params);
//     }
//
//     visitCallLambdaFnc(ctx) {
//         let params = [];
//         let body = [];
//         let lastReturnExprIndex = 0;
//
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
//                 lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
//             }
//         }
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext) {
//                 params.push(this.visit(child));
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 body = this.visit(child);
//             }
//             // else if (child.constructor === SchemeLikeLParser.CallFncContext ||
//             //     child.constructor === SchemeLikeLParser.ExprContext) {
//             //     if (lastReturnExprIndex === i) body.push(this.visit(child));
//             // } else if (child.constructor !== TerminalNodeImpl) {
//             //     body.push(this.visit(child));
//             // }
//         }
//         return new AST.CallLambdaFuncNode(params, body);
//     }
//
//
//     visitIfExpr(ctx) {
//         let condition;
//         let ifTrue;
//         let ifFalse;
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 if (condition === undefined) condition = this.visit(child);
//                 else if (ifTrue === undefined) ifTrue = this.visit(child);
//                 else ifFalse = this.visit(child);
//             }
//         }
//         return new AST.IfNode(condition, ifTrue, ifFalse);
//     }
//
//     visitDisplayExpr(ctx) {
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 return new AST.DisplayNode(this.visit(child));
//             }
//         }
//     }
//
//     visitSetExpr(ctx) {
//         for (let i = 0; i < ctx.children.length; i++) {
//             let child = ctx.children[i];
//             if (child.constructor !== TerminalNodeImpl) {
//                 return new AST.SetNode(this.visit(child));
//             }
//         }
//     }
//
//
// }
//
//
// let globalsMap = new Map()
//
//
//
//
//
//
//
// let wasmModule;
// let runner;
// // let globalsMap = new Map(); //name, expression
// let fncMap;  //name, expression
// let  ctx;
// let tableName = "mTable";
// let tableSize = 0;
// let loopList;
// let vecPointerMap;
// let listPointerMap;
// let canvasMap;
// let canvasList;
// let table;
// let memory;
// let mem_f32;
// let mem_i32;
// let mem_i8;
// let memoryName = "mem"
// let memoryBase;
// let freeMemIndex;
// let canvas;
//
// export function runWasm(wasmBinary) {
//     document.getElementById("output").innerHTML = ""
//     const wasmBytes = new Uint8Array(wasmBinary);
//
//     const importObject = {
//         env: {
//             memory: memory,
//             throwError: throwError,
//             displayVal: displayVal,
//             createCanvasElement: createCanvasElement,
//             updateCanvasData: updateCanvasData,
//         }};
//
//
//
//     WebAssembly.instantiate(wasmBytes, importObject)
//         .then(obj => {
//             let result = obj.instance.exports.main();
//             if (result !== undefined) document.getElementById("output").innerHTML += result;
//             // console.log(obj.instance.exports.main());
//             console.log(mem_f32);
//             console.log(mem_i32);
//             console.log(mem_i8)
//         })
// }
//
//
// function createCanvasElement(address, width, height) {
//     console.log("this is address: " +address)
//     canvasMap.set(address, {index: canvasList.length ,width: width, height: height})
//     console.log(canvasMap)
//     canvas = document.createElement('canvas');
//     canvas.height = height;
//     canvas.width = width;
//     document.body.appendChild(canvas)
//     canvasList.push(canvas);
// }
//
// function updateCanvasData(address) {
//     let canvasData = canvasMap.get(address);
//
//     const image_data = new ImageData( new Uint8ClampedArray(mem_i32.buffer, address + 8,
//         canvasData.width*canvasData.height*4), canvasData.width, canvasData.height);
//     canvasList[canvasData.index].getContext('2d').putImageData(image_data, 0, 0);
// }
//
// export function compileToWasm(){
//     wasmModule = new binaryen.Module();
//     wasmModule.setFeatures(binaryen.Features.Multivalue)
//     globalsMap = new Map();
//     vecPointerMap = new Map();
//     listPointerMap = new Map();
//     ctx = new Map();
//     fncMap = new Map();
//     tableSize = 0;
//     loopList = [];
//     table = wasmModule.addTable(tableName, 10, 50, binaryen.funcref)
//     wasmModule.addMemoryImport(memoryName, "env", "memory")
//     memoryBase = wasmModule.i32.const(0);
//     freeMemIndex = 0;
//     canvasMap = new Map();
//     canvasList = [];
//
//
//     memory = new WebAssembly.Memory({initial:100, maximum: 65536});
//     mem_f32 = new Float32Array(memory.buffer);
//     mem_i32 = new Int32Array(memory.buffer);
//     mem_i8 = new Uint8Array(memory.buffer);
//
//
//     const input = document.getElementById('userCode').value;
//     const chars = new antlr4.InputStream(input);
//     const lexer = new SchemeLikeLLexer(chars);
//     const tokens = new antlr4.CommonTokenStream(lexer);
//     const parser = new SchemeLikeLParser(tokens);
//     const tree = parser.start();
//
//     const visitor = new MyVisitor();
//     const ast = visitor.visit(tree);
//
//     generateWasm(ast);
//     freeMemIndex *= 4;
//     wasmModule.addGlobal("freeMemIndex", binaryen.f32, true, wasmModule.f32.const(freeMemIndex))
//
//     const wasmText = wasmModule.emitText();
//     console.log(wasmText);
//     // wasmModule.optimize();
//     // if (!wasmModule.validate()) {
//     //     console.error("Module validation error:", wasmModule.validate());
//     // }
//
//     // const wasmTextOptimized = wasmModule.emitText();
//     // console.log("optimized wat")
//     // console.log(wasmTextOptimized)
//     let binary = wasmModule.emitBinary()
//     wasmModule.dispose();
//     return binary;
// }
//
//
// function generateWasm(ast) {
//     wasmModule.addGlobal("returnType", binaryen.f32, true, wasmModule.f32.const(0));
//      // addInitFunctions()
//      addTestFunctions()
//     let wasmExpressions = [];
//     // let returnType = binaryen.none;
//     for (let i = 0; i < ast.instructions.length; i++){
//         let ret = generateExpr(ast.instructions[i])
//
//         if (ret !== undefined) {
//             wasmExpressions.push(ret);
//             // if (binaryen.getExpressionType(ret) !== binaryen.none) {
//             //     console.log(binaryen.getExpressionType(ret))
//             //     console.log(binaryen.getExpressionType(ret) !== binaryen.none)
//             //     if (returnType === binaryen.none) returnType = binaryen.f32;
//             //     else throw new CustomError("Can't return more than 1 value")
//             // }
//         }
//     }
//
//     let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);
//
//     wasmModule.addFunction('main', [], binaryen.getExpressionType(mainBlock), [], mainBlock);
//     wasmModule.addFunctionExport('main', 'main');
// }
//
// function throwError(value) {
//     if (value === 0) console.log("Index out of bounds");
//     else if (value === 10) throw new CustomError("Unexpected type")
//     else console.log("error unspecified");
//     throw new CustomError("Can't return more than 1 value")
//
// }
//
// function displayVal(value, isAsciiCode) {
//     console.log(value)
//     if (isAsciiCode) document.getElementById("output").innerHTML += String.fromCharCode(value);
//     else document.getElementById("output").innerHTML += value;
// }
//
// function addTestFunctions() {
//
//     wasmModule.addFunctionImport("error", "env", "throwError", binaryen.createType([binaryen.f32]), binaryen.none);
//     wasmModule.addFunctionImport("displayVal", "env", "displayVal", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.none);
//
//     fncMap.set("car", {returnType: Type.Unknown, paramTypes: [Type.List], body:undefined})
//     let carBody = wasmModule.block("",
//         [
//             // wasmModule.if(wasmModule.f32.eq(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(0)),
//             //     wasmModule.call("error", [wasmModule.f32.const(15)], binaryen.none)
//             // ),
//
//
//             wasmModule.local.set(1, wasmModule.i32.load(0,0, //prvy prvok
//                 wasmModule.i32.mul(
//                     wasmModule.i32.and(
//                         wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                         wasmModule.i32.const(1073741823)), wasmModule.i32.const(4))
//             )),
//
//             //1073741824 list , 0 je to hodnota
//
//             wasmModule.if(wasmModule.i32.eq(
//                     wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(-1073741824)),
//                     wasmModule.i32.const(0)),
//                 wasmModule.block("", [
//                     wasmModule.global.set("returnType",  wasmModule.f32.const(0)),
//                     wasmModule.f32.load(0,0,
//                         wasmModule.i32.mul(
//                             wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(1073741823)),
//                             wasmModule.i32.const(4))),
//                 ], binaryen.f32),
//                 wasmModule.block("", [
//                         wasmModule.global.set("returnType",  wasmModule.f32.const(1)),
//                         wasmModule.f32.reinterpret(wasmModule.local.get(1, binaryen.i32))],
//                     binaryen.f32),)
//         ], binaryen.f32);
//     wasmModule.addFunction("car", binaryen.createType([binaryen.f32]), binaryen.f32, [binaryen.i32], carBody);
//     fncMap.get("car").body = carBody;
//
//
//     // fncMap.set("car2", {returnType: Type.Unknown, paramTypes: [Type.List], body:undefined})
//     // let carBody2 = wasmModule.block("",
//     //     [
//     //
//     //         wasmModule.local.set(1, wasmModule.i32.load(0,0,wasmModule.i32.const(0))),
//     //         wasmModule.f32.const(-5),
//     //     ], binaryen.f32);
//     // wasmModule.addFunction("car2", binaryen.createType([binaryen.f32]), binaryen.f32, [binaryen.i32], carBody2);
//     // fncMap.get("car2").body = carBody2;
//
//
//     fncMap.set("cdr", {returnType: Type.List, paramTypes: [Type.List], body:undefined})
//     let cdrBody = wasmModule.block("",
//         [
//             wasmModule.global.set("returnType", wasmModule.f32.const(1)),
//             wasmModule.f32.reinterpret(
//                 wasmModule.i32.or(
//                     wasmModule.i32.load(0,0,
//                         wasmModule.i32.mul(
//                             // wasmModule.f32.reinterpret(
//                             wasmModule.i32.add(
//                                 wasmModule.i32.and(
//                                     wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                                     wasmModule.i32.const(1073741823)), wasmModule.i32.const(1)),
//                             wasmModule.i32.const(4))), wasmModule.i32.const(1073741824)))
//         ], binaryen.auto);
//     wasmModule.addFunction("cdr", binaryen.createType([binaryen.f32]), binaryen.f32, [binaryen.i32], cdrBody)
//     fncMap.get("cdr").body = cdrBody;
//
//
//     wasmModule.addFunction("set-car!", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.none,
//         [binaryen.i32,   //adresa prveho cons (1)
//             binaryen.i32,    //adresa + type hodnoty (3 0)
//         ],
//         wasmModule.block("",
//             [
//                 wasmModule.local.set(2,
//                     wasmModule.i32.mul(
//                         wasmModule.i32.and(
//                             wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                             wasmModule.i32.const(1073741823)), wasmModule.i32.const(4))),
//
//
//                 wasmModule.local.set(3, wasmModule.i32.load(0,0, //cons prveho prvku
//                     wasmModule.local.get(2, binaryen.f32))),
//
//                 wasmModule.if(wasmModule.f32.ne(wasmModule.f32.const(0), wasmModule.global.get("returnType", binaryen.f32)),
//                     wasmModule.f32.store(0,0, wasmModule.local.get(2, binaryen.i32),  wasmModule.local.get(1, binaryen.f32)),
//                     wasmModule.block("", [
//                         wasmModule.i32.store(0,0,  wasmModule.local.get(2, binaryen.i32),
//                             wasmModule.i32.and(
//                                 wasmModule.local.get(3, binaryen.i32),
//                                 wasmModule.i32.const(1073741823))),
//
//                         wasmModule.f32.store(0,0,
//                             wasmModule.i32.mul(
//                                 wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(1073741823)),
//                                 wasmModule.i32.const(4)), wasmModule.local.get(1, binaryen.f32))
//                     ], binaryen.auto))], binaryen.auto))
//
//     wasmModule.addFunction("set-cdr!", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.none,
//         [binaryen.i32,   //adresa prveho cons (1)
//             binaryen.i32,    //adresa + type hodnoty (3 0)
//         ],
//         wasmModule.block("",
//             [
//                 wasmModule.local.set(2,
//                     wasmModule.i32.mul(
//                         wasmModule.i32.and(
//                             wasmModule.i32.reinterpret(wasmModule.local.get(0, binaryen.f32)),
//                             wasmModule.i32.const(1073741823)), wasmModule.i32.const(4))),
//
//
//                 // wasmModule.if(wasmModule.f32.ne(wasmModule.f32.const(0), wasmModule.global.get("returnType", binaryen.f32)),
//                 wasmModule.i32.store(0,0,
//                     wasmModule.i32.add(wasmModule.local.get(2, binaryen.i32), wasmModule.i32.const(4)),
//                     wasmModule.i32.and(wasmModule.i32.reinterpret(wasmModule.local.get(1, binaryen.f32)), wasmModule.i32.const(1073741823)))
//
//
//                 // ),
//
//
//                 // wasmModule.local.set(3, wasmModule.i32.load(0,0, //cons prveho prvku
//                 //     wasmModule.local.get(2, binaryen.f32))),
//                 //
//                 // wasmModule.i32.store(0,0,  wasmModule.local.get(2, binaryen.i32),
//                 //     wasmModule.i32.or(
//                 //         wasmModule.i32.and(
//                 //             wasmModule.local.get(3, binaryen.i32),
//                 //             wasmModule.i32.const(1073741823)),
//                 //         wasmModule.i32.reinterpret(wasmModule.global.get("returnType", binaryen.f32)))),
//                 //
//                 // wasmModule.f32.store(0,0,
//                 //     wasmModule.i32.mul(
//                 //         wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32), wasmModule.i32.const(1073741823)),
//                 //         wasmModule.i32.const(4)), wasmModule.local.get(1, binaryen.f32))
//
//             ], binaryen.auto))
// }
//
// function addInitFunctions() {
//     // needs to go inside the main function
//     // wasmModule.memory.fill(wasmModule.f32.const(0),wasmModule.f32.const(-999),wasmModule.f32.const(20) )
//     // wasmModule.addGlobal("canvas-base", binaryen.f32, true, wasmModule.f32.const(-1));
//     wasmModule.addFunctionImport("error", "env", "throwError", binaryen.createType([binaryen.f32]), binaryen.none);
//     wasmModule.addFunctionImport("create-canvas-element", "env", "createCanvasElement",
//         binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none);
//     wasmModule.addFunctionImport("update-canvas-data", "env", "updateCanvasData",
//         binaryen.createType([binaryen.f32]), binaryen.none);
//
//     fncMap.set("vector-ref", {returnType: Type.Number, paramTypes: [Type.List, Type.Number], body:undefined})
//     wasmModule.addFunction("vector-ref", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.f32, [
//             binaryen.f32 //vectorSize
//         ],
//         wasmModule.block("", [
//
//             // wasmModule.f32.convert_s.i32(
//             //     wasmModule.i32.and(
//             //  wasmModule.i32.load(0, 4,
//             //      wasmModule.i32.const(0)),
//             //     wasmModule.i32.const(1))),
//
//
//
//             wasmModule.local.set(2,
//                 wasmModule.f32.load(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                         wasmModule.f32.mul(
//                             wasmModule.local.get(0, binaryen.f32), wasmModule.f32.const(4)))
//                 )),
//
//             wasmModule.if(wasmModule.f32.le(wasmModule.local.get(2), wasmModule.local.get(1)),
//                 wasmModule.block("", [wasmModule.call("error", [wasmModule.f32.const(0)], binaryen.none), wasmModule.f32.const(-1)], binaryen.auto),
//                 wasmModule.f32.load(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                         wasmModule.f32.mul(
//                             wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//                                 wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.local.get(1))),
//                             wasmModule.f32.const(4)))))
//         ], binaryen.auto));
//
//     wasmModule.addFunction("vector-set!", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none, [
//             binaryen.f32 //vectorSize
//         ],
//         wasmModule.block("", [
//             wasmModule.local.set(3,
//                 wasmModule.f32.load(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                         wasmModule.f32.mul(
//                             wasmModule.local.get(0, binaryen.f32), wasmModule.f32.const(4)))
//                 )),
//
//             wasmModule.if(wasmModule.f32.le(wasmModule.local.get(3), wasmModule.local.get(1)),
//                 wasmModule.call("error", [wasmModule.f32.const(0)], binaryen.none),
//                 wasmModule.f32.store(0, 4,
//                     wasmModule.i32.trunc_s.f32(
//                         wasmModule.f32.mul(
//                             wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//                                 wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.local.get(1))),
//                             wasmModule.f32.const(4))), wasmModule.local.get(2)))
//         ], binaryen.none));
//
//     wasmModule.addFunction("create-canvas", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.f32, [binaryen.f32],
//         wasmModule.block("",
//             [   wasmModule.local.set(2, wasmModule.global.get("freeMemIndex", binaryen.f32)),
//                 wasmModule.call("create-canvas-element", [wasmModule.local.get(2, binaryen.f32), wasmModule.local.get(0, binaryen.f32), wasmModule.local.get(1, binaryen.f32)], binaryen.none),
//                 wasmModule.f32.store(0,0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.f32)),
//                     wasmModule.local.get(0, binaryen.f32)),
//                 wasmModule.f32.store(4,0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.f32)),
//                     wasmModule.local.get(1, binaryen.f32)),
//                 wasmModule.global.set("freeMemIndex",
//                     wasmModule.f32.add(wasmModule.f32.add(wasmModule.f32.const(8), wasmModule.f32.mul(
//                         wasmModule.f32.mul(wasmModule.local.get(0, binaryen.f32), wasmModule.local.get(1, binaryen.f32)),
//                         wasmModule.f32.const(4))
//                     ), wasmModule.local.get(2, binaryen.f32))),
//                 wasmModule.local.get(2, binaryen.f32)
//             ], binaryen.auto))
//
//     wasmModule.addFunction("color", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.f32,
//         //     [binaryen.f32,
//         //         binaryen.i32],
//         [binaryen.f32,
//             binaryen.f32],
//         wasmModule.block("",
//             [
//                 wasmModule.f32.reinterpret(
//                     wasmModule.i32.or(
//                         wasmModule.i32.or(
//                             wasmModule.i32.or(
//                                 wasmModule.i32.shl(
//                                     wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(3, binaryen.i32)),
//                                         wasmModule.i32.const(0xFF)),
//                                     wasmModule.i32.const(24)),
//                                 wasmModule.i32.shl(
//                                     wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.i32)),
//                                         wasmModule.i32.const(0xFF)), wasmModule.i32.const(16))
//                             ),
//                             wasmModule.i32.shl(
//                                 wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(1, binaryen.i32)),
//                                     wasmModule.i32.const(0xFF)), wasmModule.i32.const(8))
//                         ),
//                         wasmModule.i32.and(wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.i32)),
//                             wasmModule.i32.const(0xFF))
//                     )),
//
//                 // wasmModule.local.set(4, wasmModule.global.get("freeMemIndex", binaryen.f32)),
//                 // wasmModule.local.set(5,  wasmModule.i32.trunc_s.f32(wasmModule.local.get(4, binaryen.f32))),
//                 // wasmModule.i32.store8(0,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.f32))),
//                 // wasmModule.i32.store8(1,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(1, binaryen.f32))),
//                 // wasmModule.i32.store8(2,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(2, binaryen.f32))),
//                 // wasmModule.i32.store8(3,0,
//                 //     wasmModule.local.get(5, binaryen.i32),
//                 //     wasmModule.i32.trunc_s.f32(wasmModule.local.get(3, binaryen.f32))),
//                 // wasmModule.global.set("freeMemIndex", wasmModule.f32.add(wasmModule.f32.const(4), wasmModule.local.get(4, binaryen.f32))),
//                 // wasmModule.local.get(4, binaryen.f32),
//
//             ], binaryen.auto))
//
//
//     wasmModule.addFunction("fill-rect", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none,
//         [binaryen.f32,  //i
//             binaryen.f32, //j
//             binaryen.f32,  //rec_start 8
//             binaryen.f32, //canvas_width 9
//             binaryen.f32 //canvas_height 10
//         ],
//         wasmModule.block("",
//             [
//
//                 wasmModule.local.set(6, wasmModule.f32.const(0)),
//                 wasmModule.local.set(7, wasmModule.f32.const(0)),
//                 wasmModule.local.set(9,
//                     wasmModule.f32.load(4, 0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.f32)))),
//                 wasmModule.local.set(8, wasmModule.f32.add(wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//                     wasmModule.f32.const(8)),  wasmModule.f32.mul(wasmModule.f32.add(wasmModule.local.get(1, binaryen.f32),
//                         wasmModule.f32.mul(wasmModule.local.get(2, binaryen.f32), wasmModule.local.get(9, binaryen.f32))),
//                     wasmModule.f32.const(4))  )),
//
//
//
//
//                 wasmModule.loop("height", wasmModule.block("", [
//
//                     wasmModule.local.set(6, wasmModule.f32.const(0)),
//                     wasmModule.loop("width", wasmModule.block("", [
//                         wasmModule.f32.store(0,0,
//                             wasmModule.i32.trunc_s.f32(wasmModule.f32.add(
//                                 wasmModule.local.get(8, binaryen.f32),
//                                 wasmModule.f32.add(
//                                     wasmModule.f32.mul(wasmModule.f32.mul(
//                                         wasmModule.local.get(9, binaryen.f32),wasmModule.f32.const(4)),  wasmModule.local.get(7, binaryen.f32)),
//                                     wasmModule.f32.mul(
//                                         wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(4))))),
//                             wasmModule.local.get(5, binaryen.f32),
//                         ),
//                         wasmModule.local.set(6, wasmModule.f32.add(wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(1))),
//                         wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(6, binaryen.f32), wasmModule.local.get(3, binaryen.f32)),
//                             wasmModule.br("width")),])),
//                     wasmModule.local.set(7, wasmModule.f32.add(wasmModule.local.get(7, binaryen.f32), wasmModule.f32.const(1))),
//                     wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(7, binaryen.f32), wasmModule.local.get(4, binaryen.f32)),
//                         wasmModule.br("height")),])),
//
//                 wasmModule.call("update-canvas-data",
//                     [wasmModule.local.get(0, binaryen.f32)], binaryen.none),
//             ], binaryen.none))
//
//
//
// }
//
// function generateExpr(node, ctxVars) {
//     switch (node.constructor) {
//         case AST.MultiOpNode:
//             return generateMultiOpExpr(node, ctxVars);
//         case AST.LiteralNode:
//             return generateLiteralExpr(node);
//         case AST.DefineVarNode:
//             return generateDefineGlobalVarExpr(node, ctxVars);
//         case AST.IdentifierNode:
//             return generateIdentifierValue(node, ctxVars);
//         case AST.DefineFuncNode:
//             return generateDefineFuncExpr(node, ctxVars);
//         case AST.CallFuncNode:
//             return generateCallFuncExpr(node, ctxVars);
//         case AST.CallLambdaFuncNode:
//             return generateCallLambdaFuncExpr(node, ctxVars);
//         case AST.IfNode:
//             return generateIfExpr(node, ctxVars);
//         case AST.BiOpNode:
//             return generateBiOpExpr(node, ctxVars);
//         case AST.LocalFncBodyNode:
//             return generateLocalFncBodyExpr(node, ctxVars);
//         case AST.FncBodyNode:
//             return generateFncBodyExpr(node, ctxVars);
//         case AST.SetNode:
//             return generateSetExpr(node, ctxVars);
//         case AST.LoopNode:
//             return generateLoopExpr(node, ctxVars);
//         case AST.BeginNode:
//             return generateBeginExpr(node, ctxVars);
//         case AST.ListNode:
//             return generateListExpr(node, ctxVars);
//         case AST.DisplayNode:
//             return generateDisplayExpr(node, ctxVars);
//         case AST.UniOpNode:
//             return generateUniOpExpr(node, ctxVars);
//         // case AST.VectorNode:
//         //     return generateVectorExpr(node, ctxVars);
//         default:
//             throw new Error('Unsupported node type');
//     }
// }
//
//
// function generateLiteralExpr(node) {
//     return wasmModule.block("", [
//         wasmModule.global.set("returnType", wasmModule.f32.const(0)),
//         wasmModule.f32.const(node.value),
//         ], binaryen.f32)
// }
//
// function generateIdentifierValue(node, ctxVars){
//     if (ctxVars && ctxVars.has(node.value)) {
//         return wasmModule.local.get(ctxVars.get(node.value).index, binaryen.f32);
//     }
//     if (globalsMap.has(node.value)) {
//         return wasmModule.global.get(node.value, binaryen.f32);
//     }
//     throw new CustomError("Unbound variable: " + node.value);
// }
//
// function generateDefineFuncExpr(node, ctxVars) {
//
//     fncMap.set(node.identifier.value, {returnType: node.returnType, paramTypes:node.paramTypes, body:undefined});
//     if (ctxVars === undefined) ctxVars = new Map();
//
//     for (let i = 0; i < node.params.length; i++){
//         let param = node.params[i].value;
//         if (ctxVars.has(param)) {
//             throw new CustomError("The identifier '" + param +"' is already defined in the scope");
//         }
//         ctxVars.set(param, {index: ctxVars.size, type: node.paramTypes[i]});
//     }
//
//     let type = [];
//     for (let i = 0; i < ctxVars.size; i++){
//         type.push(binaryen.f32);
//     }
//     let paramsType = binaryen.createType(type);
//
//
//     let varsType = [];
//     // if (node.body.constructor === AST.LocalFncBodyNode) {
//     //     for (let i = 0; i < node.body.vars.length; i++) {
//     //         varsType.push(binaryen.f32);
//     //     }
//     // }
//     //
//     // for (let i = 0; i < node.localVars.length; i++) {
//     //     varsType.push(binaryen.f32);
//     // }
//
//     // (define x 5)
//     // (define z 5)
//     // (define (f:none l:list)
//     // (if (null? l) (set! x 10) (set! z 20)))
//
//     let body = generateExpr(node.body, ctxVars);
//     if (node.returnType === Type.None) {
//         if (binaryen.getExpressionType(body) === 0 && node.returnType !== Type.None) throw new CustomError("Expected returnType "+ node.returnType + ", actual " + Type.None)
//         if (binaryen.getExpressionType(body) === 4 && node.returnType === Type.None) throw new CustomError("Expected returnType "+ node.returnType + ", actual " + Type.Number)
//         fncMap.get(node.identifier.value).body = body;
//         wasmModule.addFunction(node.identifier.value, paramsType, binaryen.none, varsType, body);
//     } else {
//         let block = wasmModule.block("", [ body,
//             wasmModule.if(wasmModule.f32.ne(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(MemType[node.returnType])),
//                 wasmModule.call("error", [wasmModule.f32.const(10)], binaryen.none))], binaryen.f32);
//         fncMap.get(node.identifier.value).body = body;
//         wasmModule.addFunction(node.identifier.value, paramsType, binaryen.f32, varsType, block);
//     }
//
//
//     // if (binaryen.getExpressionType(body) === 0 && node.returnType !== Type.None) throw new CustomError("Expected returnType "+ node.returnType + ", actual " + Type.None)
//     // if (binaryen.getExpressionType(body) === 4 && node.returnType === Type.None) throw new CustomError("Expected returnType "+ node.returnType + ", actual " + Type.Number)
//     // console.log(node.returnType)
//     // console.log(binaryen.getExpressionType(block))
//     // console.log(node.returnType === 0 ? binaryen.none : binaryen.f32
//
// }
//
// function generateLocalFncBodyExpr(node, ctxVars){
//
//     // let expressions = [];
//     // let paramsLength;
//     // if (ctxVars) {
//     //     paramsLength = ctxVars.length;
//     // } else {
//     //     ctxVars = [];
//     //     paramsLength = 0;
//     // }
//     // for (let i = 0; i < node.vars.length; i++) {
//     //     expressions.push(wasmModule.local.set(paramsLength + i, generateExpr(node.vars[i].value, ctxVars)));
//     //     ctxVars.push(node.vars[i].identifier.value);
//     // }
//     // expressions.push(generateExpr(node.fncBody, ctxVars));
//     // return wasmModule.block('', expressions, binaryen.auto);
//
// }
//
// function generateFncBodyExpr(node, ctxVars){
//     let expressions = [];
//     for (let i = 0; i < node.body.length; i++) {
//         expressions.push(generateExpr(node.body[i], ctxVars));
//     }
//     return wasmModule.block("", expressions, binaryen.auto);
// }
//
// function generateSetExpr(node, ctxVars) {
//     let value = generateExpr(node.pair.value, ctxVars);
//     if (ctxVars && ctxVars.has(node.pair.identifier.value)) {
//         return wasmModule.local.set(ctxVars.get(node.pair.identifier.value).index, value);
//     }
//     if (globalsMap.has(node.pair.identifier.value)) {
//         globalsMap.set(node.pair.identifier.value, {value:value, type: getNodeType(node, ctxVars)})
//         return wasmModule.global.set(node.pair.identifier.value, value);
//     }
//     throw new CustomError("Unbound variable " + node.pair.identifier.value);
// }
//
// function generateLoopExpr(node, ctxVars) {
//     // let len = ctxVars.length;
//     // loopList.push(node.identifier.value);
//     // let expressions = [];
//     //
//     // for (let i = 0; i < node.vars.length; i++) {
//     //     ctxVars.push(node.vars[i].identifier.value);
//     // }
//     //
//     // for (let i = 0; i < node.vars.length; i++) {
//     //     expressions.push(wasmModule.local.set(i + len, generateExpr(node.vars[i].value, ctxVars)))
//     // }
//     //
//     // expressions.push(wasmModule.loop(node.identifier.value, generateExpr(node.fncBody, ctxVars)))
//     // return wasmModule.block("", expressions, binaryen.auto);
//     //
//     //
//     //
//     // // let operands = [];
//     // // let paramsType = [];
//     // // for (let j = 0; j < ctxVars.length; j++) {
//     // //     operands.push(wasmModule.local.get(j, binaryen.f32));
//     // //     paramsType.push(binaryen.f32);
//     // // }
//     // // for (let j = 0; j < node.vars.length; j++) {
//     // //     operands.push(generateExpr(node.vars[j].value, ctxVars));
//     // //     paramsType.push(binaryen.f32);
//     // //     ctxVars.push(node.vars[j].identifier.value)
//     // // }
//     // // let body = generateExpr(node.fncBody, ctxVars);
//     // // let block = wasmModule.block("", [body], binaryen.auto)
//     // //
//     // // wasmModule.addFunction(node.identifier.value, binaryen.createType(paramsType), binaryen.getExpressionType(block), [],block )
//     // // return wasmModule.call(node.identifier.value, operands, binaryen.f32);
//
// }
//
// function generateBeginExpr(node, ctxVars) {
//     let expressions = [];
//     for (let i = 0; i < node.expressions.length; i++) {
//         expressions.push(generateExpr(node.expressions[i], ctxVars));
//     }
//     return wasmModule.block("", expressions, binaryen.auto);
// }
//
// function checkType(expectedType, actualType, expr) {
//     if (expectedType !== actualType && Type.Unknown !== actualType) {
//         throw new CustomError("Expected type: "+ expectedType + ", actual type: " + actualType)
//     }
//     if (actualType === Type.Unknown) {
//         return wasmModule.block("", [ expr,
//         wasmModule.if(wasmModule.f32.ne(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(MemType[expectedType])),
//             wasmModule.call("error", [wasmModule.f32.const(10)], binaryen.none))], binaryen.f32);
//     }
//     return expr;
// }
//
//
// function generateCallFuncExpr(node, ctxVars){
//     if (!fncMap.get(node.identifier.value)) throw new CustomError("Unbound variable: "+ node.identifier.value)
//     let fncParamTypes = fncMap.get(node.identifier.value).paramTypes
//
//     let operands = [];
//     let type = [];
//     for (let i = 0; i < node.params.length; i++){
//         operands.push(checkType(fncParamTypes[i], getNodeType(node.params[i], ctxVars), generateExpr(node.params[i], ctxVars)))
//         type.push(binaryen.f32);
//     }
//
//     // if (loopList.includes(node.identifier.value)) {
//     //     let expressions = [];
//     //     let diff = ctxVars.length - node.params.length;
//     //     for (let i = 0; i < node.params.length; i++) {
//     //         expressions.push(wasmModule.local.set(i + diff, generateExpr(node.params[i], ctxVars)));
//     //     }
//     //     expressions.push(wasmModule.br(node.identifier.value));
//     //     return wasmModule.block("", expressions, binaryen.auto);
//     // }
//     // let paramsType = binaryen.createType(type);
//     // if (wasmModule.getFunction(node.identifier.value) === 0 && !fncMap.has(node.identifier.value)) {
//     //     let localVariable = wasmModule.local.get(ctxVars.get(node.identifier.value).index, wasmModule.f32);
//     //     let truncatedVariable = wasmModule.i32.trunc_s.f32(localVariable);
//     //     return wasmModule.call_indirect(tableName, truncatedVariable, operands, paramsType, binaryen.f32) //TODO? result type proste neviem zistit dopredu
//     // }
//
//     let returnType = fncMap.get(node.identifier.value).returnType === Type.None ? binaryen.none : binaryen.f32;
//     return wasmModule.call(node.identifier.value, operands, returnType);
// }
//
// function generateCallLambdaFuncExpr(node, ctxVars) {
//     // indirect()
//
//     // wasmModule.addTable("tab", 10, 10, binaryen.funcref)
//     node.identifier.value = "_" + tableSize;
//     generateDefineFuncExpr(node, ctxVars);
//     // wasmModule.addFunction(node.identifier.value, )
//     wasmModule.addActiveElementSegment(tableName, "e"+tableSize, [node.identifier.value], wasmModule.i32.const(tableSize));
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "0", ["func0"], wasmModule.i32.const(0)))
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "1", ["func1"], wasmModule.i32.const(1)))
//     // console.log(wasmModule.addPassiveElementSegment("1", ["ahoj"]))
//
//     tableSize++;
//
//
//
//
//
//     // let table = wasmModule.addTable("ahoj", 10, 10, binaryen.funcref)
//
//     // console.log(binaryen.getTableInfo(table))
//     // let func0 = wasmModule.addFunction("func0", [], binaryen.i32, [], wasmModule.block("", [wasmModule.i32.const(10)], binaryen.auto) );
//     // let func1 = wasmModule.addFunction("func1", [], [binaryen.i32], [], wasmModule.i32.const(80) );
//
//
//
//
//     // console.log(binaryen.getExpressionInfo(wasmModule.table.set("ahoj", 1, func0)));
//     // console.log(binaryen.getExpressionInfo(wasmModule.table.size("ahoj")));
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "0", ["func0"], wasmModule.i32.const(0)))
//     // console.log(wasmModule.addActiveElementSegment("ahoj", "1", ["func1"], wasmModule.i32.const(1)))
//     // console.log(wasmModule.addPassiveElementSegment("2", ["func0", "func1"]))
//
//
//
//
//
//     //
//     // console.log("get")
//     // console.log(binaryen.getExpressionInfo(wasmModule.table.get("ahoj", wasmModule.i32.const(1))));
//     //
//     // console.log("get function")
//     // console.log()
//
//     // console.log(binaryen.getTableInfo(wasmModule.getTableByIndex(0)));
//     // console.log(binaryen.getExpressionInfo(wasmModule.call_indirect(wasmModule.i32.const(1), [], [], binaryen.i32)))
//     // binaryen.addFunctionType
//
//     return wasmModule.f32.const(tableSize - 1);
//     // call_indirect(table: string, target: ExpressionRef, operands: ExpressionRef[], params: Type, results: Type): ExpressionRef;
//     // return wasmModule.call_indirect("ahoj", wasmModule.i32.const(0), [], [], binaryen.i32)
//
// }
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
//
// function getExpressionValue(expression, params){
//     runner = new binaryen.ExpressionRunner(wasmModule);
//     for (let [key, set] of globalsMap) {
//         runner.setGlobalValue(key, set.value);
//     }
//     // runner.setGlobalValue("sum3", );
// //     TODO define var using fnc call
// //     runner.setLocalValue(0, wasmModule.f32.const(10));
// //         runner.setLocalValue(1, wasmModule.f32.const(10));
// //         runner.setLocalValue(2, wasmModule.f32.const(10));
// // console.log(runner.runAndDispose(wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
// //     wasmModule.local.get(1, binaryen.f32))))
//     // // console.log(runner.runAndDispose(wasmModule.f32.add(wasmModule.global.get('x', binaryen.f32), wasmModule.global.get('y', binaryen.f32))));
//     return binaryen.getExpressionInfo(runner.runAndDispose(expression)).value;
// }
//
//
// function generateDefineGlobalVarExpr(node, ctxVars) {
//
//     let value = generateExpr(node.value, ctxVars);
//     let type = getNodeType(node.value, ctxVars);
//
//     //if global var already exists (in scheme is possible to redefine var)
//     if (wasmModule.getGlobal(node.identifier.value)) {
//         globalsMap.set(node.identifier.value, {value: value, type: type});
//         return wasmModule.global.set(node.identifier.value, value);
//     }
//
//     if (node.value.constructor !== AST.LiteralNode) {
//         wasmModule.addGlobal(node.identifier.value, binaryen.f32 , true, wasmModule.f32.const(0));
//         let value = generateExpr(node.value);
//         globalsMap.set(node.identifier.value, {value: value, type: type});
//         console.log(globalsMap)
//         return wasmModule.global.set(node.identifier.value, value);
//     }
//
//     globalsMap.set(node.identifier.value, {value: wasmModule.f32.const(node.value.value), type: type});
//     wasmModule.addGlobal(node.identifier.value, binaryen.f32 , true, wasmModule.f32.const(node.value.value));
// }
//
// function getValueExpr(node, params) {
//     return wasmModule.f32.const(getValue(node, params));
// }
//
// function getValue(node, params) {
//     let value;
//     if (node.constructor === AST.IdentifierNode) value = getVarValue(node, params);
//     else if (node.constructor === AST.CallFuncNode) value = getFncValue(node, params);
//     else if (node.constructor === AST.VectorNode) value = getAndSetVectorValue(node, params);
//     else value = getExpressionValue(generateExpr(node, params), params);
//     return value;
// }
//
// function getFncValue(node, params) {
//     console.log("fnc")
//     let localValues = []
//     for (let i = 0; i < node.params.length; i++){
//         console.log(node.params[i])
//         localValues.push(getValueExpr(node.params[i], params))
//     }
//     // localValues.push(wasmModule.i32.const(10))
//     runner = new binaryen.ExpressionRunner(wasmModule, wasmModule.ExpressionRunnerFlags.PreserveSideeffects);
//     for (let [key, set] of globalsMap) {
//         runner.setGlobalValue(key, set.value);
//     }
//     for (let i = 0; i < node.params.length; i++){
//         runner.setLocalValue(i, localValues[i]);
//     }
//     // runner.setAr
//     // runner.setLocalValue(1, localValues[1])
//     // console.log("ruunnner")
//     // console.log(runner.runAndDispose(fncMap.get(node.identifier.value).body))
//     console.log(fncMap.get(node.identifier.value))
//     return binaryen.getExpressionInfo(runner.runAndDispose(fncMap.get(node.identifier.value).body)).value;
// }
//
// function getVarValue(node, params){
//     if (params && params.has(node.value)) {
//         return wasmModule.local.get(params.get(node.value).value, binaryen.f32);
//     }
//     runner = new binaryen.ExpressionRunner(wasmModule);
//     for (let [key, set] of globalsMap) {
//         runner.setGlobalValue(key, set.value);
//     }
//     return binaryen.getExpressionInfo(runner.runAndDispose(wasmModule.global.get(node.value, binaryen.f32))).value;
// }
//
//
//
//
// function generateMultiOpExpr(node, params) {
//
//     switch (node.operator.value) {
//         case '+':
//             // let resultAdd = wasmModule.f32.const(0);
//             // for (let i = 0; i < node.values.length; i++) {
//             //     resultAdd = wasmModule.f32.add(resultAdd,  wasmModule.block("", [
//             //         generateExpr(node.values[i], params),
//             //         wasmModule.if(wasmModule.f32.ne(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(0)),
//             //             wasmModule.call("error", [wasmModule.f32.const(10)], binaryen.none),
//             //         ), ], binaryen.f32))
//             // }
//             // return resultAdd;
//             let resultAdd = wasmModule.f32.const(0);
//         // let resultAdd = wasmModule.f32.add(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
//         for (let i = 0; i < node.values.length; i++) {
//             let type = getNodeType(node.values[i], params)
//             if (type !== Type.Number && type !== Type.Unknown) throw new CustomError("Expected type: " + Type.Number + ", provided type: " + type)
//             if (type === Type.Unknown)  resultAdd = wasmModule.f32.add(resultAdd,  wasmModule.block("", [
//                         generateExpr(node.values[i], params),
//                         wasmModule.if(wasmModule.f32.ne(wasmModule.global.get("returnType", binaryen.f32), wasmModule.f32.const(0)),
//                             wasmModule.call("error", [wasmModule.f32.const(10)], binaryen.none),
//                         ), ], binaryen.f32))
//             else resultAdd = wasmModule.f32.add(resultAdd, generateExpr(node.values[i], params));
//         }
//         // console.log("add")
//         // console.log(wasmModule.emitText());
//         return resultAdd;
//         case '*':
//             if (node.values.length === 1) return generateExpr(node.values[0], params);
//             let resultMul = wasmModule.f32.mul(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultMul = wasmModule.f32.mul(resultMul, generateExpr(node.values[i], params));
//             }
//             return resultMul;
//         case '-':
//             if (node.values.length === 1) return generateExpr(node.values[0], params);
//             let resultSub = wasmModule.f32.sub(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultSub = wasmModule.f32.sub(resultSub, generateExpr(node.values[i], params));
//             }
//             return resultSub;
//
//
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
// function getNodeType(node, ctxVars) {
//     switch (node.constructor) {
//         case AST.LiteralNode:
//         case AST.MultiOpNode:
//             return Type.Number;
//         case AST.IdentifierNode:
//             return getVarType(node, ctxVars);
//         case AST.VectorNode:
//             return Type.Vector;
//         case AST.ListNode:
//             return Type.List;
//         case AST.CallFuncNode:
//             return node.identifier.value === 'car' ? Type.Unknown : fncMap.get(node.identifier.value).returnType;
//         default:
//             return Type.Number;
//     }
// }
//
// function getVarType(node, ctxVars) {
//     if (ctxVars !== undefined && ctxVars.has(node.value)) return ctxVars.get(node.value).type
//     if (globalsMap.has(node.value)) {
//         return globalsMap.get(node.value).type
//     }
//     throw new CustomError("Unbound variable "+node.value);
// }
//
// function generateBiOpExpr(node, ctxVars) {
//     switch (node.operator.value) {
//         case '=':
//             return wasmModule.f32.eq(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '<=':
//             return wasmModule.f32.le(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '<':
//             return wasmModule.f32.lt(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '>=':
//             return wasmModule.f32.ge(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '>':
//             return wasmModule.f32.gt(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case '!=':
//             return wasmModule.f32.ne(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
//         case 'and':
//             return wasmModule.i32.and(wasmModule.i32.trunc_s.f32(generateExpr(node.right, ctxVars)),
//                 wasmModule.i32.trunc_s.f32(generateExpr(node.left, ctxVars)));
//         case 'or':
//             return wasmModule.i32.or(wasmModule.i32.trunc_s.f32(generateExpr(node.right, ctxVars)),
//                 wasmModule.i32.trunc_s.f32(generateExpr(node.left, ctxVars)));
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
// function generateUniOpExpr(node, ctxVars) {
//     console.log(node)
//     switch (node.operator.value) {
//         case 'null?':
//             return wasmModule.f32.eq(checkType(Type.List, getNodeType(node.operand, ctxVars), generateExpr(node.operand, ctxVars)),
//                 wasmModule.f32.const(2));
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
//
//
//
// function generateIfExpr(node, ctxVars) {
//     let condition;
//     if (node.condition.constructor === AST.BiOpNode || node.condition.constructor === AST.UniOpNode) {
//         condition = generateExpr(node.condition, ctxVars)
//     }
//     if (node.ifFalse === undefined) return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars));
//     return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars), generateExpr(node.ifFalse, ctxVars));
// }
//
// function getAndSetVectorValue(node, ctxVars) {
//     let vecPointer = freeMemIndex;
//
//     let values = [];
//     for (let i = 0; i < node.values.length; i++) {
//
//         values.push(getValue(node.values[i], ctxVars));
//     }
//
//     mem_f32[freeMemIndex] = values.length;
//     freeMemIndex++
//
//     for (let i = 0; i < node.values.length; i++) {
//         mem_f32[freeMemIndex] = values[i];
//         freeMemIndex++;
//     }
//
//
//     // let vecPointer = freeMemIndex;
//     //
//     // let values = [];
//     // for (let i = 0; i < node.values.length; i++) {
//     //
//     //     values.push(getValue(node.values[i], ctxVars));
//     // }
//     //
//     // function floatToBinary(number) {
//     //     let buffer = new ArrayBuffer(4);
//     //     let floatView = new Float32Array(buffer);
//     //     let intView = new Uint32Array(buffer);
//     //     floatView[0] = number;
//     //
//     //     let sign = (intView[0] >>> 31) & 1;
//     //     let exponent = (intView[0] >>> 23) & 0xFF;
//     //     let mantissa = intView[0] & 0x7FFFFF;
//     //
//     //     return `${sign}${exponent.toString(2).padStart(8, '0')}${mantissa.toString(2).padStart(23, '0')}`;
//     // }
//     //
//     //
//     //
//     //
//     // mem_f32[freeMemIndex] = 5
//     // mem_f32[freeMemIndex+1] = 5
//     // let mem_u8 = new Uint8Array(mem_f32.buffer);
//     // mem_u8[0] |= 0x01;
//     // let view = new DataView(mem_f32.buffer);
//     //
//     //
//     // console.log("index: " + freeMemIndex)
//     // console.log(floatToBinary(mem_f32[freeMemIndex]))
//     // console.log("index: " + freeMemIndex+1)
//     // console.log(floatToBinary(mem_f32[freeMemIndex+1]))
//     // console.log(floatToBinary(mem_i32[freeMemIndex]))
//     // // console.log(memory.buffer[0])
//     // // mem_f32[freeMemIndex] = mem_f32[freeMemIndex] | 0x00000001;
//     // // console.log(memory.buffer[0])
//     // freeMemIndex++
//     //
//     // for (let i = 0; i < node.values.length; i++) {
//     //     mem_f32[freeMemIndex] = 8.0;
//     //     mem_f32[freeMemIndex] = mem_f32[freeMemIndex] | 0x00000001
//     //     freeMemIndex++;
//     // }
//     // //
//     // // console.log(mem_f32[freeMemIndex-1])
//     // // console.log(Number(mem_f32[freeMemIndex-1]).toString(2))
//     // //
//     // // console.log(((mem_f32[freeMemIndex-1] | 0x00000001) >>> 0).toString(2))
//     // // console.log(mem_i32[freeMemIndex-1])
//     // // console.log(((mem_i32[freeMemIndex-1] | 0x00000001) >>> 0).toString(2))
//
//     return vecPointer;
// }
//
//
// function generateListExpr(node, ctxVars) {
//     function saveListToMem(node) {
//         let listPointer = freeMemIndex;
//         let carIndex;
//         let cdrIndex;
//
//         for (let i = 0; i < node.values.length; i++) {
//             carIndex = freeMemIndex;
//             cdrIndex = freeMemIndex + 1;
//             freeMemIndex += 2;
//             if (node.values[i].constructor === AST.ListNode) {
//                 mem_i32[carIndex] = saveListToMem(node.values[i]) ;
//             } else {
//                 mem_i32[carIndex] = freeMemIndex;
//                 mem_f32[freeMemIndex] = getValue(node.values[i], ctxVars);
//                 freeMemIndex++;
//             }
//             if (i === node.values.length - 1) {
//                 mem_i32[cdrIndex] = 0
//             } else {
//                 mem_i32[cdrIndex] = freeMemIndex;
//             }
//         }
//         return listPointer | 0x40000000;
//     }
//
//     return wasmModule.block("", [ wasmModule.global.set("returnType", wasmModule.f32.const(1)),
//         wasmModule.f32.reinterpret(wasmModule.i32.const(saveListToMem(node)))], binaryen.auto)
// }
//
//
// function generateDisplayExpr(node, ctxVars) {
//
// }

import antlr4 from './antlr4/index.web.js';
import SchemeLikeLLexer from './SchemeLikeLLexer.js';
import SchemeLikeLParser from './SchemeLikeLParser.js';
import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
import binaryen from './binaryen/index.js'
import * as AST from './ast.js';
import TerminalNodeImpl from "./antlr4/tree/TerminalNodeImpl.js";

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
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
}


function throwError(value) {

    switch (value) {
        case ErrorType.ExpectedNumberActualList:
            throw new CustomError("Expected type: Number, actual type: List");
        case ErrorType.ExpectedNumberActualVector:
            throw new CustomError("Expected type: Number, actual type: Vector");
        case ErrorType.ExpectedListActualVector:
            throw new CustomError("Expected type: List, actual type: Vector");
        case ErrorType.ExpectedListActualNumber:
            throw new CustomError("Expected type: List, actual type: Number");
        case ErrorType.ExpectedVectorActualList:
            throw new CustomError("Expected type: Vector, actual type: List");
        case ErrorType.ExpectedVectorActualNumber:
            throw new CustomError("Expected type: Vector, actual type: Number");
        case ErrorType.ExpectedVectorActualVoid:
            throw new CustomError("Expected type: Vector, actual type: Void");
        case ErrorType.ExpectedListActualVoid:
            throw new CustomError("Expected type: List, actual type: Void");
        case ErrorType.ExpectedNumberActualVoid:
            throw new CustomError("Expected type: Number, actual type: Void");
        case ErrorType.ExpectedListActualEmpty:
            throw new CustomError("Empty List");
        case ErrorType.ExpectedVectorActualEmpty:
            throw new CustomError("Empty Vector");
        case ErrorType.IndexOutOfBounds:
            throw new CustomError("Index out of bounds");
        default:
            throw new CustomError("Unspecified error")
    }
}




class MyVisitor extends SchemeLikeLVisitor {
    visitStart(ctx) {
        let body = [];
        for (let i = 0; i < ctx.children.length - 1; i++){
            console.log(ctx.children[i])
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
                    body.push(this.visit(ctx.children[i]));
                    break;
                default:
                    throw new Error('Unsupported command type');
            }
        }
        console.log("created AST: ")
        console.log(new AST.ProgramNode(body));
        return new AST.ProgramNode(body);
    }

    visitLiteral(ctx) {
        let literal = ""
        for (let i = 0; i < ctx.children.length; i++){
            literal += ctx.children[i].symbol.text
        }
        return new AST.LiteralNode(literal);
    }

    visitIdentifier(ctx) {
        return new AST.IdentifierNode(ctx.children[0].symbol.text);
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

    visitOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.OperatorNode(operator);
    }

    visitBiOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.BiOperatorNode(operator);
    }

    visitUniOperatorExpr(ctx) {
        let operator = "";
        for (let i = 0; i < ctx.children.length; i++) {
            operator += ctx.children[i].symbol.text;
        }
        return new AST.UniOperatorNode(operator);
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
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                body.push(this.visit(child));
            }

            // TODO aby sa iba jedno mohlo vratit
            // } else if (child.constructor === SchemeLikeLParser.CallFncContext ||
            //         child.constructor === SchemeLikeLParser.ExprContext) {
            //     if (lastReturnExprIndex === i) body.push(this.visit(child));
            // } else if (child.constructor !== TerminalNodeImpl) {
            //     body.push(this.visit(child));
            // }
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
        // let lastReturnExprIndex = 0;

        // for (let i = 0; i < ctx.children.length; i++){
        //     let child = ctx.children[i];
        //     if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
        //         lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
        //     }
        // }
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.IdentifierContext) {
                params.push(this.visit(child));
            } else if (child.constructor !== TerminalNodeImpl) {
                body = this.visit(child);
            }
            // else if (child.constructor === SchemeLikeLParser.CallFncContext ||
            //     child.constructor === SchemeLikeLParser.ExprContext) {
            //     if (lastReturnExprIndex === i) body.push(this.visit(child));
            // } else if (child.constructor !== TerminalNodeImpl) {
            //     body.push(this.visit(child));
            // }
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
let editor

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

export function compileToWasm(){
    wasmModule = new binaryen.Module();

    tableSize = 0;
    table = wasmModule.addTable(tableName, 10, 50, binaryen.funcref)
    canvasMap = new Map();

    wasmModule.addMemoryImport(memoryName, "env", "memory")
    memoryBase = wasmModule.i32.const(0);
    freeMemIndex = 0;
    memory = new WebAssembly.Memory({initial:100, maximum: 65536});
    mem_f32 = new Float32Array(memory.buffer);
    mem_i32 = new Int32Array(memory.buffer);
    mem_i8 = new Uint8Array(memory.buffer);

    const input = editor.getValue();
    const chars = new antlr4.InputStream(input);
    const lexer = new SchemeLikeLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new SchemeLikeLParser(tokens);
    const tree = parser.start();

    const visitor = new MyVisitor();
    const ast = visitor.visit(tree);

    generateWasm(ast);
    wasmModule.addGlobal("freeMemIndex", binaryen.i32, true, wasmModule.i32.const(0))

    const wasmText = wasmModule.emitText();
    console.log(wasmText);

    // wasmModule.optimize();
    // // if (!wasmModule.validate()) {
    // //     console.error("Module validation error:", wasmModule.validate());
    // // }
    //
    // const wasmTextOptimized = wasmModule.emitText();
    // console.log("optimized wat")
    // console.log(wasmTextOptimized)

    let binary = wasmModule.emitBinary()
    wasmModule.dispose();
    return binary;
}

export function runWasm(wasmBinary) {
    //TODO ked bezi nanovo, tak sa pamat vymaza, canvas vymaze aj output vymaze, tak?
    document.getElementById("output").innerHTML = ""
    const wasmBytes = new Uint8Array(wasmBinary);

    const importObject = {
        env: {
            memory: memory,
            throwError: throwError,
            displayNumber: displayNumber,
            displayList: displayList,
            displayVec: displayVec,
            newline: newline,
            createCanvasElement: createCanvasElement,
            updateCanvasData: updateCanvasData,
        }};

    WebAssembly.instantiate(wasmBytes, importObject)
        .then(obj => {
            let result = obj.instance.exports.main();
            // if (result !== undefined) document.getElementById("output").innerHTML += result;
            // console.log(obj.instance.exports.main());
            console.log(mem_f32);
            console.log(mem_i32);
            console.log(mem_i8)
        })
}


function createCanvasElement(address, width, height) {
    let canvas = document.createElement('canvas');
    canvas.height = height;
    canvas.width = width;
    // canvas.getContext("2d").fillRect(0,0, 200, 200); //TODO delete this line
    document.getElementById("canvas-container").appendChild(canvas);
    canvasMap.set(address, canvas);
}

function updateCanvasData(address) {
    let canvas = canvasMap.get(address);
    let width = mem_f32[address/4];
    let height = mem_f32[address/4 + 1];
    console.log(address)
    console.log(width, height)
    const image_data = new ImageData( new Uint8ClampedArray(mem_i32.buffer, address + 8,
        width*height*4), width, height);
    canvas.getContext('2d').putImageData(image_data, 0, 0);
}


function generateWasm(ast) {
    init();
    initCanvas();
    // addInitFunctions()
   // addTestFunctions()
    let wasmExpressions = [];
    // let returnType = binaryen.none;
    for (let i = 0; i < ast.instructions.length; i++){
        let ret = generateExpr(ast.instructions[i])

        if (ret !== undefined) {
            wasmExpressions.push(ret);
            // if (binaryen.getExpressionType(ret) !== binaryen.none) {
            //     console.log(binaryen.getExpressionType(ret))
            //     console.log(binaryen.getExpressionType(ret) !== binaryen.none)
            //     if (returnType === binaryen.none) returnType = binaryen.f32;
            //     else throw new CustomError("Can't return more than 1 value")
            // }
        }
    }

    let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);

    wasmModule.addFunction('main', [], binaryen.getExpressionType(mainBlock), [], mainBlock);
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

    wasmModule.addFunctionImport("error", "env", "throwError", binaryen.createType([binaryen.i32]), binaryen.none);
    wasmModule.addFunctionImport("displayNumber", "env", "displayNumber", binaryen.createType([binaryen.f32]), binaryen.none);
    wasmModule.addFunctionImport("displayList", "env", "displayList", binaryen.createType([binaryen.i32]), binaryen.none);
    wasmModule.addFunctionImport("displayVec", "env", "displayVec", binaryen.createType([binaryen.i32]), binaryen.none);
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
            emptyListError,
            numberOrVectorError,

            wasmModule.i32.load(0,0,
                wasmModule.i32.shr_u(
                    wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(-4)),
                    wasmModule.i32.const(2))),
        ], binaryen.i32));

    wasmModule.addFunction("cdr", binaryen.createType([binaryen.i32]), binaryen.i32, [binaryen.i32],
    wasmModule.block("",
        [
            emptyListError,
            numberOrVectorError,

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

    wasmModule.addFunction("set-car!", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.none, [],
        wasmModule.block("",
            [
                emptyListError,
                numberOrVectorError,

                wasmModule.i32.store(0,0,
                    wasmModule.i32.shr_u(
                        wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(2)), wasmModule.local.get(1, binaryen.i32)),

            ], binaryen.auto));


    wasmModule.addFunction("set-cdr!", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.none, [],
        wasmModule.block("",
            [

                emptyListError,
                numberOrVectorError,

                wasmModule.if(wasmModule.i32.ne(
                        wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(1)),
                        wasmModule.i32.const(1)),
                    wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedVectorActualNumber)], binaryen.none)),

                wasmModule.i32.store(0,0,
                    wasmModule.i32.add(
                    wasmModule.i32.shr_u(
                        wasmModule.local.get(0, binaryen.i32),
                        wasmModule.i32.const(2)), wasmModule.i32.const(4)),
                    wasmModule.i32.shr_u(
                    wasmModule.local.get(1, binaryen.i32),wasmModule.i32.const(2)))

            ], binaryen.auto))

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

    let notNumberError = wasmModule.if(wasmModule.i32.ne(
                wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(1)),
                wasmModule.i32.const(0)),
            wasmModule.if(wasmModule.i32.eq(
                    wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32), wasmModule.i32.const(3)),
                    wasmModule.i32.const(3)),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualVector)], binaryen.none),
                wasmModule.call("error", [wasmModule.i32.const(ErrorType.ExpectedNumberActualList)], binaryen.none)));

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

            vectorEmptyError,
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
                wasmModule.i32.const(3))),

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

}

function initCanvas() {

    wasmModule.addFunctionImport("create-canvas-js", "env", "createCanvasElement",
        binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none);

    wasmModule.addFunctionImport("update-canvas-data-js", "env", "updateCanvasData",
        binaryen.createType([binaryen.i32]), binaryen.none);

    wasmModule.addFunction("canvas", binaryen.createType([binaryen.i32, binaryen.i32]), binaryen.i32,
        [binaryen.i32, //canvas base
         binaryen.i32, //processed width
         binaryen.i32  //processed height
        ],
        wasmModule.block("",
            [   wasmModule.local.set(2, wasmModule.global.get("freeMemIndex", binaryen.i32)),
                wasmModule.local.set(3, wasmModule.call("process-int-input", [wasmModule.local.get(0, binaryen.i32)], binaryen.i32)),
                wasmModule.local.set(4, wasmModule.call("process-int-input", [wasmModule.local.get(1, binaryen.i32)], binaryen.i32)),
                wasmModule.call("create-canvas-js", [wasmModule.local.get(2, binaryen.i32),
                    wasmModule.local.get(3, binaryen.i32), wasmModule.local.get(4, binaryen.i32)], binaryen.none),
                wasmModule.i32.store(0,0, wasmModule.local.get(2, binaryen.i32),
                    wasmModule.local.get(0, binaryen.i32)),
                wasmModule.i32.store(4,0, wasmModule.local.get(2, binaryen.i32),
                    wasmModule.local.get(1, binaryen.i32)),
                // wasmModule.call("update-canvas-data-js",
                //     [wasmModule.local.get(2, binaryen.i32)], binaryen.none),
                wasmModule.global.set("freeMemIndex",
                    wasmModule.i32.mul(
                    wasmModule.i32.mul(wasmModule.local.get(3, binaryen.i32), wasmModule.local.get(4, binaryen.i32)),
                    wasmModule.i32.const(4))),
                wasmModule.local.get(2, binaryen.i32)
            ], binaryen.i32))

    // wasmModule.addFunction("color", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.i32,
    //     [binaryen.i32,
    //         binaryen.i32],
    //     wasmModule.block("",
    //         [       //TODO treba nejaku zmenu? lebo v konecnom dosledku chceme toto cislo mat v pamati do canvasu
    //             //treba ale call process_int_input
    //                 wasmModule.i32.or(
    //                     wasmModule.i32.or(
    //                         wasmModule.i32.or(
    //                             wasmModule.i32.shl(
    //                                 wasmModule.i32.and(wasmModule.local.get(3, binaryen.i32),
    //                                     wasmModule.i32.const(0xFF)),
    //                                 wasmModule.i32.const(24)),
    //                             wasmModule.i32.shl(
    //                                 wasmModule.i32.and(wasmModule.local.get(2, binaryen.i32),
    //                                     wasmModule.i32.const(0xFF)), wasmModule.i32.const(16))
    //                         ),
    //                         wasmModule.i32.shl(
    //                             wasmModule.i32.and(wasmModule.local.get(1, binaryen.i32),
    //                                 wasmModule.i32.const(0xFF)), wasmModule.i32.const(8))
    //                     ),
    //                     wasmModule.i32.and(wasmModule.local.get(0, binaryen.i32),
    //                         wasmModule.i32.const(0xFF))),
    //         ], binaryen.auto))
    //
    //
    // wasmModule.addFunction("fill-rect", binaryen.createType([binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32, binaryen.i32]), binaryen.none,
    //     [binaryen.i32,  //i
    //         binaryen.i32, //j
    //         binaryen.i32,  //rec_start 8
    //         binaryen.i32, //canvas_width 9
    //         binaryen.i32 //canvas_height 10
    //     ],
    //     wasmModule.block("",
    //         [
    //
    //             wasmModule.local.set(6, wasmModule.i32.const(0)),
    //             wasmModule.local.set(7, wasmModule.i32.const(0)),
    //             wasmModule.local.set(9,
    //                 wasmModule.f32.load(4, 0, wasmModule.i32.trunc_s.f32(wasmModule.local.get(0, binaryen.f32)))),
    //             wasmModule.local.set(8, wasmModule.f32.add(wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
    //                 wasmModule.f32.const(8)),  wasmModule.f32.mul(wasmModule.f32.add(wasmModule.local.get(1, binaryen.f32),
    //                     wasmModule.f32.mul(wasmModule.local.get(2, binaryen.f32), wasmModule.local.get(9, binaryen.f32))),
    //                 wasmModule.f32.const(4))  )),
    //
    //
    //
    //
    //             wasmModule.loop("height", wasmModule.block("", [
    //
    //                 wasmModule.local.set(6, wasmModule.f32.const(0)),
    //                 wasmModule.loop("width", wasmModule.block("", [
    //                     wasmModule.f32.store(0,0,
    //                         wasmModule.i32.trunc_s.f32(wasmModule.f32.add(
    //                             wasmModule.local.get(8, binaryen.f32),
    //                             wasmModule.f32.add(
    //                                 wasmModule.f32.mul(wasmModule.f32.mul(
    //                                     wasmModule.local.get(9, binaryen.f32),wasmModule.f32.const(4)),  wasmModule.local.get(7, binaryen.f32)),
    //                                 wasmModule.f32.mul(
    //                                     wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(4))))),
    //                         wasmModule.local.get(5, binaryen.f32),
    //                     ),
    //                     wasmModule.local.set(6, wasmModule.f32.add(wasmModule.local.get(6, binaryen.f32), wasmModule.f32.const(1))),
    //                     wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(6, binaryen.f32), wasmModule.local.get(3, binaryen.f32)),
    //                         wasmModule.br("width")),])),
    //                 wasmModule.local.set(7, wasmModule.f32.add(wasmModule.local.get(7, binaryen.f32), wasmModule.f32.const(1))),
    //                 wasmModule.if(wasmModule.f32.lt(wasmModule.local.get(7, binaryen.f32), wasmModule.local.get(4, binaryen.f32)),
    //                     wasmModule.br("height")),])),
    //
    //             wasmModule.call("update-canvas-data",
    //                 [wasmModule.local.get(0, binaryen.f32)], binaryen.none),
    //         ], binaryen.none))



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


function generateExpr(node, ctxVars) {
    switch (node.constructor) {
        case AST.MultiOpNode:
            return generateMultiOpExpr(node, ctxVars);
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
        case AST.VectorNode:
            return generateVectorExpr(node, ctxVars);
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
    throw new CustomError("Unbound variable: " + node.value);
}

function generateDefineFuncExpr(node, ctxVars) {

    if (ctxVars === undefined) ctxVars = [];

    for (let i = 0; i < node.params.length; i++){
        let param = node.params[i].value;
        if (ctxVars.includes(param)) {
            throw new CustomError("The identifier '" + param +"' is already defined in the scope");
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

    let fncType = analyzeTypeOfFunction(node);
    let fncRef = wasmModule.addFunction(node.identifier.value, paramsType, fncType, varsType, wasmModule.block("", [], binaryen.auto));

    let body = generateExpr(node.body, ctxVars);

    binaryen.Function.setBody(fncRef , body)
}

function analyzeTypeOfFunction(node) {
    console.log("analyze")
    let type = binaryen.none;
    if (node.constructor === AST.CallLambdaFuncNode) {
        return binaryen.i32
    }
    let body = node.body.constructor === AST.LocalFncBodyNode ? node.body.fncBody.body  : node.body.body;
    for (let i = body.length - 1; i > -1; i--) {
        if (body[i].constructor === AST.CallFuncNode && node.identifier.value !== body[i].identifier.value) {
            return binaryen.i32
        }
        if (getNodeReturnType(body[i]) !== undefined) return binaryen.i32;
    }
    // console.log(type)
    return type;
}

function getNodeReturnType(node) {
    console.log("returnType")
    console.log(node)
    if (node.constructor === AST.LiteralNode ||
        node.constructor === AST.MultiOpNode ||
        node.constructor === AST.IdentifierNode ||
        node.constructor === AST.ListNode ||
        node.constructor === AST.VectorNode ) {
        return binaryen.i32
    }
    if (node.constructor === AST.CallFuncNode) {
        let funRef = wasmModule.getFunction(node.identifier.value);
        if (funRef !== 0) {
            if (binaryen.getFunctionInfo(funRef).results === 2 || binaryen.getFunctionInfo(funRef).results === 4) return binaryen.i32
        }
    }
    if (node.constructor === AST.IfNode) {
        return getNodeReturnType(node.ifTrue);
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
        ctxVars.push(node.vars[i].identifier.value);
    }
    expressions.push(generateExpr(node.fncBody, ctxVars));
    return wasmModule.block('', expressions, binaryen.auto);

}

function generateFncBodyExpr(node, ctxVars){
    let expressions = [];
    for (let i = 0; i < node.body.length; i++) {
        expressions.push(generateExpr(node.body[i], ctxVars));
    }
    return wasmModule.block("", expressions, binaryen.auto);
}

function generateSetExpr(node, ctxVars) {
    let value = generateExpr(node.pair.value, ctxVars);
    if (ctxVars && ctxVars.includes(node.pair.identifier.value)) {
        return wasmModule.local.set(ctxVars.indexOf(node.pair.identifier.value), value);
    }
    if (wasmModule.getGlobal(node.pair.identifier.value) !== 0) {
        return wasmModule.global.set(node.pair.identifier.value, value);
    }
    throw new CustomError("Unbound variable " + node.pair.identifier.value);
}

function generateBeginExpr(node, ctxVars) {
    let expressions = [];
    for (let i = 0; i < node.expressions.length; i++) {
        expressions.push(generateExpr(node.expressions[i], ctxVars));
    }
    return wasmModule.block("", expressions, binaryen.auto);
}


function generateCallFuncExpr(node, ctxVars){
    let operands = [];
    let type = [];
    for (let i = 0; i < node.params.length; i++){

        operands.push(generateExpr(node.params[i], ctxVars))
        type.push(binaryen.i32);
    }

    let paramsType = binaryen.createType(type);
    if (wasmModule.getFunction(node.identifier.value) === 0) {
        if (ctxVars === undefined || !ctxVars.includes(node.identifier.value)) {
            throw new CustomError("Unbound variable: " + node.identifier.value)
        }
        console.log(node.identifier.value)
        console.log(ctxVars.includes(node.identifier.value))
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

    let value = generateExpr(node.value, ctxVars);

    //if global var already exists (in scheme is possible to redefine var)
    if (wasmModule.getGlobal(node.identifier.value)) {
        return wasmModule.global.set(node.identifier.value, value);
    }

    wasmModule.addGlobal(node.identifier.value, binaryen.i32 , true, wasmModule.i32.const(0));
    return wasmModule.global.set(node.identifier.value, value);
}


function generateMultiOpExpr(node, params) {

    switch (node.operator.value) {
        case '+':
            let resultAdd = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultAdd = wasmModule.f32.add(resultAdd,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            // TODO!!!! moze po upravach byt resultAdd s poslednym bitom rovnym 1? pri klasickych oper nie, ale co nejake ine?
            return  wasmModule.i32.reinterpret(resultAdd);

        case '*':
            let resultMul = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultMul = wasmModule.f32.mul(resultMul,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.reinterpret(resultMul);

        case '-':
            //check ak je iba jedno cislo, tak vrat minus
            let resultSub = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultSub = wasmModule.f32.sub(resultSub,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.reinterpret(resultSub);

        case '/':
            let resultDiv = wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[0], params)], binaryen.i32))
            for (let i = 1; i < node.values.length; i++) {
                resultDiv = wasmModule.f32.div(resultDiv,
                    wasmModule.f32.reinterpret(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.values[i], params)], binaryen.i32)));
            }
            return wasmModule.i32.reinterpret(resultDiv);

        default:
            throw new Error('Unsupported operator');
    }
}

function generateBiOpExpr(node, ctxVars) {
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
        case 'and':
            return wasmModule.i32.and(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        case 'or':
            return wasmModule.i32.or(wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.left, ctxVars)], binaryen.i32),
                wasmModule.call("checkNumberTypeAndGetValue", [generateExpr(node.right, ctxVars)], binaryen.i32));
        default:
            throw new Error('Unsupported operator');
    }
}

function generateUniOpExpr(node, ctxVars) {

    switch (node.operator.value) {
        case 'null?':
            //TODO zamysli sa, aby nebolo 2x volanie generate (pti multi pouzita fkcia checkTypeValue.. )
            return wasmModule.block("", [
                wasmModule.if(wasmModule.i32.ne(
                        wasmModule.i32.and(generateExpr(node.operand,ctxVars), wasmModule.i32.const(1)),
                        wasmModule.i32.const(1)),
                    wasmModule.call("error", [wasmModule.i32.const(10)], binaryen.none)),
                wasmModule.i32.eq(generateExpr(node.operand,ctxVars), wasmModule.i32.const(-3))

            ], binaryen.auto)
        default:
            throw new Error('Unsupported operator');
    }
}


function generateIfExpr(node, ctxVars) {
    let condition;
    if (node.condition.constructor === AST.BiOpNode || node.condition.constructor === AST.UniOpNode) {
        condition = generateExpr(node.condition, ctxVars)
    }
    if (node.ifFalse === undefined) return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars));
    return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars), generateExpr(node.ifFalse, ctxVars));
}

function generateVectorExpr(node, ctxVars) {
    if (node.values.length === 0) {
        return wasmModule.block("", [wasmModule.i32.const(-1)], binaryen.i32)
    }
    let values = [];

    values.push(
        wasmModule.i32.or(
        wasmModule.i32.shl(
            wasmModule.global.get("freeMemIndex", binaryen.i32),
            wasmModule.i32.const(2)), wasmModule.i32.const(3)))

    values.push(saveVectorBody(node,ctxVars))

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
    return wasmModule.block("", values, binaryen.i32);
}


function generateListExpr(node, ctxVars) {
    if (node.values.length === 0) {
        return wasmModule.block("", [wasmModule.i32.const(-3)], binaryen.i32)
    }

    let values = [];
    values.push(wasmModule.i32.or(
        wasmModule.i32.shl(
            wasmModule.global.get("freeMemIndex", binaryen.i32),
            wasmModule.i32.const(2)),
        wasmModule.i32.const(1)))

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
                throw new CustomError("No value provided");
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
    return wasmModule.block("", values, binaryen.i32)
}


function generateDisplayExpr(node, ctxVars) {

    //co ked budem chciet vypisat funkciu co nic nevracia?
    return wasmModule.call("display", [generateExpr(node.value, ctxVars)], binaryen.none);

}

