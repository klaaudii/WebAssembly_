// Generated from SchemeLikeL.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from './antlr4/index.web.js';
import SchemeLikeLListener from './SchemeLikeLListener.js';
import SchemeLikeLVisitor from './SchemeLikeLVisitor.js';

const serializedATN = [4,1,21,590,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,3,0,46,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
4,0,58,8,0,11,0,12,0,59,1,0,1,0,1,1,3,1,65,8,1,1,1,1,1,3,1,69,8,1,1,1,1,
1,1,1,1,1,1,1,1,1,3,1,77,8,1,4,1,79,8,1,11,1,12,1,80,1,1,3,1,84,8,1,1,1,
1,1,3,1,88,8,1,1,2,3,2,91,8,2,1,2,1,2,3,2,95,8,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,3,2,107,8,2,4,2,109,8,2,11,2,12,2,110,1,2,3,2,114,8,2,1,
2,1,2,3,2,118,8,2,1,3,3,3,121,8,3,1,3,1,3,3,3,125,8,3,1,3,1,3,1,3,1,3,1,
3,1,3,5,3,133,8,3,10,3,12,3,136,9,3,1,3,3,3,139,8,3,1,3,1,3,3,3,143,8,3,
1,3,1,3,3,3,147,8,3,1,3,1,3,1,3,1,3,3,3,153,8,3,1,3,1,3,3,3,157,8,3,1,3,
1,3,3,3,161,8,3,1,3,1,3,3,3,165,8,3,1,3,3,3,168,8,3,1,3,1,3,5,3,172,8,3,
10,3,12,3,175,9,3,1,3,3,3,178,8,3,1,3,1,3,3,3,182,8,3,1,3,1,3,1,3,1,3,3,
3,188,8,3,1,4,3,4,191,8,4,1,4,1,4,3,4,195,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,3,4,204,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,212,8,4,1,4,3,4,215,8,4,1,4,1,
4,3,4,219,8,4,1,5,3,5,222,8,5,1,5,1,5,3,5,226,8,5,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,234,8,5,1,5,3,5,237,8,5,1,5,1,5,3,5,241,8,5,1,6,3,6,244,8,6,1,6,1,
6,3,6,248,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,259,8,6,5,6,261,8,
6,10,6,12,6,264,9,6,1,6,3,6,267,8,6,1,6,1,6,3,6,271,8,6,1,7,3,7,274,8,7,
1,7,1,7,3,7,278,8,7,1,7,1,7,3,7,282,8,7,1,7,1,7,3,7,286,8,7,1,7,3,7,289,
8,7,1,7,1,7,5,7,293,8,7,10,7,12,7,296,9,7,1,7,3,7,299,8,7,1,7,1,7,3,7,303,
8,7,1,7,1,7,3,7,307,8,7,1,7,3,7,310,8,7,4,7,312,8,7,11,7,12,7,313,1,7,1,
7,3,7,318,8,7,1,8,3,8,321,8,8,1,8,1,8,3,8,325,8,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,3,8,335,8,8,1,8,3,8,338,8,8,1,8,1,8,1,8,1,8,1,8,3,8,345,8,8,1,
8,3,8,348,8,8,1,8,3,8,351,8,8,1,8,1,8,1,8,1,8,1,8,3,8,358,8,8,1,8,3,8,361,
8,8,3,8,363,8,8,1,8,3,8,366,8,8,1,8,1,8,3,8,370,8,8,1,9,3,9,373,8,9,1,9,
1,9,3,9,377,8,9,1,9,1,9,3,9,381,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,4,9,390,
8,9,11,9,12,9,391,1,9,3,9,395,8,9,1,9,1,9,3,9,399,8,9,1,10,1,10,1,11,1,11,
1,12,1,12,1,13,3,13,408,8,13,1,13,1,13,3,13,412,8,13,1,13,1,13,3,13,416,
8,13,1,13,1,13,3,13,420,8,13,1,13,1,13,3,13,424,8,13,1,13,1,13,3,13,428,
8,13,1,13,1,13,1,13,3,13,433,8,13,5,13,435,8,13,10,13,12,13,438,9,13,1,13,
1,13,3,13,442,8,13,1,13,1,13,3,13,446,8,13,1,13,1,13,3,13,450,8,13,1,14,
3,14,453,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,462,8,14,1,14,3,14,
465,8,14,4,14,467,8,14,11,14,12,14,468,1,14,3,14,472,8,14,1,15,3,15,475,
8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,485,8,15,1,15,3,15,488,
8,15,1,16,3,16,491,8,16,1,16,1,16,3,16,495,8,16,1,16,1,16,1,16,1,16,3,16,
501,8,16,1,16,1,16,3,16,505,8,16,1,17,3,17,508,8,17,1,17,1,17,3,17,512,8,
17,1,17,1,17,1,17,1,17,1,17,3,17,519,8,17,5,17,521,8,17,10,17,12,17,524,
9,17,1,17,3,17,527,8,17,1,17,1,17,3,17,531,8,17,1,18,3,18,534,8,18,1,18,
1,18,3,18,538,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,547,8,18,5,18,
549,8,18,10,18,12,18,552,9,18,1,18,3,18,555,8,18,1,18,1,18,3,18,559,8,18,
1,19,3,19,562,8,19,1,19,1,19,3,19,566,8,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,3,19,577,8,19,1,19,3,19,580,8,19,1,19,1,19,3,19,584,8,19,
1,20,1,20,1,21,1,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,0,1,1,0,17,20,745,0,45,1,0,0,0,2,64,1,0,0,0,4,90,1,
0,0,0,6,120,1,0,0,0,8,190,1,0,0,0,10,221,1,0,0,0,12,243,1,0,0,0,14,273,1,
0,0,0,16,320,1,0,0,0,18,372,1,0,0,0,20,400,1,0,0,0,22,402,1,0,0,0,24,404,
1,0,0,0,26,407,1,0,0,0,28,452,1,0,0,0,30,474,1,0,0,0,32,490,1,0,0,0,34,507,
1,0,0,0,36,533,1,0,0,0,38,561,1,0,0,0,40,585,1,0,0,0,42,587,1,0,0,0,44,46,
5,16,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,57,1,0,0,0,47,58,3,2,1,0,48,58,3,
4,2,0,49,58,3,6,3,0,50,58,3,40,20,0,51,58,3,42,21,0,52,58,3,12,6,0,53,58,
3,32,16,0,54,58,3,36,18,0,55,58,3,34,17,0,56,58,3,38,19,0,57,47,1,0,0,0,
57,48,1,0,0,0,57,49,1,0,0,0,57,50,1,0,0,0,57,51,1,0,0,0,57,52,1,0,0,0,57,
53,1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,
1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,62,5,0,0,1,62,1,1,0,0,0,63,65,5,16,
0,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,68,5,14,0,0,67,69,5,16,
0,0,68,67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,78,3,20,10,0,71,76,5,16,
0,0,72,77,3,2,1,0,73,77,3,40,20,0,74,77,3,42,21,0,75,77,3,12,6,0,76,72,1,
0,0,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,79,1,0,0,0,78,71,1,0,
0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,84,5,16,0,
0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,87,5,15,0,0,86,88,5,16,0,
0,87,86,1,0,0,0,87,88,1,0,0,0,88,3,1,0,0,0,89,91,5,16,0,0,90,89,1,0,0,0,
90,91,1,0,0,0,91,92,1,0,0,0,92,94,5,14,0,0,93,95,5,16,0,0,94,93,1,0,0,0,
94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,1,0,0,97,98,5,16,0,0,98,108,3,42,21,
0,99,106,5,16,0,0,100,107,3,2,1,0,101,107,3,40,20,0,102,107,3,42,21,0,103,
107,3,12,6,0,104,107,3,34,17,0,105,107,3,36,18,0,106,100,1,0,0,0,106,101,
1,0,0,0,106,102,1,0,0,0,106,103,1,0,0,0,106,104,1,0,0,0,106,105,1,0,0,0,
107,109,1,0,0,0,108,99,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,
0,0,0,111,113,1,0,0,0,112,114,5,16,0,0,113,112,1,0,0,0,113,114,1,0,0,0,114,
115,1,0,0,0,115,117,5,15,0,0,116,118,5,16,0,0,117,116,1,0,0,0,117,118,1,
0,0,0,118,5,1,0,0,0,119,121,5,16,0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,
122,1,0,0,0,122,124,5,14,0,0,123,125,5,16,0,0,124,123,1,0,0,0,124,125,1,
0,0,0,125,126,1,0,0,0,126,127,5,1,0,0,127,187,5,16,0,0,128,129,5,14,0,0,
129,134,3,42,21,0,130,131,5,16,0,0,131,133,3,42,21,0,132,130,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,138,1,0,0,0,136,134,1,0,
0,0,137,139,5,16,0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,
142,5,15,0,0,141,143,5,16,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,146,1,
0,0,0,144,147,3,28,14,0,145,147,3,26,13,0,146,144,1,0,0,0,146,145,1,0,0,
0,147,148,1,0,0,0,148,149,5,15,0,0,149,188,1,0,0,0,150,152,3,42,21,0,151,
153,5,16,0,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,156,5,14,
0,0,155,157,5,16,0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,
160,5,2,0,0,159,161,5,16,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,
0,0,162,164,5,14,0,0,163,165,5,16,0,0,164,163,1,0,0,0,164,165,1,0,0,0,165,
167,1,0,0,0,166,168,3,42,21,0,167,166,1,0,0,0,167,168,1,0,0,0,168,173,1,
0,0,0,169,170,5,16,0,0,170,172,3,42,21,0,171,169,1,0,0,0,172,175,1,0,0,0,
173,171,1,0,0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,176,178,
5,16,0,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,181,5,15,0,
0,180,182,5,16,0,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,184,
3,28,14,0,184,185,5,15,0,0,185,186,5,15,0,0,186,188,1,0,0,0,187,128,1,0,
0,0,187,150,1,0,0,0,188,7,1,0,0,0,189,191,5,16,0,0,190,189,1,0,0,0,190,191,
1,0,0,0,191,192,1,0,0,0,192,194,5,14,0,0,193,195,5,16,0,0,194,193,1,0,0,
0,194,195,1,0,0,0,195,196,1,0,0,0,196,197,3,22,11,0,197,203,5,16,0,0,198,
204,3,8,4,0,199,204,3,2,1,0,200,204,3,40,20,0,201,204,3,42,21,0,202,204,
3,12,6,0,203,198,1,0,0,0,203,199,1,0,0,0,203,200,1,0,0,0,203,201,1,0,0,0,
203,202,1,0,0,0,204,205,1,0,0,0,205,211,5,16,0,0,206,212,3,8,4,0,207,212,
3,2,1,0,208,212,3,40,20,0,209,212,3,42,21,0,210,212,3,12,6,0,211,206,1,0,
0,0,211,207,1,0,0,0,211,208,1,0,0,0,211,209,1,0,0,0,211,210,1,0,0,0,212,
214,1,0,0,0,213,215,5,16,0,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,
0,0,216,218,5,15,0,0,217,219,5,16,0,0,218,217,1,0,0,0,218,219,1,0,0,0,219,
9,1,0,0,0,220,222,5,16,0,0,221,220,1,0,0,0,221,222,1,0,0,0,222,223,1,0,0,
0,223,225,5,14,0,0,224,226,5,16,0,0,225,224,1,0,0,0,225,226,1,0,0,0,226,
227,1,0,0,0,227,228,3,24,12,0,228,233,5,16,0,0,229,234,3,40,20,0,230,234,
3,42,21,0,231,234,3,2,1,0,232,234,3,12,6,0,233,229,1,0,0,0,233,230,1,0,0,
0,233,231,1,0,0,0,233,232,1,0,0,0,234,236,1,0,0,0,235,237,5,16,0,0,236,235,
1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,240,5,15,0,0,239,241,5,16,0,
0,240,239,1,0,0,0,240,241,1,0,0,0,241,11,1,0,0,0,242,244,5,16,0,0,243,242,
1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,247,5,14,0,0,246,248,5,16,0,
0,247,246,1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,0,249,262,3,42,21,0,250,
258,5,16,0,0,251,259,3,2,1,0,252,259,3,42,21,0,253,259,3,40,20,0,254,259,
3,12,6,0,255,259,3,14,7,0,256,259,3,36,18,0,257,259,3,34,17,0,258,251,1,
0,0,0,258,252,1,0,0,0,258,253,1,0,0,0,258,254,1,0,0,0,258,255,1,0,0,0,258,
256,1,0,0,0,258,257,1,0,0,0,259,261,1,0,0,0,260,250,1,0,0,0,261,264,1,0,
0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,265,
267,5,16,0,0,266,265,1,0,0,0,266,267,1,0,0,0,267,268,1,0,0,0,268,270,5,15,
0,0,269,271,5,16,0,0,270,269,1,0,0,0,270,271,1,0,0,0,271,13,1,0,0,0,272,
274,5,16,0,0,273,272,1,0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,275,277,5,14,
0,0,276,278,5,16,0,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,
281,5,2,0,0,280,282,5,16,0,0,281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,
0,0,283,285,5,14,0,0,284,286,5,16,0,0,285,284,1,0,0,0,285,286,1,0,0,0,286,
288,1,0,0,0,287,289,3,42,21,0,288,287,1,0,0,0,288,289,1,0,0,0,289,294,1,
0,0,0,290,291,5,16,0,0,291,293,3,42,21,0,292,290,1,0,0,0,293,296,1,0,0,0,
294,292,1,0,0,0,294,295,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,297,299,
5,16,0,0,298,297,1,0,0,0,298,299,1,0,0,0,299,300,1,0,0,0,300,302,5,15,0,
0,301,303,5,16,0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,311,1,0,0,0,304,307,
3,2,1,0,305,307,3,12,6,0,306,304,1,0,0,0,306,305,1,0,0,0,307,309,1,0,0,0,
308,310,5,16,0,0,309,308,1,0,0,0,309,310,1,0,0,0,310,312,1,0,0,0,311,306,
1,0,0,0,312,313,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,315,1,0,0,0,
315,317,5,15,0,0,316,318,5,16,0,0,317,316,1,0,0,0,317,318,1,0,0,0,318,15,
1,0,0,0,319,321,5,16,0,0,320,319,1,0,0,0,320,321,1,0,0,0,321,322,1,0,0,0,
322,324,5,14,0,0,323,325,5,16,0,0,324,323,1,0,0,0,324,325,1,0,0,0,325,326,
1,0,0,0,326,327,5,3,0,0,327,334,5,16,0,0,328,335,3,2,1,0,329,335,3,8,4,0,
330,335,3,40,20,0,331,335,3,42,21,0,332,335,3,12,6,0,333,335,3,10,5,0,334,
328,1,0,0,0,334,329,1,0,0,0,334,330,1,0,0,0,334,331,1,0,0,0,334,332,1,0,
0,0,334,333,1,0,0,0,335,337,1,0,0,0,336,338,5,16,0,0,337,336,1,0,0,0,337,
338,1,0,0,0,338,347,1,0,0,0,339,345,3,2,1,0,340,345,3,40,20,0,341,345,3,
42,21,0,342,345,3,12,6,0,343,345,3,32,16,0,344,339,1,0,0,0,344,340,1,0,0,
0,344,341,1,0,0,0,344,342,1,0,0,0,344,343,1,0,0,0,345,348,1,0,0,0,346,348,
3,18,9,0,347,344,1,0,0,0,347,346,1,0,0,0,348,362,1,0,0,0,349,351,5,16,0,
0,350,349,1,0,0,0,350,351,1,0,0,0,351,360,1,0,0,0,352,358,3,2,1,0,353,358,
3,40,20,0,354,358,3,42,21,0,355,358,3,12,6,0,356,358,3,32,16,0,357,352,1,
0,0,0,357,353,1,0,0,0,357,354,1,0,0,0,357,355,1,0,0,0,357,356,1,0,0,0,358,
361,1,0,0,0,359,361,3,18,9,0,360,357,1,0,0,0,360,359,1,0,0,0,361,363,1,0,
0,0,362,350,1,0,0,0,362,363,1,0,0,0,363,365,1,0,0,0,364,366,5,16,0,0,365,
364,1,0,0,0,365,366,1,0,0,0,366,367,1,0,0,0,367,369,5,15,0,0,368,370,5,16,
0,0,369,368,1,0,0,0,369,370,1,0,0,0,370,17,1,0,0,0,371,373,5,16,0,0,372,
371,1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,376,5,14,0,0,375,377,5,16,
0,0,376,375,1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,380,5,4,0,0,379,
381,5,16,0,0,380,379,1,0,0,0,380,381,1,0,0,0,381,389,1,0,0,0,382,390,3,2,
1,0,383,390,3,40,20,0,384,390,3,42,21,0,385,390,3,12,6,0,386,390,3,32,16,
0,387,390,3,38,19,0,388,390,3,16,8,0,389,382,1,0,0,0,389,383,1,0,0,0,389,
384,1,0,0,0,389,385,1,0,0,0,389,386,1,0,0,0,389,387,1,0,0,0,389,388,1,0,
0,0,390,391,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,393,
395,5,16,0,0,394,393,1,0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,398,5,15,
0,0,397,399,5,16,0,0,398,397,1,0,0,0,398,399,1,0,0,0,399,19,1,0,0,0,400,
401,5,10,0,0,401,21,1,0,0,0,402,403,5,11,0,0,403,23,1,0,0,0,404,405,5,12,
0,0,405,25,1,0,0,0,406,408,5,16,0,0,407,406,1,0,0,0,407,408,1,0,0,0,408,
409,1,0,0,0,409,411,5,14,0,0,410,412,5,16,0,0,411,410,1,0,0,0,411,412,1,
0,0,0,412,413,1,0,0,0,413,415,5,5,0,0,414,416,5,16,0,0,415,414,1,0,0,0,415,
416,1,0,0,0,416,417,1,0,0,0,417,419,5,14,0,0,418,420,5,16,0,0,419,418,1,
0,0,0,419,420,1,0,0,0,420,436,1,0,0,0,421,423,5,14,0,0,422,424,5,16,0,0,
423,422,1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,427,3,30,15,0,426,428,
5,16,0,0,427,426,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,430,5,15,0,
0,430,432,1,0,0,0,431,433,5,16,0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,435,
1,0,0,0,434,421,1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,436,437,1,0,0,0,
437,439,1,0,0,0,438,436,1,0,0,0,439,441,5,15,0,0,440,442,5,16,0,0,441,440,
1,0,0,0,441,442,1,0,0,0,442,443,1,0,0,0,443,445,3,28,14,0,444,446,5,16,0,
0,445,444,1,0,0,0,445,446,1,0,0,0,446,447,1,0,0,0,447,449,5,15,0,0,448,450,
5,16,0,0,449,448,1,0,0,0,449,450,1,0,0,0,450,27,1,0,0,0,451,453,5,16,0,0,
452,451,1,0,0,0,452,453,1,0,0,0,453,466,1,0,0,0,454,462,3,2,1,0,455,462,
3,12,6,0,456,462,3,16,8,0,457,462,3,32,16,0,458,462,3,36,18,0,459,462,3,
38,19,0,460,462,3,34,17,0,461,454,1,0,0,0,461,455,1,0,0,0,461,456,1,0,0,
0,461,457,1,0,0,0,461,458,1,0,0,0,461,459,1,0,0,0,461,460,1,0,0,0,462,464,
1,0,0,0,463,465,5,16,0,0,464,463,1,0,0,0,464,465,1,0,0,0,465,467,1,0,0,0,
466,461,1,0,0,0,467,468,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,469,471,
1,0,0,0,470,472,5,16,0,0,471,470,1,0,0,0,471,472,1,0,0,0,472,29,1,0,0,0,
473,475,5,16,0,0,474,473,1,0,0,0,474,475,1,0,0,0,475,476,1,0,0,0,476,477,
3,42,21,0,477,484,5,16,0,0,478,485,3,2,1,0,479,485,3,40,20,0,480,485,3,42,
21,0,481,485,3,12,6,0,482,485,3,34,17,0,483,485,3,36,18,0,484,478,1,0,0,
0,484,479,1,0,0,0,484,480,1,0,0,0,484,481,1,0,0,0,484,482,1,0,0,0,484,483,
1,0,0,0,485,487,1,0,0,0,486,488,5,16,0,0,487,486,1,0,0,0,487,488,1,0,0,0,
488,31,1,0,0,0,489,491,5,16,0,0,490,489,1,0,0,0,490,491,1,0,0,0,491,492,
1,0,0,0,492,494,5,14,0,0,493,495,5,16,0,0,494,493,1,0,0,0,494,495,1,0,0,
0,495,496,1,0,0,0,496,497,5,6,0,0,497,498,5,16,0,0,498,500,3,30,15,0,499,
501,5,16,0,0,500,499,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,504,5,15,
0,0,503,505,5,16,0,0,504,503,1,0,0,0,504,505,1,0,0,0,505,33,1,0,0,0,506,
508,5,16,0,0,507,506,1,0,0,0,507,508,1,0,0,0,508,509,1,0,0,0,509,511,5,14,
0,0,510,512,5,16,0,0,511,510,1,0,0,0,511,512,1,0,0,0,512,513,1,0,0,0,513,
522,5,7,0,0,514,518,5,16,0,0,515,519,3,40,20,0,516,519,3,42,21,0,517,519,
3,2,1,0,518,515,1,0,0,0,518,516,1,0,0,0,518,517,1,0,0,0,519,521,1,0,0,0,
520,514,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,523,1,0,0,0,523,526,
1,0,0,0,524,522,1,0,0,0,525,527,5,16,0,0,526,525,1,0,0,0,526,527,1,0,0,0,
527,528,1,0,0,0,528,530,5,15,0,0,529,531,5,16,0,0,530,529,1,0,0,0,530,531,
1,0,0,0,531,35,1,0,0,0,532,534,5,16,0,0,533,532,1,0,0,0,533,534,1,0,0,0,
534,535,1,0,0,0,535,537,5,14,0,0,536,538,5,16,0,0,537,536,1,0,0,0,537,538,
1,0,0,0,538,539,1,0,0,0,539,550,5,8,0,0,540,546,5,16,0,0,541,547,3,40,20,
0,542,547,3,42,21,0,543,547,3,34,17,0,544,547,3,36,18,0,545,547,3,2,1,0,
546,541,1,0,0,0,546,542,1,0,0,0,546,543,1,0,0,0,546,544,1,0,0,0,546,545,
1,0,0,0,547,549,1,0,0,0,548,540,1,0,0,0,549,552,1,0,0,0,550,548,1,0,0,0,
550,551,1,0,0,0,551,554,1,0,0,0,552,550,1,0,0,0,553,555,5,16,0,0,554,553,
1,0,0,0,554,555,1,0,0,0,555,556,1,0,0,0,556,558,5,15,0,0,557,559,5,16,0,
0,558,557,1,0,0,0,558,559,1,0,0,0,559,37,1,0,0,0,560,562,5,16,0,0,561,560,
1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,565,5,14,0,0,564,566,5,16,0,
0,565,564,1,0,0,0,565,566,1,0,0,0,566,567,1,0,0,0,567,568,5,9,0,0,568,576,
5,16,0,0,569,577,3,40,20,0,570,577,3,42,21,0,571,577,3,34,17,0,572,577,3,
36,18,0,573,577,3,12,6,0,574,577,3,2,1,0,575,577,3,16,8,0,576,569,1,0,0,
0,576,570,1,0,0,0,576,571,1,0,0,0,576,572,1,0,0,0,576,573,1,0,0,0,576,574,
1,0,0,0,576,575,1,0,0,0,577,579,1,0,0,0,578,580,5,16,0,0,579,578,1,0,0,0,
579,580,1,0,0,0,580,581,1,0,0,0,581,583,5,15,0,0,582,584,5,16,0,0,583,582,
1,0,0,0,583,584,1,0,0,0,584,39,1,0,0,0,585,586,7,0,0,0,586,41,1,0,0,0,587,
588,5,13,0,0,588,43,1,0,0,0,118,45,57,59,64,68,76,80,83,87,90,94,106,110,
113,117,120,124,134,138,142,146,152,156,160,164,167,173,177,181,187,190,
194,203,211,214,218,221,225,233,236,240,243,247,258,262,266,270,273,277,
281,285,288,294,298,302,306,309,313,317,320,324,334,337,344,347,350,357,
360,362,365,369,372,376,380,389,391,394,398,407,411,415,419,423,427,432,
436,441,445,449,452,461,464,468,471,474,484,487,490,494,500,504,507,511,
518,522,526,530,533,537,546,550,554,558,561,565,576,579,583];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SchemeLikeLParser extends antlr4.Parser {

    static grammarFileName = "SchemeLikeL.g4";
    static literalNames = [ null, "'define'", "'lambda'", "'if'", "'begin'", 
                            "'let'", "'set!'", "'vector'", "'list'", "'display'", 
                            null, null, "'null?'", null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "OPERATOR", "BIOPERATOR", "UNIOPERATOR", 
                             "VARIABLE", "PSTART", "PEND", "SPACE", "FLOAT", 
                             "INT", "NFLOAT", "NINT", "WS" ];
    static ruleNames = [ "start", "expr", "defineGlobalVar", "defineFnc", 
                         "biExpr", "uniExpr", "callFnc", "callLambdaFnc", 
                         "ifExpr", "beginExpr", "operatorExpr", "biOperatorExpr", 
                         "uniOperatorExpr", "localFncBodyExpr", "fncBodyExpr", 
                         "varPairExpr", "setExpr", "vectorExpr", "listExpr", 
                         "displayExpr", "literal", "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SchemeLikeLParser.ruleNames;
        this.literalNames = SchemeLikeLParser.literalNames;
        this.symbolicNames = SchemeLikeLParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SchemeLikeLParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 44;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 57; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 57;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 47;
	                this.expr();
	                break;

	            case 2:
	                this.state = 48;
	                this.defineGlobalVar();
	                break;

	            case 3:
	                this.state = 49;
	                this.defineFnc();
	                break;

	            case 4:
	                this.state = 50;
	                this.literal();
	                break;

	            case 5:
	                this.state = 51;
	                this.identifier();
	                break;

	            case 6:
	                this.state = 52;
	                this.callFnc();
	                break;

	            case 7:
	                this.state = 53;
	                this.setExpr();
	                break;

	            case 8:
	                this.state = 54;
	                this.listExpr();
	                break;

	            case 9:
	                this.state = 55;
	                this.vectorExpr();
	                break;

	            case 10:
	                this.state = 56;
	                this.displayExpr();
	                break;

	            }
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2056192) !== 0));
	        this.state = 61;
	        this.match(SchemeLikeLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SchemeLikeLParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 63;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 66;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 67;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 70;
	        this.operatorExpr();
	        this.state = 78; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 71;
	        		this.match(SchemeLikeLParser.SPACE);
	        		this.state = 76;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 72;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 73;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 74;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 75;
	        		    this.callFnc();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 80; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 82;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 85;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 86;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defineGlobalVar() {
	    let localctx = new DefineGlobalVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SchemeLikeLParser.RULE_defineGlobalVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 89;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 92;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 93;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 96;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 97;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 98;
	        this.identifier();
	        this.state = 108; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 99;
	        		this.match(SchemeLikeLParser.SPACE);
	        		this.state = 106;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 100;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 101;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 102;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 103;
	        		    this.callFnc();
	        		    break;

	        		case 5:
	        		    this.state = 104;
	        		    this.vectorExpr();
	        		    break;

	        		case 6:
	        		    this.state = 105;
	        		    this.listExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 110; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 112;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 115;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 116;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defineFnc() {
	    let localctx = new DefineFncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SchemeLikeLParser.RULE_defineFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 119;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 122;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 123;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 126;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 127;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 187;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 128;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 129;
	            this.identifier();
	            this.state = 134;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 130;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 131;
	                    this.identifier(); 
	                }
	                this.state = 136;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	            }

	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 137;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 140;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 142;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 141;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 146;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 144;
	                this.fncBodyExpr();
	                break;

	            case 2:
	                this.state = 145;
	                this.localFncBodyExpr();
	                break;

	            }
	            this.state = 148;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        case 13:
	            this.state = 150;
	            this.identifier();
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 151;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 154;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 155;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 158;
	            this.match(SchemeLikeLParser.T__1);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 159;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 162;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 164;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 163;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 166;
	                this.identifier();
	            }

	            this.state = 173;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 169;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 170;
	                    this.identifier(); 
	                }
	                this.state = 175;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	            }

	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 176;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 179;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 181;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 180;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 183;
	            this.fncBodyExpr();
	            this.state = 184;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 185;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	biExpr() {
	    let localctx = new BiExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SchemeLikeLParser.RULE_biExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 189;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 192;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 193;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 196;
	        this.biOperatorExpr();
	        this.state = 197;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 198;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 199;
	            this.expr();
	            break;

	        case 3:
	            this.state = 200;
	            this.literal();
	            break;

	        case 4:
	            this.state = 201;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 202;
	            this.callFnc();
	            break;

	        }
	        this.state = 205;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 211;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 206;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 207;
	            this.expr();
	            break;

	        case 3:
	            this.state = 208;
	            this.literal();
	            break;

	        case 4:
	            this.state = 209;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 210;
	            this.callFnc();
	            break;

	        }
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 213;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 216;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        if(la_===1) {
	            this.state = 217;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	uniExpr() {
	    let localctx = new UniExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SchemeLikeLParser.RULE_uniExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 220;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 223;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 224;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 227;
	        this.uniOperatorExpr();
	        this.state = 228;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 233;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 229;
	            this.literal();
	            break;

	        case 2:
	            this.state = 230;
	            this.identifier();
	            break;

	        case 3:
	            this.state = 231;
	            this.expr();
	            break;

	        case 4:
	            this.state = 232;
	            this.callFnc();
	            break;

	        }
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 235;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 238;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 239;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callFnc() {
	    let localctx = new CallFncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SchemeLikeLParser.RULE_callFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 242;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 245;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 246;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 249;
	        this.identifier();
	        this.state = 262;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 250;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 258;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 251;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 252;
	                    this.identifier();
	                    break;

	                case 3:
	                    this.state = 253;
	                    this.literal();
	                    break;

	                case 4:
	                    this.state = 254;
	                    this.callFnc();
	                    break;

	                case 5:
	                    this.state = 255;
	                    this.callLambdaFnc();
	                    break;

	                case 6:
	                    this.state = 256;
	                    this.listExpr();
	                    break;

	                case 7:
	                    this.state = 257;
	                    this.vectorExpr();
	                    break;

	                } 
	            }
	            this.state = 264;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	        }

	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 265;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 268;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        if(la_===1) {
	            this.state = 269;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callLambdaFnc() {
	    let localctx = new CallLambdaFncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SchemeLikeLParser.RULE_callLambdaFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 272;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 275;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 276;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 279;
	        this.match(SchemeLikeLParser.T__1);
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 280;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 283;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 285;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        if(la_===1) {
	            this.state = 284;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 287;
	            this.identifier();
	        }

	        this.state = 294;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 290;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 291;
	                this.identifier(); 
	            }
	            this.state = 296;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
	        }

	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 297;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 300;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        if(la_===1) {
	            this.state = 301;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 311; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 306;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 304;
	                this.expr();
	                break;

	            case 2:
	                this.state = 305;
	                this.callFnc();
	                break;

	            }
	            this.state = 309;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	            if(la_===1) {
	                this.state = 308;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 313; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14 || _la===16);
	        this.state = 315;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        if(la_===1) {
	            this.state = 316;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifExpr() {
	    let localctx = new IfExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SchemeLikeLParser.RULE_ifExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 319;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 322;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 323;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 326;
	        this.match(SchemeLikeLParser.T__2);
	        this.state = 327;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 328;
	            this.expr();
	            break;

	        case 2:
	            this.state = 329;
	            this.biExpr();
	            break;

	        case 3:
	            this.state = 330;
	            this.literal();
	            break;

	        case 4:
	            this.state = 331;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 332;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 333;
	            this.uniExpr();
	            break;

	        }
	        this.state = 337;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        if(la_===1) {
	            this.state = 336;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 347;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 344;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 339;
	                this.expr();
	                break;

	            case 2:
	                this.state = 340;
	                this.literal();
	                break;

	            case 3:
	                this.state = 341;
	                this.identifier();
	                break;

	            case 4:
	                this.state = 342;
	                this.callFnc();
	                break;

	            case 5:
	                this.state = 343;
	                this.setExpr();
	                break;

	            }
	            break;

	        case 2:
	            this.state = 346;
	            this.beginExpr();
	            break;

	        }
	        this.state = 362;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        if(la_===1) {
	            this.state = 350;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	            if(la_===1) {
	                this.state = 349;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 360;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 357;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 352;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 353;
	                    this.literal();
	                    break;

	                case 3:
	                    this.state = 354;
	                    this.identifier();
	                    break;

	                case 4:
	                    this.state = 355;
	                    this.callFnc();
	                    break;

	                case 5:
	                    this.state = 356;
	                    this.setExpr();
	                    break;

	                }
	                break;

	            case 2:
	                this.state = 359;
	                this.beginExpr();
	                break;

	            }

	        }
	        this.state = 365;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 364;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 367;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 369;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
	        if(la_===1) {
	            this.state = 368;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beginExpr() {
	    let localctx = new BeginExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SchemeLikeLParser.RULE_beginExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 371;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 374;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 376;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 375;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 378;
	        this.match(SchemeLikeLParser.T__3);
	        this.state = 380;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
	        if(la_===1) {
	            this.state = 379;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 389; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 389;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 382;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 383;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 384;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 385;
	        		    this.callFnc();
	        		    break;

	        		case 5:
	        		    this.state = 386;
	        		    this.setExpr();
	        		    break;

	        		case 6:
	        		    this.state = 387;
	        		    this.displayExpr();
	        		    break;

	        		case 7:
	        		    this.state = 388;
	        		    this.ifExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 391; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,75, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 394;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 393;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 396;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 398;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
	        if(la_===1) {
	            this.state = 397;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorExpr() {
	    let localctx = new OperatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SchemeLikeLParser.RULE_operatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.match(SchemeLikeLParser.OPERATOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	biOperatorExpr() {
	    let localctx = new BiOperatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SchemeLikeLParser.RULE_biOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(SchemeLikeLParser.BIOPERATOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	uniOperatorExpr() {
	    let localctx = new UniOperatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SchemeLikeLParser.RULE_uniOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(SchemeLikeLParser.UNIOPERATOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	localFncBodyExpr() {
	    let localctx = new LocalFncBodyExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SchemeLikeLParser.RULE_localFncBodyExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 406;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 409;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 410;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 413;
	        this.match(SchemeLikeLParser.T__4);
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 414;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 417;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 419;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 418;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 436;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 421;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 423;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
	            if(la_===1) {
	                this.state = 422;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 425;
	            this.varPairExpr();
	            this.state = 427;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 426;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 429;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 432;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 431;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 438;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 439;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 441;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,86,this._ctx);
	        if(la_===1) {
	            this.state = 440;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 443;
	        this.fncBodyExpr();
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 444;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 447;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 449;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 448;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fncBodyExpr() {
	    let localctx = new FncBodyExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SchemeLikeLParser.RULE_fncBodyExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
	        if(la_===1) {
	            this.state = 451;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 466; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 461;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 454;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 455;
	        		    this.callFnc();
	        		    break;

	        		case 3:
	        		    this.state = 456;
	        		    this.ifExpr();
	        		    break;

	        		case 4:
	        		    this.state = 457;
	        		    this.setExpr();
	        		    break;

	        		case 5:
	        		    this.state = 458;
	        		    this.listExpr();
	        		    break;

	        		case 6:
	        		    this.state = 459;
	        		    this.displayExpr();
	        		    break;

	        		case 7:
	        		    this.state = 460;
	        		    this.vectorExpr();
	        		    break;

	        		}
	        		this.state = 464;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,91,this._ctx);
	        		if(la_===1) {
	        		    this.state = 463;
	        		    this.match(SchemeLikeLParser.SPACE);

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 468; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,92, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 471;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,93,this._ctx);
	        if(la_===1) {
	            this.state = 470;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varPairExpr() {
	    let localctx = new VarPairExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SchemeLikeLParser.RULE_varPairExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 473;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 476;
	        this.identifier();
	        this.state = 477;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 484;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 478;
	            this.expr();
	            break;

	        case 2:
	            this.state = 479;
	            this.literal();
	            break;

	        case 3:
	            this.state = 480;
	            this.identifier();
	            break;

	        case 4:
	            this.state = 481;
	            this.callFnc();
	            break;

	        case 5:
	            this.state = 482;
	            this.vectorExpr();
	            break;

	        case 6:
	            this.state = 483;
	            this.listExpr();
	            break;

	        }
	        this.state = 487;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,96,this._ctx);
	        if(la_===1) {
	            this.state = 486;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setExpr() {
	    let localctx = new SetExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SchemeLikeLParser.RULE_setExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 489;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 492;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 494;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 493;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 496;
	        this.match(SchemeLikeLParser.T__5);
	        this.state = 497;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 498;
	        this.varPairExpr();
	        this.state = 500;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 499;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 502;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 504;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,100,this._ctx);
	        if(la_===1) {
	            this.state = 503;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vectorExpr() {
	    let localctx = new VectorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SchemeLikeLParser.RULE_vectorExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 507;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 506;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 509;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 511;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 510;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 513;
	        this.match(SchemeLikeLParser.T__6);
	        this.state = 522;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,104,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 514;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 518;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                    this.state = 515;
	                    this.literal();
	                    break;
	                case 13:
	                    this.state = 516;
	                    this.identifier();
	                    break;
	                case 14:
	                case 16:
	                    this.state = 517;
	                    this.expr();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 524;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,104,this._ctx);
	        }

	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 525;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 528;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 530;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,106,this._ctx);
	        if(la_===1) {
	            this.state = 529;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listExpr() {
	    let localctx = new ListExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SchemeLikeLParser.RULE_listExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 533;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 532;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 535;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 537;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 536;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 539;
	        this.match(SchemeLikeLParser.T__7);
	        this.state = 550;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,110,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 540;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 546;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,109,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 541;
	                    this.literal();
	                    break;

	                case 2:
	                    this.state = 542;
	                    this.identifier();
	                    break;

	                case 3:
	                    this.state = 543;
	                    this.vectorExpr();
	                    break;

	                case 4:
	                    this.state = 544;
	                    this.listExpr();
	                    break;

	                case 5:
	                    this.state = 545;
	                    this.expr();
	                    break;

	                } 
	            }
	            this.state = 552;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,110,this._ctx);
	        }

	        this.state = 554;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 553;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 556;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 558;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,112,this._ctx);
	        if(la_===1) {
	            this.state = 557;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	displayExpr() {
	    let localctx = new DisplayExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SchemeLikeLParser.RULE_displayExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 560;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 563;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 565;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 564;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 567;
	        this.match(SchemeLikeLParser.T__8);
	        this.state = 568;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 576;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,115,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 569;
	            this.literal();
	            break;

	        case 2:
	            this.state = 570;
	            this.identifier();
	            break;

	        case 3:
	            this.state = 571;
	            this.vectorExpr();
	            break;

	        case 4:
	            this.state = 572;
	            this.listExpr();
	            break;

	        case 5:
	            this.state = 573;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 574;
	            this.expr();
	            break;

	        case 7:
	            this.state = 575;
	            this.ifExpr();
	            break;

	        }
	        this.state = 579;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 578;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 581;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 583;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,117,this._ctx);
	        if(la_===1) {
	            this.state = 582;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SchemeLikeLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SchemeLikeLParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 587;
	        this.match(SchemeLikeLParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SchemeLikeLParser.EOF = antlr4.Token.EOF;
SchemeLikeLParser.T__0 = 1;
SchemeLikeLParser.T__1 = 2;
SchemeLikeLParser.T__2 = 3;
SchemeLikeLParser.T__3 = 4;
SchemeLikeLParser.T__4 = 5;
SchemeLikeLParser.T__5 = 6;
SchemeLikeLParser.T__6 = 7;
SchemeLikeLParser.T__7 = 8;
SchemeLikeLParser.T__8 = 9;
SchemeLikeLParser.OPERATOR = 10;
SchemeLikeLParser.BIOPERATOR = 11;
SchemeLikeLParser.UNIOPERATOR = 12;
SchemeLikeLParser.VARIABLE = 13;
SchemeLikeLParser.PSTART = 14;
SchemeLikeLParser.PEND = 15;
SchemeLikeLParser.SPACE = 16;
SchemeLikeLParser.FLOAT = 17;
SchemeLikeLParser.INT = 18;
SchemeLikeLParser.NFLOAT = 19;
SchemeLikeLParser.NINT = 20;
SchemeLikeLParser.WS = 21;

SchemeLikeLParser.RULE_start = 0;
SchemeLikeLParser.RULE_expr = 1;
SchemeLikeLParser.RULE_defineGlobalVar = 2;
SchemeLikeLParser.RULE_defineFnc = 3;
SchemeLikeLParser.RULE_biExpr = 4;
SchemeLikeLParser.RULE_uniExpr = 5;
SchemeLikeLParser.RULE_callFnc = 6;
SchemeLikeLParser.RULE_callLambdaFnc = 7;
SchemeLikeLParser.RULE_ifExpr = 8;
SchemeLikeLParser.RULE_beginExpr = 9;
SchemeLikeLParser.RULE_operatorExpr = 10;
SchemeLikeLParser.RULE_biOperatorExpr = 11;
SchemeLikeLParser.RULE_uniOperatorExpr = 12;
SchemeLikeLParser.RULE_localFncBodyExpr = 13;
SchemeLikeLParser.RULE_fncBodyExpr = 14;
SchemeLikeLParser.RULE_varPairExpr = 15;
SchemeLikeLParser.RULE_setExpr = 16;
SchemeLikeLParser.RULE_vectorExpr = 17;
SchemeLikeLParser.RULE_listExpr = 18;
SchemeLikeLParser.RULE_displayExpr = 19;
SchemeLikeLParser.RULE_literal = 20;
SchemeLikeLParser.RULE_identifier = 21;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_start;
    }

	EOF() {
	    return this.getToken(SchemeLikeLParser.EOF, 0);
	};

	SPACE() {
	    return this.getToken(SchemeLikeLParser.SPACE, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	defineGlobalVar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefineGlobalVarContext);
	    } else {
	        return this.getTypedRuleContext(DefineGlobalVarContext,i);
	    }
	};

	defineFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefineFncContext);
	    } else {
	        return this.getTypedRuleContext(DefineFncContext,i);
	    }
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	setExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetExprContext);
	    } else {
	        return this.getTypedRuleContext(SetExprContext,i);
	    }
	};

	listExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListExprContext);
	    } else {
	        return this.getTypedRuleContext(ListExprContext,i);
	    }
	};

	vectorExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorExprContext);
	    } else {
	        return this.getTypedRuleContext(VectorExprContext,i);
	    }
	};

	displayExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DisplayExprContext);
	    } else {
	        return this.getTypedRuleContext(DisplayExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_expr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	operatorExpr() {
	    return this.getTypedRuleContext(OperatorExprContext,0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefineGlobalVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_defineGlobalVar;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	vectorExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorExprContext);
	    } else {
	        return this.getTypedRuleContext(VectorExprContext,i);
	    }
	};

	listExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListExprContext);
	    } else {
	        return this.getTypedRuleContext(ListExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterDefineGlobalVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitDefineGlobalVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitDefineGlobalVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefineFncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_defineFnc;
    }

	PSTART = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.PSTART);
	    } else {
	        return this.getToken(SchemeLikeLParser.PSTART, i);
	    }
	};


	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	PEND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.PEND);
	    } else {
	        return this.getToken(SchemeLikeLParser.PEND, i);
	    }
	};


	fncBodyExpr() {
	    return this.getTypedRuleContext(FncBodyExprContext,0);
	};

	localFncBodyExpr() {
	    return this.getTypedRuleContext(LocalFncBodyExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterDefineFnc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitDefineFnc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitDefineFnc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BiExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_biExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	biOperatorExpr() {
	    return this.getTypedRuleContext(BiOperatorExprContext,0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	biExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BiExprContext);
	    } else {
	        return this.getTypedRuleContext(BiExprContext,i);
	    }
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterBiExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitBiExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitBiExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UniExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_uniExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	uniOperatorExpr() {
	    return this.getTypedRuleContext(UniOperatorExprContext,0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	callFnc() {
	    return this.getTypedRuleContext(CallFncContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterUniExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitUniExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitUniExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallFncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_callFnc;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	callLambdaFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallLambdaFncContext);
	    } else {
	        return this.getTypedRuleContext(CallLambdaFncContext,i);
	    }
	};

	listExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListExprContext);
	    } else {
	        return this.getTypedRuleContext(ListExprContext,i);
	    }
	};

	vectorExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorExprContext);
	    } else {
	        return this.getTypedRuleContext(VectorExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterCallFnc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitCallFnc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitCallFnc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallLambdaFncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_callLambdaFnc;
    }

	PSTART = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.PSTART);
	    } else {
	        return this.getToken(SchemeLikeLParser.PSTART, i);
	    }
	};


	PEND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.PEND);
	    } else {
	        return this.getToken(SchemeLikeLParser.PEND, i);
	    }
	};


	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterCallLambdaFnc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitCallLambdaFnc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitCallLambdaFnc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_ifExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	biExpr() {
	    return this.getTypedRuleContext(BiExprContext,0);
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	uniExpr() {
	    return this.getTypedRuleContext(UniExprContext,0);
	};

	beginExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BeginExprContext);
	    } else {
	        return this.getTypedRuleContext(BeginExprContext,i);
	    }
	};

	setExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetExprContext);
	    } else {
	        return this.getTypedRuleContext(SetExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterIfExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitIfExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitIfExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BeginExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_beginExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	setExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetExprContext);
	    } else {
	        return this.getTypedRuleContext(SetExprContext,i);
	    }
	};

	displayExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DisplayExprContext);
	    } else {
	        return this.getTypedRuleContext(DisplayExprContext,i);
	    }
	};

	ifExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfExprContext);
	    } else {
	        return this.getTypedRuleContext(IfExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterBeginExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitBeginExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitBeginExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_operatorExpr;
    }

	OPERATOR() {
	    return this.getToken(SchemeLikeLParser.OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterOperatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitOperatorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitOperatorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BiOperatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_biOperatorExpr;
    }

	BIOPERATOR() {
	    return this.getToken(SchemeLikeLParser.BIOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterBiOperatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitBiOperatorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitBiOperatorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UniOperatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_uniOperatorExpr;
    }

	UNIOPERATOR() {
	    return this.getToken(SchemeLikeLParser.UNIOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterUniOperatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitUniOperatorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitUniOperatorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LocalFncBodyExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_localFncBodyExpr;
    }

	PSTART = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.PSTART);
	    } else {
	        return this.getToken(SchemeLikeLParser.PSTART, i);
	    }
	};


	PEND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.PEND);
	    } else {
	        return this.getToken(SchemeLikeLParser.PEND, i);
	    }
	};


	fncBodyExpr() {
	    return this.getTypedRuleContext(FncBodyExprContext,0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	varPairExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarPairExprContext);
	    } else {
	        return this.getTypedRuleContext(VarPairExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLocalFncBodyExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLocalFncBodyExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLocalFncBodyExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FncBodyExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_fncBodyExpr;
    }

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	callFnc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFncContext);
	    } else {
	        return this.getTypedRuleContext(CallFncContext,i);
	    }
	};

	ifExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfExprContext);
	    } else {
	        return this.getTypedRuleContext(IfExprContext,i);
	    }
	};

	setExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetExprContext);
	    } else {
	        return this.getTypedRuleContext(SetExprContext,i);
	    }
	};

	listExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListExprContext);
	    } else {
	        return this.getTypedRuleContext(ListExprContext,i);
	    }
	};

	displayExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DisplayExprContext);
	    } else {
	        return this.getTypedRuleContext(DisplayExprContext,i);
	    }
	};

	vectorExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorExprContext);
	    } else {
	        return this.getTypedRuleContext(VectorExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterFncBodyExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitFncBodyExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitFncBodyExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarPairExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_varPairExpr;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	callFnc() {
	    return this.getTypedRuleContext(CallFncContext,0);
	};

	vectorExpr() {
	    return this.getTypedRuleContext(VectorExprContext,0);
	};

	listExpr() {
	    return this.getTypedRuleContext(ListExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterVarPairExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitVarPairExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitVarPairExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_setExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	varPairExpr() {
	    return this.getTypedRuleContext(VarPairExprContext,0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterSetExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitSetExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitSetExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VectorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_vectorExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterVectorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitVectorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitVectorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_listExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	vectorExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorExprContext);
	    } else {
	        return this.getTypedRuleContext(VectorExprContext,i);
	    }
	};

	listExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListExprContext);
	    } else {
	        return this.getTypedRuleContext(ListExprContext,i);
	    }
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterListExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitListExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitListExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisplayExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_displayExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SchemeLikeLParser.SPACE);
	    } else {
	        return this.getToken(SchemeLikeLParser.SPACE, i);
	    }
	};


	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	vectorExpr() {
	    return this.getTypedRuleContext(VectorExprContext,0);
	};

	listExpr() {
	    return this.getTypedRuleContext(ListExprContext,0);
	};

	callFnc() {
	    return this.getTypedRuleContext(CallFncContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ifExpr() {
	    return this.getTypedRuleContext(IfExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterDisplayExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitDisplayExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitDisplayExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_literal;
    }

	FLOAT() {
	    return this.getToken(SchemeLikeLParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(SchemeLikeLParser.INT, 0);
	};

	NFLOAT() {
	    return this.getToken(SchemeLikeLParser.NFLOAT, 0);
	};

	NINT() {
	    return this.getToken(SchemeLikeLParser.NINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_identifier;
    }

	VARIABLE() {
	    return this.getToken(SchemeLikeLParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SchemeLikeLParser.StartContext = StartContext; 
SchemeLikeLParser.ExprContext = ExprContext; 
SchemeLikeLParser.DefineGlobalVarContext = DefineGlobalVarContext; 
SchemeLikeLParser.DefineFncContext = DefineFncContext; 
SchemeLikeLParser.BiExprContext = BiExprContext; 
SchemeLikeLParser.UniExprContext = UniExprContext; 
SchemeLikeLParser.CallFncContext = CallFncContext; 
SchemeLikeLParser.CallLambdaFncContext = CallLambdaFncContext; 
SchemeLikeLParser.IfExprContext = IfExprContext; 
SchemeLikeLParser.BeginExprContext = BeginExprContext; 
SchemeLikeLParser.OperatorExprContext = OperatorExprContext; 
SchemeLikeLParser.BiOperatorExprContext = BiOperatorExprContext; 
SchemeLikeLParser.UniOperatorExprContext = UniOperatorExprContext; 
SchemeLikeLParser.LocalFncBodyExprContext = LocalFncBodyExprContext; 
SchemeLikeLParser.FncBodyExprContext = FncBodyExprContext; 
SchemeLikeLParser.VarPairExprContext = VarPairExprContext; 
SchemeLikeLParser.SetExprContext = SetExprContext; 
SchemeLikeLParser.VectorExprContext = VectorExprContext; 
SchemeLikeLParser.ListExprContext = ListExprContext; 
SchemeLikeLParser.DisplayExprContext = DisplayExprContext; 
SchemeLikeLParser.LiteralContext = LiteralContext; 
SchemeLikeLParser.IdentifierContext = IdentifierContext; 
