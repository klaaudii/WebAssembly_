// Generated from SchemeLikeL.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from './antlr4/index.web.js';
import SchemeLikeLListener from './SchemeLikeLListener.js';
import SchemeLikeLVisitor from './SchemeLikeLVisitor.js';

const serializedATN = [4,1,16,481,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,4,0,46,8,0,11,0,12,0,47,1,0,1,0,1,1,1,1,3,1,54,8,1,1,1,1,
1,1,1,1,1,1,1,1,1,3,1,62,8,1,5,1,64,8,1,10,1,12,1,67,9,1,1,1,3,1,70,8,1,
1,1,1,1,1,2,1,2,3,2,76,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,87,8,
2,5,2,89,8,2,10,2,12,2,92,9,2,1,2,3,2,95,8,2,1,2,1,2,1,3,1,3,3,3,101,8,3,
1,3,1,3,1,3,1,3,1,3,1,3,5,3,109,8,3,10,3,12,3,112,9,3,1,3,3,3,115,8,3,1,
3,1,3,3,3,119,8,3,1,3,1,3,3,3,123,8,3,1,3,1,3,1,3,1,3,3,3,129,8,3,1,3,1,
3,3,3,133,8,3,1,3,1,3,3,3,137,8,3,1,3,1,3,3,3,141,8,3,1,3,3,3,144,8,3,1,
3,1,3,5,3,148,8,3,10,3,12,3,151,9,3,1,3,3,3,154,8,3,1,3,1,3,3,3,158,8,3,
1,3,1,3,1,3,1,3,3,3,164,8,3,1,4,1,4,3,4,168,8,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,3,4,177,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,185,8,4,1,4,3,4,188,8,4,1,4,
1,4,1,5,3,5,193,8,5,1,5,1,5,3,5,197,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,
206,8,5,5,5,208,8,5,10,5,12,5,211,9,5,1,5,3,5,214,8,5,1,5,1,5,3,5,218,8,
5,1,6,1,6,3,6,222,8,6,1,6,1,6,3,6,226,8,6,1,6,1,6,3,6,230,8,6,1,6,3,6,233,
8,6,1,6,1,6,5,6,237,8,6,10,6,12,6,240,9,6,1,6,3,6,243,8,6,1,6,1,6,3,6,247,
8,6,1,6,1,6,3,6,251,8,6,1,6,3,6,254,8,6,4,6,256,8,6,11,6,12,6,257,1,6,1,
6,1,7,3,7,263,8,7,1,7,1,7,3,7,267,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,276,
8,7,1,7,3,7,279,8,7,1,7,1,7,1,7,1,7,1,7,3,7,286,8,7,1,7,3,7,289,8,7,1,7,
3,7,292,8,7,1,7,1,7,1,7,1,7,1,7,3,7,299,8,7,1,7,3,7,302,8,7,1,7,3,7,305,
8,7,1,7,1,7,3,7,309,8,7,1,8,3,8,312,8,8,1,8,1,8,3,8,316,8,8,1,8,1,8,3,8,
320,8,8,1,8,1,8,1,8,1,8,1,8,1,8,4,8,328,8,8,11,8,12,8,329,1,8,3,8,333,8,
8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,3,11,343,8,11,1,11,1,11,3,11,347,8,
11,1,11,1,11,3,11,351,8,11,1,11,1,11,3,11,355,8,11,1,11,1,11,3,11,359,8,
11,1,11,1,11,1,11,3,11,364,8,11,5,11,366,8,11,10,11,12,11,369,9,11,1,11,
1,11,3,11,373,8,11,1,11,1,11,3,11,377,8,11,1,11,1,11,1,12,1,12,1,12,1,12,
1,12,3,12,386,8,12,1,12,3,12,389,8,12,4,12,391,8,12,11,12,12,12,392,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,401,8,13,1,14,1,14,3,14,405,8,14,1,14,1,14,
1,14,1,14,3,14,411,8,14,1,14,1,14,1,15,1,15,3,15,417,8,15,1,15,1,15,1,15,
1,15,3,15,423,8,15,1,15,1,15,3,15,427,8,15,1,15,1,15,3,15,431,8,15,1,15,
1,15,3,15,435,8,15,1,15,1,15,1,15,3,15,440,8,15,5,15,442,8,15,10,15,12,15,
445,9,15,1,15,1,15,3,15,449,8,15,1,15,1,15,3,15,453,8,15,1,15,1,15,1,16,
1,16,3,16,459,8,16,1,16,1,16,1,16,1,16,1,16,3,16,466,8,16,4,16,468,8,16,
11,16,12,16,469,1,16,3,16,473,8,16,1,16,1,16,1,17,1,17,1,18,1,18,1,18,0,
0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,1,1,0,14,15,588,
0,45,1,0,0,0,2,51,1,0,0,0,4,73,1,0,0,0,6,98,1,0,0,0,8,165,1,0,0,0,10,192,
1,0,0,0,12,219,1,0,0,0,14,262,1,0,0,0,16,311,1,0,0,0,18,336,1,0,0,0,20,338,
1,0,0,0,22,340,1,0,0,0,24,390,1,0,0,0,26,394,1,0,0,0,28,402,1,0,0,0,30,414,
1,0,0,0,32,456,1,0,0,0,34,476,1,0,0,0,36,478,1,0,0,0,38,46,3,2,1,0,39,46,
3,4,2,0,40,46,3,6,3,0,41,46,3,34,17,0,42,46,3,36,18,0,43,46,3,10,5,0,44,
46,3,28,14,0,45,38,1,0,0,0,45,39,1,0,0,0,45,40,1,0,0,0,45,41,1,0,0,0,45,
42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,
1,0,0,0,48,49,1,0,0,0,49,50,5,0,0,1,50,1,1,0,0,0,51,53,5,11,0,0,52,54,5,
13,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,65,3,18,9,0,56,61,5,
13,0,0,57,62,3,2,1,0,58,62,3,34,17,0,59,62,3,36,18,0,60,62,3,10,5,0,61,57,
1,0,0,0,61,58,1,0,0,0,61,59,1,0,0,0,61,60,1,0,0,0,62,64,1,0,0,0,63,56,1,
0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,69,1,0,0,0,67,65,1,0,
0,0,68,70,5,13,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,5,12,
0,0,72,3,1,0,0,0,73,75,5,11,0,0,74,76,5,13,0,0,75,74,1,0,0,0,75,76,1,0,0,
0,76,77,1,0,0,0,77,78,5,1,0,0,78,79,5,13,0,0,79,90,3,36,18,0,80,86,5,13,
0,0,81,87,3,2,1,0,82,87,3,34,17,0,83,87,3,36,18,0,84,87,3,10,5,0,85,87,3,
32,16,0,86,81,1,0,0,0,86,82,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,
0,0,0,87,89,1,0,0,0,88,80,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,
0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,95,5,13,0,0,94,93,1,0,0,0,94,95,1,0,0,
0,95,96,1,0,0,0,96,97,5,12,0,0,97,5,1,0,0,0,98,100,5,11,0,0,99,101,5,13,
0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,103,5,1,0,0,103,163,
5,13,0,0,104,105,5,11,0,0,105,110,3,36,18,0,106,107,5,13,0,0,107,109,3,36,
18,0,108,106,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,
114,1,0,0,0,112,110,1,0,0,0,113,115,5,13,0,0,114,113,1,0,0,0,114,115,1,0,
0,0,115,116,1,0,0,0,116,118,5,12,0,0,117,119,5,13,0,0,118,117,1,0,0,0,118,
119,1,0,0,0,119,122,1,0,0,0,120,123,3,24,12,0,121,123,3,22,11,0,122,120,
1,0,0,0,122,121,1,0,0,0,123,124,1,0,0,0,124,125,5,12,0,0,125,164,1,0,0,0,
126,128,3,36,18,0,127,129,5,13,0,0,128,127,1,0,0,0,128,129,1,0,0,0,129,130,
1,0,0,0,130,132,5,11,0,0,131,133,5,13,0,0,132,131,1,0,0,0,132,133,1,0,0,
0,133,134,1,0,0,0,134,136,5,2,0,0,135,137,5,13,0,0,136,135,1,0,0,0,136,137,
1,0,0,0,137,138,1,0,0,0,138,140,5,11,0,0,139,141,5,13,0,0,140,139,1,0,0,
0,140,141,1,0,0,0,141,143,1,0,0,0,142,144,3,36,18,0,143,142,1,0,0,0,143,
144,1,0,0,0,144,149,1,0,0,0,145,146,5,13,0,0,146,148,3,36,18,0,147,145,1,
0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,
149,1,0,0,0,152,154,5,13,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,155,1,0,
0,0,155,157,5,12,0,0,156,158,5,13,0,0,157,156,1,0,0,0,157,158,1,0,0,0,158,
159,1,0,0,0,159,160,3,24,12,0,160,161,5,12,0,0,161,162,5,12,0,0,162,164,
1,0,0,0,163,104,1,0,0,0,163,126,1,0,0,0,164,7,1,0,0,0,165,167,5,11,0,0,166,
168,5,13,0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,3,20,
10,0,170,176,5,13,0,0,171,177,3,8,4,0,172,177,3,2,1,0,173,177,3,34,17,0,
174,177,3,36,18,0,175,177,3,10,5,0,176,171,1,0,0,0,176,172,1,0,0,0,176,173,
1,0,0,0,176,174,1,0,0,0,176,175,1,0,0,0,177,178,1,0,0,0,178,184,5,13,0,0,
179,185,3,8,4,0,180,185,3,2,1,0,181,185,3,34,17,0,182,185,3,36,18,0,183,
185,3,10,5,0,184,179,1,0,0,0,184,180,1,0,0,0,184,181,1,0,0,0,184,182,1,0,
0,0,184,183,1,0,0,0,185,187,1,0,0,0,186,188,5,13,0,0,187,186,1,0,0,0,187,
188,1,0,0,0,188,189,1,0,0,0,189,190,5,12,0,0,190,9,1,0,0,0,191,193,5,13,
0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,196,5,11,0,0,195,
197,5,13,0,0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,209,3,36,
18,0,199,205,5,13,0,0,200,206,3,36,18,0,201,206,3,34,17,0,202,206,3,10,5,
0,203,206,3,2,1,0,204,206,3,12,6,0,205,200,1,0,0,0,205,201,1,0,0,0,205,202,
1,0,0,0,205,203,1,0,0,0,205,204,1,0,0,0,206,208,1,0,0,0,207,199,1,0,0,0,
208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,213,1,0,0,0,211,209,
1,0,0,0,212,214,5,13,0,0,213,212,1,0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,
215,217,5,12,0,0,216,218,5,13,0,0,217,216,1,0,0,0,217,218,1,0,0,0,218,11,
1,0,0,0,219,221,5,11,0,0,220,222,5,13,0,0,221,220,1,0,0,0,221,222,1,0,0,
0,222,223,1,0,0,0,223,225,5,2,0,0,224,226,5,13,0,0,225,224,1,0,0,0,225,226,
1,0,0,0,226,227,1,0,0,0,227,229,5,11,0,0,228,230,5,13,0,0,229,228,1,0,0,
0,229,230,1,0,0,0,230,232,1,0,0,0,231,233,3,36,18,0,232,231,1,0,0,0,232,
233,1,0,0,0,233,238,1,0,0,0,234,235,5,13,0,0,235,237,3,36,18,0,236,234,1,
0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,242,1,0,0,0,240,
238,1,0,0,0,241,243,5,13,0,0,242,241,1,0,0,0,242,243,1,0,0,0,243,244,1,0,
0,0,244,246,5,12,0,0,245,247,5,13,0,0,246,245,1,0,0,0,246,247,1,0,0,0,247,
255,1,0,0,0,248,251,3,2,1,0,249,251,3,10,5,0,250,248,1,0,0,0,250,249,1,0,
0,0,251,253,1,0,0,0,252,254,5,13,0,0,253,252,1,0,0,0,253,254,1,0,0,0,254,
256,1,0,0,0,255,250,1,0,0,0,256,257,1,0,0,0,257,255,1,0,0,0,257,258,1,0,
0,0,258,259,1,0,0,0,259,260,5,12,0,0,260,13,1,0,0,0,261,263,5,13,0,0,262,
261,1,0,0,0,262,263,1,0,0,0,263,264,1,0,0,0,264,266,5,11,0,0,265,267,5,13,
0,0,266,265,1,0,0,0,266,267,1,0,0,0,267,268,1,0,0,0,268,269,5,3,0,0,269,
275,5,13,0,0,270,276,3,2,1,0,271,276,3,8,4,0,272,276,3,34,17,0,273,276,3,
36,18,0,274,276,3,10,5,0,275,270,1,0,0,0,275,271,1,0,0,0,275,272,1,0,0,0,
275,273,1,0,0,0,275,274,1,0,0,0,276,278,1,0,0,0,277,279,5,13,0,0,278,277,
1,0,0,0,278,279,1,0,0,0,279,288,1,0,0,0,280,286,3,2,1,0,281,286,3,34,17,
0,282,286,3,36,18,0,283,286,3,10,5,0,284,286,3,28,14,0,285,280,1,0,0,0,285,
281,1,0,0,0,285,282,1,0,0,0,285,283,1,0,0,0,285,284,1,0,0,0,286,289,1,0,
0,0,287,289,3,16,8,0,288,285,1,0,0,0,288,287,1,0,0,0,289,291,1,0,0,0,290,
292,5,13,0,0,291,290,1,0,0,0,291,292,1,0,0,0,292,301,1,0,0,0,293,299,3,2,
1,0,294,299,3,34,17,0,295,299,3,36,18,0,296,299,3,10,5,0,297,299,3,28,14,
0,298,293,1,0,0,0,298,294,1,0,0,0,298,295,1,0,0,0,298,296,1,0,0,0,298,297,
1,0,0,0,299,302,1,0,0,0,300,302,3,16,8,0,301,298,1,0,0,0,301,300,1,0,0,0,
302,304,1,0,0,0,303,305,5,13,0,0,304,303,1,0,0,0,304,305,1,0,0,0,305,306,
1,0,0,0,306,308,5,12,0,0,307,309,5,13,0,0,308,307,1,0,0,0,308,309,1,0,0,
0,309,15,1,0,0,0,310,312,5,13,0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,313,
1,0,0,0,313,315,5,11,0,0,314,316,5,13,0,0,315,314,1,0,0,0,315,316,1,0,0,
0,316,317,1,0,0,0,317,319,5,4,0,0,318,320,5,13,0,0,319,318,1,0,0,0,319,320,
1,0,0,0,320,327,1,0,0,0,321,328,3,2,1,0,322,328,3,34,17,0,323,328,3,36,18,
0,324,328,3,10,5,0,325,328,3,28,14,0,326,328,3,30,15,0,327,321,1,0,0,0,327,
322,1,0,0,0,327,323,1,0,0,0,327,324,1,0,0,0,327,325,1,0,0,0,327,326,1,0,
0,0,328,329,1,0,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,332,1,0,0,0,331,
333,5,13,0,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,335,5,12,
0,0,335,17,1,0,0,0,336,337,5,8,0,0,337,19,1,0,0,0,338,339,5,9,0,0,339,21,
1,0,0,0,340,342,5,11,0,0,341,343,5,13,0,0,342,341,1,0,0,0,342,343,1,0,0,
0,343,344,1,0,0,0,344,346,5,5,0,0,345,347,5,13,0,0,346,345,1,0,0,0,346,347,
1,0,0,0,347,348,1,0,0,0,348,350,5,11,0,0,349,351,5,13,0,0,350,349,1,0,0,
0,350,351,1,0,0,0,351,367,1,0,0,0,352,354,5,11,0,0,353,355,5,13,0,0,354,
353,1,0,0,0,354,355,1,0,0,0,355,356,1,0,0,0,356,358,3,26,13,0,357,359,5,
13,0,0,358,357,1,0,0,0,358,359,1,0,0,0,359,360,1,0,0,0,360,361,5,12,0,0,
361,363,1,0,0,0,362,364,5,13,0,0,363,362,1,0,0,0,363,364,1,0,0,0,364,366,
1,0,0,0,365,352,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,
368,370,1,0,0,0,369,367,1,0,0,0,370,372,5,12,0,0,371,373,5,13,0,0,372,371,
1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,376,3,24,12,0,375,377,5,13,0,
0,376,375,1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,379,5,12,0,0,379,23,
1,0,0,0,380,386,3,2,1,0,381,386,3,10,5,0,382,386,3,14,7,0,383,386,3,28,14,
0,384,386,3,30,15,0,385,380,1,0,0,0,385,381,1,0,0,0,385,382,1,0,0,0,385,
383,1,0,0,0,385,384,1,0,0,0,386,388,1,0,0,0,387,389,5,13,0,0,388,387,1,0,
0,0,388,389,1,0,0,0,389,391,1,0,0,0,390,385,1,0,0,0,391,392,1,0,0,0,392,
390,1,0,0,0,392,393,1,0,0,0,393,25,1,0,0,0,394,395,3,36,18,0,395,400,5,13,
0,0,396,401,3,2,1,0,397,401,3,34,17,0,398,401,3,36,18,0,399,401,3,10,5,0,
400,396,1,0,0,0,400,397,1,0,0,0,400,398,1,0,0,0,400,399,1,0,0,0,401,27,1,
0,0,0,402,404,5,11,0,0,403,405,5,13,0,0,404,403,1,0,0,0,404,405,1,0,0,0,
405,406,1,0,0,0,406,407,5,6,0,0,407,408,5,13,0,0,408,410,3,26,13,0,409,411,
5,13,0,0,410,409,1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,413,5,12,0,
0,413,29,1,0,0,0,414,416,5,11,0,0,415,417,5,13,0,0,416,415,1,0,0,0,416,417,
1,0,0,0,417,418,1,0,0,0,418,419,5,5,0,0,419,420,5,13,0,0,420,422,3,36,18,
0,421,423,5,13,0,0,422,421,1,0,0,0,422,423,1,0,0,0,423,424,1,0,0,0,424,426,
5,11,0,0,425,427,5,13,0,0,426,425,1,0,0,0,426,427,1,0,0,0,427,443,1,0,0,
0,428,430,5,11,0,0,429,431,5,13,0,0,430,429,1,0,0,0,430,431,1,0,0,0,431,
432,1,0,0,0,432,434,3,26,13,0,433,435,5,13,0,0,434,433,1,0,0,0,434,435,1,
0,0,0,435,436,1,0,0,0,436,437,5,12,0,0,437,439,1,0,0,0,438,440,5,13,0,0,
439,438,1,0,0,0,439,440,1,0,0,0,440,442,1,0,0,0,441,428,1,0,0,0,442,445,
1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,446,1,0,0,0,445,443,1,0,0,0,
446,448,5,12,0,0,447,449,5,13,0,0,448,447,1,0,0,0,448,449,1,0,0,0,449,450,
1,0,0,0,450,452,3,24,12,0,451,453,5,13,0,0,452,451,1,0,0,0,452,453,1,0,0,
0,453,454,1,0,0,0,454,455,5,12,0,0,455,31,1,0,0,0,456,458,5,11,0,0,457,459,
5,13,0,0,458,457,1,0,0,0,458,459,1,0,0,0,459,460,1,0,0,0,460,467,5,7,0,0,
461,465,5,13,0,0,462,466,3,34,17,0,463,466,3,36,18,0,464,466,3,10,5,0,465,
462,1,0,0,0,465,463,1,0,0,0,465,464,1,0,0,0,466,468,1,0,0,0,467,461,1,0,
0,0,468,469,1,0,0,0,469,467,1,0,0,0,469,470,1,0,0,0,470,472,1,0,0,0,471,
473,5,13,0,0,472,471,1,0,0,0,472,473,1,0,0,0,473,474,1,0,0,0,474,475,5,12,
0,0,475,33,1,0,0,0,476,477,7,0,0,0,477,35,1,0,0,0,478,479,5,10,0,0,479,37,
1,0,0,0,89,45,47,53,61,65,69,75,86,90,94,100,110,114,118,122,128,132,136,
140,143,149,153,157,163,167,176,184,187,192,196,205,209,213,217,221,225,
229,232,238,242,246,250,253,257,262,266,275,278,285,288,291,298,301,304,
308,311,315,319,327,329,332,342,346,350,354,358,363,367,372,376,385,388,
392,400,404,410,416,422,426,430,434,439,443,448,452,458,465,469,472];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SchemeLikeLParser extends antlr4.Parser {

    static grammarFileName = "SchemeLikeL.g4";
    static literalNames = [ null, "'define'", "'lambda'", "'if'", "'begin'", 
                            "'let'", "'set!'", "'vector'", null, null, null, 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "OPERATOR", "BIOPERATOR", "VARIABLE", "PSTART", 
                             "PEND", "SPACE", "FLOAT", "INT", "WS" ];
    static ruleNames = [ "start", "expr", "defineGlobalVar", "defineFnc", 
                         "biExpr", "callFnc", "callLambdaFnc", "ifExpr", 
                         "beginExpr", "operatorExpr", "biOperatorExpr", 
                         "localFncBodyExpr", "fncBodyExpr", "varPairExpr", 
                         "setExpr", "loopExpr", "vectorExpr", "literal", 
                         "identifier" ];

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
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 38;
	                this.expr();
	                break;

	            case 2:
	                this.state = 39;
	                this.defineGlobalVar();
	                break;

	            case 3:
	                this.state = 40;
	                this.defineFnc();
	                break;

	            case 4:
	                this.state = 41;
	                this.literal();
	                break;

	            case 5:
	                this.state = 42;
	                this.identifier();
	                break;

	            case 6:
	                this.state = 43;
	                this.callFnc();
	                break;

	            case 7:
	                this.state = 44;
	                this.setExpr();
	                break;

	            }
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60416) !== 0));
	        this.state = 49;
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
	        this.state = 51;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 52;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 55;
	        this.operatorExpr();
	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 56;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 61;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 57;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 58;
	                    this.literal();
	                    break;

	                case 3:
	                    this.state = 59;
	                    this.identifier();
	                    break;

	                case 4:
	                    this.state = 60;
	                    this.callFnc();
	                    break;

	                } 
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 68;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 71;
	        this.match(SchemeLikeLParser.PEND);
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
	        this.state = 73;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 74;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 77;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 78;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 79;
	        this.identifier();
	        this.state = 90;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 80;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 86;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 81;
	                    this.expr();
	                    break;

	                case 2:
	                    this.state = 82;
	                    this.literal();
	                    break;

	                case 3:
	                    this.state = 83;
	                    this.identifier();
	                    break;

	                case 4:
	                    this.state = 84;
	                    this.callFnc();
	                    break;

	                case 5:
	                    this.state = 85;
	                    this.vectorExpr();
	                    break;

	                } 
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 93;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 96;
	        this.match(SchemeLikeLParser.PEND);
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
	        this.state = 98;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 99;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 102;
	        this.match(SchemeLikeLParser.T__0);
	        this.state = 103;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 163;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.state = 104;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 105;
	            this.identifier();
	            this.state = 110;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 106;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 107;
	                    this.identifier(); 
	                }
	                this.state = 112;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 113;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 116;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 118;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 117;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 122;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 120;
	                this.fncBodyExpr();
	                break;

	            case 2:
	                this.state = 121;
	                this.localFncBodyExpr();
	                break;

	            }
	            this.state = 124;
	            this.match(SchemeLikeLParser.PEND);
	            break;
	        case 10:
	            this.state = 126;
	            this.identifier();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 127;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 130;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 131;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 134;
	            this.match(SchemeLikeLParser.T__1);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 135;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 138;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 140;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 139;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 142;
	                this.identifier();
	            }

	            this.state = 149;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 145;
	                    this.match(SchemeLikeLParser.SPACE);
	                    this.state = 146;
	                    this.identifier(); 
	                }
	                this.state = 151;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	            }

	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 152;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 155;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 157;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	            if(la_===1) {
	                this.state = 156;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 159;
	            this.fncBodyExpr();
	            this.state = 160;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 161;
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
	        this.state = 165;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 166;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 169;
	        this.biOperatorExpr();
	        this.state = 170;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 171;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 172;
	            this.expr();
	            break;

	        case 3:
	            this.state = 173;
	            this.literal();
	            break;

	        case 4:
	            this.state = 174;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 175;
	            this.callFnc();
	            break;

	        }
	        this.state = 178;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 179;
	            this.biExpr();
	            break;

	        case 2:
	            this.state = 180;
	            this.expr();
	            break;

	        case 3:
	            this.state = 181;
	            this.literal();
	            break;

	        case 4:
	            this.state = 182;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 183;
	            this.callFnc();
	            break;

	        }
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 186;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 189;
	        this.match(SchemeLikeLParser.PEND);
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
	    this.enterRule(localctx, 10, SchemeLikeLParser.RULE_callFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 191;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 194;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 195;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 198;
	        this.identifier();
	        this.state = 209;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 199;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 205;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 200;
	                    this.identifier();
	                    break;

	                case 2:
	                    this.state = 201;
	                    this.literal();
	                    break;

	                case 3:
	                    this.state = 202;
	                    this.callFnc();
	                    break;

	                case 4:
	                    this.state = 203;
	                    this.expr();
	                    break;

	                case 5:
	                    this.state = 204;
	                    this.callLambdaFnc();
	                    break;

	                } 
	            }
	            this.state = 211;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	        }

	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 212;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 215;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 217;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        if(la_===1) {
	            this.state = 216;
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
	    this.enterRule(localctx, 12, SchemeLikeLParser.RULE_callLambdaFnc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 220;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 223;
	        this.match(SchemeLikeLParser.T__1);
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 224;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 227;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 229;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 228;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 231;
	            this.identifier();
	        }

	        this.state = 238;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 234;
	                this.match(SchemeLikeLParser.SPACE);
	                this.state = 235;
	                this.identifier(); 
	            }
	            this.state = 240;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
	        }

	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 241;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 244;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 245;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 255; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 250;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 248;
	                this.expr();
	                break;

	            case 2:
	                this.state = 249;
	                this.callFnc();
	                break;

	            }
	            this.state = 253;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	            if(la_===1) {
	                this.state = 252;
	                this.match(SchemeLikeLParser.SPACE);

	            }
	            this.state = 257; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===11 || _la===13);
	        this.state = 259;
	        this.match(SchemeLikeLParser.PEND);
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
	    this.enterRule(localctx, 14, SchemeLikeLParser.RULE_ifExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 261;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 264;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 265;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 268;
	        this.match(SchemeLikeLParser.T__2);
	        this.state = 269;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 275;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 270;
	            this.expr();
	            break;

	        case 2:
	            this.state = 271;
	            this.biExpr();
	            break;

	        case 3:
	            this.state = 272;
	            this.literal();
	            break;

	        case 4:
	            this.state = 273;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 274;
	            this.callFnc();
	            break;

	        }
	        this.state = 278;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        if(la_===1) {
	            this.state = 277;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 288;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 285;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 280;
	                this.expr();
	                break;

	            case 2:
	                this.state = 281;
	                this.literal();
	                break;

	            case 3:
	                this.state = 282;
	                this.identifier();
	                break;

	            case 4:
	                this.state = 283;
	                this.callFnc();
	                break;

	            case 5:
	                this.state = 284;
	                this.setExpr();
	                break;

	            }
	            break;

	        case 2:
	            this.state = 287;
	            this.beginExpr();
	            break;

	        }
	        this.state = 291;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        if(la_===1) {
	            this.state = 290;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 298;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 293;
	                this.expr();
	                break;

	            case 2:
	                this.state = 294;
	                this.literal();
	                break;

	            case 3:
	                this.state = 295;
	                this.identifier();
	                break;

	            case 4:
	                this.state = 296;
	                this.callFnc();
	                break;

	            case 5:
	                this.state = 297;
	                this.setExpr();
	                break;

	            }
	            break;

	        case 2:
	            this.state = 300;
	            this.beginExpr();
	            break;

	        }
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 303;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 306;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 308;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        if(la_===1) {
	            this.state = 307;
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
	    this.enterRule(localctx, 16, SchemeLikeLParser.RULE_beginExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 310;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 313;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 314;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 317;
	        this.match(SchemeLikeLParser.T__3);
	        this.state = 319;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        if(la_===1) {
	            this.state = 318;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 327; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 327;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 321;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 322;
	        		    this.literal();
	        		    break;

	        		case 3:
	        		    this.state = 323;
	        		    this.identifier();
	        		    break;

	        		case 4:
	        		    this.state = 324;
	        		    this.callFnc();
	        		    break;

	        		case 5:
	        		    this.state = 325;
	        		    this.setExpr();
	        		    break;

	        		case 6:
	        		    this.state = 326;
	        		    this.loopExpr();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 329; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,59, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 331;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 334;
	        this.match(SchemeLikeLParser.PEND);
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
	    this.enterRule(localctx, 18, SchemeLikeLParser.RULE_operatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
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
	    this.enterRule(localctx, 20, SchemeLikeLParser.RULE_biOperatorExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
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



	localFncBodyExpr() {
	    let localctx = new LocalFncBodyExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SchemeLikeLParser.RULE_localFncBodyExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 342;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 341;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 344;
	        this.match(SchemeLikeLParser.T__4);
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 345;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 348;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 349;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 352;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 354;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 353;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 356;
	            this.varPairExpr();
	            this.state = 358;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 357;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 360;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 362;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 369;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 370;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 372;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        if(la_===1) {
	            this.state = 371;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 374;
	        this.fncBodyExpr();
	        this.state = 376;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 375;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 378;
	        this.match(SchemeLikeLParser.PEND);
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
	    this.enterRule(localctx, 24, SchemeLikeLParser.RULE_fncBodyExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 385;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 380;
	        		    this.expr();
	        		    break;

	        		case 2:
	        		    this.state = 381;
	        		    this.callFnc();
	        		    break;

	        		case 3:
	        		    this.state = 382;
	        		    this.ifExpr();
	        		    break;

	        		case 4:
	        		    this.state = 383;
	        		    this.setExpr();
	        		    break;

	        		case 5:
	        		    this.state = 384;
	        		    this.loopExpr();
	        		    break;

	        		}
	        		this.state = 388;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	        		if(la_===1) {
	        		    this.state = 387;
	        		    this.match(SchemeLikeLParser.SPACE);

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 392; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,72, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	    this.enterRule(localctx, 26, SchemeLikeLParser.RULE_varPairExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 394;
	        this.identifier();
	        this.state = 395;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 400;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 396;
	            this.expr();
	            break;

	        case 2:
	            this.state = 397;
	            this.literal();
	            break;

	        case 3:
	            this.state = 398;
	            this.identifier();
	            break;

	        case 4:
	            this.state = 399;
	            this.callFnc();
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



	setExpr() {
	    let localctx = new SetExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SchemeLikeLParser.RULE_setExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 403;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 406;
	        this.match(SchemeLikeLParser.T__5);
	        this.state = 407;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 408;
	        this.varPairExpr();
	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 409;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 412;
	        this.match(SchemeLikeLParser.PEND);
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



	loopExpr() {
	    let localctx = new LoopExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SchemeLikeLParser.RULE_loopExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 416;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 415;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 418;
	        this.match(SchemeLikeLParser.T__4);
	        this.state = 419;
	        this.match(SchemeLikeLParser.SPACE);
	        this.state = 420;
	        this.identifier();
	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 421;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 424;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 426;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 425;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 443;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 428;
	            this.match(SchemeLikeLParser.PSTART);
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 429;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 432;
	            this.varPairExpr();
	            this.state = 434;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 433;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 436;
	            this.match(SchemeLikeLParser.PEND);
	            this.state = 439;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 438;
	                this.match(SchemeLikeLParser.SPACE);
	            }

	            this.state = 445;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 446;
	        this.match(SchemeLikeLParser.PEND);
	        this.state = 448;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
	        if(la_===1) {
	            this.state = 447;
	            this.match(SchemeLikeLParser.SPACE);

	        }
	        this.state = 450;
	        this.fncBodyExpr();
	        this.state = 452;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 451;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 454;
	        this.match(SchemeLikeLParser.PEND);
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
	    this.enterRule(localctx, 32, SchemeLikeLParser.RULE_vectorExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.match(SchemeLikeLParser.PSTART);
	        this.state = 458;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 457;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 460;
	        this.match(SchemeLikeLParser.T__6);
	        this.state = 467; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 461;
	        		this.match(SchemeLikeLParser.SPACE);
	        		this.state = 465;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 14:
	        		case 15:
	        		    this.state = 462;
	        		    this.literal();
	        		    break;
	        		case 10:
	        		    this.state = 463;
	        		    this.identifier();
	        		    break;
	        		case 11:
	        		case 13:
	        		    this.state = 464;
	        		    this.callFnc();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 469; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,87, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 472;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 471;
	            this.match(SchemeLikeLParser.SPACE);
	        }

	        this.state = 474;
	        this.match(SchemeLikeLParser.PEND);
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
	    this.enterRule(localctx, 34, SchemeLikeLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
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
	    this.enterRule(localctx, 36, SchemeLikeLParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
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
SchemeLikeLParser.OPERATOR = 8;
SchemeLikeLParser.BIOPERATOR = 9;
SchemeLikeLParser.VARIABLE = 10;
SchemeLikeLParser.PSTART = 11;
SchemeLikeLParser.PEND = 12;
SchemeLikeLParser.SPACE = 13;
SchemeLikeLParser.FLOAT = 14;
SchemeLikeLParser.INT = 15;
SchemeLikeLParser.WS = 16;

SchemeLikeLParser.RULE_start = 0;
SchemeLikeLParser.RULE_expr = 1;
SchemeLikeLParser.RULE_defineGlobalVar = 2;
SchemeLikeLParser.RULE_defineFnc = 3;
SchemeLikeLParser.RULE_biExpr = 4;
SchemeLikeLParser.RULE_callFnc = 5;
SchemeLikeLParser.RULE_callLambdaFnc = 6;
SchemeLikeLParser.RULE_ifExpr = 7;
SchemeLikeLParser.RULE_beginExpr = 8;
SchemeLikeLParser.RULE_operatorExpr = 9;
SchemeLikeLParser.RULE_biOperatorExpr = 10;
SchemeLikeLParser.RULE_localFncBodyExpr = 11;
SchemeLikeLParser.RULE_fncBodyExpr = 12;
SchemeLikeLParser.RULE_varPairExpr = 13;
SchemeLikeLParser.RULE_setExpr = 14;
SchemeLikeLParser.RULE_loopExpr = 15;
SchemeLikeLParser.RULE_vectorExpr = 16;
SchemeLikeLParser.RULE_literal = 17;
SchemeLikeLParser.RULE_identifier = 18;

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

	loopExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LoopExprContext);
	    } else {
	        return this.getTypedRuleContext(LoopExprContext,i);
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

	loopExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LoopExprContext);
	    } else {
	        return this.getTypedRuleContext(LoopExprContext,i);
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

	SPACE() {
	    return this.getToken(SchemeLikeLParser.SPACE, 0);
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



class LoopExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SchemeLikeLParser.RULE_loopExpr;
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


	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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
	        listener.enterLoopExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SchemeLikeLListener ) {
	        listener.exitLoopExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SchemeLikeLVisitor ) {
	        return visitor.visitLoopExpr(this);
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
SchemeLikeLParser.CallFncContext = CallFncContext; 
SchemeLikeLParser.CallLambdaFncContext = CallLambdaFncContext; 
SchemeLikeLParser.IfExprContext = IfExprContext; 
SchemeLikeLParser.BeginExprContext = BeginExprContext; 
SchemeLikeLParser.OperatorExprContext = OperatorExprContext; 
SchemeLikeLParser.BiOperatorExprContext = BiOperatorExprContext; 
SchemeLikeLParser.LocalFncBodyExprContext = LocalFncBodyExprContext; 
SchemeLikeLParser.FncBodyExprContext = FncBodyExprContext; 
SchemeLikeLParser.VarPairExprContext = VarPairExprContext; 
SchemeLikeLParser.SetExprContext = SetExprContext; 
SchemeLikeLParser.LoopExprContext = LoopExprContext; 
SchemeLikeLParser.VectorExprContext = VectorExprContext; 
SchemeLikeLParser.LiteralContext = LiteralContext; 
SchemeLikeLParser.IdentifierContext = IdentifierContext; 
