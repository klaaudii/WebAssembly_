// Generated from SchemeLikeL.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from './antlr4/index.web.js';
import SchemeLikeLListener from './SchemeLikeLListener.js';
import SchemeLikeLVisitor from './SchemeLikeLVisitor.js';

const serializedATN = [4,1,26,608,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,0,1,0,1,0,4,0,69,8,0,11,
0,12,0,70,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,90,8,1,1,2,3,2,93,8,2,1,2,1,2,3,2,97,8,2,1,2,1,2,4,2,101,8,2,11,
2,12,2,102,1,2,3,2,106,8,2,1,2,1,2,3,2,110,8,2,1,3,3,3,113,8,3,1,3,1,3,3,
3,117,8,3,1,3,1,3,1,3,4,3,122,8,3,11,3,12,3,123,1,3,3,3,127,8,3,1,3,1,3,
3,3,131,8,3,1,4,3,4,134,8,4,1,4,1,4,3,4,138,8,4,1,4,1,4,1,4,1,4,1,4,3,4,
145,8,4,1,4,1,4,3,4,149,8,4,1,5,3,5,152,8,5,1,5,1,5,3,5,156,8,5,1,5,1,5,
3,5,160,8,5,1,5,1,5,3,5,164,8,5,1,5,1,5,1,5,5,5,169,8,5,10,5,12,5,172,9,
5,1,5,3,5,175,8,5,1,5,1,5,1,5,3,5,180,8,5,1,5,1,5,1,5,1,5,3,5,186,8,5,1,
5,1,5,3,5,190,8,5,1,5,1,5,3,5,194,8,5,1,5,1,5,3,5,198,8,5,1,5,3,5,201,8,
5,1,5,1,5,5,5,205,8,5,10,5,12,5,208,9,5,1,5,3,5,211,8,5,1,5,1,5,3,5,215,
8,5,1,5,1,5,1,5,1,5,3,5,221,8,5,1,5,3,5,224,8,5,1,6,3,6,227,8,6,1,6,5,6,
230,8,6,10,6,12,6,233,9,6,1,6,3,6,236,8,6,1,7,3,7,239,8,7,1,7,1,7,3,7,243,
8,7,1,7,1,7,3,7,247,8,7,1,7,1,7,3,7,251,8,7,1,7,1,7,1,7,1,7,1,7,3,7,258,
8,7,5,7,260,8,7,10,7,12,7,263,9,7,1,7,1,7,3,7,267,8,7,1,7,1,7,3,7,271,8,
7,1,7,1,7,3,7,275,8,7,1,8,3,8,278,8,8,1,8,1,8,1,8,3,8,283,8,8,1,9,3,9,286,
8,9,1,9,1,9,3,9,290,8,9,1,9,1,9,5,9,294,8,9,10,9,12,9,297,9,9,1,9,3,9,300,
8,9,1,9,1,9,3,9,304,8,9,1,10,3,10,307,8,10,1,10,1,10,3,10,311,8,10,1,10,
1,10,1,10,1,10,3,10,317,8,10,1,10,1,10,3,10,321,8,10,1,11,3,11,324,8,11,
1,11,1,11,3,11,328,8,11,1,11,1,11,1,11,1,11,3,11,334,8,11,1,11,1,11,3,11,
338,8,11,1,12,3,12,341,8,12,1,12,1,12,3,12,345,8,12,1,12,1,12,1,12,3,12,
350,8,12,1,12,1,12,3,12,354,8,12,1,13,3,13,357,8,13,1,13,1,13,3,13,361,8,
13,1,13,1,13,1,13,3,13,366,8,13,1,13,1,13,3,13,370,8,13,1,14,3,14,373,8,
14,1,14,1,14,3,14,377,8,14,1,14,1,14,1,14,5,14,382,8,14,10,14,12,14,385,
9,14,1,14,3,14,388,8,14,1,14,1,14,3,14,392,8,14,1,15,3,15,395,8,15,1,15,
1,15,3,15,399,8,15,1,15,1,15,3,15,403,8,15,1,15,1,15,3,15,407,8,15,1,15,
3,15,410,8,15,1,15,1,15,5,15,414,8,15,10,15,12,15,417,9,15,1,15,3,15,420,
8,15,1,15,1,15,3,15,424,8,15,1,15,1,15,3,15,428,8,15,1,15,3,15,431,8,15,
4,15,433,8,15,11,15,12,15,434,1,15,1,15,3,15,439,8,15,1,16,3,16,442,8,16,
1,16,1,16,3,16,446,8,16,1,16,1,16,1,16,1,16,1,16,3,16,453,8,16,1,16,1,16,
1,16,3,16,458,8,16,1,16,1,16,3,16,462,8,16,1,17,1,17,1,18,1,18,1,19,1,19,
1,20,1,20,1,21,1,21,1,22,1,22,1,23,3,23,477,8,23,1,23,1,23,3,23,481,8,23,
1,23,1,23,1,23,1,23,3,23,487,8,23,1,23,1,23,3,23,491,8,23,1,24,3,24,494,
8,24,1,24,1,24,3,24,498,8,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,5,24,511,8,24,10,24,12,24,514,9,24,1,24,3,24,517,8,24,1,24,1,24,
3,24,521,8,24,1,25,3,25,524,8,25,1,25,1,25,3,25,528,8,25,1,25,1,25,5,25,
532,8,25,10,25,12,25,535,9,25,1,25,3,25,538,8,25,1,25,1,25,3,25,542,8,25,
1,26,3,26,545,8,26,1,26,1,26,3,26,549,8,26,1,26,1,26,1,26,3,26,554,8,26,
1,26,1,26,3,26,558,8,26,1,27,3,27,561,8,27,1,27,1,27,3,27,565,8,27,1,27,
1,27,1,27,1,27,3,27,571,8,27,1,27,1,27,3,27,575,8,27,1,28,3,28,578,8,28,
1,28,1,28,3,28,582,8,28,1,28,1,28,1,28,1,28,1,28,3,28,589,8,28,1,28,5,28,
592,8,28,10,28,12,28,595,9,28,1,28,3,28,598,8,28,1,28,1,28,3,28,602,8,28,
1,29,1,29,1,30,1,30,1,30,0,0,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,0,1,1,0,22,25,723,0,68,1,
0,0,0,2,89,1,0,0,0,4,92,1,0,0,0,6,112,1,0,0,0,8,133,1,0,0,0,10,151,1,0,0,
0,12,226,1,0,0,0,14,238,1,0,0,0,16,277,1,0,0,0,18,285,1,0,0,0,20,306,1,0,
0,0,22,323,1,0,0,0,24,340,1,0,0,0,26,356,1,0,0,0,28,372,1,0,0,0,30,394,1,
0,0,0,32,441,1,0,0,0,34,463,1,0,0,0,36,465,1,0,0,0,38,467,1,0,0,0,40,469,
1,0,0,0,42,471,1,0,0,0,44,473,1,0,0,0,46,476,1,0,0,0,48,493,1,0,0,0,50,523,
1,0,0,0,52,544,1,0,0,0,54,560,1,0,0,0,56,577,1,0,0,0,58,603,1,0,0,0,60,605,
1,0,0,0,62,69,3,2,1,0,63,69,3,58,29,0,64,69,3,60,30,0,65,69,3,8,4,0,66,69,
3,10,5,0,67,69,3,54,27,0,68,62,1,0,0,0,68,63,1,0,0,0,68,64,1,0,0,0,68,65,
1,0,0,0,68,66,1,0,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,
0,0,0,71,72,1,0,0,0,72,73,5,0,0,1,73,1,1,0,0,0,74,90,3,20,10,0,75,90,3,4,
2,0,76,77,5,21,0,0,77,90,3,58,29,0,78,79,5,21,0,0,79,90,3,60,30,0,80,90,
3,28,14,0,81,90,3,24,12,0,82,90,3,18,9,0,83,90,3,32,16,0,84,90,3,48,24,0,
85,90,3,50,25,0,86,90,3,46,23,0,87,90,3,52,26,0,88,90,3,56,28,0,89,74,1,
0,0,0,89,75,1,0,0,0,89,76,1,0,0,0,89,78,1,0,0,0,89,80,1,0,0,0,89,81,1,0,
0,0,89,82,1,0,0,0,89,83,1,0,0,0,89,84,1,0,0,0,89,85,1,0,0,0,89,86,1,0,0,
0,89,87,1,0,0,0,89,88,1,0,0,0,90,3,1,0,0,0,91,93,5,21,0,0,92,91,1,0,0,0,
92,93,1,0,0,0,93,94,1,0,0,0,94,96,5,19,0,0,95,97,5,21,0,0,96,95,1,0,0,0,
96,97,1,0,0,0,97,98,1,0,0,0,98,100,3,34,17,0,99,101,3,2,1,0,100,99,1,0,0,
0,101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,106,
5,21,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,109,5,20,0,
0,108,110,5,21,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,5,1,0,0,0,111,113,
5,21,0,0,112,111,1,0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,114,116,5,19,0,
0,115,117,5,21,0,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,121,
3,36,18,0,119,122,3,26,13,0,120,122,3,22,11,0,121,119,1,0,0,0,121,120,1,
0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,
127,5,21,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,130,5,20,
0,0,129,131,5,21,0,0,130,129,1,0,0,0,130,131,1,0,0,0,131,7,1,0,0,0,132,134,
5,21,0,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,137,5,19,0,
0,136,138,5,21,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,140,
5,1,0,0,140,141,5,21,0,0,141,142,3,60,30,0,142,144,3,2,1,0,143,145,5,21,
0,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,148,5,20,0,0,147,
149,5,21,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,9,1,0,0,0,150,152,5,21,
0,0,151,150,1,0,0,0,151,152,1,0,0,0,152,153,1,0,0,0,153,155,5,19,0,0,154,
156,5,21,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,159,5,1,
0,0,158,160,5,21,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,220,1,0,0,0,161,
163,5,19,0,0,162,164,5,21,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,
0,0,0,165,170,3,60,30,0,166,167,5,21,0,0,167,169,3,60,30,0,168,166,1,0,0,
0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,174,1,0,0,0,172,170,
1,0,0,0,173,175,5,21,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,
176,179,5,20,0,0,177,180,3,12,6,0,178,180,3,14,7,0,179,177,1,0,0,0,179,178,
1,0,0,0,180,181,1,0,0,0,181,182,5,20,0,0,182,221,1,0,0,0,183,185,3,60,30,
0,184,186,5,21,0,0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,189,
5,19,0,0,188,190,5,21,0,0,189,188,1,0,0,0,189,190,1,0,0,0,190,191,1,0,0,
0,191,193,5,2,0,0,192,194,5,21,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,
1,0,0,0,195,197,5,19,0,0,196,198,5,21,0,0,197,196,1,0,0,0,197,198,1,0,0,
0,198,200,1,0,0,0,199,201,3,60,30,0,200,199,1,0,0,0,200,201,1,0,0,0,201,
206,1,0,0,0,202,203,5,21,0,0,203,205,3,60,30,0,204,202,1,0,0,0,205,208,1,
0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,209,
211,5,21,0,0,210,209,1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,0,212,214,5,20,
0,0,213,215,5,21,0,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,
217,3,12,6,0,217,218,5,20,0,0,218,219,5,20,0,0,219,221,1,0,0,0,220,161,1,
0,0,0,220,183,1,0,0,0,221,223,1,0,0,0,222,224,5,21,0,0,223,222,1,0,0,0,223,
224,1,0,0,0,224,11,1,0,0,0,225,227,5,21,0,0,226,225,1,0,0,0,226,227,1,0,
0,0,227,231,1,0,0,0,228,230,3,2,1,0,229,228,1,0,0,0,230,233,1,0,0,0,231,
229,1,0,0,0,231,232,1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,234,236,5,21,
0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,13,1,0,0,0,237,239,5,21,0,0,238,
237,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,242,5,19,0,0,241,243,5,21,
0,0,242,241,1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,246,5,3,0,0,245,
247,5,21,0,0,246,245,1,0,0,0,246,247,1,0,0,0,247,248,1,0,0,0,248,250,5,19,
0,0,249,251,5,21,0,0,250,249,1,0,0,0,250,251,1,0,0,0,251,261,1,0,0,0,252,
253,5,19,0,0,253,254,3,16,8,0,254,255,5,20,0,0,255,257,1,0,0,0,256,258,5,
21,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,260,1,0,0,0,259,252,1,0,0,0,260,
263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,261,1,0,
0,0,264,266,5,20,0,0,265,267,5,21,0,0,266,265,1,0,0,0,266,267,1,0,0,0,267,
268,1,0,0,0,268,270,3,12,6,0,269,271,5,21,0,0,270,269,1,0,0,0,270,271,1,
0,0,0,271,272,1,0,0,0,272,274,5,20,0,0,273,275,5,21,0,0,274,273,1,0,0,0,
274,275,1,0,0,0,275,15,1,0,0,0,276,278,5,21,0,0,277,276,1,0,0,0,277,278,
1,0,0,0,278,279,1,0,0,0,279,280,3,60,30,0,280,282,3,2,1,0,281,283,5,21,0,
0,282,281,1,0,0,0,282,283,1,0,0,0,283,17,1,0,0,0,284,286,5,21,0,0,285,284,
1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,289,5,19,0,0,288,290,5,21,0,
0,289,288,1,0,0,0,289,290,1,0,0,0,290,291,1,0,0,0,291,295,5,4,0,0,292,294,
3,2,1,0,293,292,1,0,0,0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,
296,299,1,0,0,0,297,295,1,0,0,0,298,300,5,21,0,0,299,298,1,0,0,0,299,300,
1,0,0,0,300,301,1,0,0,0,301,303,5,20,0,0,302,304,5,21,0,0,303,302,1,0,0,
0,303,304,1,0,0,0,304,19,1,0,0,0,305,307,5,21,0,0,306,305,1,0,0,0,306,307,
1,0,0,0,307,308,1,0,0,0,308,310,5,19,0,0,309,311,5,21,0,0,310,309,1,0,0,
0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,3,38,19,0,313,314,3,2,1,0,314,
316,3,2,1,0,315,317,5,21,0,0,316,315,1,0,0,0,316,317,1,0,0,0,317,318,1,0,
0,0,318,320,5,20,0,0,319,321,5,21,0,0,320,319,1,0,0,0,320,321,1,0,0,0,321,
21,1,0,0,0,322,324,5,21,0,0,323,322,1,0,0,0,323,324,1,0,0,0,324,325,1,0,
0,0,325,327,5,19,0,0,326,328,5,21,0,0,327,326,1,0,0,0,327,328,1,0,0,0,328,
329,1,0,0,0,329,330,3,40,20,0,330,331,3,2,1,0,331,333,3,2,1,0,332,334,5,
21,0,0,333,332,1,0,0,0,333,334,1,0,0,0,334,335,1,0,0,0,335,337,5,20,0,0,
336,338,5,21,0,0,337,336,1,0,0,0,337,338,1,0,0,0,338,23,1,0,0,0,339,341,
5,21,0,0,340,339,1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,344,5,19,0,
0,343,345,5,21,0,0,344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,347,
3,42,21,0,347,349,3,2,1,0,348,350,5,21,0,0,349,348,1,0,0,0,349,350,1,0,0,
0,350,351,1,0,0,0,351,353,5,20,0,0,352,354,5,21,0,0,353,352,1,0,0,0,353,
354,1,0,0,0,354,25,1,0,0,0,355,357,5,21,0,0,356,355,1,0,0,0,356,357,1,0,
0,0,357,358,1,0,0,0,358,360,5,19,0,0,359,361,5,21,0,0,360,359,1,0,0,0,360,
361,1,0,0,0,361,362,1,0,0,0,362,363,3,44,22,0,363,365,3,2,1,0,364,366,5,
21,0,0,365,364,1,0,0,0,365,366,1,0,0,0,366,367,1,0,0,0,367,369,5,20,0,0,
368,370,5,21,0,0,369,368,1,0,0,0,369,370,1,0,0,0,370,27,1,0,0,0,371,373,
5,21,0,0,372,371,1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,376,5,19,0,
0,375,377,5,21,0,0,376,375,1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,383,
3,60,30,0,379,382,3,2,1,0,380,382,3,30,15,0,381,379,1,0,0,0,381,380,1,0,
0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,387,1,0,0,0,385,
383,1,0,0,0,386,388,5,21,0,0,387,386,1,0,0,0,387,388,1,0,0,0,388,389,1,0,
0,0,389,391,5,20,0,0,390,392,5,21,0,0,391,390,1,0,0,0,391,392,1,0,0,0,392,
29,1,0,0,0,393,395,5,21,0,0,394,393,1,0,0,0,394,395,1,0,0,0,395,396,1,0,
0,0,396,398,5,19,0,0,397,399,5,21,0,0,398,397,1,0,0,0,398,399,1,0,0,0,399,
400,1,0,0,0,400,402,5,2,0,0,401,403,5,21,0,0,402,401,1,0,0,0,402,403,1,0,
0,0,403,404,1,0,0,0,404,406,5,19,0,0,405,407,5,21,0,0,406,405,1,0,0,0,406,
407,1,0,0,0,407,409,1,0,0,0,408,410,3,60,30,0,409,408,1,0,0,0,409,410,1,
0,0,0,410,415,1,0,0,0,411,412,5,21,0,0,412,414,3,60,30,0,413,411,1,0,0,0,
414,417,1,0,0,0,415,413,1,0,0,0,415,416,1,0,0,0,416,419,1,0,0,0,417,415,
1,0,0,0,418,420,5,21,0,0,419,418,1,0,0,0,419,420,1,0,0,0,420,421,1,0,0,0,
421,423,5,20,0,0,422,424,5,21,0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,432,
1,0,0,0,425,428,3,4,2,0,426,428,3,28,14,0,427,425,1,0,0,0,427,426,1,0,0,
0,428,430,1,0,0,0,429,431,5,21,0,0,430,429,1,0,0,0,430,431,1,0,0,0,431,433,
1,0,0,0,432,427,1,0,0,0,433,434,1,0,0,0,434,432,1,0,0,0,434,435,1,0,0,0,
435,436,1,0,0,0,436,438,5,20,0,0,437,439,5,21,0,0,438,437,1,0,0,0,438,439,
1,0,0,0,439,31,1,0,0,0,440,442,5,21,0,0,441,440,1,0,0,0,441,442,1,0,0,0,
442,443,1,0,0,0,443,445,5,19,0,0,444,446,5,21,0,0,445,444,1,0,0,0,445,446,
1,0,0,0,446,447,1,0,0,0,447,452,5,5,0,0,448,453,3,2,1,0,449,453,3,6,3,0,
450,453,3,22,11,0,451,453,3,26,13,0,452,448,1,0,0,0,452,449,1,0,0,0,452,
450,1,0,0,0,452,451,1,0,0,0,453,454,1,0,0,0,454,455,3,2,1,0,455,457,3,2,
1,0,456,458,5,21,0,0,457,456,1,0,0,0,457,458,1,0,0,0,458,459,1,0,0,0,459,
461,5,20,0,0,460,462,5,21,0,0,461,460,1,0,0,0,461,462,1,0,0,0,462,33,1,0,
0,0,463,464,5,12,0,0,464,35,1,0,0,0,465,466,5,13,0,0,466,37,1,0,0,0,467,
468,5,14,0,0,468,39,1,0,0,0,469,470,5,15,0,0,470,41,1,0,0,0,471,472,5,16,
0,0,472,43,1,0,0,0,473,474,5,17,0,0,474,45,1,0,0,0,475,477,5,21,0,0,476,
475,1,0,0,0,476,477,1,0,0,0,477,478,1,0,0,0,478,480,5,19,0,0,479,481,5,21,
0,0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,483,5,6,0,0,483,
484,5,21,0,0,484,486,3,16,8,0,485,487,5,21,0,0,486,485,1,0,0,0,486,487,1,
0,0,0,487,488,1,0,0,0,488,490,5,20,0,0,489,491,5,21,0,0,490,489,1,0,0,0,
490,491,1,0,0,0,491,47,1,0,0,0,492,494,5,21,0,0,493,492,1,0,0,0,493,494,
1,0,0,0,494,495,1,0,0,0,495,497,5,19,0,0,496,498,5,21,0,0,497,496,1,0,0,
0,497,498,1,0,0,0,498,499,1,0,0,0,499,512,5,7,0,0,500,511,3,20,10,0,501,
511,3,4,2,0,502,503,5,21,0,0,503,511,3,58,29,0,504,505,5,21,0,0,505,511,
3,60,30,0,506,511,3,28,14,0,507,511,3,24,12,0,508,511,3,18,9,0,509,511,3,
32,16,0,510,500,1,0,0,0,510,501,1,0,0,0,510,502,1,0,0,0,510,504,1,0,0,0,
510,506,1,0,0,0,510,507,1,0,0,0,510,508,1,0,0,0,510,509,1,0,0,0,511,514,
1,0,0,0,512,510,1,0,0,0,512,513,1,0,0,0,513,516,1,0,0,0,514,512,1,0,0,0,
515,517,5,21,0,0,516,515,1,0,0,0,516,517,1,0,0,0,517,518,1,0,0,0,518,520,
5,20,0,0,519,521,5,21,0,0,520,519,1,0,0,0,520,521,1,0,0,0,521,49,1,0,0,0,
522,524,5,21,0,0,523,522,1,0,0,0,523,524,1,0,0,0,524,525,1,0,0,0,525,527,
5,19,0,0,526,528,5,21,0,0,527,526,1,0,0,0,527,528,1,0,0,0,528,529,1,0,0,
0,529,533,5,8,0,0,530,532,3,2,1,0,531,530,1,0,0,0,532,535,1,0,0,0,533,531,
1,0,0,0,533,534,1,0,0,0,534,537,1,0,0,0,535,533,1,0,0,0,536,538,5,21,0,0,
537,536,1,0,0,0,537,538,1,0,0,0,538,539,1,0,0,0,539,541,5,20,0,0,540,542,
5,21,0,0,541,540,1,0,0,0,541,542,1,0,0,0,542,51,1,0,0,0,543,545,5,21,0,0,
544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,548,5,19,0,0,547,549,
5,21,0,0,548,547,1,0,0,0,548,549,1,0,0,0,549,550,1,0,0,0,550,551,5,9,0,0,
551,553,3,2,1,0,552,554,5,21,0,0,553,552,1,0,0,0,553,554,1,0,0,0,554,555,
1,0,0,0,555,557,5,20,0,0,556,558,5,21,0,0,557,556,1,0,0,0,557,558,1,0,0,
0,558,53,1,0,0,0,559,561,5,21,0,0,560,559,1,0,0,0,560,561,1,0,0,0,561,562,
1,0,0,0,562,564,5,19,0,0,563,565,5,21,0,0,564,563,1,0,0,0,564,565,1,0,0,
0,565,566,1,0,0,0,566,567,5,10,0,0,567,568,5,21,0,0,568,570,3,60,30,0,569,
571,5,21,0,0,570,569,1,0,0,0,570,571,1,0,0,0,571,572,1,0,0,0,572,574,5,20,
0,0,573,575,5,21,0,0,574,573,1,0,0,0,574,575,1,0,0,0,575,55,1,0,0,0,576,
578,5,21,0,0,577,576,1,0,0,0,577,578,1,0,0,0,578,579,1,0,0,0,579,581,5,19,
0,0,580,582,5,21,0,0,581,580,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,
588,5,11,0,0,584,589,3,2,1,0,585,589,3,6,3,0,586,589,3,22,11,0,587,589,3,
26,13,0,588,584,1,0,0,0,588,585,1,0,0,0,588,586,1,0,0,0,588,587,1,0,0,0,
589,593,1,0,0,0,590,592,3,2,1,0,591,590,1,0,0,0,592,595,1,0,0,0,593,591,
1,0,0,0,593,594,1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,596,598,5,21,0,0,
597,596,1,0,0,0,597,598,1,0,0,0,598,599,1,0,0,0,599,601,5,20,0,0,600,602,
5,21,0,0,601,600,1,0,0,0,601,602,1,0,0,0,602,57,1,0,0,0,603,604,7,0,0,0,
604,59,1,0,0,0,605,606,5,18,0,0,606,61,1,0,0,0,122,68,70,89,92,96,102,105,
109,112,116,121,123,126,130,133,137,144,148,151,155,159,163,170,174,179,
185,189,193,197,200,206,210,214,220,223,226,231,235,238,242,246,250,257,
261,266,270,274,277,282,285,289,295,299,303,306,310,316,320,323,327,333,
337,340,344,349,353,356,360,365,369,372,376,381,383,387,391,394,398,402,
406,409,415,419,423,427,430,434,438,441,445,452,457,461,476,480,486,490,
493,497,510,512,516,520,523,527,533,537,541,544,548,553,557,560,564,570,
574,577,581,588,593,597,601];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SchemeLikeLParser extends antlr4.Parser {

    static grammarFileName = "SchemeLikeL.g4";
    static literalNames = [ null, "'define'", "'lambda'", "'let*'", "'begin'", 
                            "'if'", "'set!'", "'vector'", "'list'", "'display'", 
                            "'export'", "'while'", null, null, null, null, 
                            null, "'null?'", null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "OPERATOR", "LOGOPERATOR", 
                             "BIOPERATOR", "LOGBIOPERATOR", "UNIOPERATOR", 
                             "LOGUNIOPERATOR", "VARIABLE", "PSTART", "PEND", 
                             "SPACE", "FLOAT", "INT", "NFLOAT", "NINT", 
                             "WS" ];
    static ruleNames = [ "start", "sExpr", "expr", "logExpr", "defineGlobalVar", 
                         "defineFnc", "fncBodyExpr", "localFncBodyExpr", 
                         "varPairExpr", "beginExpr", "biExpr", "logBiExpr", 
                         "uniExpr", "logUniExpr", "callFnc", "callLambdaFnc", 
                         "ifExpr", "operatorExpr", "logOperatorExpr", "biOperatorExpr", 
                         "logBiOperatorExpr", "uniOperatorExpr", "logUniOperatorExpr", 
                         "setExpr", "vectorExpr", "listExpr", "displayExpr", 
                         "exportExpr", "whileExpr", "literal", "identifier" ];

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
	        this.state = 68; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 68;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 62;
	                this.sExpr();
	                break;

	            case 2:
	                this.state = 63;
	                this.literal();
	                break;

	            case 3:
	                this.state = 64;
	                this.identifier();
	                break;

	            case 4:
	                this.state = 65;
	                this.defineGlobalVar();
	                break;

	            case 5:
	                this.state = 66;
	                this.defineFnc();
	                break;

	            case 6:
	                this.state = 67;
	                this.exportExpr();
	                break;

	            }
	            this.state = 70; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65798144) !== 0));
	        this.state = 72;
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



	sExpr() {
	    let localctx = new SExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SchemeLikeLParser.RULE_sExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 74;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 75;
	            this.expr();
	            break;

	        case 3:
	            this.state = 76;
	            this.match(SchemeLikeLParser.SPACE);
	            this.state = 77;
	            this.literal();
	            break;

	        case 4:
	            this.state = 78;
	            this.match(SchemeLikeLParser.SPACE);
	            this.state = 79;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 80;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 81;
	            this.uniExpr();
	            break;

	        case 7:
	            this.state = 82;
	            this.beginExpr();
	            break;

	        case 8:
	            this.state = 83;
	            this.ifExpr();
	            break;

	        case 9:
	            this.state = 84;
	            this.vectorExpr();
	            break;

	        case 10:
	            this.state = 85;
	            this.listExpr();
	            break;

	        case 11:
	            this.state = 86;
	            this.setExpr();
	            break;

	        case 12:
	            this.state = 87;
	            this.displayExpr();
	            break;

	        case 13:
	            this.state = 88;
	            this.whileExpr();
	            break;

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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SchemeLikeLParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 91;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 94;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 95;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 98;
	        this.operatorExpr();
	        this.state = 100; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 99;
	        		this.sExpr();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 102; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 104;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 107;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 108;
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



	logExpr() {
	    let localctx = new LogExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SchemeLikeLParser.RULE_logExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 111;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 114;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 115;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 118;
	        this.logOperatorExpr();
	        this.state = 121; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 121;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 119;
	        		    this.logUniExpr();
	        		    break;

	        		case 2:
	        		    this.state = 120;
	        		    this.logBiExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 123; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 125;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 128;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 129;
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
	    this.enterRule(localctx, 8, SchemeLikeLParser.RULE_defineGlobalVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 132;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 135;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 136;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 139;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 140;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 141;
	        this.identifier();
	        this.state = 142;
	        this.sExpr();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 143;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 146;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 147;
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
	    this.enterRule(localctx, 10, SchemeLikeLParser.RULE_defineFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 150;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 153;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 154;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 157;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 158;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 220;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 161;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 162;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 165;
	            this.identifier();
	            this.state = 170;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 166;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 167;
	                    this.identifier(); 
	                }
	                this.state = 172;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 173;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 176;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 179;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 177;
	                this.fncBodyExpr();
	                break;

	            case 2:
	                this.state = 178;
	                this.localFncBodyExpr();
	                break;

	            }
	            this.state = 181;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        case 18:
	            this.state = 183;
	            this.identifier();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 184;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 187;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 188;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 191;
	            this.match(SchemeLikeLParser.T__1);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 192;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 195;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 197;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 196;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 199;
	                this.identifier();
	            }

	            this.state = 206;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 202;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 203;
	                    this.identifier(); 
	                }
	                this.state = 208;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	            }

	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 209;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 212;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 214;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            if(la_===1) {
	                this.state = 213;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 216;
	            this.fncBodyExpr();
	            this.state = 217;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 218;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 222;
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
	    this.enterRule(localctx, 12, SchemeLikeLParser.RULE_fncBodyExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        if(la_===1) {
	            this.state = 225;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 228;
	                this.sExpr(); 
	            }
	            this.state = 233;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
	        }

	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        if(la_===1) {
	            this.state = 234;
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



	localFncBodyExpr() {
	    let localctx = new LocalFncBodyExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SchemeLikeLParser.RULE_localFncBodyExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 237;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 240;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 241;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 244;
	        this.match(SchemeLikeLParser.T__2);
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 245;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 248;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 249;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 252;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 253;
	            this.varPairExpr();
	            this.state = 254;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 256;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 264;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 266;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        if(la_===1) {
	            this.state = 265;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 268;
	        this.fncBodyExpr();
	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 269;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 272;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 273;
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
	    this.enterRule(localctx, 16, SchemeLikeLParser.RULE_varPairExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 276;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 279;
	        this.identifier();
	        this.state = 280;
	        this.sExpr();
	        this.state = 282;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        if(la_===1) {
	            this.state = 281;
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
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 284;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 287;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 288;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 291;
	        this.match(SchemeLikeLParser.T__3);
	        this.state = 295;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 292;
	                this.sExpr(); 
	            }
	            this.state = 297;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
	        }

	        this.state = 299;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 298;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 301;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 303;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        if(la_===1) {
	            this.state = 302;
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



	biExpr() {
	    let localctx = new BiExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SchemeLikeLParser.RULE_biExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 305;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 308;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 309;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 312;
	        this.biOperatorExpr();
	        this.state = 313;
	        this.sExpr();
	        this.state = 314;
	        this.sExpr();
	        this.state = 316;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 315;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 318;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        if(la_===1) {
	            this.state = 319;
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



	logBiExpr() {
	    let localctx = new LogBiExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SchemeLikeLParser.RULE_logBiExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 322;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 325;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 326;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 329;
	        this.logBiOperatorExpr();
	        this.state = 330;
	        this.sExpr();
	        this.state = 331;
	        this.sExpr();
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 332;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 335;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 337;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        if(la_===1) {
	            this.state = 336;
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
	    this.enterRule(localctx, 24, SchemeLikeLParser.RULE_uniExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 339;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 342;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 344;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 343;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 346;
	        this.uniOperatorExpr();
	        this.state = 347;
	        this.sExpr();
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 348;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 351;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	        if(la_===1) {
	            this.state = 352;
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



	logUniExpr() {
	    let localctx = new LogUniExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SchemeLikeLParser.RULE_logUniExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 355;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 358;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 359;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 362;
	        this.logUniOperatorExpr();
	        this.state = 363;
	        this.sExpr();
	        this.state = 365;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 364;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 367;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 369;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
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



	callFnc() {
	    let localctx = new CallFncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SchemeLikeLParser.RULE_callFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 371;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 374;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 376;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 375;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 378;
	        this.identifier();
	        this.state = 383;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,73,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 381;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 379;
	                    this.sExpr();
	                    break;

	                case 2:
	                    this.state = 380;
	                    this.callLambdaFnc();
	                    break;

	                } 
	            }
	            this.state = 385;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,73,this._ctx);
	        }

	        this.state = 387;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 386;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 389;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 391;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,75,this._ctx);
	        if(la_===1) {
	            this.state = 390;
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
	    this.enterRule(localctx, 30, SchemeLikeLParser.RULE_callLambdaFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 394;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 393;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 396;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 397;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 400;
	        this.match(SchemeLikeLParser.T__1);
	        this.state = 402;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 401;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 404;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 406;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
	        if(la_===1) {
	            this.state = 405;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 408;
	            this.identifier();
	        }

	        this.state = 415;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,81,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 411;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 412;
	                this.identifier(); 
	            }
	            this.state = 417;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,81,this._ctx);
	        }

	        this.state = 419;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 418;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 421;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 423;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
	        if(la_===1) {
	            this.state = 422;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 432; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 427;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,84,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 425;
	                this.expr();
	                break;

	            case 2:
	                this.state = 426;
	                this.callFnc();
	                break;

	            }
	            this.state = 430;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,85,this._ctx);
	            if(la_===1) {
	                this.state = 429;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 434; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===19 || _la===21);
	        this.state = 436;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 438;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,87,this._ctx);
	        if(la_===1) {
	            this.state = 437;
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
	    this.enterRule(localctx, 32, SchemeLikeLParser.RULE_ifExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 440;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 443;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 444;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 447;
	        this.match(SchemeLikeLParser.T__4);
	        this.state = 452;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 448;
	            this.sExpr();
	            break;

	        case 2:
	            this.state = 449;
	            this.logExpr();
	            break;

	        case 3:
	            this.state = 450;
	            this.logBiExpr();
	            break;

	        case 4:
	            this.state = 451;
	            this.logUniExpr();
	            break;

	        }
	        this.state = 454;
	        this.sExpr();
	        this.state = 455;
	        this.sExpr();
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 456;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 459;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 461;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,92,this._ctx);
	        if(la_===1) {
	            this.state = 460;
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
	    this.enterRule(localctx, 34, SchemeLikeLParser.RULE_operatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
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



	logOperatorExpr() {
	    let localctx = new LogOperatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SchemeLikeLParser.RULE_logOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        this.match(SchemeLikeLParser.LOGOPERATOR);
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
	    this.enterRule(localctx, 38, SchemeLikeLParser.RULE_biOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
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



	logBiOperatorExpr() {
	    let localctx = new LogBiOperatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SchemeLikeLParser.RULE_logBiOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.match(SchemeLikeLParser.LOGBIOPERATOR);
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
	    this.enterRule(localctx, 42, SchemeLikeLParser.RULE_uniOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471;
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



	logUniOperatorExpr() {
	    let localctx = new LogUniOperatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SchemeLikeLParser.RULE_logUniOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 473;
	        this.match(SchemeLikeLParser.LOGUNIOPERATOR);
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
	    this.enterRule(localctx, 46, SchemeLikeLParser.RULE_setExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 475;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 478;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 479;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 482;
	        this.match(SchemeLikeLParser.T__5);
	        this.state = 483;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 484;
	        this.varPairExpr();
	        this.state = 486;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 485;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 488;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 490;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,96,this._ctx);
	        if(la_===1) {
	            this.state = 489;
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
	    this.enterRule(localctx, 48, SchemeLikeLParser.RULE_vectorExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 493;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 492;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 495;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 497;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 496;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 499;
	        this.match(SchemeLikeLParser.T__6);
	        this.state = 512;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,100,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 510;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,99,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 500;
	                    this.biExpr();
	                    break;

	                case 2:
	                    this.state = 501;
	                    this.expr();
	                    break;

	                case 3:
	                    this.state = 502;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 503;
	                    this.literal();
	                    break;

	                case 4:
	                    this.state = 504;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 505;
	                    this.identifier();
	                    break;

	                case 5:
	                    this.state = 506;
	                    this.callFnc();
	                    break;

	                case 6:
	                    this.state = 507;
	                    this.uniExpr();
	                    break;

	                case 7:
	                    this.state = 508;
	                    this.beginExpr();
	                    break;

	                case 8:
	                    this.state = 509;
	                    this.ifExpr();
	                    break;

	                } 
	            }
	            this.state = 514;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,100,this._ctx);
	        }

	        this.state = 516;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 515;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 518;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 520;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,102,this._ctx);
	        if(la_===1) {
	            this.state = 519;
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
	    this.enterRule(localctx, 50, SchemeLikeLParser.RULE_listExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 522;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 525;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 527;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 526;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 529;
	        this.match(SchemeLikeLParser.T__7);
	        this.state = 533;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,105,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 530;
	                this.sExpr(); 
	            }
	            this.state = 535;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,105,this._ctx);
	        }

	        this.state = 537;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 536;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 539;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 541;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,107,this._ctx);
	        if(la_===1) {
	            this.state = 540;
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
	    this.enterRule(localctx, 52, SchemeLikeLParser.RULE_displayExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 543;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 546;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 548;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 547;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 550;
	        this.match(SchemeLikeLParser.T__8);
	        this.state = 551;
	        this.sExpr();
	        this.state = 553;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 552;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 555;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 557;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,111,this._ctx);
	        if(la_===1) {
	            this.state = 556;
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



	exportExpr() {
	    let localctx = new ExportExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SchemeLikeLParser.RULE_exportExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 560;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 559;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 562;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 563;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 566;
	        this.match(SchemeLikeLParser.T__9);
	        this.state = 567;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 568;
	        this.identifier();
	        this.state = 570;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 569;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 572;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 574;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,115,this._ctx);
	        if(la_===1) {
	            this.state = 573;
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



	whileExpr() {
	    let localctx = new WhileExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SchemeLikeLParser.RULE_whileExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 576;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 579;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 581;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 580;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 583;
	        this.match(SchemeLikeLParser.T__10);
	        this.state = 588;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,118,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 584;
	            this.sExpr();
	            break;

	        case 2:
	            this.state = 585;
	            this.logExpr();
	            break;

	        case 3:
	            this.state = 586;
	            this.logBiExpr();
	            break;

	        case 4:
	            this.state = 587;
	            this.logUniExpr();
	            break;

	        }
	        this.state = 593;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,119,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 590;
	                this.sExpr(); 
	            }
	            this.state = 595;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,119,this._ctx);
	        }

	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 596;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 599;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 601;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,121,this._ctx);
	        if(la_===1) {
	            this.state = 600;
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
	    this.enterRule(localctx, 58, SchemeLikeLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 603;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
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
	    this.enterRule(localctx, 60, SchemeLikeLParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 605;
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
SchemeLikeLParser.T__9 = 10;
SchemeLikeLParser.T__10 = 11;
SchemeLikeLParser.OPERATOR = 12;
SchemeLikeLParser.LOGOPERATOR = 13;
SchemeLikeLParser.BIOPERATOR = 14;
SchemeLikeLParser.LOGBIOPERATOR = 15;
SchemeLikeLParser.UNIOPERATOR = 16;
SchemeLikeLParser.LOGUNIOPERATOR = 17;
SchemeLikeLParser.VARIABLE = 18;
SchemeLikeLParser.PSTART = 19;
SchemeLikeLParser.PEND = 20;
SchemeLikeLParser.SPACE = 21;
SchemeLikeLParser.FLOAT = 22;
SchemeLikeLParser.INT = 23;
SchemeLikeLParser.NFLOAT = 24;
SchemeLikeLParser.NINT = 25;
SchemeLikeLParser.WS = 26;

SchemeLikeLParser.RULE_start = 0;
SchemeLikeLParser.RULE_sExpr = 1;
SchemeLikeLParser.RULE_expr = 2;
SchemeLikeLParser.RULE_logExpr = 3;
SchemeLikeLParser.RULE_defineGlobalVar = 4;
SchemeLikeLParser.RULE_defineFnc = 5;
SchemeLikeLParser.RULE_fncBodyExpr = 6;
SchemeLikeLParser.RULE_localFncBodyExpr = 7;
SchemeLikeLParser.RULE_varPairExpr = 8;
SchemeLikeLParser.RULE_beginExpr = 9;
SchemeLikeLParser.RULE_biExpr = 10;
SchemeLikeLParser.RULE_logBiExpr = 11;
SchemeLikeLParser.RULE_uniExpr = 12;
SchemeLikeLParser.RULE_logUniExpr = 13;
SchemeLikeLParser.RULE_callFnc = 14;
SchemeLikeLParser.RULE_callLambdaFnc = 15;
SchemeLikeLParser.RULE_ifExpr = 16;
SchemeLikeLParser.RULE_operatorExpr = 17;
SchemeLikeLParser.RULE_logOperatorExpr = 18;
SchemeLikeLParser.RULE_biOperatorExpr = 19;
SchemeLikeLParser.RULE_logBiOperatorExpr = 20;
SchemeLikeLParser.RULE_uniOperatorExpr = 21;
SchemeLikeLParser.RULE_logUniOperatorExpr = 22;
SchemeLikeLParser.RULE_setExpr = 23;
SchemeLikeLParser.RULE_vectorExpr = 24;
SchemeLikeLParser.RULE_listExpr = 25;
SchemeLikeLParser.RULE_displayExpr = 26;
SchemeLikeLParser.RULE_exportExpr = 27;
SchemeLikeLParser.RULE_whileExpr = 28;
SchemeLikeLParser.RULE_literal = 29;
SchemeLikeLParser.RULE_identifier = 30;

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

	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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

	exportExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExportExprContext);
	    } else {
	        return this.getTypedRuleContext(ExportExprContext,i);
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



class SExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_sExpr;
    }

	biExpr() {
	    return this.getTypedRuleContext(BiExprContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	callFnc() {
	    return this.getTypedRuleContext(CallFncContext,0);
	};

	uniExpr() {
	    return this.getTypedRuleContext(UniExprContext,0);
	};

	beginExpr() {
	    return this.getTypedRuleContext(BeginExprContext,0);
	};

	ifExpr() {
	    return this.getTypedRuleContext(IfExprContext,0);
	};

	vectorExpr() {
	    return this.getTypedRuleContext(VectorExprContext,0);
	};

	listExpr() {
	    return this.getTypedRuleContext(ListExprContext,0);
	};

	setExpr() {
	    return this.getTypedRuleContext(SetExprContext,0);
	};

	displayExpr() {
	    return this.getTypedRuleContext(DisplayExprContext,0);
	};

	whileExpr() {
	    return this.getTypedRuleContext(WhileExprContext,0);
	};

	SPACE() {
	    return this.getToken(SchemeLikeLParser.SPACE, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterSExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitSExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitSExpr(this);
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


	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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



class LogExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_logExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	logOperatorExpr() {
	    return this.getTypedRuleContext(LogOperatorExprContext,0);
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


	logUniExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogUniExprContext);
	    } else {
	        return this.getTypedRuleContext(LogUniExprContext,i);
	    }
	};

	logBiExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogBiExprContext);
	    } else {
	        return this.getTypedRuleContext(LogBiExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLogExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLogExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLogExpr(this);
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


	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	sExpr() {
	    return this.getTypedRuleContext(SExprContext,0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
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


	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	sExpr() {
	    return this.getTypedRuleContext(SExprContext,0);
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


	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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

	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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



class LogBiExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_logBiExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	logBiOperatorExpr() {
	    return this.getTypedRuleContext(LogBiOperatorExprContext,0);
	};

	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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


	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLogBiExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLogBiExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLogBiExpr(this);
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

	sExpr() {
	    return this.getTypedRuleContext(SExprContext,0);
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



class LogUniExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_logUniExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	logUniOperatorExpr() {
	    return this.getTypedRuleContext(LogUniOperatorExprContext,0);
	};

	sExpr() {
	    return this.getTypedRuleContext(SExprContext,0);
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


	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLogUniExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLogUniExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLogUniExpr(this);
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

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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


	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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

	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
	    }
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	logExpr() {
	    return this.getTypedRuleContext(LogExprContext,0);
	};

	logBiExpr() {
	    return this.getTypedRuleContext(LogBiExprContext,0);
	};

	logUniExpr() {
	    return this.getTypedRuleContext(LogUniExprContext,0);
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



class LogOperatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_logOperatorExpr;
    }

	LOGOPERATOR() {
	    return this.getToken(SchemeLikeLParser.LOGOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLogOperatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLogOperatorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLogOperatorExpr(this);
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



class LogBiOperatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_logBiOperatorExpr;
    }

	LOGBIOPERATOR() {
	    return this.getToken(SchemeLikeLParser.LOGBIOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLogBiOperatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLogBiOperatorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLogBiOperatorExpr(this);
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



class LogUniOperatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_logUniOperatorExpr;
    }

	LOGUNIOPERATOR() {
	    return this.getToken(SchemeLikeLParser.LOGUNIOPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterLogUniOperatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLogUniOperatorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLogUniOperatorExpr(this);
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

	uniExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UniExprContext);
	    } else {
	        return this.getTypedRuleContext(UniExprContext,i);
	    }
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


	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
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

	sExpr() {
	    return this.getTypedRuleContext(SExprContext,0);
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



class ExportExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_exportExpr;
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


	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterExportExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitExportExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitExportExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_whileExpr;
    }

	PSTART() {
	    return this.getToken(SchemeLikeLParser.PSTART, 0);
	};

	PEND() {
	    return this.getToken(SchemeLikeLParser.PEND, 0);
	};

	sExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SExprContext);
	    } else {
	        return this.getTypedRuleContext(SExprContext,i);
	    }
	};

	logExpr() {
	    return this.getTypedRuleContext(LogExprContext,0);
	};

	logBiExpr() {
	    return this.getTypedRuleContext(LogBiExprContext,0);
	};

	logUniExpr() {
	    return this.getTypedRuleContext(LogUniExprContext,0);
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


	enterRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.enterWhileExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitWhileExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitWhileExpr(this);
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
SchemeLikeLParser.SExprContext = SExprContext; 
SchemeLikeLParser.ExprContext = ExprContext; 
SchemeLikeLParser.LogExprContext = LogExprContext; 
SchemeLikeLParser.DefineGlobalVarContext = DefineGlobalVarContext; 
SchemeLikeLParser.DefineFncContext = DefineFncContext; 
SchemeLikeLParser.FncBodyExprContext = FncBodyExprContext; 
SchemeLikeLParser.LocalFncBodyExprContext = LocalFncBodyExprContext; 
SchemeLikeLParser.VarPairExprContext = VarPairExprContext; 
SchemeLikeLParser.BeginExprContext = BeginExprContext; 
SchemeLikeLParser.BiExprContext = BiExprContext; 
SchemeLikeLParser.LogBiExprContext = LogBiExprContext; 
SchemeLikeLParser.UniExprContext = UniExprContext; 
SchemeLikeLParser.LogUniExprContext = LogUniExprContext; 
SchemeLikeLParser.CallFncContext = CallFncContext; 
SchemeLikeLParser.CallLambdaFncContext = CallLambdaFncContext; 
SchemeLikeLParser.IfExprContext = IfExprContext; 
SchemeLikeLParser.OperatorExprContext = OperatorExprContext; 
SchemeLikeLParser.LogOperatorExprContext = LogOperatorExprContext; 
SchemeLikeLParser.BiOperatorExprContext = BiOperatorExprContext; 
SchemeLikeLParser.LogBiOperatorExprContext = LogBiOperatorExprContext; 
SchemeLikeLParser.UniOperatorExprContext = UniOperatorExprContext; 
SchemeLikeLParser.LogUniOperatorExprContext = LogUniOperatorExprContext; 
SchemeLikeLParser.SetExprContext = SetExprContext; 
SchemeLikeLParser.VectorExprContext = VectorExprContext; 
SchemeLikeLParser.ListExprContext = ListExprContext; 
SchemeLikeLParser.DisplayExprContext = DisplayExprContext; 
SchemeLikeLParser.ExportExprContext = ExportExprContext; 
SchemeLikeLParser.WhileExprContext = WhileExprContext; 
SchemeLikeLParser.LiteralContext = LiteralContext; 
SchemeLikeLParser.IdentifierContext = IdentifierContext; 
