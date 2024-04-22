// Generated from SchemeLikeL.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from './antlr4/index.web.js';
import SchemeLikeLListener from './SchemeLikeLListener.js';
import SchemeLikeLVisitor from './SchemeLikeLVisitor.js';

const serializedATN = [4,1,25,575,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,1,0,1,0,1,0,4,0,67,8,0,11,0,12,0,68,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,87,8,
1,1,2,3,2,90,8,2,1,2,1,2,3,2,94,8,2,1,2,1,2,4,2,98,8,2,11,2,12,2,99,1,2,
3,2,103,8,2,1,2,1,2,3,2,107,8,2,1,3,3,3,110,8,3,1,3,1,3,3,3,114,8,3,1,3,
1,3,1,3,4,3,119,8,3,11,3,12,3,120,1,3,3,3,124,8,3,1,3,1,3,3,3,128,8,3,1,
4,3,4,131,8,4,1,4,1,4,3,4,135,8,4,1,4,1,4,1,4,1,4,1,4,3,4,142,8,4,1,4,1,
4,3,4,146,8,4,1,5,3,5,149,8,5,1,5,1,5,3,5,153,8,5,1,5,1,5,3,5,157,8,5,1,
5,1,5,3,5,161,8,5,1,5,1,5,1,5,5,5,166,8,5,10,5,12,5,169,9,5,1,5,3,5,172,
8,5,1,5,1,5,1,5,3,5,177,8,5,1,5,1,5,1,5,1,5,3,5,183,8,5,1,5,1,5,3,5,187,
8,5,1,5,1,5,3,5,191,8,5,1,5,1,5,3,5,195,8,5,1,5,3,5,198,8,5,1,5,1,5,5,5,
202,8,5,10,5,12,5,205,9,5,1,5,3,5,208,8,5,1,5,1,5,3,5,212,8,5,1,5,1,5,1,
5,1,5,3,5,218,8,5,1,6,3,6,221,8,6,1,6,5,6,224,8,6,10,6,12,6,227,9,6,1,6,
3,6,230,8,6,1,7,3,7,233,8,7,1,7,1,7,3,7,237,8,7,1,7,1,7,3,7,241,8,7,1,7,
1,7,3,7,245,8,7,1,7,1,7,1,7,1,7,1,7,3,7,252,8,7,5,7,254,8,7,10,7,12,7,257,
9,7,1,7,1,7,3,7,261,8,7,1,7,1,7,3,7,265,8,7,1,7,1,7,3,7,269,8,7,1,8,3,8,
272,8,8,1,8,1,8,1,8,3,8,277,8,8,1,9,3,9,280,8,9,1,9,1,9,3,9,284,8,9,1,9,
1,9,5,9,288,8,9,10,9,12,9,291,9,9,1,9,3,9,294,8,9,1,9,1,9,3,9,298,8,9,1,
10,3,10,301,8,10,1,10,1,10,3,10,305,8,10,1,10,1,10,1,10,1,10,3,10,311,8,
10,1,10,1,10,3,10,315,8,10,1,11,3,11,318,8,11,1,11,1,11,3,11,322,8,11,1,
11,1,11,1,11,1,11,3,11,328,8,11,1,11,1,11,3,11,332,8,11,1,12,3,12,335,8,
12,1,12,1,12,3,12,339,8,12,1,12,1,12,1,12,3,12,344,8,12,1,12,1,12,3,12,348,
8,12,1,13,3,13,351,8,13,1,13,1,13,3,13,355,8,13,1,13,1,13,1,13,3,13,360,
8,13,1,13,1,13,3,13,364,8,13,1,14,3,14,367,8,14,1,14,1,14,3,14,371,8,14,
1,14,1,14,1,14,5,14,376,8,14,10,14,12,14,379,9,14,1,14,3,14,382,8,14,1,14,
1,14,3,14,386,8,14,1,15,3,15,389,8,15,1,15,1,15,3,15,393,8,15,1,15,1,15,
3,15,397,8,15,1,15,1,15,3,15,401,8,15,1,15,3,15,404,8,15,1,15,1,15,5,15,
408,8,15,10,15,12,15,411,9,15,1,15,3,15,414,8,15,1,15,1,15,3,15,418,8,15,
1,15,1,15,3,15,422,8,15,1,15,3,15,425,8,15,4,15,427,8,15,11,15,12,15,428,
1,15,1,15,3,15,433,8,15,1,16,3,16,436,8,16,1,16,1,16,3,16,440,8,16,1,16,
1,16,1,16,1,16,1,16,3,16,447,8,16,1,16,1,16,1,16,3,16,452,8,16,1,16,1,16,
3,16,456,8,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,
1,23,3,23,471,8,23,1,23,1,23,3,23,475,8,23,1,23,1,23,1,23,1,23,3,23,481,
8,23,1,23,1,23,3,23,485,8,23,1,24,3,24,488,8,24,1,24,1,24,3,24,492,8,24,
1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,5,24,505,8,24,10,
24,12,24,508,9,24,1,24,3,24,511,8,24,1,24,1,24,3,24,515,8,24,1,25,3,25,518,
8,25,1,25,1,25,3,25,522,8,25,1,25,1,25,5,25,526,8,25,10,25,12,25,529,9,25,
1,25,3,25,532,8,25,1,25,1,25,3,25,536,8,25,1,26,3,26,539,8,26,1,26,1,26,
3,26,543,8,26,1,26,1,26,1,26,3,26,548,8,26,1,26,1,26,3,26,552,8,26,1,27,
3,27,555,8,27,1,27,1,27,3,27,559,8,27,1,27,1,27,1,27,1,27,3,27,565,8,27,
1,27,1,27,3,27,569,8,27,1,28,1,28,1,29,1,29,1,29,0,0,30,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,0,1,
1,0,21,24,681,0,66,1,0,0,0,2,86,1,0,0,0,4,89,1,0,0,0,6,109,1,0,0,0,8,130,
1,0,0,0,10,148,1,0,0,0,12,220,1,0,0,0,14,232,1,0,0,0,16,271,1,0,0,0,18,279,
1,0,0,0,20,300,1,0,0,0,22,317,1,0,0,0,24,334,1,0,0,0,26,350,1,0,0,0,28,366,
1,0,0,0,30,388,1,0,0,0,32,435,1,0,0,0,34,457,1,0,0,0,36,459,1,0,0,0,38,461,
1,0,0,0,40,463,1,0,0,0,42,465,1,0,0,0,44,467,1,0,0,0,46,470,1,0,0,0,48,487,
1,0,0,0,50,517,1,0,0,0,52,538,1,0,0,0,54,554,1,0,0,0,56,570,1,0,0,0,58,572,
1,0,0,0,60,67,3,2,1,0,61,67,3,56,28,0,62,67,3,58,29,0,63,67,3,8,4,0,64,67,
3,10,5,0,65,67,3,54,27,0,66,60,1,0,0,0,66,61,1,0,0,0,66,62,1,0,0,0,66,63,
1,0,0,0,66,64,1,0,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,
0,0,0,69,70,1,0,0,0,70,71,5,0,0,1,71,1,1,0,0,0,72,87,3,20,10,0,73,87,3,4,
2,0,74,75,5,20,0,0,75,87,3,56,28,0,76,77,5,20,0,0,77,87,3,58,29,0,78,87,
3,28,14,0,79,87,3,24,12,0,80,87,3,18,9,0,81,87,3,32,16,0,82,87,3,48,24,0,
83,87,3,50,25,0,84,87,3,46,23,0,85,87,3,52,26,0,86,72,1,0,0,0,86,73,1,0,
0,0,86,74,1,0,0,0,86,76,1,0,0,0,86,78,1,0,0,0,86,79,1,0,0,0,86,80,1,0,0,
0,86,81,1,0,0,0,86,82,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,
87,3,1,0,0,0,88,90,5,20,0,0,89,88,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,
93,5,18,0,0,92,94,5,20,0,0,93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,
97,3,34,17,0,96,98,3,2,1,0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,
100,1,0,0,0,100,102,1,0,0,0,101,103,5,20,0,0,102,101,1,0,0,0,102,103,1,0,
0,0,103,104,1,0,0,0,104,106,5,19,0,0,105,107,5,20,0,0,106,105,1,0,0,0,106,
107,1,0,0,0,107,5,1,0,0,0,108,110,5,20,0,0,109,108,1,0,0,0,109,110,1,0,0,
0,110,111,1,0,0,0,111,113,5,18,0,0,112,114,5,20,0,0,113,112,1,0,0,0,113,
114,1,0,0,0,114,115,1,0,0,0,115,118,3,36,18,0,116,119,3,26,13,0,117,119,
3,22,11,0,118,116,1,0,0,0,118,117,1,0,0,0,119,120,1,0,0,0,120,118,1,0,0,
0,120,121,1,0,0,0,121,123,1,0,0,0,122,124,5,20,0,0,123,122,1,0,0,0,123,124,
1,0,0,0,124,125,1,0,0,0,125,127,5,19,0,0,126,128,5,20,0,0,127,126,1,0,0,
0,127,128,1,0,0,0,128,7,1,0,0,0,129,131,5,20,0,0,130,129,1,0,0,0,130,131,
1,0,0,0,131,132,1,0,0,0,132,134,5,18,0,0,133,135,5,20,0,0,134,133,1,0,0,
0,134,135,1,0,0,0,135,136,1,0,0,0,136,137,5,1,0,0,137,138,5,20,0,0,138,139,
3,58,29,0,139,141,3,2,1,0,140,142,5,20,0,0,141,140,1,0,0,0,141,142,1,0,0,
0,142,143,1,0,0,0,143,145,5,19,0,0,144,146,5,20,0,0,145,144,1,0,0,0,145,
146,1,0,0,0,146,9,1,0,0,0,147,149,5,20,0,0,148,147,1,0,0,0,148,149,1,0,0,
0,149,150,1,0,0,0,150,152,5,18,0,0,151,153,5,20,0,0,152,151,1,0,0,0,152,
153,1,0,0,0,153,154,1,0,0,0,154,156,5,1,0,0,155,157,5,20,0,0,156,155,1,0,
0,0,156,157,1,0,0,0,157,217,1,0,0,0,158,160,5,18,0,0,159,161,5,20,0,0,160,
159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,167,3,58,29,0,163,164,5,
20,0,0,164,166,3,58,29,0,165,163,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,
167,168,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,170,172,5,20,0,0,171,170,
1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,176,5,19,0,0,174,177,3,12,6,
0,175,177,3,14,7,0,176,174,1,0,0,0,176,175,1,0,0,0,177,178,1,0,0,0,178,179,
5,19,0,0,179,218,1,0,0,0,180,182,3,58,29,0,181,183,5,20,0,0,182,181,1,0,
0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,186,5,18,0,0,185,187,5,20,0,0,186,
185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,190,5,2,0,0,189,191,5,20,
0,0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,194,5,18,0,0,193,
195,5,20,0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,198,3,58,
29,0,197,196,1,0,0,0,197,198,1,0,0,0,198,203,1,0,0,0,199,200,5,20,0,0,200,
202,3,58,29,0,201,199,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,
0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,206,208,5,20,0,0,207,206,1,0,0,0,207,
208,1,0,0,0,208,209,1,0,0,0,209,211,5,19,0,0,210,212,5,20,0,0,211,210,1,
0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,3,12,6,0,214,215,5,19,0,0,
215,216,5,19,0,0,216,218,1,0,0,0,217,158,1,0,0,0,217,180,1,0,0,0,218,11,
1,0,0,0,219,221,5,20,0,0,220,219,1,0,0,0,220,221,1,0,0,0,221,225,1,0,0,0,
222,224,3,2,1,0,223,222,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,
1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,228,230,5,20,0,0,229,228,1,0,0,0,
229,230,1,0,0,0,230,13,1,0,0,0,231,233,5,20,0,0,232,231,1,0,0,0,232,233,
1,0,0,0,233,234,1,0,0,0,234,236,5,18,0,0,235,237,5,20,0,0,236,235,1,0,0,
0,236,237,1,0,0,0,237,238,1,0,0,0,238,240,5,3,0,0,239,241,5,20,0,0,240,239,
1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,244,5,18,0,0,243,245,5,20,0,
0,244,243,1,0,0,0,244,245,1,0,0,0,245,255,1,0,0,0,246,247,5,18,0,0,247,248,
3,16,8,0,248,249,5,19,0,0,249,251,1,0,0,0,250,252,5,20,0,0,251,250,1,0,0,
0,251,252,1,0,0,0,252,254,1,0,0,0,253,246,1,0,0,0,254,257,1,0,0,0,255,253,
1,0,0,0,255,256,1,0,0,0,256,258,1,0,0,0,257,255,1,0,0,0,258,260,5,19,0,0,
259,261,5,20,0,0,260,259,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,264,
3,12,6,0,263,265,5,20,0,0,264,263,1,0,0,0,264,265,1,0,0,0,265,266,1,0,0,
0,266,268,5,19,0,0,267,269,5,20,0,0,268,267,1,0,0,0,268,269,1,0,0,0,269,
15,1,0,0,0,270,272,5,20,0,0,271,270,1,0,0,0,271,272,1,0,0,0,272,273,1,0,
0,0,273,274,3,58,29,0,274,276,3,2,1,0,275,277,5,20,0,0,276,275,1,0,0,0,276,
277,1,0,0,0,277,17,1,0,0,0,278,280,5,20,0,0,279,278,1,0,0,0,279,280,1,0,
0,0,280,281,1,0,0,0,281,283,5,18,0,0,282,284,5,20,0,0,283,282,1,0,0,0,283,
284,1,0,0,0,284,285,1,0,0,0,285,289,5,4,0,0,286,288,3,2,1,0,287,286,1,0,
0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,293,1,0,0,0,291,
289,1,0,0,0,292,294,5,20,0,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,
0,0,295,297,5,19,0,0,296,298,5,20,0,0,297,296,1,0,0,0,297,298,1,0,0,0,298,
19,1,0,0,0,299,301,5,20,0,0,300,299,1,0,0,0,300,301,1,0,0,0,301,302,1,0,
0,0,302,304,5,18,0,0,303,305,5,20,0,0,304,303,1,0,0,0,304,305,1,0,0,0,305,
306,1,0,0,0,306,307,3,38,19,0,307,308,3,2,1,0,308,310,3,2,1,0,309,311,5,
20,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,314,5,19,0,0,
313,315,5,20,0,0,314,313,1,0,0,0,314,315,1,0,0,0,315,21,1,0,0,0,316,318,
5,20,0,0,317,316,1,0,0,0,317,318,1,0,0,0,318,319,1,0,0,0,319,321,5,18,0,
0,320,322,5,20,0,0,321,320,1,0,0,0,321,322,1,0,0,0,322,323,1,0,0,0,323,324,
3,40,20,0,324,325,3,2,1,0,325,327,3,2,1,0,326,328,5,20,0,0,327,326,1,0,0,
0,327,328,1,0,0,0,328,329,1,0,0,0,329,331,5,19,0,0,330,332,5,20,0,0,331,
330,1,0,0,0,331,332,1,0,0,0,332,23,1,0,0,0,333,335,5,20,0,0,334,333,1,0,
0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,338,5,18,0,0,337,339,5,20,0,0,338,
337,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,341,3,42,21,0,341,343,3,
2,1,0,342,344,5,20,0,0,343,342,1,0,0,0,343,344,1,0,0,0,344,345,1,0,0,0,345,
347,5,19,0,0,346,348,5,20,0,0,347,346,1,0,0,0,347,348,1,0,0,0,348,25,1,0,
0,0,349,351,5,20,0,0,350,349,1,0,0,0,350,351,1,0,0,0,351,352,1,0,0,0,352,
354,5,18,0,0,353,355,5,20,0,0,354,353,1,0,0,0,354,355,1,0,0,0,355,356,1,
0,0,0,356,357,3,44,22,0,357,359,3,2,1,0,358,360,5,20,0,0,359,358,1,0,0,0,
359,360,1,0,0,0,360,361,1,0,0,0,361,363,5,19,0,0,362,364,5,20,0,0,363,362,
1,0,0,0,363,364,1,0,0,0,364,27,1,0,0,0,365,367,5,20,0,0,366,365,1,0,0,0,
366,367,1,0,0,0,367,368,1,0,0,0,368,370,5,18,0,0,369,371,5,20,0,0,370,369,
1,0,0,0,370,371,1,0,0,0,371,372,1,0,0,0,372,377,3,58,29,0,373,376,3,2,1,
0,374,376,3,30,15,0,375,373,1,0,0,0,375,374,1,0,0,0,376,379,1,0,0,0,377,
375,1,0,0,0,377,378,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,380,382,5,20,
0,0,381,380,1,0,0,0,381,382,1,0,0,0,382,383,1,0,0,0,383,385,5,19,0,0,384,
386,5,20,0,0,385,384,1,0,0,0,385,386,1,0,0,0,386,29,1,0,0,0,387,389,5,20,
0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,392,5,18,0,0,391,
393,5,20,0,0,392,391,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,396,5,2,
0,0,395,397,5,20,0,0,396,395,1,0,0,0,396,397,1,0,0,0,397,398,1,0,0,0,398,
400,5,18,0,0,399,401,5,20,0,0,400,399,1,0,0,0,400,401,1,0,0,0,401,403,1,
0,0,0,402,404,3,58,29,0,403,402,1,0,0,0,403,404,1,0,0,0,404,409,1,0,0,0,
405,406,5,20,0,0,406,408,3,58,29,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,
1,0,0,0,409,410,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,412,414,5,20,0,0,
413,412,1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,417,5,19,0,0,416,418,
5,20,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,426,1,0,0,0,419,422,3,4,2,0,
420,422,3,28,14,0,421,419,1,0,0,0,421,420,1,0,0,0,422,424,1,0,0,0,423,425,
5,20,0,0,424,423,1,0,0,0,424,425,1,0,0,0,425,427,1,0,0,0,426,421,1,0,0,0,
427,428,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,430,1,0,0,0,430,432,
5,19,0,0,431,433,5,20,0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,31,1,0,0,0,
434,436,5,20,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,439,
5,18,0,0,438,440,5,20,0,0,439,438,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,
0,441,446,5,5,0,0,442,447,3,2,1,0,443,447,3,6,3,0,444,447,3,22,11,0,445,
447,3,26,13,0,446,442,1,0,0,0,446,443,1,0,0,0,446,444,1,0,0,0,446,445,1,
0,0,0,447,448,1,0,0,0,448,449,3,2,1,0,449,451,3,2,1,0,450,452,5,20,0,0,451,
450,1,0,0,0,451,452,1,0,0,0,452,453,1,0,0,0,453,455,5,19,0,0,454,456,5,20,
0,0,455,454,1,0,0,0,455,456,1,0,0,0,456,33,1,0,0,0,457,458,5,11,0,0,458,
35,1,0,0,0,459,460,5,12,0,0,460,37,1,0,0,0,461,462,5,13,0,0,462,39,1,0,0,
0,463,464,5,14,0,0,464,41,1,0,0,0,465,466,5,15,0,0,466,43,1,0,0,0,467,468,
5,16,0,0,468,45,1,0,0,0,469,471,5,20,0,0,470,469,1,0,0,0,470,471,1,0,0,0,
471,472,1,0,0,0,472,474,5,18,0,0,473,475,5,20,0,0,474,473,1,0,0,0,474,475,
1,0,0,0,475,476,1,0,0,0,476,477,5,6,0,0,477,478,5,20,0,0,478,480,3,16,8,
0,479,481,5,20,0,0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,484,
5,19,0,0,483,485,5,20,0,0,484,483,1,0,0,0,484,485,1,0,0,0,485,47,1,0,0,0,
486,488,5,20,0,0,487,486,1,0,0,0,487,488,1,0,0,0,488,489,1,0,0,0,489,491,
5,18,0,0,490,492,5,20,0,0,491,490,1,0,0,0,491,492,1,0,0,0,492,493,1,0,0,
0,493,506,5,7,0,0,494,505,3,20,10,0,495,505,3,4,2,0,496,497,5,20,0,0,497,
505,3,56,28,0,498,499,5,20,0,0,499,505,3,58,29,0,500,505,3,28,14,0,501,505,
3,24,12,0,502,505,3,18,9,0,503,505,3,32,16,0,504,494,1,0,0,0,504,495,1,0,
0,0,504,496,1,0,0,0,504,498,1,0,0,0,504,500,1,0,0,0,504,501,1,0,0,0,504,
502,1,0,0,0,504,503,1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,507,1,0,
0,0,507,510,1,0,0,0,508,506,1,0,0,0,509,511,5,20,0,0,510,509,1,0,0,0,510,
511,1,0,0,0,511,512,1,0,0,0,512,514,5,19,0,0,513,515,5,20,0,0,514,513,1,
0,0,0,514,515,1,0,0,0,515,49,1,0,0,0,516,518,5,20,0,0,517,516,1,0,0,0,517,
518,1,0,0,0,518,519,1,0,0,0,519,521,5,18,0,0,520,522,5,20,0,0,521,520,1,
0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,527,5,8,0,0,524,526,3,2,1,0,525,
524,1,0,0,0,526,529,1,0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,531,1,0,
0,0,529,527,1,0,0,0,530,532,5,20,0,0,531,530,1,0,0,0,531,532,1,0,0,0,532,
533,1,0,0,0,533,535,5,19,0,0,534,536,5,20,0,0,535,534,1,0,0,0,535,536,1,
0,0,0,536,51,1,0,0,0,537,539,5,20,0,0,538,537,1,0,0,0,538,539,1,0,0,0,539,
540,1,0,0,0,540,542,5,18,0,0,541,543,5,20,0,0,542,541,1,0,0,0,542,543,1,
0,0,0,543,544,1,0,0,0,544,545,5,9,0,0,545,547,3,2,1,0,546,548,5,20,0,0,547,
546,1,0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,551,5,19,0,0,550,552,5,20,
0,0,551,550,1,0,0,0,551,552,1,0,0,0,552,53,1,0,0,0,553,555,5,20,0,0,554,
553,1,0,0,0,554,555,1,0,0,0,555,556,1,0,0,0,556,558,5,18,0,0,557,559,5,20,
0,0,558,557,1,0,0,0,558,559,1,0,0,0,559,560,1,0,0,0,560,561,5,10,0,0,561,
562,5,20,0,0,562,564,3,58,29,0,563,565,5,20,0,0,564,563,1,0,0,0,564,565,
1,0,0,0,565,566,1,0,0,0,566,568,5,19,0,0,567,569,5,20,0,0,568,567,1,0,0,
0,568,569,1,0,0,0,569,55,1,0,0,0,570,571,7,0,0,0,571,57,1,0,0,0,572,573,
5,17,0,0,573,59,1,0,0,0,115,66,68,86,89,93,99,102,106,109,113,118,120,123,
127,130,134,141,145,148,152,156,160,167,171,176,182,186,190,194,197,203,
207,211,217,220,225,229,232,236,240,244,251,255,260,264,268,271,276,279,
283,289,293,297,300,304,310,314,317,321,327,331,334,338,343,347,350,354,
359,363,366,370,375,377,381,385,388,392,396,400,403,409,413,417,421,424,
428,432,435,439,446,451,455,470,474,480,484,487,491,504,506,510,514,517,
521,527,531,535,538,542,547,551,554,558,564,568];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SchemeLikeLParser extends antlr4.Parser {

    static grammarFileName = "SchemeLikeL.g4";
    static literalNames = [ null, "'define'", "'lambda'", "'let*'", "'begin'", 
                            "'if'", "'set!'", "'vector'", "'list'", "'display'", 
                            "'export'", null, null, null, null, null, "'null?'", 
                            null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "OPERATOR", "LOGOPERATOR", 
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
                         "exportExpr", "literal", "identifier" ];

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
	        this.state = 66; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 66;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 60;
	                this.sExpr();
	                break;

	            case 2:
	                this.state = 61;
	                this.literal();
	                break;

	            case 3:
	                this.state = 62;
	                this.identifier();
	                break;

	            case 4:
	                this.state = 63;
	                this.defineGlobalVar();
	                break;

	            case 5:
	                this.state = 64;
	                this.defineFnc();
	                break;

	            case 6:
	                this.state = 65;
	                this.exportExpr();
	                break;

	            }
	            this.state = 68; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32899072) !== 0));
	        this.state = 70;
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
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 72;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 73;
	            this.expr();
	            break;

	        case 3:
	            this.state = 74;
	            this.match(SchemeLikeLParser.SPACE);
	            this.state = 75;
	            this.literal();
	            break;

	        case 4:
	            this.state = 76;
	            this.match(SchemeLikeLParser.SPACE);
	            this.state = 77;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 78;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 79;
	            this.uniExpr();
	            break;

	        case 7:
	            this.state = 80;
	            this.beginExpr();
	            break;

	        case 8:
	            this.state = 81;
	            this.ifExpr();
	            break;

	        case 9:
	            this.state = 82;
	            this.vectorExpr();
	            break;

	        case 10:
	            this.state = 83;
	            this.listExpr();
	            break;

	        case 11:
	            this.state = 84;
	            this.setExpr();
	            break;

	        case 12:
	            this.state = 85;
	            this.displayExpr();
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
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 88;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 91;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 92;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 95;
	        this.operatorExpr();
	        this.state = 97; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 96;
	        		this.sExpr();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 99; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 101;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 104;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 105;
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
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 108;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 111;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 112;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 115;
	        this.logOperatorExpr();
	        this.state = 118; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 118;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 116;
	        		    this.logUniExpr();
	        		    break;

	        		case 2:
	        		    this.state = 117;
	        		    this.logBiExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 120; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 122;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 125;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 126;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 129;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 132;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 133;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 136;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 137;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 138;
	        this.identifier();
	        this.state = 139;
	        this.sExpr();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 140;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 143;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 144;
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
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 147;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 150;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 151;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 154;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 155;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 217;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.state = 158;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 159;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 162;
	            this.identifier();
	            this.state = 167;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 163;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 164;
	                    this.identifier(); 
	                }
	                this.state = 169;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 170;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 173;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 176;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 174;
	                this.fncBodyExpr();
	                break;

	            case 2:
	                this.state = 175;
	                this.localFncBodyExpr();
	                break;

	            }
	            this.state = 178;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        case 17:
	            this.state = 180;
	            this.identifier();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 181;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 184;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 185;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 188;
	            this.match(SchemeLikeLParser.T__1);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 189;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 192;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 194;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 193;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 196;
	                this.identifier();
	            }

	            this.state = 203;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 199;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 200;
	                    this.identifier(); 
	                }
	                this.state = 205;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	            }

	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 206;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 209;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 211;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            if(la_===1) {
	                this.state = 210;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 213;
	            this.fncBodyExpr();
	            this.state = 214;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 215;
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



	fncBodyExpr() {
	    let localctx = new FncBodyExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SchemeLikeLParser.RULE_fncBodyExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 219;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 225;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 222;
	                this.sExpr(); 
	            }
	            this.state = 227;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	        }

	        this.state = 229;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 228;
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
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 231;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 234;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 235;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 238;
	        this.match(SchemeLikeLParser.T__2);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 239;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 242;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 243;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 246;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 247;
	            this.varPairExpr();
	            this.state = 248;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 250;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 258;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 260;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        if(la_===1) {
	            this.state = 259;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 262;
	        this.fncBodyExpr();
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 263;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 266;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 267;
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
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 270;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 273;
	        this.identifier();
	        this.state = 274;
	        this.sExpr();
	        this.state = 276;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        if(la_===1) {
	            this.state = 275;
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
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 278;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 281;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 282;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 285;
	        this.match(SchemeLikeLParser.T__3);
	        this.state = 289;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 286;
	                this.sExpr(); 
	            }
	            this.state = 291;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
	        }

	        this.state = 293;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 292;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 295;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        if(la_===1) {
	            this.state = 296;
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
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 299;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 302;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 303;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 306;
	        this.biOperatorExpr();
	        this.state = 307;
	        this.sExpr();
	        this.state = 308;
	        this.sExpr();
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 309;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 312;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 314;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	        if(la_===1) {
	            this.state = 313;
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
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 316;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 319;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 320;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 323;
	        this.logBiOperatorExpr();
	        this.state = 324;
	        this.sExpr();
	        this.state = 325;
	        this.sExpr();
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 326;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 329;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 331;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        if(la_===1) {
	            this.state = 330;
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
	        this.state = 334;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 333;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 336;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 338;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 337;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 340;
	        this.uniOperatorExpr();
	        this.state = 341;
	        this.sExpr();
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 342;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 345;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 347;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        if(la_===1) {
	            this.state = 346;
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
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 349;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 352;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 353;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 356;
	        this.logUniOperatorExpr();
	        this.state = 357;
	        this.sExpr();
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 358;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 361;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 363;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        if(la_===1) {
	            this.state = 362;
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
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 365;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 368;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 370;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 369;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 372;
	        this.identifier();
	        this.state = 377;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,72,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 375;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 373;
	                    this.sExpr();
	                    break;

	                case 2:
	                    this.state = 374;
	                    this.callLambdaFnc();
	                    break;

	                } 
	            }
	            this.state = 379;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,72,this._ctx);
	        }

	        this.state = 381;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 380;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 383;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 385;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
	        if(la_===1) {
	            this.state = 384;
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
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 387;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 390;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 391;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 394;
	        this.match(SchemeLikeLParser.T__1);
	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 395;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 398;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 400;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,78,this._ctx);
	        if(la_===1) {
	            this.state = 399;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 402;
	            this.identifier();
	        }

	        this.state = 409;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,80,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 405;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 406;
	                this.identifier(); 
	            }
	            this.state = 411;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,80,this._ctx);
	        }

	        this.state = 413;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 412;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 415;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
	        if(la_===1) {
	            this.state = 416;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 426; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 421;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 419;
	                this.expr();
	                break;

	            case 2:
	                this.state = 420;
	                this.callFnc();
	                break;

	            }
	            this.state = 424;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,84,this._ctx);
	            if(la_===1) {
	                this.state = 423;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 428; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18 || _la===20);
	        this.state = 430;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 432;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,86,this._ctx);
	        if(la_===1) {
	            this.state = 431;
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
	        this.state = 435;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 434;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 437;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 438;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 441;
	        this.match(SchemeLikeLParser.T__4);
	        this.state = 446;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 442;
	            this.sExpr();
	            break;

	        case 2:
	            this.state = 443;
	            this.logExpr();
	            break;

	        case 3:
	            this.state = 444;
	            this.logBiExpr();
	            break;

	        case 4:
	            this.state = 445;
	            this.logUniExpr();
	            break;

	        }
	        this.state = 448;
	        this.sExpr();
	        this.state = 449;
	        this.sExpr();
	        this.state = 451;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 450;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 453;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 455;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,91,this._ctx);
	        if(la_===1) {
	            this.state = 454;
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
	        this.state = 457;
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
	        this.state = 459;
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
	        this.state = 461;
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
	        this.state = 463;
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
	        this.state = 465;
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
	        this.state = 467;
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
	        this.state = 470;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 469;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 472;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 474;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 473;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 476;
	        this.match(SchemeLikeLParser.T__5);
	        this.state = 477;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 478;
	        this.varPairExpr();
	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 479;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 482;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 484;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
	        if(la_===1) {
	            this.state = 483;
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
	        this.state = 487;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 486;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 489;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 491;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 490;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 493;
	        this.match(SchemeLikeLParser.T__6);
	        this.state = 506;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,99,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 504;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,98,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 494;
	                    this.biExpr();
	                    break;

	                case 2:
	                    this.state = 495;
	                    this.expr();
	                    break;

	                case 3:
	                    this.state = 496;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 497;
	                    this.literal();
	                    break;

	                case 4:
	                    this.state = 498;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 499;
	                    this.identifier();
	                    break;

	                case 5:
	                    this.state = 500;
	                    this.callFnc();
	                    break;

	                case 6:
	                    this.state = 501;
	                    this.uniExpr();
	                    break;

	                case 7:
	                    this.state = 502;
	                    this.beginExpr();
	                    break;

	                case 8:
	                    this.state = 503;
	                    this.ifExpr();
	                    break;

	                } 
	            }
	            this.state = 508;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,99,this._ctx);
	        }

	        this.state = 510;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 509;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 512;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 514;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,101,this._ctx);
	        if(la_===1) {
	            this.state = 513;
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
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 516;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 519;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 521;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 520;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 523;
	        this.match(SchemeLikeLParser.T__7);
	        this.state = 527;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,104,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 524;
	                this.sExpr(); 
	            }
	            this.state = 529;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,104,this._ctx);
	        }

	        this.state = 531;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 530;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 533;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 535;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,106,this._ctx);
	        if(la_===1) {
	            this.state = 534;
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
	        this.state = 538;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 537;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 540;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 542;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 541;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 544;
	        this.match(SchemeLikeLParser.T__8);
	        this.state = 545;
	        this.sExpr();
	        this.state = 547;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 546;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 549;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 551;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,110,this._ctx);
	        if(la_===1) {
	            this.state = 550;
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
	        this.state = 554;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 553;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 556;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 558;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 557;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 560;
	        this.match(SchemeLikeLParser.T__9);
	        this.state = 561;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 562;
	        this.identifier();
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 563;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 566;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 568;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,114,this._ctx);
	        if(la_===1) {
	            this.state = 567;
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
	    this.enterRule(localctx, 56, SchemeLikeLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 570;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31457280) !== 0))) {
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
	    this.enterRule(localctx, 58, SchemeLikeLParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 572;
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
SchemeLikeLParser.OPERATOR = 11;
SchemeLikeLParser.LOGOPERATOR = 12;
SchemeLikeLParser.BIOPERATOR = 13;
SchemeLikeLParser.LOGBIOPERATOR = 14;
SchemeLikeLParser.UNIOPERATOR = 15;
SchemeLikeLParser.LOGUNIOPERATOR = 16;
SchemeLikeLParser.VARIABLE = 17;
SchemeLikeLParser.PSTART = 18;
SchemeLikeLParser.PEND = 19;
SchemeLikeLParser.SPACE = 20;
SchemeLikeLParser.FLOAT = 21;
SchemeLikeLParser.INT = 22;
SchemeLikeLParser.NFLOAT = 23;
SchemeLikeLParser.NINT = 24;
SchemeLikeLParser.WS = 25;

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
SchemeLikeLParser.RULE_literal = 28;
SchemeLikeLParser.RULE_identifier = 29;

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
SchemeLikeLParser.LiteralContext = LiteralContext; 
SchemeLikeLParser.IdentifierContext = IdentifierContext; 
