import {BeginNode, BiOperatorNode, LoopNode, OperatorNode, SetNode} from "./ast.js";

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}




// // import antlr4 from './antlr4/index.web.js';
// // import SchemeLikeLLexer from './SchemeLikeLLexer.js';
// // import SchemeLikeLParser from './SchemeLikeLParser.js';
// // import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
// // import binaryen from './binaryen/index.js'
// //
// //
// //
// // class ASTNode {
// //     constructor(type) {
// //         this.type = type;
// //     }
// // }
// //
// // class MultiOpNode extends ASTNode {
// //     constructor(type, values) {
// //         super(type);
// //         this.values = values;
// //     }
// // }
// //
// // class IntNode extends ASTNode {
// //     constructor(value) {
// //         super('INT');
// //         this.value = value;
// //     }
// // }
// //
// // class FloatNode extends ASTNode {
// //     constructor(value) {
// //         super('FLOAT');
// //         this.value = value;
// //     }
// // }
// //
// // class VariableNode extends ASTNode {
// //     constructor(name, value) {
// //         super('VARIABLE');
// //         this.name = name;
// //         this.value = value;
// //     }
// // }
// //
// // class MyVisitor extends SchemeLikeLVisitor {
// //     visitStart(ctx) {
// //         for (let i = 0; i < ctx.children.length - 1; i++){
// //             switch (ctx.children[i].constructor) {
// //                 case SchemeLikeLParser.ExprContext:
// //                     this.visit(ctx.children[i].expr());
// //                     break;
// //                 case SchemeLikeLParser.DeclarationContext:
// //                     this.visitDeclaration(ctx.children[i]);
// //                     break;
// //                 default:
// //                     // if (ctx.children[i].symbol.type !== SchemeLikeLLexer.EOF)
// //                     throw new Error('Unsupported command type');
// //             }
// //         }
// //         return this.visit(ctx.expr());
// //     }
// //
// //     visitExpr(ctx, hasFloatOperand = false) {
// //         // console.log(ctx.constructor.name === SchemeLikeLParser.ExprContext.name)
// //
// //
// //
// //         let operator = "";
// //         let values = [];
// //         hasFloatOperand = hasFloatOperand === true? true : this.hasFloatOperand(ctx);
// //         ctx.children.forEach(child => {
// //             if (child.symbol === undefined) {
// //                 values.push(this.visitExpr(child, hasFloatOperand));
// //             }
// //             else if (child.symbol.type === SchemeLikeLLexer.INT || child.symbol.type === SchemeLikeLLexer.FLOAT) {
// //                 if (hasFloatOperand) values.push(new FloatNode(child.getText()));
// //                 else values.push(new IntNode(child.getText()));
// //             }
// //             else if (child.symbol.type === SchemeLikeLLexer.OPERATOR) operator = child.getText();
// //         })
// //         if (values.length === 0 && (operator === "/" || operator === "-")) {
// //             throw new Error('Too few args for operator: ' + operator);
// //         }
// //         operator = hasFloatOperand ? operator + 'f' : operator;
// //         return new MultiOpNode(operator, values);
// //     }
// //
// //
// //     hasFloatOperand(ctx) {
// //         let hasFloat = false;
// //         ctx.children.forEach(child => {
// //
// //             if (child.symbol === undefined) {
// //                 if(this.hasFloatOperand(child))  hasFloat = true;
// //             }
// //             else if (child.symbol.type === SchemeLikeLLexer.FLOAT) hasFloat = true;
// //         });
// //         return hasFloat;
// //     }
// //
// //     isNumber(ctx) {
// //         if (ctx.symbol !== undefined)
// //             return ctx.symbol.type === SchemeLikeLLexer.FLOAT || ctx.symbol.type === SchemeLikeLLexer.INT
// //         return false
// //     }
// //
// //     visitDeclaration(ctx) {
// //         let identifier = ctx.children[3];
// //         let value = '';
// //         if (ctx.children[5].symbol === undefined)
// //             value = this.visitExpr(ctx.children[5]);
// //         else if (ctx.children[5].symbol.type === SchemeLikeLLexer.FLOAT)
// //             value = new FloatNode(ctx.children[5].getText());
// //         else if (ctx.children[5].symbol.type === SchemeLikeLLexer.INT)
// //             value = new IntNode(ctx.children[5].getText());
// //         return new VariableNode(identifier, value);
// //     }
// //
// // }
// //
// //
// //
// // let wasmModule = new binaryen.Module();
// // export function compileToWasm(){
// //     wasmModule = new binaryen.Module();
// //     const input = document.getElementById('userCode').value;
// //     const chars = new antlr4.InputStream(input);
// //     const lexer = new SchemeLikeLLexer(chars);
// //     const tokens = new antlr4.CommonTokenStream(lexer);
// //     const parser = new SchemeLikeLParser(tokens);
// //     parser.buildParseTrees = true;
// //     const tree = parser.start();
// //
// //     // console.log("strom")
// //     // console.log(tree.toStringTree())
// //     const visitor = new MyVisitor();
// //
// //     const ast = visitor.visit(tree);
// //     console.log("ast");
// //     console.log(ast)
// //
// //
// //     console.log(wasmModule)
// //     const wasmExpression = generateWasm(ast);
// //     // const mainExpression = wasmModule.block('', [wasmModule.return(wasmModule.i32.const(5)), wasmExpression]);
// //     // wasmModule.addFunction('main', binaryen.i32, [], [], wasmModule.block('', [wasmModule.return(result)]));
// //     wasmModule.addFunction('main', [], binaryen.f32, [], wasmExpression);
// //     wasmModule.addFunctionExport('main', 'main');
// //
// //     const wasmText = wasmModule.emitText();
// //
// //     console.log(wasmText);
// //     return wasmModule.emitBinary();
// // }
// //
// //
// // function generateWasm(node) {
// //     switch (node.constructor) {
// //         case MultiOpNode:
// //             return generateMultiOpWasm(node);
// //         case IntNode:
// //             return generateIntNode(node);
// //         case FloatNode:
// //             return generateFloatNode(node);
// //         case VariableNode:
// //             return generateVariable(node);
// //         default:
// //             throw new Error('Unsupported node type');
// //     }
// // }
// //
// // function generateFloatNode(node){
// //     return wasmModule.f32.const(node.value);
// // }
// //
// // function generateIntNode(node){
// //     return wasmModule.i32.const(node.value);
// // }
// //
// // function generateMultiOpWasm(node) {
// //     switch (node.type) {
// //         case '+':
// //             if (node.values.length === 0) return wasmModule.i32.const(0);
// //             if (node.values.length === 1) return generateWasm(node.values[0]);
// //             let resultAdd = wasmModule.i32.add(generateWasm(node.values[0]), generateWasm(node.values[1]));
// //             for (let i = 2; i < node.values.length; i++) {
// //                 resultAdd = wasmModule.i32.add(resultAdd, generateWasm(node.values[i]));
// //             }
// //             return resultAdd;
// //         case '*':
// //             return wasmModule.i32.mul(node.values[0].value, node.values[1].value);
// //         case '+f':
// //             if (node.values.length === 0) return wasmModule.f32.const(0);
// //             if (node.values.length === 1) return generateWasm(node.values[0]);
// //
// //
// //
// //             let resultAddFloat = wasmModule.f32.add(generateWasm(node.values[0]), generateWasm(node.values[1]));
// //             for (let i = 2; i < node.values.length; i++) {
// //                 resultAddFloat = wasmModule.f32.add(resultAddFloat, generateWasm(node.values[i]));
// //             }
// //             return resultAddFloat;
// //         default:
// //             throw new Error('Unsupported operator');
// //     }
// // }
// //
// // function generateVariable(node) {
// //     console.log(wasmModule)
// //     // return wasmModule.addGlobal(node.name, wasmModule.type)
// // }
// //
// //
//
//
// import antlr4 from './antlr4/index.web.js';
// import SchemeLikeLLexer from './SchemeLikeLLexer.js';
// import SchemeLikeLParser from './SchemeLikeLParser.js';
// import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
// import binaryen from './binaryen/index.js'
// import * as AST from './ast.js';
// import TerminalNodeImpl from "./antlr4/tree/TerminalNodeImpl.js";
// import {CallFuncNode} from "./ast.js";
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
//                     body.push(this.visit(ctx.children[i])); //podla toho co sa posle zavola prislusny visit (visitExp, vDeclaration..)
//                     break;
//                 case SchemeLikeLParser.DefineVarContext:
//                     body.push(this.visit(ctx.children[i]));
//                     break;
//                 case SchemeLikeLParser.DefineFncContext:
//                     body.push(this.visit(ctx.children[i]));
//                     break;
//                 case SchemeLikeLParser.CallFncContext:
//                     body.push(this.visit(ctx.children[i]));
//                     break;
//                 default:
//                     throw new Error('Unsupported command type');
//             }
//         }
//
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
//             if (child.constructor !== TerminalNodeImpl) {
//                 values.push(this.visit(child));
//             } else if (child.symbol.type === SchemeLikeLParser.OPERATOR) {
//                 operator = child.symbol.text;
//             }
//         }
//         return new AST.MultiOpNode(operator, values);
//     }
//
//     visitDefineVar(ctx) {
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
//     visitDefineFnc(ctx) {
//         let identifier;
//         let body = [];
//         let params = [];
//         for (let i = 0; i < ctx.children.length; i++){
//             let child = ctx.children[i];
//             if (child.constructor === SchemeLikeLParser.IdentifierContext){
//                 if (identifier === undefined) {
//                     identifier =  this.visit(child);
//                 } else {
//                     params.push(this.visit(child));
//                 }
//             } else if (child.constructor !== TerminalNodeImpl) {
//                 body.push(this.visit(child));
//             }
//
//         }
//         return new AST.DefineFuncNode(identifier, params, body);
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
//         return new CallFuncNode(identifier, params);
//     }
// }
//
//
//
// let wasmModule;
// let runner;
// let globalsMap = new Map(); //name, expression
// let fncMap = new Map();
// export function compileToWasm(){
//
//     wasmModule = new binaryen.Module();
//     runner =  new binaryen.ExpressionRunner(wasmModule);
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
//     // const mainExpression = wasmModule.block('', [wasmModule.return(wasmModule.i32.const(5)), wasmExpression]);
//     // wasmModule.addFunction('main', binaryen.i32, [], [], wasmModule.block('', [wasmModule.return(result)]));
//
//     const wasmText = wasmModule.emitText();
//     console.log(wasmText);
//     wasmModule.optimize();
//     const wasmTextOptimized = wasmModule.emitText();
//     console.log(wasmTextOptimized)
//     let binary = wasmModule.emitBinary()
//     wasmModule.dispose();
//     return binary;
// }
//
//
// function generateWasm(ast) {
//
//     // initWasm();
//
//     let wasmExpressions = [];
//     for (let i = 0; i < ast.instructions.length; i++){
//         let ret = generate(ast.instructions[i])
//         if (ret !== undefined) {
//
//             wasmExpressions.push(ret);
//         }
//     }
//     // console.log("wasm before main");
//     // console.log(wasmModule.emitText());
//
//
//     // if (wasmExpressions.length !== 0){
//     //     console.log("notEmpty")
//     let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);
//     wasmModule.addFunction('main', [], binaryen.getExpressionType(mainBlock), [], mainBlock);
//     // } else {
//     //     let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);
//     //      wasmModule.addFunction('main', [], binaryen.none, []);
//     // }
//     wasmModule.addFunctionExport('main', 'main');
//
//
//     // wasmModule.addFunction('main', [], binaryen.f32, [], wasmExpressions);
//     //
//     // // // console.log(wasmModule.emitText())
//     // wasmModule.addFunctionExport('main', 'main');
//     // console.log("after main is added");
//     // console.log(wasmModule.emitText())
// }
//
//
//
// function initWasm(){
//
//     // let block = wasmModule.block(null, [
//     //     wasmModule.f32.add(wasmModule.f32.const(10), wasmModule.f32.const(10)),
//     //     // wasmModule.return(
//     //     //     wasmModule.i32.const(10)
//     //     // )
//     // ], binaryen.auto)
//     //
//     //
//     // wasmModule.addFunction('funcio', [], binaryen.getExpressionInfo(block).type , [], block);
//
//     // wasmModule.addFunction('funcio', [], binaryen.getExpressionInfo(block).type , [], block);
//
//
//
//     // mainWasm = wasmModule.addFunction('main', [], binaryen.f32, [], wasmModule.f32.add(wasmModule.f32.const(10), wasmModule.f32.const(10)));
//
//
//     // mainWasm.push(wasmModule.local.se)
//     // mainWasm.push(wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.f32.const(1)));
//     // mainWasm.push()
//     // // let addExpression = wasmModule.f32.add(wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.f32.const(1)), wasmModule.f32.const(50));
//     // let addExpression = runner.runAndDispose(wasmModule.f32.const(40))
//     // let afterRunExpression = runner.runAndDispose(addExpression);
//     // console.log("after")
//     // console.log(afterRunExpression)
//     //
//     //
//     // console.log(binaryen.getExpressionInfo(afterRunExpression));
//     // console.log(binaryen.getExpressionInfo(afterRunExpression).value);
//     // console.log(afterRunExpression);
//     // console.log(binaryen.getExpressionInfo(runner.runAndDispose(wasmModule.f32.add(wasmModule.f32.const(1),
//     //     wasmModule.f32.const(1)))));
//     // console.log(binaryen.getExpressionInfo(wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.f32.const(1))));
//     // console.log(wasmModule.emitText())
//     // wasmModule.return()
//
//     // const setGlobalFunction = wasmModule.addFunction(
//     //     "evalExpr",
//     //     wasmModule.f32,
//     //     [wasmModule.ExpressionRef],
//     //     wasmModule.global.set(globalVar, Binaryen.getLocal(0, Binaryen.i32))
//     // );
//
// }
//
// function generate(node, params) {
//     // console.log("generate")
//     switch (node.constructor) {
//         case AST.MultiOpNode:
//             return generateMultiOpWasm(node, params);
//         case AST.LiteralNode:
//             return generateLiteralNode(node, params);
//         case AST.DefineVarNode:
//             return generateDefineVarNode(node, params);
//         case AST.IdentifierNode:
//             return getIdentifierValue(node, params);
//         case AST.DefineFuncNode:
//             generateDefineFuncNode(node, params);
//             break;
//         case AST.CallFuncNode:
//             return generateCallFuncNode(node, params);
//         default:
//             throw new Error('Unsupported node type');
//     }
// }
//
//
// function generateLiteralNode(node, params){
//     // console.log("g literal");
//     return wasmModule.f32.const(node.value);
// }
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
//      return generateLiteralNode(binaryen.getExpressionInfo(runner.runAndDispose(expression)));
// }
//
// function generateDefineVarNode(node, params){
//     console.log("define var node value")
//
//     let value = getValue(node.value, params);
//     globalsMap.set(node.identifier.value, value);
//     if (wasmModule.getGlobal(node.identifier.value)) {
//         return wasmModule.global.set(node.identifier.value, value);
//     }
//     wasmModule.addGlobal(node.identifier.value, binaryen.f32 , true, value);
// }
//
// function getValue(node, params) {
//     let value;
//     if (node.constructor === AST.IdentifierNode) value = getVarValue(node, params);
//     else if (node.constructor === AST.CallFuncNode) value = getFncValue(node, params);
//     else value = getExpressionValue(generate(node, params), params);
//     return value;
// }
//
// function getFncValue(node, params) {
//     console.log(node);
//     console.log("fncValue")
//
//     let localValues = []
//     for (let i = 0; i < node.params.length; i++){
//         // console.log(node.params[i]);
//         localValues.push(getValue(node.params[i], params))
//     }
//     runner = new binaryen.ExpressionRunner(wasmModule);
//     for (let [key, value] of globalsMap) {
//         runner.setGlobalValue(key, value);
//     }
//     for (let i = 0; i < node.params.length; i++){
//         runner.setLocalValue(i, localValues[i]);
//     }
//
//     return generateLiteralNode(binaryen.getExpressionInfo(runner.runAndDispose(fncMap.get(node.identifier.value))));
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
//     return generateLiteralNode(binaryen.getExpressionInfo(runner.runAndDispose(wasmModule.global.get(node.value, binaryen.f32))));
// }
//
// function getIdentifierValue(node, params){
//     // console.log("g identifier");
//     if (params && params.has(node.value)) {
//         return wasmModule.local.get(params.get(node.value), binaryen.f32);
//     }
//     return wasmModule.global.get(node.value, binaryen.f32);
// }
//
//
// function generateMultiOpWasm(node, params) {
//     // console.log("g multiOp");
//
//
//
//     switch (node.operator) {
//         case '+':
//             if (node.values.length === 1) return generate(node.values[0], params);
//             let resultAdd = wasmModule.f32.add(generate(node.values[0], params), generate(node.values[1], params));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultAdd = wasmModule.f32.add(resultAdd, generate(node.values[i], params));
//             }
//             // console.log("add")
//             // console.log(wasmModule.emitText());
//             return resultAdd;
//         case '*':
//             return wasmModule.f32.mul(node.values[0].value, node.values[1].value);
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
// function generateDefineFuncNode(node, params) {
//     console.log("g defineFunc");
//     let expressions = [];
//     // let fnParams = params ? params : [];
//     let fnParams = node.params;
//
//     const paramsMap = new Map();
//     let type = []
//     for (let i = 0; i < fnParams.length; i++){
//         paramsMap.set(fnParams[i].value, i);
//         type.push(binaryen.f32);
//     }
//
//
//     let paramsType = binaryen.createType(type);
//
//     for (let i = 0; i < node.body.length; i++){
//         expressions.push(generate(node.body[i], paramsMap));
//     }
//
//
//     let block = wasmModule.block(null, expressions, binaryen.auto);
//     fncMap.set(node.identifier.value, block);
//     wasmModule.addFunction(node.identifier.value, paramsType, binaryen.getExpressionType(block), [], block);
//
//     // binaryen.Function.setLocalName(func, 0, "a");
//     // binaryen.Function.setLocalName(func, 1, "b");
//     // binaryen.Function.setLocalName(func, 2, "ret");
// }
//
// function generateCallFuncNode(node, params){
//     // console.log("g callFunc");
//     let operands = [];
//     for (let i = 0; i < node.params.length; i++){
//         operands.push(generate(node.params[i], params));
//     }
//     return wasmModule.call(node.identifier.value, operands, binaryen.f32);
// }
//
//
//
//
//




