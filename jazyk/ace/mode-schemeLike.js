define("ace/mode/schemeLike_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var SchemeLikeHighlightRules = function () {
    var keywordControl = "let|if|begin";
    var keywordOperator = "and|or|null?|quotient|floor|round|ceiling|truncate";
    // var constantLanguage = "#t|#f";
    var supportFunctions = "display|car|cdr|lambda|set!|list|vector-ref|vector-set!|car-set!|cdr-set!|canvas|" +
        "fill-rect|fill-arc|color|canvas-onclick|vector|list-ref|fill-text";  //tu dopln grafiku
    var keywordMapper = this.createKeywordMapper({
        "keyword.control": keywordControl,
        "keyword.operator": keywordOperator,
        // "constant.language": constantLanguage,
        "support.function": supportFunctions
    }, "identifier", true);
    this.$rules =
        {
            "start": [
                {
                    token: "comment",
                    regex: ";.*$"
                },
                // {
                //     "token": ["storage.type.function-type.schemeLike", "text", "entity.name.function.schemeLike"],
                //     "regex": "(?:\\b(?:(define))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"
                // },
                {
                    "token": ["storage.type.function-type.schemeLike"],
                    "regex": "(?:\\b(?:(define))\\b)"
                },
                // {
                //     "token": "punctuation.definition.constant.character.schemeLike",
                //     "regex": "#:\\S+"
                // },
                // {
                //     "token": ["punctuation.definition.variable.schemeLike", "variable.other.global.schemeLike", "punctuation.definition.variable.schemeLike"],
                //     "regex": "(\\*)(\\S*)(\\*)"
                // },
                {
                    "token": "constant.numeric", // float
                    "regex": "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?"
                },
                {
                    "token": keywordMapper,
                    "regex": "[a-zA-Z_#][a-zA-Z0-9_\\-\\?\\!\\*]*"
                },
            ],
            // "qqstring": [
            //     {
            //         "token": "constant.character.escape.schemeLike",
            //         "regex": "\\\\."
            //     },
            //     {
            //         "token": "string",
            //         "regex": '[^"\\\\]+',
            //         "merge": true
            //     },
            //     {
            //         "token": "string",
            //         "regex": "\\\\$",
            //         "next": "qqstring",
            //         "merge": true
            //     }, {
            //         "token": "string",
            //         "regex": '"|$',
            //         "next": "start",
            //         "merge": true
            //     }
            // ]
        };
};
oop.inherits(SchemeLikeHighlightRules, TextHighlightRules);
exports.SchemeLikeHighlightRules = SchemeLikeHighlightRules;

});

define("ace/mode/matching_parens_outdent",["require","exports","module","ace/range"], function(require, exports, module){"use strict";
var Range = require("../range").Range;
var MatchingParensOutdent = function () { };
(function () {
    this.checkOutdent = function (line, input) {
        if (!/^\s+$/.test(line))
            return false;
        return /^\s*\)/.test(input);
    };
    this.autoOutdent = function (doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\))/);
        if (!match)
            return 0;
        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({ row: row, column: column });
        if (!openBracePos || openBracePos.row == row)
            return 0;
        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column - 1), indent);
    };
    this.$getIndent = function (line) {
        var match = line.match(/^(\s+)/);
        if (match) {
            return match[1];
        }
        return "";
    };
}).call(MatchingParensOutdent.prototype);
exports.MatchingParensOutdent = MatchingParensOutdent;

});

define("ace/mode/schemeLike",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/schemeLike_highlight_rules","ace/mode/matching_parens_outdent"], function(require, exports, module){"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var SchemeLikeHighlightRules = require("./schemeLike_highlight_rules"). SchemeLikeHighlightRules;
var MatchingParensOutdent = require("./matching_parens_outdent").MatchingParensOutdent;
var Mode = function () {
    this.HighlightRules = SchemeLikeHighlightRules;
    this.$outdent = new MatchingParensOutdent();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);
(function () {
    this.lineCommentStart = ";";
    this.minorIndentFunctions = ["define"];
    this.$toIndent = function (str) {
        return str.split('').map(function (ch) {
            if (/\s/.exec(ch)) {
                return ch;
            }
            else {
                return ' ';
            }
        }).join('');
    };
    this.$calculateIndent = function (line, tab) {
        var baseIndent = this.$getIndent(line);
        var delta = 0;
        var isParen, ch;
        for (var i = line.length - 1; i >= 0; i--) {
            ch = line[i];
            if (ch === '(') {
                delta--;
                isParen = true;
            }
            else if (ch === '(' || ch === '[' || ch === '{') {
                delta--;
                isParen = false;
            }
            else if (ch === ')' || ch === ']' || ch === '}') {
                delta++;
            }
            if (delta < 0) {
                break;
            }
        }
        if (delta < 0 && isParen) {
            i += 1;
            var iBefore = i;
            var fn = '';
            while (true) {
                ch = line[i];
                if (ch === ' ' || ch === '\t') {
                    if (this.minorIndentFunctions.indexOf(fn) !== -1) {
                        return this.$toIndent(line.substring(0, iBefore - 1) + tab);
                    }
                    else {
                        return this.$toIndent(line.substring(0, i + 1));
                    }
                }
                else if (ch === undefined) {
                    return this.$toIndent(line.substring(0, iBefore - 1) + tab);
                }
                fn += line[i];
                i++;
            }
        }
        else if (delta < 0 && !isParen) {
            return this.$toIndent(line.substring(0, i + 1));
        }
        else if (delta > 0) {
            baseIndent = baseIndent.substring(0, baseIndent.length - tab.length);
            return baseIndent;
        }
        else {
            return baseIndent;
        }
    };
    this.getNextLineIndent = function (state, line, tab) {
        return this.$calculateIndent(line, tab);
    };
    this.checkOutdent = function (state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };
    this.autoOutdent = function (state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };
    this.$id = "ace/mode/schemeLike";
}).call(Mode.prototype);
exports.Mode = Mode;

});                (function() {
                    window.require(["ace/mode/schemeLike"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            