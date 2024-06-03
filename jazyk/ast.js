export class ASTNode {
    constructor() {
        // this.type = type;
    }
}

export class ProgramNode extends ASTNode {
    constructor(instructions) {
        super();
        this.instructions = instructions;
    }
}


export class WhileNode extends ASTNode {
    constructor(condition, body) {
        super();
        this.condition =  condition;
        this.body = body;
    }
}

export class ListNode extends ASTNode {
    constructor(values) {
        super();
        this.values = values;
    }
}

export class ExportNode extends ASTNode {
    constructor(identifier) {
        super();
        this.identifier = identifier;
    }
}



export class DisplayNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value;
    }
}


export class MultiOpNode extends ASTNode {
    constructor(operator, values) {
        super();
        this.operator = operator
        this.values = values;
    }
}

export class LogMultiOpNode extends ASTNode {
    constructor(operator, values) {
        super();
        this.operator = operator
        this.values = values;
    }
}

export class BiOpNode extends ASTNode {
    constructor(operator, left, right) {
        super();
        this.operator = operator
        this.left = left;
        this.right = right;
    }
}

export class LogBiOpNode extends ASTNode {
    constructor(operator, left, right) {
        super();
        this.operator = operator
        this.left = left;
        this.right = right;
    }
}

export class UniOpNode extends ASTNode {
    constructor(operator, operand) {
        super();
        this.operator = operator
        this.operand = operand;
    }
}

export class LogUniOpNode extends ASTNode {
    constructor(operator, operand) {
        super();
        this.operator = operator
        this.operand = operand;
    }
}

export class OperatorNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value
    }
}

export class LogOperatorNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value
    }
}

export class BiOperatorNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value
    }
}

export class LogBiOperatorNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value
    }
}

export class UniOperatorNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value
    }
}

export class LogUniOperatorNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value
    }
}


export class VectorNode extends ASTNode {
    constructor(values) {
        super();
        this.values = values
    }
}

export class LocalFncBodyNode extends ASTNode {
    constructor(fncBody, vars) {
        super();
        this.fncBody = fncBody
        this.vars = vars
    }
}

export class FncBodyNode extends ASTNode {
    constructor(body) {
        super();
        this.body = body;
    }
}

export class VarPairNode extends ASTNode {
    constructor(identifier, value) {
        super();
        this.identifier = identifier;
        this.value = value
    }
}

export class SetNode extends ASTNode {
    constructor(pair) {
        super();
        this.pair = pair;
    }
}


export class LiteralNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value;
    }
}

export class LoopNode extends ASTNode {
    constructor(identifier, vars, body) {
        super();
        this.identifier = identifier;
        this.vars = vars;
        this.fncBody = body;
    }
}

export class DefineVarNode extends ASTNode {
    constructor(identifier, value) {
        super();
        this.identifier = identifier;
        this.value = value;
    }
}

export class IdentifierNode extends ASTNode {
    constructor(value) {
        super();
        this.value = value;
    }
}

export class BeginNode extends ASTNode {
    constructor(expressions) {
        super();
        this.expressions = expressions;
    }
}


export class DefineFuncNode extends ASTNode {
    constructor(identifier, params = [], vars = [], body) {
        super();
        this.identifier = identifier;
        this.params = params;
        this.body = body;
        this.localVars = vars;
    }
}

export class CallFuncNode extends ASTNode {
    constructor(identifier, params = []) {
        super();
        this.identifier = identifier;
        this.params = params;
    }
}

export class CallLambdaFuncNode extends ASTNode {
    constructor(params = [], body = []) {
        super();
        this.identifier = new IdentifierNode("");
        this.params = params;
        this.body = body;
    }
}

export class IfNode extends ASTNode {
    constructor(condition, ifTrue, ifFalse) {
        super();
        this.condition = condition
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }
}