// import antlr4 from './antlr4/index.web.js';
// import SchemeLikeLLexer from './SchemeLikeLLexer.js';
// import SchemeLikeLParser from './SchemeLikeLParser.js';
// import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
// import binaryen from './binaryen/index.js'
//
//
//
// class ASTNode {
//     constructor(type) {
//         this.type = type;
//     }
// }
//
// class MultiOpNode extends ASTNode {
//     constructor(type, values) {
//         super(type);
//         this.values = values;
//     }
// }
//
// class IntNode extends ASTNode {
//     constructor(value) {
//         super('INT');
//         this.value = value;
//     }
// }
//
// class FloatNode extends ASTNode {
//     constructor(value) {
//         super('FLOAT');
//         this.value = value;
//     }
// }
//
// class VariableNode extends ASTNode {
//     constructor(name, value) {
//         super('VARIABLE');
//         this.name = name;
//         this.value = value;
//     }
// }
//
// class MyVisitor extends SchemeLikeLVisitor {
//     visitStart(ctx) {
//         for (let i = 0; i < ctx.children.length - 1; i++){
//             switch (ctx.children[i].constructor) {
//                 case SchemeLikeLParser.ExprContext:
//                     this.visit(ctx.children[i].expr());
//                     break;
//                 case SchemeLikeLParser.DeclarationContext:
//                     this.visitDeclaration(ctx.children[i]);
//                     break;
//                 default:
//                     // if (ctx.children[i].symbol.type !== SchemeLikeLLexer.EOF)
//                     throw new Error('Unsupported command type');
//             }
//         }
//         return this.visit(ctx.expr());
//     }
//
//     visitExpr(ctx, hasFloatOperand = false) {
//         // console.log(ctx.constructor.name === SchemeLikeLParser.ExprContext.name)
//
//
//
//         let operator = "";
//         let values = [];
//         hasFloatOperand = hasFloatOperand === true? true : this.hasFloatOperand(ctx);
//         ctx.children.forEach(child => {
//             if (child.symbol === undefined) {
//                 values.push(this.visitExpr(child, hasFloatOperand));
//             }
//             else if (child.symbol.type === SchemeLikeLLexer.INT || child.symbol.type === SchemeLikeLLexer.FLOAT) {
//                 if (hasFloatOperand) values.push(new FloatNode(child.getText()));
//                 else values.push(new IntNode(child.getText()));
//             }
//             else if (child.symbol.type === SchemeLikeLLexer.OPERATOR) operator = child.getText();
//         })
//         if (values.length === 0 && (operator === "/" || operator === "-")) {
//             throw new Error('Too few args for operator: ' + operator);
//         }
//         operator = hasFloatOperand ? operator + 'f' : operator;
//         return new MultiOpNode(operator, values);
//     }
//
//
//     hasFloatOperand(ctx) {
//         let hasFloat = false;
//         ctx.children.forEach(child => {
//
//             if (child.symbol === undefined) {
//                 if(this.hasFloatOperand(child))  hasFloat = true;
//             }
//             else if (child.symbol.type === SchemeLikeLLexer.FLOAT) hasFloat = true;
//         });
//         return hasFloat;
//     }
//
//     isNumber(ctx) {
//         if (ctx.symbol !== undefined)
//             return ctx.symbol.type === SchemeLikeLLexer.FLOAT || ctx.symbol.type === SchemeLikeLLexer.INT
//         return false
//     }
//
//     visitDeclaration(ctx) {
//         let identifier = ctx.children[3];
//         let value = '';
//         if (ctx.children[5].symbol === undefined)
//             value = this.visitExpr(ctx.children[5]);
//         else if (ctx.children[5].symbol.type === SchemeLikeLLexer.FLOAT)
//             value = new FloatNode(ctx.children[5].getText());
//         else if (ctx.children[5].symbol.type === SchemeLikeLLexer.INT)
//             value = new IntNode(ctx.children[5].getText());
//         return new VariableNode(identifier, value);
//     }
//
// }
//
//
//
// let wasmModule = new binaryen.Module();
// export function compileToWasm(){
//     wasmModule = new binaryen.Module();
//     const input = document.getElementById('userCode').value;
//     const chars = new antlr4.InputStream(input);
//     const lexer = new SchemeLikeLLexer(chars);
//     const tokens = new antlr4.CommonTokenStream(lexer);
//     const parser = new SchemeLikeLParser(tokens);
//     parser.buildParseTrees = true;
//     const tree = parser.start();
//
//     // console.log("strom")
//     // console.log(tree.toStringTree())
//     const visitor = new MyVisitor();
//
//     const ast = visitor.visit(tree);
//     console.log("ast");
//     console.log(ast)
//
//
//     console.log(wasmModule)
//     const wasmExpression = generateWasm(ast);
//     // const mainExpression = wasmModule.block('', [wasmModule.return(wasmModule.i32.const(5)), wasmExpression]);
//     // wasmModule.addFunction('main', binaryen.i32, [], [], wasmModule.block('', [wasmModule.return(result)]));
//     wasmModule.addFunction('main', [], binaryen.f32, [], wasmExpression);
//     wasmModule.addFunctionExport('main', 'main');
//
//     const wasmText = wasmModule.emitText();
//
//     console.log(wasmText);
//     return wasmModule.emitBinary();
// }
//
//
// function generateWasm(node) {
//     switch (node.constructor) {
//         case MultiOpNode:
//             return generateMultiOpWasm(node);
//         case IntNode:
//             return generateIntNode(node);
//         case FloatNode:
//             return generateFloatNode(node);
//         case VariableNode:
//             return generateVariable(node);
//         default:
//             throw new Error('Unsupported node type');
//     }
// }
//
// function generateFloatNode(node){
//     return wasmModule.f32.const(node.value);
// }
//
// function generateIntNode(node){
//     return wasmModule.i32.const(node.value);
// }
//
// function generateMultiOpWasm(node) {
//     switch (node.type) {
//         case '+':
//             if (node.values.length === 0) return wasmModule.i32.const(0);
//             if (node.values.length === 1) return generateWasm(node.values[0]);
//             let resultAdd = wasmModule.i32.add(generateWasm(node.values[0]), generateWasm(node.values[1]));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultAdd = wasmModule.i32.add(resultAdd, generateWasm(node.values[i]));
//             }
//             return resultAdd;
//         case '*':
//             return wasmModule.i32.mul(node.values[0].value, node.values[1].value);
//         case '+f':
//             if (node.values.length === 0) return wasmModule.f32.const(0);
//             if (node.values.length === 1) return generateWasm(node.values[0]);
//
//
//
//             let resultAddFloat = wasmModule.f32.add(generateWasm(node.values[0]), generateWasm(node.values[1]));
//             for (let i = 2; i < node.values.length; i++) {
//                 resultAddFloat = wasmModule.f32.add(resultAddFloat, generateWasm(node.values[i]));
//             }
//             return resultAddFloat;
//         default:
//             throw new Error('Unsupported operator');
//     }
// }
//
// function generateVariable(node) {
//     console.log(wasmModule)
//     // return wasmModule.addGlobal(node.name, wasmModule.type)
// }
//
//


