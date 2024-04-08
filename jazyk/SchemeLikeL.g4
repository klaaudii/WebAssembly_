grammar SchemeLikeL;

start: (SPACE? (expr | defineGlobalVar | defineFnc | literal | identifier | callFnc | setExpr | listExpr | vectorExpr | displayExpr | uniExpr | exportExpr | ifExpr | beginExpr))+ EOF;

expr: SPACE? PSTART SPACE? operatorExpr (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr )+ SPACE? PEND SPACE?;
logExpr: SPACE? PSTART SPACE? logOperatorExpr (logUniExpr | logBiExpr)+ SPACE? PEND SPACE?;

defineGlobalVar: SPACE? PSTART SPACE? 'define' SPACE identifier
    ((SPACE identifier) | (SPACE literal) | expr | callFnc | vectorExpr | listExpr | uniExpr | biExpr ) SPACE? PEND SPACE?;

defineFnc: SPACE? PSTART SPACE? 'define' SPACE?
        ((PSTART SPACE? identifier (SPACE identifier)* SPACE? PEND (fncBodyExpr | localFncBodyExpr) PEND) |
        (identifier SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
        SPACE? fncBodyExpr PEND PEND));

fncBodyExpr: SPACE? (expr | biExpr | uniExpr | (SPACE literal) | (SPACE identifier) | callFnc | ifExpr | setExpr
            | listExpr | displayExpr | vectorExpr | beginExpr)* SPACE?;

localFncBodyExpr: SPACE? PSTART SPACE? 'let' SPACE? PSTART SPACE? ((PSTART  varPairExpr  PEND) SPACE?)* PEND
               SPACE? fncBodyExpr SPACE? PEND SPACE?;

varPairExpr: SPACE? identifier (expr | (SPACE literal) | (SPACE identifier) | callFnc | vectorExpr | listExpr | uniExpr | biExpr) SPACE?;

beginExpr: SPACE? PSTART SPACE? 'begin' (expr | (SPACE literal) | (SPACE identifier) | callFnc | setExpr | displayExpr
           | ifExpr | vectorExpr | listExpr | uniExpr | biExpr)*  SPACE? PEND SPACE?;

biExpr: SPACE? PSTART SPACE? biOperatorExpr (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr )
        (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr ) SPACE? PEND SPACE?;

logBiExpr: SPACE? PSTART SPACE? logBiOperatorExpr (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr )
         (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr ) SPACE? PEND SPACE?;

uniExpr: SPACE? PSTART SPACE? uniOperatorExpr (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr ) SPACE? PEND SPACE?;

logUniExpr: SPACE? PSTART SPACE? logUniOperatorExpr (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr ) SPACE? PEND SPACE?;


callFnc: SPACE? PSTART SPACE? identifier (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr | callLambdaFnc)* SPACE? PEND SPACE?;


callLambdaFnc: SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
                       SPACE? ((expr | callFnc) SPACE?)+ PEND SPACE?;

ifExpr: SPACE? PSTART SPACE? 'if' (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr | logExpr | logBiExpr | logUniExpr )
        SPACE? (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr |setExpr | displayExpr )
        (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr |setExpr | displayExpr )? SPACE? PEND SPACE?;

operatorExpr: OPERATOR;
logOperatorExpr: LOGOPERATOR;
biOperatorExpr: BIOPERATOR;
logBiOperatorExpr: LOGBIOPERATOR;
uniOperatorExpr: UNIOPERATOR;
logUniOperatorExpr: LOGUNIOPERATOR;

setExpr: SPACE? PSTART SPACE? 'set!' SPACE varPairExpr SPACE? PEND SPACE?;

vectorExpr: SPACE? PSTART SPACE? 'vector' (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr )* SPACE? PEND SPACE? ;

listExpr: SPACE? PSTART SPACE? 'list' (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr )* SPACE? PEND SPACE? ;

displayExpr: SPACE? PSTART SPACE? 'display' (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr | vectorExpr | listExpr ) SPACE? PEND SPACE? ;
exportExpr: SPACE? PSTART SPACE? 'export' SPACE identifier SPACE? PEND SPACE?;


literal: FLOAT | INT | NFLOAT | NINT;
identifier: VARIABLE;

OPERATOR: [-+*/] | '+v';
LOGOPERATOR:  'and' | 'or';
BIOPERATOR: 'quotient' | 'remainder';
LOGBIOPERATOR: '=' | '<=' | '>=' | '<' | '>' | '!=';
UNIOPERATOR: 'floor' | 'round' | 'ceiling' | 'truncate';
LOGUNIOPERATOR: 'null?';
VARIABLE: [a-zA-Z][a-zA-Z-!]*[0-9]*;
PSTART: '(';
PEND: ')';
SPACE: [ ]([ ]|'\n')*;
FLOAT: [0-9]+ '.' [0-9]+;
INT: [0-9]+;
NFLOAT: '-'FLOAT;
NINT: '-'INT;
WS: [ \t\r\n]+ -> skip;