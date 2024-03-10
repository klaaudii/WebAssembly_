grammar SchemeLikeL;

start: (expr | defineGlobalVar | defineFnc | literal | identifier | callFnc | setExpr )+ EOF;

expr: PSTART SPACE? operatorExpr (SPACE (expr | literal | identifier | callFnc ))* SPACE? PEND;
defineGlobalVar: PSTART SPACE? 'define' SPACE identifier (SPACE (expr | literal | identifier | callFnc | vectorExpr))* SPACE? PEND;
defineFnc: PSTART SPACE? 'define' SPACE
        ((PSTART identifier (SPACE identifier)* SPACE? PEND SPACE? (fncBodyExpr | localFncBodyExpr) PEND) |
        (identifier SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
        SPACE? fncBodyExpr PEND PEND));

biExpr: PSTART SPACE? biOperatorExpr SPACE (biExpr | expr | literal | identifier | callFnc) SPACE
        (biExpr | expr | literal | identifier | callFnc) SPACE? PEND;


callFnc: SPACE? PSTART SPACE? identifier (SPACE (identifier | literal  | callFnc | expr | callLambdaFnc))* SPACE? PEND SPACE?;
callLambdaFnc: PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
                       SPACE? ((expr | callFnc) SPACE?)+ PEND;
ifExpr: SPACE? PSTART SPACE? 'if' SPACE (expr | biExpr | literal | identifier | callFnc)
        SPACE? ((expr | literal | identifier | callFnc | setExpr) | beginExpr)
        SPACE? ((expr | literal | identifier | callFnc | setExpr) | beginExpr) SPACE? PEND SPACE?;

beginExpr: SPACE? PSTART SPACE? 'begin' SPACE?  (expr | literal | identifier | callFnc | setExpr | loopExpr)+  SPACE? PEND;

operatorExpr: OPERATOR;
biOperatorExpr: BIOPERATOR;
localFncBodyExpr: PSTART SPACE? 'let' SPACE? PSTART SPACE? ((PSTART SPACE? varPairExpr SPACE? PEND) SPACE?)* PEND
               SPACE? fncBodyExpr SPACE? PEND;

fncBodyExpr: ((expr | callFnc | ifExpr | setExpr | loopExpr) SPACE?)+;
varPairExpr: identifier SPACE (expr | literal | identifier | callFnc);

setExpr:  PSTART SPACE? 'set!' SPACE varPairExpr SPACE? PEND;
loopExpr: PSTART SPACE? 'let' SPACE identifier SPACE? PSTART SPACE? ((PSTART SPACE? varPairExpr SPACE? PEND) SPACE?)* PEND
          SPACE? fncBodyExpr SPACE? PEND;

vectorExpr: PSTART SPACE? 'vector' (SPACE (literal | identifier | callFnc))+ SPACE? PEND;


literal: FLOAT | INT;
identifier: VARIABLE;

OPERATOR: [+*/-];
BIOPERATOR: '=' | '<=' | '>=' | '<' | '>' | '!=' | 'and' | 'or';
VARIABLE: [a-zA-Z][a-zA-Z-!]*[0-9]*;
PSTART: '(';
PEND: ')';
SPACE: [ ]+;
FLOAT: [0-9]+ '.' [0-9]+;
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;