import antlr4 from './antlr4/index.web.js';
import SchemeLikeLLexer from './SchemeLikeLLexer.js';
import SchemeLikeLParser from './SchemeLikeLParser.js';
import SchemeLikeLVisitor from "./SchemeLikeLVisitor.js";
import binaryen from './binaryen/index.js'
import * as AST from './ast.js';
import TerminalNodeImpl from "./antlr4/tree/TerminalNodeImpl.js";




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
                case SchemeLikeLParser.LoopExprContext:
                case SchemeLikeLParser.BeginExprContext:
                case SchemeLikeLParser.VectorExprContext:
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
        return new AST.LiteralNode(ctx.children[0].symbol.text);
    }

    visitIdentifier(ctx) {
        return new AST.IdentifierNode(ctx.children[0].symbol.text);
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

    visitBeginExpr(ctx) {
        let expressions = [];
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i].constructor !== TerminalNodeImpl) {
                expressions.push(this.visit(ctx.children[i]));
            }
        }
        return new BeginNode(expressions);
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

    visitLoopExpr(ctx) {
        let identifier;
        let vars = [];
        let body;

        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.IdentifierContext ) {
                identifier = this.visit(child);
            } else if (child.constructor === SchemeLikeLParser.VarPairExprContext) {
                vars.push(this.visit(child));
            } else if (child.constructor === SchemeLikeLParser.FncBodyExprContext) {
                body = this.visit(child);
            }
        }
        return new AST.LoopNode(identifier, vars, body);
    }

    visitDefineFnc(ctx) {
        let identifier;
        let body = [];
        let params = [];
        let vars = this.traverse(ctx, []);
        let lastReturnExprIndex = 0;
        
        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
                lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
            }
        }
        
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
            // } else if (child.constructor === SchemeLikeLParser.CallFncContext ||
            //         child.constructor === SchemeLikeLParser.ExprContext) {
            //     if (lastReturnExprIndex === i) body.push(this.visit(child));
            // } else if (child.constructor !== TerminalNodeImpl) {
            //     body.push(this.visit(child));
            // }

        }

        return new AST.DefineFuncNode(identifier, params, vars, body);
    }

    traverse(ctx, vars) {
        if (ctx.children !== undefined) {
            for (let i = 0; i < ctx.children.length; i++) {
                if (ctx.children[i].constructor === SchemeLikeLParser.LoopExprContext) {
                    let child = this.visit(ctx.children[i])
                    for (let j = 0; j < child.vars.length; j++) {
                        vars.push(child.vars[j].identifier.value);
                    }
                } else {
                    this.traverse(ctx.children[i], vars);
                }
            }
        }
        return vars;
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
        let lastReturnExprIndex = 0;

        for (let i = 0; i < ctx.children.length; i++){
            let child = ctx.children[i];
            if (child.constructor === SchemeLikeLParser.CallFncContext || child.constructor === SchemeLikeLParser.ExprContext) {
                lastReturnExprIndex = i;  //TODO? potom nemozem volat funkcie co nieco nastavia SET! a zaroven vratia (1)
            }
        }
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

    visitSetExpr(ctx) {
        for (let i = 0; i < ctx.children.length; i++) {
            let child = ctx.children[i];
            if (child.constructor !== TerminalNodeImpl) {
                return new AST.SetNode(this.visit(child));
            }
        }
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
}

let wasmModule;
let runner;
let globalsMap = new Map(); //name, expression
let fncMap = new Map();  //name, expression
let  ctx;
let tableName = "mTable";
let tableSize = 0;
let fncList;
let loopList;
let vecPointerMap;
let table;
let memory;
let mem_f32;
let mem_i32;
let memoryName = "mem"
let memoryBase;
let freeMemIndex;

export function runWasm(wasmBinary) {
    const wasmBytes = new Uint8Array(wasmBinary);

    const importObject = {
        env: {
            memory: memory,
            throwError: throwError,
        }};



    WebAssembly.instantiate(wasmBytes, importObject)
        .then(obj => {
            document.getElementById("output").innerHTML = obj.instance.exports.main();
            // console.log(obj.instance.exports.main());
            console.log(mem_f32);
        })
}

export function compileToWasm(){
    wasmModule = new binaryen.Module();
    wasmModule.setFeatures(binaryen.Features.Multivalue)
    globalsMap = new Map();
    vecPointerMap = new Map();
    ctx = new Map();
    fncList = [];
    tableSize = 0;
    loopList = [];
    table = wasmModule.addTable(tableName, 10, 50, binaryen.funcref)
    wasmModule.addMemoryImport(memoryName, "env", "memory")
    memoryBase = wasmModule.i32.const(0);
    freeMemIndex = 0;

    memory = new WebAssembly.Memory({initial:100, maximum: 65536});
    mem_f32 = new Float32Array(memory.buffer);
    mem_i32 = new Int32Array(memory.buffer);


    const input = document.getElementById('userCode').value;
    const chars = new antlr4.InputStream(input);
    const lexer = new SchemeLikeLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new SchemeLikeLParser(tokens);
    const tree = parser.start();

    const visitor = new MyVisitor();
    const ast = visitor.visit(tree);

    generateWasm(ast);

    const wasmText = wasmModule.emitText();
    console.log(wasmText);
    // wasmModule.optimize();
    // if (!wasmModule.validate()) {
    //     console.error("Module validation error:", wasmModule.validate());
    // }

    // const wasmTextOptimized = wasmModule.emitText();
    // console.log("optimized wat")
    // console.log(wasmTextOptimized)
    let binary = wasmModule.emitBinary()
    wasmModule.dispose();
    return binary;
}


function generateWasm(ast) {
    addInitFunctions()
    let wasmExpressions = [];
    for (let i = 0; i < ast.instructions.length; i++){
        let ret = generateExpr(ast.instructions[i])
        if (ret !== undefined) {
            wasmExpressions.push(ret);
        }
    }
    // wasmExpressions = [];
    // wasmExpressions.push(wasmModule.f32.store(0, 4, memoryBase , wasmModule.f32.const(8)))
    // wasmExpressions.push(wasmModule.f32.store(4, 4, wasmModule.i32.const(4), wasmModule.i32.const(10)))
    // wasmExpressions.push(wasmModule.i32.store(4, 0, wasmModule.i32.const(0), wasmModule.i32.const(15)))
    // wasmExpressions.push(wasmModule.f32.store(wasmModule.f32.const(0), wasmModule.f32.const(20), wasmModule.f32.const(11)))
    // wasmExpressions.push( wasmModule.f32.store(wasmModule.f32.const(4), wasmModule.f32.const(20), wasmModule.f32.const(12)))

    wasmModule.emitText()
    let mainBlock = wasmModule.block(null, wasmExpressions, binaryen.auto);



    wasmModule.addFunction('main', [], binaryen.getExpressionType(mainBlock), [], mainBlock);
    wasmModule.addFunctionExport('main', 'main');

}

function throwError(value) {
    if (value === 0) console.log("Index out of bounds");
}

function addInitFunctions() {
    wasmModule.addFunctionImport("error", "env", "throwError", [binaryen.f32], binaryen.none);



    wasmModule.addFunction("vector-ref", binaryen.createType([binaryen.f32, binaryen.f32]), binaryen.f32, [
        binaryen.f32 //vectorSize
        ],
        wasmModule.block("", [

            // wasmModule.f32.convert_s.i32(
            //     wasmModule.i32.and(
            //  wasmModule.i32.load(0, 4,
            //      wasmModule.i32.const(0)),
            //     wasmModule.i32.const(1))),



              wasmModule.local.set(2,
                wasmModule.f32.load(0, 4,
                    wasmModule.i32.trunc_s.f32(
                    wasmModule.f32.mul(
                        wasmModule.local.get(0, binaryen.f32), wasmModule.f32.const(4)))
                )),

              wasmModule.if(wasmModule.f32.le(wasmModule.local.get(2), wasmModule.local.get(1)),
                  wasmModule.block("", [wasmModule.call("error", [wasmModule.f32.const(0)], binaryen.none), wasmModule.f32.const(-1)], binaryen.auto),
                     wasmModule.f32.load(0, 4,
                         wasmModule.i32.trunc_s.f32(
                             wasmModule.f32.mul(
                        wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
                             wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.local.get(1))),
                                 wasmModule.f32.const(4)))))
        ], binaryen.auto));

    wasmModule.addFunction("vector-set!", binaryen.createType([binaryen.f32, binaryen.f32, binaryen.f32]), binaryen.none, [
            binaryen.f32 //vectorSize
        ],
        wasmModule.block("", [
            wasmModule.local.set(3,
                wasmModule.f32.load(0, 4,
                    wasmModule.i32.trunc_s.f32(
                        wasmModule.f32.mul(
                            wasmModule.local.get(0, binaryen.f32), wasmModule.f32.const(4)))
                )),

            wasmModule.if(wasmModule.f32.le(wasmModule.local.get(3), wasmModule.local.get(1)),
                wasmModule.call("error", [wasmModule.f32.const(0)], binaryen.none),
                wasmModule.f32.store(0, 4,
                    wasmModule.i32.trunc_s.f32(
                        wasmModule.f32.mul(
                            wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
                                wasmModule.f32.add(wasmModule.f32.const(1), wasmModule.local.get(1))),
                            wasmModule.f32.const(4))), wasmModule.local.get(2)))
        ], binaryen.none));
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
        case AST.LoopNode:
            return generateLoopExpr(node, ctxVars);
        case AST.BeginNode:
            return generateBeginExpr(node, ctxVars);
        // case AST.VectorNode:
        //     return generateVectorExpr(node, ctxVars);
        default:
            throw new Error('Unsupported node type');
    }
}


