grammar SchemeLikeL;

start: SPACE? (expr | defineGlobalVar | defineFnc | literal | identifier | callFnc | setExpr | listExpr | vectorExpr | displayExpr | uniExpr)+ EOF;

expr: SPACE? PSTART SPACE? operatorExpr (SPACE (expr | literal | identifier | callFnc | uniExpr | biExpr ))+ SPACE? PEND SPACE?;
defineGlobalVar: SPACE? PSTART SPACE? 'define' SPACE identifier (SPACE (expr | literal | identifier | callFnc | vectorExpr | listExpr))+ SPACE? PEND SPACE?;
defineFnc: SPACE? PSTART SPACE? 'define' SPACE
        ((PSTART identifier (SPACE identifier)* SPACE? PEND SPACE? (fncBodyExpr | localFncBodyExpr) PEND) |
        (identifier SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
        SPACE? fncBodyExpr PEND PEND));
biExpr: SPACE? PSTART SPACE? biOperatorExpr SPACE (biExpr | expr | literal | identifier | callFnc | uniExpr) SPACE
        (biExpr | expr | literal | identifier | callFnc) SPACE? PEND SPACE?;
uniExpr: SPACE? PSTART SPACE? uniOperatorExpr SPACE (literal | identifier | expr | callFnc) SPACE? PEND SPACE?;


callFnc: SPACE? PSTART SPACE? identifier (SPACE (expr | identifier | literal  | callFnc | callLambdaFnc | listExpr | vectorExpr))* SPACE? PEND SPACE?;
callLambdaFnc: SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
                       SPACE? ((expr | callFnc) SPACE?)+ PEND SPACE?;
ifExpr: SPACE? PSTART SPACE? 'if' SPACE (expr | biExpr | literal | identifier | callFnc | uniExpr)
        SPACE? ((expr | literal | identifier | callFnc | setExpr | ifExpr | displayExpr ) | beginExpr)
        (SPACE? ((expr | literal | identifier | callFnc | setExpr | ifExpr | displayExpr ) | beginExpr))? SPACE? PEND SPACE?;

beginExpr: SPACE? PSTART SPACE? 'begin' SPACE?  (expr | literal | identifier | callFnc | setExpr | displayExpr | ifExpr)+  SPACE? PEND SPACE?;

operatorExpr: OPERATOR;
biOperatorExpr: BIOPERATOR;
uniOperatorExpr: UNIOPERATOR;
localFncBodyExpr: SPACE? PSTART SPACE? 'let' SPACE? PSTART SPACE? ((PSTART SPACE? varPairExpr SPACE? PEND) SPACE?)* PEND
               SPACE? fncBodyExpr SPACE? PEND SPACE?;

fncBodyExpr: SPACE? ((expr | callFnc | ifExpr | setExpr  | listExpr | displayExpr | vectorExpr) SPACE?)+ SPACE?;
varPairExpr: SPACE? identifier SPACE (expr | literal | identifier | callFnc | vectorExpr | listExpr | uniExpr | biExpr) SPACE?;

setExpr: SPACE? PSTART SPACE? 'set!' SPACE varPairExpr SPACE? PEND SPACE?;

vectorExpr: SPACE? PSTART SPACE? 'vector' (SPACE (literal | identifier | expr))* SPACE? PEND SPACE? ;

listExpr: SPACE? PSTART SPACE? 'list' (SPACE (literal | identifier | vectorExpr | listExpr  | expr))* SPACE? PEND SPACE? ;

displayExpr: SPACE? PSTART SPACE? 'display' SPACE (literal | identifier | vectorExpr | listExpr | callFnc | expr | ifExpr | uniExpr | biExpr ) SPACE? PEND SPACE? ;


literal: FLOAT | INT | NFLOAT | NINT   ;
identifier: VARIABLE;

OPERATOR: [-+*/] | 'and' | 'or';
BIOPERATOR: '=' | '<=' | '>=' | '<' | '>' | '!=' | 'quotient';
UNIOPERATOR: 'null?' | 'floor' | 'round' | 'ceiling' | 'truncate';
VARIABLE: [a-zA-Z][a-zA-Z-!]*[0-9]*;
PSTART: '(';
PEND: ')';
SPACE: [ ]([ ]|'\n')*;
FLOAT: [0-9]+ '.' [0-9]+;
INT: [0-9]+;
NFLOAT: '-'FLOAT;
NINT: '-'INT;
WS: [ \t\r\n]+ -> skip;