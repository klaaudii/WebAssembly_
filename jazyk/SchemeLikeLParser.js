// Generated from SchemeLikeL.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from './antlr4/index.web.js';
import SchemeLikeLListener from './SchemeLikeLListener.js';
import SchemeLikeLVisitor from './SchemeLikeLVisitor.js';

const serializedATN = [4,1,21,602,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,3,0,46,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,4,0,59,8,0,11,0,12,0,60,1,0,1,0,1,1,3,1,66,8,1,1,1,1,1,3,1,70,8,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,80,8,1,4,1,82,8,1,11,1,12,1,83,1,1,3,1,
87,8,1,1,1,1,1,3,1,91,8,1,1,2,3,2,94,8,2,1,2,1,2,3,2,98,8,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,110,8,2,4,2,112,8,2,11,2,12,2,113,1,2,3,
2,117,8,2,1,2,1,2,3,2,121,8,2,1,3,3,3,124,8,3,1,3,1,3,3,3,128,8,3,1,3,1,
3,1,3,1,3,1,3,1,3,5,3,136,8,3,10,3,12,3,139,9,3,1,3,3,3,142,8,3,1,3,1,3,
3,3,146,8,3,1,3,1,3,3,3,150,8,3,1,3,1,3,1,3,1,3,3,3,156,8,3,1,3,1,3,3,3,
160,8,3,1,3,1,3,3,3,164,8,3,1,3,1,3,3,3,168,8,3,1,3,3,3,171,8,3,1,3,1,3,
5,3,175,8,3,10,3,12,3,178,9,3,1,3,3,3,181,8,3,1,3,1,3,3,3,185,8,3,1,3,1,
3,1,3,1,3,3,3,191,8,3,1,4,3,4,194,8,4,1,4,1,4,3,4,198,8,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,3,4,208,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,216,8,4,1,4,3,
4,219,8,4,1,4,1,4,3,4,223,8,4,1,5,3,5,226,8,5,1,5,1,5,3,5,230,8,5,1,5,1,
5,1,5,1,5,1,5,1,5,3,5,238,8,5,1,5,3,5,241,8,5,1,5,1,5,3,5,245,8,5,1,6,3,
6,248,8,6,1,6,1,6,3,6,252,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,263,
8,6,5,6,265,8,6,10,6,12,6,268,9,6,1,6,3,6,271,8,6,1,6,1,6,3,6,275,8,6,1,
7,3,7,278,8,7,1,7,1,7,3,7,282,8,7,1,7,1,7,3,7,286,8,7,1,7,1,7,3,7,290,8,
7,1,7,3,7,293,8,7,1,7,1,7,5,7,297,8,7,10,7,12,7,300,9,7,1,7,3,7,303,8,7,
1,7,1,7,3,7,307,8,7,1,7,1,7,3,7,311,8,7,1,7,3,7,314,8,7,4,7,316,8,7,11,7,
12,7,317,1,7,1,7,3,7,322,8,7,1,8,3,8,325,8,8,1,8,1,8,3,8,329,8,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,3,8,339,8,8,1,8,3,8,342,8,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,351,8,8,1,8,3,8,354,8,8,1,8,3,8,357,8,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,366,8,8,1,8,3,8,369,8,8,3,8,371,8,8,1,8,3,8,374,8,8,1,8,1,8,
3,8,378,8,8,1,9,3,9,381,8,9,1,9,1,9,3,9,385,8,9,1,9,1,9,3,9,389,8,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,4,9,398,8,9,11,9,12,9,399,1,9,3,9,403,8,9,1,9,1,
9,3,9,407,8,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,3,13,416,8,13,1,13,1,13,
3,13,420,8,13,1,13,1,13,3,13,424,8,13,1,13,1,13,3,13,428,8,13,1,13,1,13,
3,13,432,8,13,1,13,1,13,3,13,436,8,13,1,13,1,13,1,13,3,13,441,8,13,5,13,
443,8,13,10,13,12,13,446,9,13,1,13,1,13,3,13,450,8,13,1,13,1,13,3,13,454,
8,13,1,13,1,13,3,13,458,8,13,1,14,3,14,461,8,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,3,14,470,8,14,1,14,3,14,473,8,14,4,14,475,8,14,11,14,12,14,476,
1,14,3,14,480,8,14,1,15,3,15,483,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,3,15,495,8,15,1,15,3,15,498,8,15,1,16,3,16,501,8,16,1,16,
1,16,3,16,505,8,16,1,16,1,16,1,16,1,16,3,16,511,8,16,1,16,1,16,3,16,515,
8,16,1,17,3,17,518,8,17,1,17,1,17,3,17,522,8,17,1,17,1,17,1,17,1,17,1,17,
3,17,529,8,17,5,17,531,8,17,10,17,12,17,534,9,17,1,17,3,17,537,8,17,1,17,
1,17,3,17,541,8,17,1,18,3,18,544,8,18,1,18,1,18,3,18,548,8,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,3,18,557,8,18,5,18,559,8,18,10,18,12,18,562,9,18,
1,18,3,18,565,8,18,1,18,1,18,3,18,569,8,18,1,19,3,19,572,8,19,1,19,1,19,
3,19,576,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,
589,8,19,1,19,3,19,592,8,19,1,19,1,19,3,19,596,8,19,1,20,1,20,1,21,1,21,
1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
0,1,1,0,17,20,769,0,45,1,0,0,0,2,65,1,0,0,0,4,93,1,0,0,0,6,123,1,0,0,0,8,
193,1,0,0,0,10,225,1,0,0,0,12,247,1,0,0,0,14,277,1,0,0,0,16,324,1,0,0,0,
18,380,1,0,0,0,20,408,1,0,0,0,22,410,1,0,0,0,24,412,1,0,0,0,26,415,1,0,0,
0,28,460,1,0,0,0,30,482,1,0,0,0,32,500,1,0,0,0,34,517,1,0,0,0,36,543,1,0,
0,0,38,571,1,0,0,0,40,597,1,0,0,0,42,599,1,0,0,0,44,46,5,16,0,0,45,44,1,
0,0,0,45,46,1,0,0,0,46,58,1,0,0,0,47,59,3,2,1,0,48,59,3,4,2,0,49,59,3,6,
3,0,50,59,3,40,20,0,51,59,3,42,21,0,52,59,3,12,6,0,53,59,3,32,16,0,54,59,
3,36,18,0,55,59,3,34,17,0,56,59,3,38,19,0,57,59,3,10,5,0,58,47,1,0,0,0,58,
48,1,0,0,0,58,49,1,0,0,0,58,50,1,0,0,0,58,51,1,0,0,0,58,52,1,0,0,0,58,53,
1,0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,60,1,
0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,0,0,1,63,1,1,0,0,
0,64,66,5,16,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,69,5,14,0,
0,68,70,5,16,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,81,3,20,10,
0,72,79,5,16,0,0,73,80,3,2,1,0,74,80,3,40,20,0,75,80,3,42,21,0,76,80,3,12,
6,0,77,80,3,10,5,0,78,80,3,8,4,0,79,73,1,0,0,0,79,74,1,0,0,0,79,75,1,0,0,
0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,82,1,0,0,0,81,72,1,0,0,0,
82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,87,5,16,0,0,86,
85,1,0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,90,5,15,0,0,89,91,5,16,0,0,90,
89,1,0,0,0,90,91,1,0,0,0,91,3,1,0,0,0,92,94,5,16,0,0,93,92,1,0,0,0,93,94,
1,0,0,0,94,95,1,0,0,0,95,97,5,14,0,0,96,98,5,16,0,0,97,96,1,0,0,0,97,98,
1,0,0,0,98,99,1,0,0,0,99,100,5,1,0,0,100,101,5,16,0,0,101,111,3,42,21,0,
102,109,5,16,0,0,103,110,3,2,1,0,104,110,3,40,20,0,105,110,3,42,21,0,106,
110,3,12,6,0,107,110,3,34,17,0,108,110,3,36,18,0,109,103,1,0,0,0,109,104,
1,0,0,0,109,105,1,0,0,0,109,106,1,0,0,0,109,107,1,0,0,0,109,108,1,0,0,0,
110,112,1,0,0,0,111,102,1,0,0,0,112,113,1,0,0,0,113,111,1,0,0,0,113,114,
1,0,0,0,114,116,1,0,0,0,115,117,5,16,0,0,116,115,1,0,0,0,116,117,1,0,0,0,
117,118,1,0,0,0,118,120,5,15,0,0,119,121,5,16,0,0,120,119,1,0,0,0,120,121,
1,0,0,0,121,5,1,0,0,0,122,124,5,16,0,0,123,122,1,0,0,0,123,124,1,0,0,0,124,
125,1,0,0,0,125,127,5,14,0,0,126,128,5,16,0,0,127,126,1,0,0,0,127,128,1,
0,0,0,128,129,1,0,0,0,129,130,5,1,0,0,130,190,5,16,0,0,131,132,5,14,0,0,
132,137,3,42,21,0,133,134,5,16,0,0,134,136,3,42,21,0,135,133,1,0,0,0,136,
139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,
0,0,140,142,5,16,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,
145,5,15,0,0,144,146,5,16,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,149,1,
0,0,0,147,150,3,28,14,0,148,150,3,26,13,0,149,147,1,0,0,0,149,148,1,0,0,
0,150,151,1,0,0,0,151,152,5,15,0,0,152,191,1,0,0,0,153,155,3,42,21,0,154,
156,5,16,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,159,5,14,
0,0,158,160,5,16,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,
163,5,2,0,0,162,164,5,16,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,
0,0,165,167,5,14,0,0,166,168,5,16,0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,
170,1,0,0,0,169,171,3,42,21,0,170,169,1,0,0,0,170,171,1,0,0,0,171,176,1,
0,0,0,172,173,5,16,0,0,173,175,3,42,21,0,174,172,1,0,0,0,175,178,1,0,0,0,
176,174,1,0,0,0,176,177,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,179,181,
5,16,0,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,184,5,15,0,
0,183,185,5,16,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,
3,28,14,0,187,188,5,15,0,0,188,189,5,15,0,0,189,191,1,0,0,0,190,131,1,0,
0,0,190,153,1,0,0,0,191,7,1,0,0,0,192,194,5,16,0,0,193,192,1,0,0,0,193,194,
1,0,0,0,194,195,1,0,0,0,195,197,5,14,0,0,196,198,5,16,0,0,197,196,1,0,0,
0,197,198,1,0,0,0,198,199,1,0,0,0,199,200,3,22,11,0,200,207,5,16,0,0,201,
208,3,8,4,0,202,208,3,2,1,0,203,208,3,40,20,0,204,208,3,42,21,0,205,208,
3,12,6,0,206,208,3,10,5,0,207,201,1,0,0,0,207,202,1,0,0,0,207,203,1,0,0,
0,207,204,1,0,0,0,207,205,1,0,0,0,207,206,1,0,0,0,208,209,1,0,0,0,209,215,
5,16,0,0,210,216,3,8,4,0,211,216,3,2,1,0,212,216,3,40,20,0,213,216,3,42,
21,0,214,216,3,12,6,0,215,210,1,0,0,0,215,211,1,0,0,0,215,212,1,0,0,0,215,
213,1,0,0,0,215,214,1,0,0,0,216,218,1,0,0,0,217,219,5,16,0,0,218,217,1,0,
0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,222,5,15,0,0,221,223,5,16,0,0,222,
221,1,0,0,0,222,223,1,0,0,0,223,9,1,0,0,0,224,226,5,16,0,0,225,224,1,0,0,
0,225,226,1,0,0,0,226,227,1,0,0,0,227,229,5,14,0,0,228,230,5,16,0,0,229,
228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,3,24,12,0,232,237,5,
16,0,0,233,238,3,40,20,0,234,238,3,42,21,0,235,238,3,2,1,0,236,238,3,12,
6,0,237,233,1,0,0,0,237,234,1,0,0,0,237,235,1,0,0,0,237,236,1,0,0,0,238,
240,1,0,0,0,239,241,5,16,0,0,240,239,1,0,0,0,240,241,1,0,0,0,241,242,1,0,
0,0,242,244,5,15,0,0,243,245,5,16,0,0,244,243,1,0,0,0,244,245,1,0,0,0,245,
11,1,0,0,0,246,248,5,16,0,0,247,246,1,0,0,0,247,248,1,0,0,0,248,249,1,0,
0,0,249,251,5,14,0,0,250,252,5,16,0,0,251,250,1,0,0,0,251,252,1,0,0,0,252,
253,1,0,0,0,253,266,3,42,21,0,254,262,5,16,0,0,255,263,3,2,1,0,256,263,3,
42,21,0,257,263,3,40,20,0,258,263,3,12,6,0,259,263,3,14,7,0,260,263,3,36,
18,0,261,263,3,34,17,0,262,255,1,0,0,0,262,256,1,0,0,0,262,257,1,0,0,0,262,
258,1,0,0,0,262,259,1,0,0,0,262,260,1,0,0,0,262,261,1,0,0,0,263,265,1,0,
0,0,264,254,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,
270,1,0,0,0,268,266,1,0,0,0,269,271,5,16,0,0,270,269,1,0,0,0,270,271,1,0,
0,0,271,272,1,0,0,0,272,274,5,15,0,0,273,275,5,16,0,0,274,273,1,0,0,0,274,
275,1,0,0,0,275,13,1,0,0,0,276,278,5,16,0,0,277,276,1,0,0,0,277,278,1,0,
0,0,278,279,1,0,0,0,279,281,5,14,0,0,280,282,5,16,0,0,281,280,1,0,0,0,281,
282,1,0,0,0,282,283,1,0,0,0,283,285,5,2,0,0,284,286,5,16,0,0,285,284,1,0,
0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,289,5,14,0,0,288,290,5,16,0,0,289,
288,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,293,3,42,21,0,292,291,1,
0,0,0,292,293,1,0,0,0,293,298,1,0,0,0,294,295,5,16,0,0,295,297,3,42,21,0,
296,294,1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,302,
1,0,0,0,300,298,1,0,0,0,301,303,5,16,0,0,302,301,1,0,0,0,302,303,1,0,0,0,
303,304,1,0,0,0,304,306,5,15,0,0,305,307,5,16,0,0,306,305,1,0,0,0,306,307,
1,0,0,0,307,315,1,0,0,0,308,311,3,2,1,0,309,311,3,12,6,0,310,308,1,0,0,0,
310,309,1,0,0,0,311,313,1,0,0,0,312,314,5,16,0,0,313,312,1,0,0,0,313,314,
1,0,0,0,314,316,1,0,0,0,315,310,1,0,0,0,316,317,1,0,0,0,317,315,1,0,0,0,
317,318,1,0,0,0,318,319,1,0,0,0,319,321,5,15,0,0,320,322,5,16,0,0,321,320,
1,0,0,0,321,322,1,0,0,0,322,15,1,0,0,0,323,325,5,16,0,0,324,323,1,0,0,0,
324,325,1,0,0,0,325,326,1,0,0,0,326,328,5,14,0,0,327,329,5,16,0,0,328,327,
1,0,0,0,328,329,1,0,0,0,329,330,1,0,0,0,330,331,5,3,0,0,331,338,5,16,0,0,
332,339,3,2,1,0,333,339,3,8,4,0,334,339,3,40,20,0,335,339,3,42,21,0,336,
339,3,12,6,0,337,339,3,10,5,0,338,332,1,0,0,0,338,333,1,0,0,0,338,334,1,
0,0,0,338,335,1,0,0,0,338,336,1,0,0,0,338,337,1,0,0,0,339,341,1,0,0,0,340,
342,5,16,0,0,341,340,1,0,0,0,341,342,1,0,0,0,342,353,1,0,0,0,343,351,3,2,
1,0,344,351,3,40,20,0,345,351,3,42,21,0,346,351,3,12,6,0,347,351,3,32,16,
0,348,351,3,16,8,0,349,351,3,38,19,0,350,343,1,0,0,0,350,344,1,0,0,0,350,
345,1,0,0,0,350,346,1,0,0,0,350,347,1,0,0,0,350,348,1,0,0,0,350,349,1,0,
0,0,351,354,1,0,0,0,352,354,3,18,9,0,353,350,1,0,0,0,353,352,1,0,0,0,354,
370,1,0,0,0,355,357,5,16,0,0,356,355,1,0,0,0,356,357,1,0,0,0,357,368,1,0,
0,0,358,366,3,2,1,0,359,366,3,40,20,0,360,366,3,42,21,0,361,366,3,12,6,0,
362,366,3,32,16,0,363,366,3,16,8,0,364,366,3,38,19,0,365,358,1,0,0,0,365,
359,1,0,0,0,365,360,1,0,0,0,365,361,1,0,0,0,365,362,1,0,0,0,365,363,1,0,
0,0,365,364,1,0,0,0,366,369,1,0,0,0,367,369,3,18,9,0,368,365,1,0,0,0,368,
367,1,0,0,0,369,371,1,0,0,0,370,356,1,0,0,0,370,371,1,0,0,0,371,373,1,0,
0,0,372,374,5,16,0,0,373,372,1,0,0,0,373,374,1,0,0,0,374,375,1,0,0,0,375,
377,5,15,0,0,376,378,5,16,0,0,377,376,1,0,0,0,377,378,1,0,0,0,378,17,1,0,
0,0,379,381,5,16,0,0,380,379,1,0,0,0,380,381,1,0,0,0,381,382,1,0,0,0,382,
384,5,14,0,0,383,385,5,16,0,0,384,383,1,0,0,0,384,385,1,0,0,0,385,386,1,
0,0,0,386,388,5,4,0,0,387,389,5,16,0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,
397,1,0,0,0,390,398,3,2,1,0,391,398,3,40,20,0,392,398,3,42,21,0,393,398,
3,12,6,0,394,398,3,32,16,0,395,398,3,38,19,0,396,398,3,16,8,0,397,390,1,
0,0,0,397,391,1,0,0,0,397,392,1,0,0,0,397,393,1,0,0,0,397,394,1,0,0,0,397,
395,1,0,0,0,397,396,1,0,0,0,398,399,1,0,0,0,399,397,1,0,0,0,399,400,1,0,
0,0,400,402,1,0,0,0,401,403,5,16,0,0,402,401,1,0,0,0,402,403,1,0,0,0,403,
404,1,0,0,0,404,406,5,15,0,0,405,407,5,16,0,0,406,405,1,0,0,0,406,407,1,
0,0,0,407,19,1,0,0,0,408,409,5,10,0,0,409,21,1,0,0,0,410,411,5,11,0,0,411,
23,1,0,0,0,412,413,5,12,0,0,413,25,1,0,0,0,414,416,5,16,0,0,415,414,1,0,
0,0,415,416,1,0,0,0,416,417,1,0,0,0,417,419,5,14,0,0,418,420,5,16,0,0,419,
418,1,0,0,0,419,420,1,0,0,0,420,421,1,0,0,0,421,423,5,5,0,0,422,424,5,16,
0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,427,5,14,0,0,426,
428,5,16,0,0,427,426,1,0,0,0,427,428,1,0,0,0,428,444,1,0,0,0,429,431,5,14,
0,0,430,432,5,16,0,0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,0,433,
435,3,30,15,0,434,436,5,16,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,437,1,
0,0,0,437,438,5,15,0,0,438,440,1,0,0,0,439,441,5,16,0,0,440,439,1,0,0,0,
440,441,1,0,0,0,441,443,1,0,0,0,442,429,1,0,0,0,443,446,1,0,0,0,444,442,
1,0,0,0,444,445,1,0,0,0,445,447,1,0,0,0,446,444,1,0,0,0,447,449,5,15,0,0,
448,450,5,16,0,0,449,448,1,0,0,0,449,450,1,0,0,0,450,451,1,0,0,0,451,453,
3,28,14,0,452,454,5,16,0,0,453,452,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,
0,455,457,5,15,0,0,456,458,5,16,0,0,457,456,1,0,0,0,457,458,1,0,0,0,458,
27,1,0,0,0,459,461,5,16,0,0,460,459,1,0,0,0,460,461,1,0,0,0,461,474,1,0,
0,0,462,470,3,2,1,0,463,470,3,12,6,0,464,470,3,16,8,0,465,470,3,32,16,0,
466,470,3,36,18,0,467,470,3,38,19,0,468,470,3,34,17,0,469,462,1,0,0,0,469,
463,1,0,0,0,469,464,1,0,0,0,469,465,1,0,0,0,469,466,1,0,0,0,469,467,1,0,
0,0,469,468,1,0,0,0,470,472,1,0,0,0,471,473,5,16,0,0,472,471,1,0,0,0,472,
473,1,0,0,0,473,475,1,0,0,0,474,469,1,0,0,0,475,476,1,0,0,0,476,474,1,0,
0,0,476,477,1,0,0,0,477,479,1,0,0,0,478,480,5,16,0,0,479,478,1,0,0,0,479,
480,1,0,0,0,480,29,1,0,0,0,481,483,5,16,0,0,482,481,1,0,0,0,482,483,1,0,
0,0,483,484,1,0,0,0,484,485,3,42,21,0,485,494,5,16,0,0,486,495,3,2,1,0,487,
495,3,40,20,0,488,495,3,42,21,0,489,495,3,12,6,0,490,495,3,34,17,0,491,495,
3,36,18,0,492,495,3,10,5,0,493,495,3,8,4,0,494,486,1,0,0,0,494,487,1,0,0,
0,494,488,1,0,0,0,494,489,1,0,0,0,494,490,1,0,0,0,494,491,1,0,0,0,494,492,
1,0,0,0,494,493,1,0,0,0,495,497,1,0,0,0,496,498,5,16,0,0,497,496,1,0,0,0,
497,498,1,0,0,0,498,31,1,0,0,0,499,501,5,16,0,0,500,499,1,0,0,0,500,501,
1,0,0,0,501,502,1,0,0,0,502,504,5,14,0,0,503,505,5,16,0,0,504,503,1,0,0,
0,504,505,1,0,0,0,505,506,1,0,0,0,506,507,5,6,0,0,507,508,5,16,0,0,508,510,
3,30,15,0,509,511,5,16,0,0,510,509,1,0,0,0,510,511,1,0,0,0,511,512,1,0,0,
0,512,514,5,15,0,0,513,515,5,16,0,0,514,513,1,0,0,0,514,515,1,0,0,0,515,
33,1,0,0,0,516,518,5,16,0,0,517,516,1,0,0,0,517,518,1,0,0,0,518,519,1,0,
0,0,519,521,5,14,0,0,520,522,5,16,0,0,521,520,1,0,0,0,521,522,1,0,0,0,522,
523,1,0,0,0,523,532,5,7,0,0,524,528,5,16,0,0,525,529,3,40,20,0,526,529,3,
42,21,0,527,529,3,2,1,0,528,525,1,0,0,0,528,526,1,0,0,0,528,527,1,0,0,0,
529,531,1,0,0,0,530,524,1,0,0,0,531,534,1,0,0,0,532,530,1,0,0,0,532,533,
1,0,0,0,533,536,1,0,0,0,534,532,1,0,0,0,535,537,5,16,0,0,536,535,1,0,0,0,
536,537,1,0,0,0,537,538,1,0,0,0,538,540,5,15,0,0,539,541,5,16,0,0,540,539,
1,0,0,0,540,541,1,0,0,0,541,35,1,0,0,0,542,544,5,16,0,0,543,542,1,0,0,0,
543,544,1,0,0,0,544,545,1,0,0,0,545,547,5,14,0,0,546,548,5,16,0,0,547,546,
1,0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,560,5,8,0,0,550,556,5,16,0,0,
551,557,3,40,20,0,552,557,3,42,21,0,553,557,3,34,17,0,554,557,3,36,18,0,
555,557,3,2,1,0,556,551,1,0,0,0,556,552,1,0,0,0,556,553,1,0,0,0,556,554,
1,0,0,0,556,555,1,0,0,0,557,559,1,0,0,0,558,550,1,0,0,0,559,562,1,0,0,0,
560,558,1,0,0,0,560,561,1,0,0,0,561,564,1,0,0,0,562,560,1,0,0,0,563,565,
5,16,0,0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,568,5,15,0,
0,567,569,5,16,0,0,568,567,1,0,0,0,568,569,1,0,0,0,569,37,1,0,0,0,570,572,
5,16,0,0,571,570,1,0,0,0,571,572,1,0,0,0,572,573,1,0,0,0,573,575,5,14,0,
0,574,576,5,16,0,0,575,574,1,0,0,0,575,576,1,0,0,0,576,577,1,0,0,0,577,578,
5,9,0,0,578,588,5,16,0,0,579,589,3,40,20,0,580,589,3,42,21,0,581,589,3,34,
17,0,582,589,3,36,18,0,583,589,3,12,6,0,584,589,3,2,1,0,585,589,3,16,8,0,
586,589,3,10,5,0,587,589,3,8,4,0,588,579,1,0,0,0,588,580,1,0,0,0,588,581,
1,0,0,0,588,582,1,0,0,0,588,583,1,0,0,0,588,584,1,0,0,0,588,585,1,0,0,0,
588,586,1,0,0,0,588,587,1,0,0,0,589,591,1,0,0,0,590,592,5,16,0,0,591,590,
1,0,0,0,591,592,1,0,0,0,592,593,1,0,0,0,593,595,5,15,0,0,594,596,5,16,0,
0,595,594,1,0,0,0,595,596,1,0,0,0,596,39,1,0,0,0,597,598,7,0,0,0,598,41,
1,0,0,0,599,600,5,13,0,0,600,43,1,0,0,0,118,45,58,60,65,69,79,83,86,90,93,
97,109,113,116,120,123,127,137,141,145,149,155,159,163,167,170,176,180,184,
190,193,197,207,215,218,222,225,229,237,240,244,247,251,262,266,270,274,
277,281,285,289,292,298,302,306,310,313,317,321,324,328,338,341,350,353,
356,365,368,370,373,377,380,384,388,397,399,402,406,415,419,423,427,431,
435,440,444,449,453,457,460,469,472,476,479,482,494,497,500,504,510,514,
517,521,528,532,536,540,543,547,556,560,564,568,571,575,588,591,595];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SchemeLikeLParser extends antlr4.Parser {

    static grammarFileName = "SchemeLikeL.g4";
    static literalNames = [ null, "'define'", "'lambda'", "'if'", "'begin'", 
                            "'let'", "'set!'", "'vector'", "'list'", "'display'", 
                            null, null, null, null, "'('", "')'" ];
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
	        this.state = 58; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
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

	            case 11:
	                this.state = 57;
	                this.uniExpr();
	                break;

	            }
	            this.state = 60; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2056192) !== 0));
	        this.state = 62;
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
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 64;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 67;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 68;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 71;
	        this.operatorExpr();
	        this.state = 81; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 72;
	        		this.match(SchemeLikeLParser.SPACE);
	        		this.state = 79;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 73;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 74;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 75;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 76;
	        		    this.callFnc();
	        		    break;

	        		case 5:
	        		    this.state = 77;
	        		    this.uniExpr();
	        		    break;

	        		case 6:
	        		    this.state = 78;
	        		    this.biExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 83; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 85;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 88;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 89;
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
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 92;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 95;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 96;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 99;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 100;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 101;
	        this.identifier();
	        this.state = 111; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 102;
	        		this.match(SchemeLikeLParser.SPACE);
	        		this.state = 109;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 103;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 104;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 105;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 106;
	        		    this.callFnc();
	        		    break;

	        		case 5:
	        		    this.state = 107;
	        		    this.vectorExpr();
	        		    break;

	        		case 6:
	        		    this.state = 108;
	        		    this.listExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 113; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 115;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 118;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 119;
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
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 122;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 125;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 126;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 129;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 130;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 131;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 132;
	            this.identifier();
	            this.state = 137;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 133;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 134;
	                    this.identifier(); 
	                }
	                this.state = 139;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	            }

	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 140;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 143;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 145;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 144;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 149;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 147;
	                this.fncBodyExpr();
	                break;

	            case 2:
	                this.state = 148;
	                this.localFncBodyExpr();
	                break;

	            }
	            this.state = 151;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        case 13:
	            this.state = 153;
	            this.identifier();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 154;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 157;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 158;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 161;
	            this.match(SchemeLikeLParser.T__1);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 162;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 165;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 167;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 166;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 169;
	                this.identifier();
	            }

	            this.state = 176;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 172;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 173;
	                    this.identifier(); 
	                }
	                this.state = 178;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	            }

	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 179;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 182;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 184;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 183;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 186;
	            this.fncBodyExpr();
	            this.state = 187;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 188;
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
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 192;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 195;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 196;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 199;
	        this.biOperatorExpr();
	        this.state = 200;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 201;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 202;
	            this.expr();
	            break;

	        case 3:
	            this.state = 203;
	            this.literal();
	            break;

	        case 4:
	            this.state = 204;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 205;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 206;
	            this.uniExpr();
	            break;

	        }
	        this.state = 209;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 210;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 211;
	            this.expr();
	            break;

	        case 3:
	            this.state = 212;
	            this.literal();
	            break;

	        case 4:
	            this.state = 213;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 214;
	            this.callFnc();
	            break;

	        }
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 217;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 220;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 222;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        if(la_===1) {
	            this.state = 221;
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
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 224;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 227;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 228;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 231;
	        this.uniOperatorExpr();
	        this.state = 232;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 233;
	            this.literal();
	            break;

	        case 2:
	            this.state = 234;
	            this.identifier();
	            break;

	        case 3:
	            this.state = 235;
	            this.expr();
	            break;

	        case 4:
	            this.state = 236;
	            this.callFnc();
	            break;

	        }
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 239;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 242;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 243;
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
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 246;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 249;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 250;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 253;
	        this.identifier();
	        this.state = 266;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 254;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 262;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 255;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 256;
	                    this.identifier();
	                    break;

	                case 3:
	                    this.state = 257;
	                    this.literal();
	                    break;

	                case 4:
	                    this.state = 258;
	                    this.callFnc();
	                    break;

	                case 5:
	                    this.state = 259;
	                    this.callLambdaFnc();
	                    break;

	                case 6:
	                    this.state = 260;
	                    this.listExpr();
	                    break;

	                case 7:
	                    this.state = 261;
	                    this.vectorExpr();
	                    break;

	                } 
	            }
	            this.state = 268;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	        }

	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 269;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 272;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        if(la_===1) {
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



	callLambdaFnc() {
	    let localctx = new CallLambdaFncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SchemeLikeLParser.RULE_callLambdaFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 276;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 279;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 280;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 283;
	        this.match(SchemeLikeLParser.T__1);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 284;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 287;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 289;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        if(la_===1) {
	            this.state = 288;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 291;
	            this.identifier();
	        }

	        this.state = 298;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 294;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 295;
	                this.identifier(); 
	            }
	            this.state = 300;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
	        }

	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 301;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 304;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        if(la_===1) {
	            this.state = 305;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 315; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 310;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 308;
	                this.expr();
	                break;

	            case 2:
	                this.state = 309;
	                this.callFnc();
	                break;

	            }
	            this.state = 313;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	            if(la_===1) {
	                this.state = 312;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 317; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14 || _la===16);
	        this.state = 319;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 321;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        if(la_===1) {
	            this.state = 320;
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
	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 323;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 326;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 328;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 327;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 330;
	        this.match(SchemeLikeLParser.T__2);
	        this.state = 331;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 338;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 332;
	            this.expr();
	            break;

	        case 2:
	            this.state = 333;
	            this.biExpr();
	            break;

	        case 3:
	            this.state = 334;
	            this.literal();
	            break;

	        case 4:
	            this.state = 335;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 336;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 337;
	            this.uniExpr();
	            break;

	        }
	        this.state = 341;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        if(la_===1) {
	            this.state = 340;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 350;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 343;
	                this.expr();
	                break;

	            case 2:
	                this.state = 344;
	                this.literal();
	                break;

	            case 3:
	                this.state = 345;
	                this.identifier();
	                break;

	            case 4:
	                this.state = 346;
	                this.callFnc();
	                break;

	            case 5:
	                this.state = 347;
	                this.setExpr();
	                break;

	            case 6:
	                this.state = 348;
	                this.ifExpr();
	                break;

	            case 7:
	                this.state = 349;
	                this.displayExpr();
	                break;

	            }
	            break;

	        case 2:
	            this.state = 352;
	            this.beginExpr();
	            break;

	        }
	        this.state = 370;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        if(la_===1) {
	            this.state = 356;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	            if(la_===1) {
	                this.state = 355;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 368;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 365;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 358;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 359;
	                    this.literal();
	                    break;

	                case 3:
	                    this.state = 360;
	                    this.identifier();
	                    break;

	                case 4:
	                    this.state = 361;
	                    this.callFnc();
	                    break;

	                case 5:
	                    this.state = 362;
	                    this.setExpr();
	                    break;

	                case 6:
	                    this.state = 363;
	                    this.ifExpr();
	                    break;

	                case 7:
	                    this.state = 364;
	                    this.displayExpr();
	                    break;

	                }
	                break;

	            case 2:
	                this.state = 367;
	                this.beginExpr();
	                break;

	            }

	        }
	        this.state = 373;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 372;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 375;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 377;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
	        if(la_===1) {
	            this.state = 376;
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
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 379;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 382;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 383;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 386;
	        this.match(SchemeLikeLParser.T__3);
	        this.state = 388;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
	        if(la_===1) {
	            this.state = 387;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 397; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 397;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 390;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 391;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 392;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 393;
	        		    this.callFnc();
	        		    break;

	        		case 5:
	        		    this.state = 394;
	        		    this.setExpr();
	        		    break;

	        		case 6:
	        		    this.state = 395;
	        		    this.displayExpr();
	        		    break;

	        		case 7:
	        		    this.state = 396;
	        		    this.ifExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 399; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,75, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 402;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 401;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 404;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 406;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
	        if(la_===1) {
	            this.state = 405;
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
	        this.state = 408;
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
	        this.state = 410;
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
	        this.state = 412;
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

	        this.state = 421;
	        this.match(SchemeLikeLParser.T__4);
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 422;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 425;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 426;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 444;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 429;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 431;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
	            if(la_===1) {
	                this.state = 430;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 433;
	            this.varPairExpr();
	            this.state = 435;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 434;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 437;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 440;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 439;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 446;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 447;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 449;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,86,this._ctx);
	        if(la_===1) {
	            this.state = 448;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 451;
	        this.fncBodyExpr();
	        this.state = 453;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 452;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 455;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 456;
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
	        this.state = 460;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
	        if(la_===1) {
	            this.state = 459;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 474; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 469;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 462;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 463;
	        		    this.callFnc();
	        		    break;

	        		case 3:
	        		    this.state = 464;
	        		    this.ifExpr();
	        		    break;

	        		case 4:
	        		    this.state = 465;
	        		    this.setExpr();
	        		    break;

	        		case 5:
	        		    this.state = 466;
	        		    this.listExpr();
	        		    break;

	        		case 6:
	        		    this.state = 467;
	        		    this.displayExpr();
	        		    break;

	        		case 7:
	        		    this.state = 468;
	        		    this.vectorExpr();
	        		    break;

	        		}
	        		this.state = 472;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,91,this._ctx);
	        		if(la_===1) {
	        		    this.state = 471;
	        		    this.match(SchemeLikeLParser.SPACE);

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 476; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,92, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 479;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,93,this._ctx);
	        if(la_===1) {
	            this.state = 478;
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
	        this.state = 482;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 481;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 484;
	        this.identifier();
	        this.state = 485;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 494;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 486;
	            this.expr();
	            break;

	        case 2:
	            this.state = 487;
	            this.literal();
	            break;

	        case 3:
	            this.state = 488;
	            this.identifier();
	            break;

	        case 4:
	            this.state = 489;
	            this.callFnc();
	            break;

	        case 5:
	            this.state = 490;
	            this.vectorExpr();
	            break;

	        case 6:
	            this.state = 491;
	            this.listExpr();
	            break;

	        case 7:
	            this.state = 492;
	            this.uniExpr();
	            break;

	        case 8:
	            this.state = 493;
	            this.biExpr();
	            break;

	        }
	        this.state = 497;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,96,this._ctx);
	        if(la_===1) {
	            this.state = 496;
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
	        this.state = 500;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 499;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 502;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 504;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 503;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 506;
	        this.match(SchemeLikeLParser.T__5);
	        this.state = 507;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 508;
	        this.varPairExpr();
	        this.state = 510;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 509;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 512;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 514;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,100,this._ctx);
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



	vectorExpr() {
	    let localctx = new VectorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SchemeLikeLParser.RULE_vectorExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 516;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 519;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 521;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 520;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 523;
	        this.match(SchemeLikeLParser.T__6);
	        this.state = 532;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,104,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 524;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 528;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 17:
	                case 18:
	                case 19:
	                case 20:
	                    this.state = 525;
	                    this.literal();
	                    break;
	                case 13:
	                    this.state = 526;
	                    this.identifier();
	                    break;
	                case 14:
	                case 16:
	                    this.state = 527;
	                    this.expr();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 534;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,104,this._ctx);
	        }

	        this.state = 536;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 535;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 538;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 540;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,106,this._ctx);
	        if(la_===1) {
	            this.state = 539;
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
	        this.state = 543;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 542;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 545;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 547;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 546;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 549;
	        this.match(SchemeLikeLParser.T__7);
	        this.state = 560;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,110,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 550;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 556;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,109,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 551;
	                    this.literal();
	                    break;

	                case 2:
	                    this.state = 552;
	                    this.identifier();
	                    break;

	                case 3:
	                    this.state = 553;
	                    this.vectorExpr();
	                    break;

	                case 4:
	                    this.state = 554;
	                    this.listExpr();
	                    break;

	                case 5:
	                    this.state = 555;
	                    this.expr();
	                    break;

	                } 
	            }
	            this.state = 562;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,110,this._ctx);
	        }

	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 563;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 566;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 568;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,112,this._ctx);
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



	displayExpr() {
	    let localctx = new DisplayExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SchemeLikeLParser.RULE_displayExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 571;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 570;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 573;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 575;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 574;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 577;
	        this.match(SchemeLikeLParser.T__8);
	        this.state = 578;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 588;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,115,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 579;
	            this.literal();
	            break;

	        case 2:
	            this.state = 580;
	            this.identifier();
	            break;

	        case 3:
	            this.state = 581;
	            this.vectorExpr();
	            break;

	        case 4:
	            this.state = 582;
	            this.listExpr();
	            break;

	        case 5:
	            this.state = 583;
	            this.callFnc();
	            break;

	        case 6:
	            this.state = 584;
	            this.expr();
	            break;

	        case 7:
	            this.state = 585;
	            this.ifExpr();
	            break;

	        case 8:
	            this.state = 586;
	            this.uniExpr();
	            break;

	        case 9:
	            this.state = 587;
	            this.biExpr();
	            break;

	        }
	        this.state = 591;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 590;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 593;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 595;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,117,this._ctx);
	        if(la_===1) {
	            this.state = 594;
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
	        this.state = 597;
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
	        this.state = 599;
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

	uniExpr() {
	    return this.getTypedRuleContext(UniExprContext,0);
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

	uniExpr() {
	    return this.getTypedRuleContext(UniExprContext,0);
	};

	biExpr() {
	    return this.getTypedRuleContext(BiExprContext,0);
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

	uniExpr() {
	    return this.getTypedRuleContext(UniExprContext,0);
	};

	biExpr() {
	    return this.getTypedRuleContext(BiExprContext,0);
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