function generateLiteralExpr(node) {
    return wasmModule.f32.const(node.value);
}

function generateIdentifierValue(node, ctxVars){
    if (vecPointerMap.has(node.value)) {
        return wasmModule.f32.const(vecPointerMap.get(node.value));
    }
    if (ctxVars && ctxVars.includes(node.value)) {
        return wasmModule.local.get(ctxVars.indexOf(node.value), binaryen.f32);
    }
    return wasmModule.global.get(node.value, binaryen.f32);
}

function generateDefineFuncExpr(node, ctxVars) {
    // ctx = new Map();
    // ctx.set("functionNeededParams", ctxVars)
    fncList.push(node.identifier.value);
    let expressions = [];

    if (ctxVars === undefined) {
        ctxVars = [];
    }

    for (let i = 0; i < node.params.length; i++){
        let param = node.params[i].value;
        if (ctxVars.includes(param)) {
            throw new CustomError("The identifier '" + param +"' is already defined in the scope"); //TODO? we should be able to use an identifier with the same name in the inner func
            // ctxVars.splice(i, 1);
        }
        ctxVars.push(param);
    }

    let type = [];
    for (let i = 0; i < ctxVars.length; i++){
        type.push(binaryen.f32);
    }

    let paramsType = binaryen.createType(type);




    // for (let i = 0; i < node.body.length; i++){
    //     // if (node.body[i].constructor === AST.DefineFuncNode) generateExpr(node.body[i], ctxVars);
    //     else expressions.push(generateExpr(node.body[i], ctxVars));
    // }

    let varsType = [];

    if (node.body.constructor === AST.LocalFncBodyNode) {
        for (let i = 0; i < node.body.vars.length; i++) {
            varsType.push(binaryen.f32);
        }
    }

    for (let i = 0; i < node.localVars.length; i++) {
        varsType.push(binaryen.f32);
    }




    let body = generateExpr(node.body, ctxVars);

    // let block = wasmModule.block(null, body, binaryen.auto);

    fncMap.set(node.identifier.value, body);
    wasmModule.addFunction(node.identifier.value, paramsType, binaryen.getExpressionType(body), varsType, body);

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
    return wasmModule.global.set(node.pair.identifier.value, value);
}

