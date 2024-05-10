grammar SchemeLikeL;

start: (sExpr | literal | identifier | defineGlobalVar | defineFnc | exportExpr )+ EOF;

sExpr: (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr |
        ifExpr | vectorExpr | listExpr | setExpr | displayExpr);

expr: SPACE? PSTART SPACE? operatorExpr sExpr+ SPACE? PEND SPACE?;



logExpr: SPACE? PSTART SPACE? logOperatorExpr (logUniExpr | logBiExpr)+ SPACE? PEND SPACE?;

defineGlobalVar: SPACE? PSTART SPACE? 'define' SPACE identifier sExpr SPACE? PEND SPACE?;

defineFnc: SPACE? PSTART SPACE? 'define' SPACE?
        ((PSTART SPACE? identifier (SPACE identifier)* SPACE? PEND (fncBodyExpr | localFncBodyExpr) PEND) |
        (identifier SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
        SPACE? fncBodyExpr PEND PEND)) SPACE?;

fncBodyExpr: SPACE? sExpr* SPACE?;

localFncBodyExpr: SPACE? PSTART SPACE? 'let*' SPACE? PSTART SPACE? ((PSTART  varPairExpr  PEND) SPACE?)* PEND
               SPACE? fncBodyExpr SPACE? PEND SPACE?;

varPairExpr: SPACE? identifier sExpr SPACE?;

beginExpr: SPACE? PSTART SPACE? 'begin' sExpr*  SPACE? PEND SPACE?;

biExpr: SPACE? PSTART SPACE? biOperatorExpr sExpr sExpr SPACE? PEND SPACE?;

logBiExpr: SPACE? PSTART SPACE? logBiOperatorExpr sExpr sExpr SPACE? PEND SPACE?;

uniExpr: SPACE? PSTART SPACE? uniOperatorExpr sExpr SPACE? PEND SPACE?;

logUniExpr: SPACE? PSTART SPACE? logUniOperatorExpr sExpr SPACE? PEND SPACE?;

callFnc: SPACE? PSTART SPACE? identifier (sExpr | callLambdaFnc)* SPACE? PEND SPACE?;

callLambdaFnc: SPACE? PSTART SPACE? 'lambda' SPACE? PSTART SPACE? identifier? (SPACE identifier)* SPACE? PEND
                       SPACE? ((expr | callFnc) SPACE?)+ PEND SPACE?;

ifExpr: SPACE? PSTART SPACE? 'if' (sExpr | logExpr | logBiExpr | logUniExpr) sExpr sExpr SPACE? PEND SPACE?;

operatorExpr: OPERATOR;
logOperatorExpr: LOGOPERATOR;
biOperatorExpr: BIOPERATOR;
logBiOperatorExpr: LOGBIOPERATOR;
uniOperatorExpr: UNIOPERATOR;
logUniOperatorExpr: LOGUNIOPERATOR;

setExpr: SPACE? PSTART SPACE? 'set!' SPACE varPairExpr SPACE? PEND SPACE?;

vectorExpr: SPACE? PSTART SPACE? 'vector' (biExpr | expr | (SPACE literal) | (SPACE identifier) | callFnc | uniExpr | beginExpr | ifExpr )* SPACE? PEND SPACE? ;

listExpr: SPACE? PSTART SPACE? 'list' sExpr* SPACE? PEND SPACE? ;

displayExpr: SPACE? PSTART SPACE? 'display' sExpr SPACE? PEND SPACE? ;
exportExpr: SPACE? PSTART SPACE? 'export' SPACE identifier SPACE? PEND SPACE?;


literal: FLOAT | INT | NFLOAT | NINT;
identifier: VARIABLE;

OPERATOR: [-+*/] | '+v';
LOGOPERATOR:  'and' | 'or';
BIOPERATOR: 'quotient' | 'remainder';
LOGBIOPERATOR: '=' | '<=' | '>=' | '<' | '>';
UNIOPERATOR: 'floor' | 'round' | 'ceiling' | 'truncate';
LOGUNIOPERATOR: 'null?';
VARIABLE: [a-zA-Z][a-zA-Z0-9-!]*;
PSTART: '(';
PEND: ')';
SPACE: [ \t\r\n][ \t\r\n]*;
FLOAT: (([1-9][0-9]*) | '0') '.' [0-9]+;
INT: [1-9][0-9]* | '0';
NFLOAT: '-'FLOAT;
NINT: '-'INT;
WS: [ \t\r\n]+ -> skip;