function generateLoopExpr(node, ctxVars) {
    let len = ctxVars.length;
    loopList.push(node.identifier.value);
    let expressions = [];

    for (let i = 0; i < node.vars.length; i++) {
        ctxVars.push(node.vars[i].identifier.value);
    }

    for (let i = 0; i < node.vars.length; i++) {
        expressions.push(wasmModule.local.set(i + len, generateExpr(node.vars[i].value, ctxVars)))
    }

    expressions.push(wasmModule.loop(node.identifier.value, generateExpr(node.fncBody, ctxVars)))
    return wasmModule.block("", expressions, binaryen.auto);


    // let operands = [];
    // let paramsType = [];
    // for (let j = 0; j < ctxVars.length; j++) {
    //     operands.push(wasmModule.local.get(j, binaryen.f32));
    //     paramsType.push(binaryen.f32);
    // }
    // for (let j = 0; j < node.vars.length; j++) {
    //     operands.push(generateExpr(node.vars[j].value, ctxVars));
    //     paramsType.push(binaryen.f32);
    //     ctxVars.push(node.vars[j].identifier.value)
    // }
    // let body = generateExpr(node.fncBody, ctxVars);
    // let block = wasmModule.block("", [body], binaryen.auto)
    //
    // wasmModule.addFunction(node.identifier.value, binaryen.createType(paramsType), binaryen.getExpressionType(block), [],block )
    // return wasmModule.call(node.identifier.value, operands, binaryen.f32);

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
        operands.push(generateExpr(node.params[i], ctxVars));
        type.push(binaryen.f32);
    }
    if (loopList.includes(node.identifier.value)) {
        let expressions = [];
        let diff = ctxVars.length - node.params.length;
        for (let i = 0; i < node.params.length; i++) {
            expressions.push(wasmModule.local.set(i + diff, generateExpr(node.params[i], ctxVars)));
        }
        expressions.push(wasmModule.br(node.identifier.value));
        return wasmModule.block("", expressions, binaryen.auto);
    }
    let paramsType = binaryen.createType(type);
    if (wasmModule.getFunction(node.identifier.value) === 0 && !fncList.includes(node.identifier.value)) {
        let localVariable = wasmModule.local.get(ctxVars.indexOf(node.identifier.value), wasmModule.f32);
        let truncatedVariable = wasmModule.i32.trunc_s.f32(localVariable);
        return wasmModule.call_indirect(tableName, truncatedVariable, operands, paramsType, binaryen.f32) //TODO? result type proste neviem zistit dopredu
    }


    return wasmModule.call(node.identifier.value, operands, binaryen.f32);
}

function generateCallLambdaFuncExpr(node, ctxVars) {
    // indirect()

    // wasmModule.addTable("tab", 10, 10, binaryen.funcref)
    node.identifier.value = "_" + tableSize;
    generateDefineFuncExpr(node, ctxVars);
    // wasmModule.addFunction(node.identifier.value, )
    wasmModule.addActiveElementSegment(tableName, "e"+tableSize, [node.identifier.value], wasmModule.i32.const(tableSize));
    // console.log(wasmModule.addActiveElementSegment("ahoj", "0", ["func0"], wasmModule.i32.const(0)))
    // console.log(wasmModule.addActiveElementSegment("ahoj", "1", ["func1"], wasmModule.i32.const(1)))
    // console.log(wasmModule.addPassiveElementSegment("1", ["ahoj"]))

    tableSize++;





    // let table = wasmModule.addTable("ahoj", 10, 10, binaryen.funcref)

    // console.log(binaryen.getTableInfo(table))
    // let func0 = wasmModule.addFunction("func0", [], binaryen.i32, [], wasmModule.block("", [wasmModule.i32.const(10)], binaryen.auto) );
    // let func1 = wasmModule.addFunction("func1", [], [binaryen.i32], [], wasmModule.i32.const(80) );




    // console.log(binaryen.getExpressionInfo(wasmModule.table.set("ahoj", 1, func0)));
    // console.log(binaryen.getExpressionInfo(wasmModule.table.size("ahoj")));
    // console.log(wasmModule.addActiveElementSegment("ahoj", "0", ["func0"], wasmModule.i32.const(0)))
    // console.log(wasmModule.addActiveElementSegment("ahoj", "1", ["func1"], wasmModule.i32.const(1)))
    // console.log(wasmModule.addPassiveElementSegment("2", ["func0", "func1"]))





    //
    // console.log("get")
    // console.log(binaryen.getExpressionInfo(wasmModule.table.get("ahoj", wasmModule.i32.const(1))));
    //
    // console.log("get function")
    // console.log()

    // console.log(binaryen.getTableInfo(wasmModule.getTableByIndex(0)));
    // console.log(binaryen.getExpressionInfo(wasmModule.call_indirect(wasmModule.i32.const(1), [], [], binaryen.i32)))
    // binaryen.addFunctionType

    return wasmModule.f32.const(tableSize - 1);
    // call_indirect(table: string, target: ExpressionRef, operands: ExpressionRef[], params: Type, results: Type): ExpressionRef;
    // return wasmModule.call_indirect("ahoj", wasmModule.i32.const(0), [], [], binaryen.i32)

}











function getExpressionValue(expression, params){
    runner = new binaryen.ExpressionRunner(wasmModule);
    for (let [key, value] of globalsMap) {
        runner.setGlobalValue(key, value);
    }
    // runner.setGlobalValue("sum3", );
//     TODO define var using fnc call
//     runner.setLocalValue(0, wasmModule.f32.const(10));
//         runner.setLocalValue(1, wasmModule.f32.const(10));
//         runner.setLocalValue(2, wasmModule.f32.const(10));
// console.log(runner.runAndDispose(wasmModule.f32.add(wasmModule.local.get(0, binaryen.f32),
//     wasmModule.local.get(1, binaryen.f32))))
    // // console.log(runner.runAndDispose(wasmModule.f32.add(wasmModule.global.get('x', binaryen.f32), wasmModule.global.get('y', binaryen.f32))));
    return binaryen.getExpressionInfo(runner.runAndDispose(expression)).value;
}

function generateDefineGlobalVarExpr(node, params){


    let value;
    if (node.value.constructor === AST.VectorNode) {
        const rawValue = getAndSetVectorValue(node.value, params);
        vecPointerMap.set(node.identifier.value, rawValue);
        value = wasmModule.f32.const(rawValue);
    } else {
        value = getValueExpr(node.value, params);
        globalsMap.set(node.identifier.value, value);
    }

    if (wasmModule.getGlobal(node.identifier.value)) {
        return wasmModule.global.set(node.identifier.value, value);
    }

    wasmModule.addGlobal(node.identifier.value, binaryen.f32 , true, value);
}

function getValue(node, params) {
    let value;
    if (node.constructor === AST.IdentifierNode) value = getVarValue(node, params);
    else if (node.constructor === AST.CallFuncNode) value = getFncValue(node, params);
    else if (node.constructor === AST.VectorNode) value = getAndSetVectorValue(node, params);
    else value = getExpressionValue(generateExpr(node, params), params);
    return value;
}


function getValueExpr(node, params) {
    return wasmModule.f32.const(getValue(node, params));
}

function getFncValue(node, params) {

    let localValues = []
    for (let i = 0; i < node.params.length; i++){
        // console.log(node.params[i]);
        localValues.push(getValueExpr(node.params[i], params))
    }
    runner = new binaryen.ExpressionRunner(wasmModule);
    for (let [key, value] of globalsMap) {
        runner.setGlobalValue(key, value);
    }
    for (let i = 0; i < node.params.length; i++){
        runner.setLocalValue(i, localValues[i]);
    }

    return binaryen.getExpressionInfo(runner.runAndDispose(fncMap.get(node.identifier.value))).value;
}

function getVarValue(node, params){
    // console.log("g identifier");
    if (params && params.has(node.value)) {
        return wasmModule.local.get(params.get(node.value), binaryen.f32);
    }
    runner = new binaryen.ExpressionRunner(wasmModule);
    for (let [key, value] of globalsMap) {
        runner.setGlobalValue(key, value);
    }
    return binaryen.getExpressionInfo(runner.runAndDispose(wasmModule.global.get(node.value, binaryen.f32))).value;
}




function generateMultiOpExpr(node, params) {

    switch (node.operator.value) {
        case '+':
            if (node.values.length === 1) return generateExpr(node.values[0], params);
            let resultAdd = wasmModule.f32.add(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
            for (let i = 2; i < node.values.length; i++) {
                resultAdd = wasmModule.f32.add(resultAdd, generateExpr(node.values[i], params));
            }
            // console.log("add")
            // console.log(wasmModule.emitText());
            return resultAdd;
        case '*':
            if (node.values.length === 1) return generateExpr(node.values[0], params);
            let resultMul = wasmModule.f32.mul(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
            for (let i = 2; i < node.values.length; i++) {
                resultMul = wasmModule.f32.mul(resultMul, generateExpr(node.values[i], params));
            }
            // console.log("add")
            // console.log(wasmModule.emitText());
            return resultMul;
        case '-':
            if (node.values.length === 1) return generateExpr(node.values[0], params);
            let resultSub = wasmModule.f32.sub(generateExpr(node.values[0], params), generateExpr(node.values[1], params));
            for (let i = 2; i < node.values.length; i++) {
                resultSub = wasmModule.f32.sub(resultSub, generateExpr(node.values[i], params));
            }
            return resultSub;


        default:
            throw new Error('Unsupported operator');
    }
}

function generateBiOpExpr(node, ctxVars) {
    switch (node.operator.value) {
        case '=':
            return wasmModule.f32.eq(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
        case '<=':
            return wasmModule.f32.le(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
        case '<':
            return wasmModule.f32.lt(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
        case '>=':
            return wasmModule.f32.ge(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
        case '>':
            return wasmModule.f32.gt(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
        case '!=':
            return wasmModule.f32.ne(generateExpr(node.left, ctxVars), generateExpr(node.right, ctxVars));
        case 'and':
            return wasmModule.i32.and(wasmModule.i32.trunc_s.f32(generateExpr(node.right, ctxVars)),
                wasmModule.i32.trunc_s.f32(generateExpr(node.left, ctxVars)));
        case 'or':
            return wasmModule.i32.or(wasmModule.i32.trunc_s.f32(generateExpr(node.right, ctxVars)),
                wasmModule.i32.trunc_s.f32(generateExpr(node.left, ctxVars)));
        default:
            throw new Error('Unsupported operator');
    }
}





function generateIfExpr(node, ctxVars) {
    let condition;
    if (node.condition.constructor === AST.BiOpNode) {
        condition = generateExpr(node.condition, ctxVars)
    }
    return wasmModule.if(condition, generateExpr(node.ifTrue, ctxVars), generateExpr(node.ifFalse, ctxVars));
}

function getAndSetVectorValue(node, ctxVars) {
    let vecPointer = freeMemIndex;

    let values = [];
    for (let i = 0; i < node.values.length; i++) {

        values.push(getValue(node.values[i], ctxVars));
    }

    mem_f32[freeMemIndex] = values.length;
    freeMemIndex++

    for (let i = 0; i < node.values.length; i++) {
        mem_f32[freeMemIndex] = values[i];
        freeMemIndex++;
    }


    // let vecPointer = freeMemIndex;
    //
    // let values = [];
    // for (let i = 0; i < node.values.length; i++) {
    //
    //     values.push(getValue(node.values[i], ctxVars));
    // }
    //
    // function floatToBinary(number) {
    //     let buffer = new ArrayBuffer(4);
    //     let floatView = new Float32Array(buffer);
    //     let intView = new Uint32Array(buffer);
    //     floatView[0] = number;
    //
    //     let sign = (intView[0] >>> 31) & 1;
    //     let exponent = (intView[0] >>> 23) & 0xFF;
    //     let mantissa = intView[0] & 0x7FFFFF;
    //
    //     return `${sign}${exponent.toString(2).padStart(8, '0')}${mantissa.toString(2).padStart(23, '0')}`;
    // }
    //
    //
    //
    //
    // mem_f32[freeMemIndex] = 5
    // mem_f32[freeMemIndex+1] = 5
    // let mem_u8 = new Uint8Array(mem_f32.buffer);
    // mem_u8[0] |= 0x01;
    // let view = new DataView(mem_f32.buffer);
    //
    //
    // console.log("index: " + freeMemIndex)
    // console.log(floatToBinary(mem_f32[freeMemIndex]))
    // console.log("index: " + freeMemIndex+1)
    // console.log(floatToBinary(mem_f32[freeMemIndex+1]))
    // console.log(floatToBinary(mem_i32[freeMemIndex]))
    // // console.log(memory.buffer[0])
    // // mem_f32[freeMemIndex] = mem_f32[freeMemIndex] | 0x00000001;
    // // console.log(memory.buffer[0])
    // freeMemIndex++
    //
    // for (let i = 0; i < node.values.length; i++) {
    //     mem_f32[freeMemIndex] = 8.0;
    //     mem_f32[freeMemIndex] = mem_f32[freeMemIndex] | 0x00000001
    //     freeMemIndex++;
    // }
    // //
    // // console.log(mem_f32[freeMemIndex-1])
    // // console.log(Number(mem_f32[freeMemIndex-1]).toString(2))
    // //
    // // console.log(((mem_f32[freeMemIndex-1] | 0x00000001) >>> 0).toString(2))
    // // console.log(mem_i32[freeMemIndex-1])
    // // console.log(((mem_i32[freeMemIndex-1] | 0x00000001) >>> 0).toString(2))

    return vecPointer;
}



