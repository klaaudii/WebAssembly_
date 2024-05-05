(module
 (type $0 (func (param i32 i32)))
 (type $1 (func (param i32) (result i32)))
 (type $2 (func))
 (type $3 (func (param i32)))
 (type $4 (func (param i32 i32) (result i32)))
 (type $5 (func (param i32 i32 i32)))
 (type $6 (func (param i32 i32 i32 i32)))
 (type $7 (func (result i32)))
 (type $8 (func (param i32 f32) (result i32)))
 (type $9 (func (param i32 i32 i32) (result i32)))
 (type $10 (func (param i32 i32 i64) (result i32)))
 (type $11 (func (param i32 i64 i32)))
 (type $12 (func (param i64 i32) (result i32)))
 (type $13 (func (param i32 i64 i32 i32)))
 (type $14 (func (param i32 i32 i32 i32 i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "asDOM_Window" "trackWindow" (func $node_modules/asdom/assembly/imports/trackWindow (param i32)))
 (import "asDOM_Window" "getDocument" (func $node_modules/asdom/assembly/imports/getDocument (param i32 i32)))
 (import "asDOM_Window" "getCustomElements" (func $node_modules/asdom/assembly/imports/getCustomElements (param i32 i32)))
 (import "asDOM_Window" "getHistory" (func $node_modules/asdom/assembly/imports/getHistory (param i32 i32)))
 (import "asDOM_HTMLElement" "setInnerText" (func $node_modules/asdom/assembly/imports/setInnerText (param i32 i32)))
 (import "setInterval" "_setInterval" (func $node_modules/ecmassembly/assembly/setInterval/_setInterval (param i32 f32) (result i32)))
 (import "asDOM_CustomElementRegistry" "define" (func $node_modules/asdom/assembly/imports/define (param i32 i32 i32 i32)))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.unknown i32 (i32.const 1))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.body i32 (i32.const 2))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.div i32 (i32.const 3))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.span i32 (i32.const 4))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.p i32 (i32.const 5))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.a i32 (i32.const 6))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.script i32 (i32.const 7))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.template i32 (i32.const 8))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.audio i32 (i32.const 9))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.img i32 (i32.const 10))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.h1 i32 (i32.const 11))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.h2 i32 (i32.const 12))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.h3 i32 (i32.const 13))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.h4 i32 (i32.const 14))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.h5 i32 (i32.const 15))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.h6 i32 (i32.const 16))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.text i32 (i32.const 100))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.htmlCollection i32 (i32.const 200))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.nodeListOfNode i32 (i32.const 201))
 (global $node_modules/asdom/assembly/ObjectType/ObjectType.nodeListOfElement i32 (i32.const 202))
 (global $node_modules/asdom/assembly/utils/DEBUG i32 (i32.const 0))
 (global $node_modules/asdom/assembly/Node/NodeType.ELEMENT_NODE i32 (i32.const 1))
 (global $node_modules/asdom/assembly/Node/NodeType.ATTRIBUTE_NODE i32 (i32.const 2))
 (global $node_modules/asdom/assembly/Node/NodeType.TEXT_NODE i32 (i32.const 3))
 (global $node_modules/asdom/assembly/Node/NodeType.CDATA_SECTION_NODE i32 (i32.const 4))
 (global $node_modules/asdom/assembly/Node/NodeType.PROCESSING_INSTRUCTION_NODE i32 (i32.const 7))
 (global $node_modules/asdom/assembly/Node/NodeType.COMMENT_NODE i32 (i32.const 8))
 (global $node_modules/asdom/assembly/Node/NodeType.DOCUMENT_NODE i32 (i32.const 9))
 (global $node_modules/asdom/assembly/Node/NodeType.DOCUMENT_TYPE_NODE i32 (i32.const 10))
 (global $node_modules/asdom/assembly/Node/NodeType.DOCUMENT_FRAGMENT_NODE i32 (i32.const 11))
 (global $node_modules/asdom/assembly/Node/Node.ELEMENT_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.ATTRIBUTE_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.TEXT_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.CDATA_SECTION_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.PROCESSING_INSTRUCTION_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.COMMENT_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.DOCUMENT_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.DOCUMENT_TYPE_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Node/Node.DOCUMENT_FRAGMENT_NODE (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement.observedAttributes (mut i32) (i32.const 64))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/shared/runtime/Runtime.Stub i32 (i32.const 0))
 (global $~lib/shared/runtime/Runtime.Minimal i32 (i32.const 1))
 (global $~lib/shared/runtime/Runtime.Incremental i32 (i32.const 2))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/native/ASC_LOW_MEMORY_LIMIT i32 (i32.const 0))
 (global $node_modules/asdom/assembly/Window/window (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Window/document (mut i32) (i32.const 0))
 (global $~lib/native/ASC_RUNTIME i32 (i32.const 2))
 (global $node_modules/asdom/assembly/Window/customElements (mut i32) (i32.const 0))
 (global $node_modules/asdom/assembly/Window/history (mut i32) (i32.const 0))
 (global $index/count (mut i32) (i32.const 0))
 (global $index/elements i32 (i32.const 656))
 (global $~lib/native/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $index/SecondsCounter.observedAttributes (mut i32) (i32.const 2944))
 (global $~lib/rt/__rtti_base i32 (i32.const 3200))
 (global $~lib/memory/__data_end i32 (i32.const 3300))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 36068))
 (global $~lib/memory/__heap_base i32 (i32.const 36068))
 (memory $0 1)
 (data $0 (i32.const 12) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $1 (i32.const 44) ",\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\10\00\00\00 \00\00\00 \00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $2 (i32.const 92) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00\00\00\00\00")
 (data $3 (i32.const 156) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $4 (i32.const 224) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $5 (i32.const 256) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $6 (i32.const 284) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00\00\00\00\00\00\00\00\00")
 (data $7 (i32.const 348) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s\00\00\00\00\00\00\00\00\00")
 (data $8 (i32.const 400) "\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $9 (i32.const 428) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $10 (i32.const 492) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data $11 (i32.const 540) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data $12 (i32.const 604) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $13 (i32.const 636) ",\00\00\00\00\00\00\00\00\00\00\00\15\00\00\00\10\00\00\00p\02\00\00p\02\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $14 (i32.const 684) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00\00\00")
 (data $15 (i32.const 732) "|\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $16 (i32.const 860) "|\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00d\00\00\00t\00o\00S\00t\00r\00i\00n\00g\00(\00)\00 \00r\00a\00d\00i\00x\00 \00a\00r\00g\00u\00m\00e\00n\00t\00 \00m\00u\00s\00t\00 \00b\00e\00 \00b\00e\00t\00w\00e\00e\00n\00 \002\00 \00a\00n\00d\00 \003\006\00\00\00\00\00\00\00\00\00")
 (data $17 (i32.const 988) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00u\00t\00i\00l\00/\00n\00u\00m\00b\00e\00r\00.\00t\00s\00\00\00\00\00\00\00")
 (data $18 (i32.const 1052) "\1c\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\02\00\00\000\00\00\00\00\00\00\00\00\00\00\00")
 (data $19 (i32.const 1084) "0\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data $20 (i32.const 1484) "\1c\04\00\00\00\00\00\00\00\00\00\00\02\00\00\00\00\04\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\00a\000\00b\000\00c\000\00d\000\00e\000\00f\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\00a\001\00b\001\00c\001\00d\001\00e\001\00f\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\002\00a\002\00b\002\00c\002\00d\002\00e\002\00f\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\003\00a\003\00b\003\00c\003\00d\003\00e\003\00f\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\004\00a\004\00b\004\00c\004\00d\004\00e\004\00f\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\005\00a\005\00b\005\00c\005\00d\005\00e\005\00f\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\006\00a\006\00b\006\00c\006\00d\006\00e\006\00f\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\007\00a\007\00b\007\00c\007\00d\007\00e\007\00f\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\008\00a\008\00b\008\00c\008\00d\008\00e\008\00f\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\009\00a\009\00b\009\00c\009\00d\009\00e\009\00f\00a\000\00a\001\00a\002\00a\003\00a\004\00a\005\00a\006\00a\007\00a\008\00a\009\00a\00a\00a\00b\00a\00c\00a\00d\00a\00e\00a\00f\00b\000\00b\001\00b\002\00b\003\00b\004\00b\005\00b\006\00b\007\00b\008\00b\009\00b\00a\00b\00b\00b\00c\00b\00d\00b\00e\00b\00f\00c\000\00c\001\00c\002\00c\003\00c\004\00c\005\00c\006\00c\007\00c\008\00c\009\00c\00a\00c\00b\00c\00c\00c\00d\00c\00e\00c\00f\00d\000\00d\001\00d\002\00d\003\00d\004\00d\005\00d\006\00d\007\00d\008\00d\009\00d\00a\00d\00b\00d\00c\00d\00d\00d\00e\00d\00f\00e\000\00e\001\00e\002\00e\003\00e\004\00e\005\00e\006\00e\007\00e\008\00e\009\00e\00a\00e\00b\00e\00c\00e\00d\00e\00e\00e\00f\00f\000\00f\001\00f\002\00f\003\00f\004\00f\005\00f\006\00f\007\00f\008\00f\009\00f\00a\00f\00b\00f\00c\00f\00d\00f\00e\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $21 (i32.const 2540) "\\\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00H\00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\00\00\00\00\00")
 (data $22 (i32.const 2636) "|\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00^\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00n\00u\00l\00l\00\'\00 \00(\00n\00o\00t\00 \00a\00s\00s\00i\00g\00n\00e\00d\00 \00o\00r\00 \00f\00a\00i\00l\00e\00d\00 \00c\00a\00s\00t\00)\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $23 (i32.const 2764) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\10\00\00\00i\00n\00d\00e\00x\00.\00t\00s\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $24 (i32.const 2812) "\1c\00\00\00\00\00\00\00\00\00\00\00\16\00\00\00\08\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00")
 (data $25 (i32.const 2844) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1c\00\00\00s\00o\00m\00e\00-\00a\00t\00t\00r\00i\00b\00u\00t\00e\00")
 (data $26 (i32.const 2892) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\04\00\00\000\0b\00\00\00\00\00\00\00\00\00\00")
 (data $27 (i32.const 2924) ",\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\10\00\00\00`\0b\00\00`\0b\00\00\04\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $28 (i32.const 2972) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\1e\00\00\00s\00e\00c\00o\00n\00d\00s\00-\00c\00o\00u\00n\00t\00e\00r\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data $29 (i32.const 3036) "\1c\00\00\00\00\00\00\00\00\00\00\00\17\00\00\00\08\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00")
 (data $30 (i32.const 3068) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d\00\00\00")
 (data $31 (i32.const 3132) "<\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d\00\00\00\00\00")
 (data $32 (i32.const 3200) "\18\00\00\00 \00\00\00 \00\00\00 \00\00\00\00\00\00\00\02A\00\00\00\00\00\00 \00\00\00 \00\00\00\00\00\00\00\00\00\00\00 \00\00\00 \00\00\00 \00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\10A\82\00 \00\00\00\00\00\00\00\02A\00\00\00\00\00\00\00\00\00\00")
 (table $0 3 funcref)
 (elem $0 (i32.const 1) $start:index~anonymous|0 $start:index~anonymous|1)
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (start $~start)
 (func $start:node_modules/asdom/assembly/Node
  global.get $node_modules/asdom/assembly/Node/NodeType.ELEMENT_NODE
  global.set $node_modules/asdom/assembly/Node/Node.ELEMENT_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.ATTRIBUTE_NODE
  global.set $node_modules/asdom/assembly/Node/Node.ATTRIBUTE_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.TEXT_NODE
  global.set $node_modules/asdom/assembly/Node/Node.TEXT_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.CDATA_SECTION_NODE
  global.set $node_modules/asdom/assembly/Node/Node.CDATA_SECTION_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.PROCESSING_INSTRUCTION_NODE
  global.set $node_modules/asdom/assembly/Node/Node.PROCESSING_INSTRUCTION_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.COMMENT_NODE
  global.set $node_modules/asdom/assembly/Node/Node.COMMENT_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.DOCUMENT_NODE
  global.set $node_modules/asdom/assembly/Node/Node.DOCUMENT_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.DOCUMENT_TYPE_NODE
  global.set $node_modules/asdom/assembly/Node/Node.DOCUMENT_TYPE_NODE
  global.get $node_modules/asdom/assembly/Node/NodeType.DOCUMENT_FRAGMENT_NODE
  global.set $node_modules/asdom/assembly/Node/Node.DOCUMENT_FRAGMENT_NODE
 )
 (func $start:node_modules/asdom/assembly/elements/Element
  call $start:node_modules/asdom/assembly/Node
 )
 (func $start:node_modules/asdom/assembly/elements/HTML/HTMLElement
  (local $0 i32)
  (local $1 i32)
  call $start:node_modules/asdom/assembly/elements/Element
 )
 (func $start:node_modules/asdom/assembly/CustomElementRegistry
  call $start:node_modules/asdom/assembly/elements/HTML/HTMLElement
 )
 (func $~lib/rt/itcms/Object#set:nextWithColor (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/itcms/initLazy (param $0 i32) (result i32)
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
  local.get $0
  return
 )
 (func $~lib/rt/itcms/Object#get:nextWithColor (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/rt/itcms/Object#get:next (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  return
 )
 (func $~lib/rt/itcms/Object#get:color (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.and
  return
 )
 (func $~lib/rt/itcms/visitRoots (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/__visit_globals
  global.get $~lib/rt/itcms/pinSpace
  local.set $1
  local.get $1
  call $~lib/rt/itcms/Object#get:next
  local.set $2
  loop $while-continue|0
   local.get $2
   local.get $1
   i32.ne
   if
    i32.const 1
    drop
    local.get $2
    call $~lib/rt/itcms/Object#get:color
    i32.const 3
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 176
     i32.const 160
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 20
    i32.add
    local.get $0
    call $~lib/rt/__visit_members
    local.get $2
    call $~lib/rt/itcms/Object#get:next
    local.set $2
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#set:color (param $0 i32) (param $1 i32)
  local.get $0
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $1
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#get:prev (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/rt/itcms/Object#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  local.get $0
  call $~lib/rt/itcms/Object#get:nextWithColor
  i32.const 3
  i32.and
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:next
  local.set $1
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 1
   drop
   local.get $0
   call $~lib/rt/itcms/Object#get:prev
   i32.const 0
   i32.eq
   if (result i32)
    local.get $0
    global.get $~lib/memory/__heap_base
    i32.lt_u
   else
    i32.const 0
   end
   i32.eqz
   if
    i32.const 0
    i32.const 176
    i32.const 128
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  call $~lib/rt/itcms/Object#get:prev
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.eqz
  if
   i32.const 0
   i32.const 176
   i32.const 132
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $2
  call $~lib/rt/itcms/Object#set:prev
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:next
 )
 (func $~lib/rt/itcms/Object#get:rtId (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/shared/typeinfo/Typeinfo#get:flags (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/rt/__typeinfo (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/rt/__rtti_base
  local.set $1
  local.get $0
  local.get $1
  i32.load
  i32.gt_u
  if
   i32.const 304
   i32.const 368
   i32.const 21
   i32.const 28
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $0
  i32.const 4
  i32.mul
  i32.add
  call $~lib/shared/typeinfo/Typeinfo#get:flags
  return
 )
 (func $~lib/rt/itcms/Object#get:isPointerfree (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/itcms/Object#get:rtId
  local.set $1
  local.get $1
  i32.const 2
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   call $~lib/rt/__typeinfo
   i32.const 32
   i32.and
   i32.const 0
   i32.ne
  end
  return
 )
 (func $~lib/rt/itcms/Object#linkTo (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/itcms/Object#get:prev
  local.set $3
  local.get $0
  local.get $1
  local.get $2
  i32.or
  call $~lib/rt/itcms/Object#set:nextWithColor
  local.get $0
  local.get $3
  call $~lib/rt/itcms/Object#set:prev
  local.get $3
  local.get $0
  call $~lib/rt/itcms/Object#set:next
  local.get $1
  local.get $0
  call $~lib/rt/itcms/Object#set:prev
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#get:prev
   local.tee $1
   i32.eqz
   if (result i32)
    i32.const 0
    i32.const 176
    i32.const 148
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   else
    local.get $1
   end
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  local.get $0
  global.get $~lib/rt/itcms/toSpace
  local.get $0
  call $~lib/rt/itcms/Object#get:isPointerfree
  if (result i32)
   global.get $~lib/rt/itcms/white
   i32.eqz
  else
   i32.const 2
  end
  call $~lib/rt/itcms/Object#linkTo
 )
 (func $~lib/rt/itcms/__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $2
  i32.const 0
  drop
  local.get $2
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $2
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/itcms/visitStack (param $0 i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  local.set $1
  loop $while-continue|0
   local.get $1
   global.get $~lib/memory/__heap_base
   i32.lt_u
   if
    local.get $1
    i32.load
    local.get $0
    call $~lib/rt/itcms/__visit
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/common/BLOCK#get:mmInfo (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/rt/itcms/Object#get:size (param $0 i32) (result i32)
  i32.const 4
  local.get $0
  call $~lib/rt/common/BLOCK#get:mmInfo
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  i32.add
  return
 )
 (func $~lib/rt/tlsf/Root#set:flMap (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/common/BLOCK#set:mmInfo (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/tlsf/Block#set:prev (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/Block#set:next (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/tlsf/Block#get:prev (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/rt/tlsf/Block#get:next (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/rt/tlsf/Root#get:flMap (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  i32.const 1
  drop
  local.get $3
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $4
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $5
  else
   local.get $3
   local.tee $6
   i32.const 1073741820
   local.tee $7
   local.get $6
   local.get $7
   i32.lt_u
   select
   local.set $8
   i32.const 31
   local.get $8
   i32.clz
   i32.sub
   local.set $4
   local.get $8
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $5
   local.get $4
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $4
  end
  i32.const 1
  drop
  local.get $4
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $5
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/tlsf/Block#get:prev
  local.set $9
  local.get $1
  call $~lib/rt/tlsf/Block#get:next
  local.set $10
  local.get $9
  if
   local.get $9
   local.get $10
   call $~lib/rt/tlsf/Block#set:next
  end
  local.get $10
  if
   local.get $10
   local.get $9
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $1
  block $~lib/rt/tlsf/GETHEAD|inlined.0 (result i32)
   local.get $0
   local.set $11
   local.get $4
   local.set $12
   local.get $5
   local.set $13
   local.get $11
   local.get $12
   i32.const 4
   i32.shl
   local.get $13
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   br $~lib/rt/tlsf/GETHEAD|inlined.0
  end
  i32.eq
  if
   local.get $0
   local.set $14
   local.get $4
   local.set $15
   local.get $5
   local.set $16
   local.get $10
   local.set $17
   local.get $14
   local.get $15
   i32.const 4
   i32.shl
   local.get $16
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $17
   i32.store offset=96
   local.get $10
   i32.eqz
   if
    block $~lib/rt/tlsf/GETSL|inlined.0 (result i32)
     local.get $0
     local.set $18
     local.get $4
     local.set $19
     local.get $18
     local.get $19
     i32.const 2
     i32.shl
     i32.add
     i32.load offset=4
     br $~lib/rt/tlsf/GETSL|inlined.0
    end
    local.set $20
    local.get $0
    local.set $21
    local.get $4
    local.set $22
    local.get $20
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.tee $20
    local.set $23
    local.get $21
    local.get $22
    i32.const 2
    i32.shl
    i32.add
    local.get $23
    i32.store offset=4
    local.get $20
    i32.eqz
    if
     local.get $0
     local.get $0
     call $~lib/rt/tlsf/Root#get:flMap
     i32.const 1
     local.get $4
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     call $~lib/rt/tlsf/Root#set:flMap
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  (local $24 i32)
  (local $25 i32)
  (local $26 i32)
  (local $27 i32)
  (local $28 i32)
  i32.const 1
  drop
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
  local.set $2
  i32.const 1
  drop
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  block $~lib/rt/tlsf/GETRIGHT|inlined.0 (result i32)
   local.get $1
   local.set $3
   local.get $3
   i32.const 4
   i32.add
   local.get $3
   call $~lib/rt/common/BLOCK#get:mmInfo
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   br $~lib/rt/tlsf/GETRIGHT|inlined.0
  end
  local.set $4
  local.get $4
  call $~lib/rt/common/BLOCK#get:mmInfo
  local.set $5
  local.get $5
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   local.get $5
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
   block $~lib/rt/tlsf/GETRIGHT|inlined.1 (result i32)
    local.get $1
    local.set $6
    local.get $6
    i32.const 4
    i32.add
    local.get $6
    call $~lib/rt/common/BLOCK#get:mmInfo
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    br $~lib/rt/tlsf/GETRIGHT|inlined.1
   end
   local.set $4
   local.get $4
   call $~lib/rt/common/BLOCK#get:mmInfo
   local.set $5
  end
  local.get $2
  i32.const 2
  i32.and
  if
   block $~lib/rt/tlsf/GETFREELEFT|inlined.0 (result i32)
    local.get $1
    local.set $7
    local.get $7
    i32.const 4
    i32.sub
    i32.load
    br $~lib/rt/tlsf/GETFREELEFT|inlined.0
   end
   local.set $8
   local.get $8
   call $~lib/rt/common/BLOCK#get:mmInfo
   local.set $9
   i32.const 1
   drop
   local.get $9
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 448
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $8
   call $~lib/rt/tlsf/removeBlock
   local.get $8
   local.set $1
   local.get $1
   local.get $9
   i32.const 4
   i32.add
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.tee $2
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $10
  i32.const 1
  drop
  local.get $10
  i32.const 12
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 1
  drop
  local.get $1
  i32.const 4
  i32.add
  local.get $10
  i32.add
  local.get $4
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $10
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $11
   local.get $10
   i32.const 4
   i32.shr_u
   local.set $12
  else
   local.get $10
   local.tee $13
   i32.const 1073741820
   local.tee $14
   local.get $13
   local.get $14
   i32.lt_u
   select
   local.set $15
   i32.const 31
   local.get $15
   i32.clz
   i32.sub
   local.set $11
   local.get $15
   local.get $11
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $12
   local.get $11
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $11
  end
  i32.const 1
  drop
  local.get $11
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $12
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  block $~lib/rt/tlsf/GETHEAD|inlined.1 (result i32)
   local.get $0
   local.set $16
   local.get $11
   local.set $17
   local.get $12
   local.set $18
   local.get $16
   local.get $17
   i32.const 4
   i32.shl
   local.get $18
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   br $~lib/rt/tlsf/GETHEAD|inlined.1
  end
  local.set $19
  local.get $1
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $1
  local.get $19
  call $~lib/rt/tlsf/Block#set:next
  local.get $19
  if
   local.get $19
   local.get $1
   call $~lib/rt/tlsf/Block#set:prev
  end
  local.get $0
  local.set $20
  local.get $11
  local.set $21
  local.get $12
  local.set $22
  local.get $1
  local.set $23
  local.get $20
  local.get $21
  i32.const 4
  i32.shl
  local.get $22
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $23
  i32.store offset=96
  local.get $0
  local.get $0
  call $~lib/rt/tlsf/Root#get:flMap
  i32.const 1
  local.get $11
  i32.shl
  i32.or
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $0
  local.set $26
  local.get $11
  local.set $27
  block $~lib/rt/tlsf/GETSL|inlined.1 (result i32)
   local.get $0
   local.set $24
   local.get $11
   local.set $25
   local.get $24
   local.get $25
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=4
   br $~lib/rt/tlsf/GETSL|inlined.1
  end
  i32.const 1
  local.get $12
  i32.shl
  i32.or
  local.set $28
  local.get $26
  local.get $27
  i32.const 2
  i32.shl
  i32.add
  local.get $28
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i64) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $2
  i32.wrap_i64
  local.set $3
  i32.const 1
  drop
  local.get $1
  i64.extend_i32_u
  local.get $2
  i64.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 382
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $3
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  block $~lib/rt/tlsf/GETTAIL|inlined.0 (result i32)
   local.get $0
   local.set $4
   local.get $4
   i32.load offset=1568
   br $~lib/rt/tlsf/GETTAIL|inlined.0
  end
  local.set $5
  i32.const 0
  local.set $6
  local.get $5
  if
   i32.const 1
   drop
   local.get $1
   local.get $5
   i32.const 4
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 448
    i32.const 389
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $5
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $5
    call $~lib/rt/common/BLOCK#get:mmInfo
    local.set $6
   else
   end
  else
   i32.const 1
   drop
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.ge_u
   i32.eqz
   if
    i32.const 0
    i32.const 448
    i32.const 402
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $3
  local.get $1
  i32.sub
  local.set $7
  local.get $7
  i32.const 4
  i32.const 12
  i32.add
  i32.const 4
  i32.add
  i32.lt_u
  if
   i32.const 0
   return
  end
  local.get $7
  i32.const 2
  i32.const 4
  i32.mul
  i32.sub
  local.set $8
  local.get $1
  local.set $9
  local.get $9
  local.get $8
  i32.const 1
  i32.or
  local.get $6
  i32.const 2
  i32.and
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $9
  i32.const 0
  call $~lib/rt/tlsf/Block#set:prev
  local.get $9
  i32.const 0
  call $~lib/rt/tlsf/Block#set:next
  local.get $1
  i32.const 4
  i32.add
  local.get $8
  i32.add
  local.set $5
  local.get $5
  i32.const 0
  i32.const 2
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.set $10
  local.get $5
  local.set $11
  local.get $10
  local.get $11
  i32.store offset=1568
  local.get $0
  local.get $9
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
  return
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  i32.const 0
  drop
  global.get $~lib/memory/__heap_base
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $0
  memory.size
  local.set $1
  local.get $0
  i32.const 1572
  i32.add
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $2
  local.get $2
  local.get $1
  i32.gt_s
  if (result i32)
   local.get $2
   local.get $1
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  local.get $0
  local.set $3
  local.get $3
  i32.const 0
  call $~lib/rt/tlsf/Root#set:flMap
  local.get $3
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  local.get $5
  i32.store offset=1568
  i32.const 0
  local.set $6
  loop $for-loop|0
   local.get $6
   i32.const 23
   i32.lt_u
   if
    local.get $3
    local.set $7
    local.get $6
    local.set $8
    i32.const 0
    local.set $9
    local.get $7
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    local.get $9
    i32.store offset=4
    i32.const 0
    local.set $10
    loop $for-loop|1
     local.get $10
     i32.const 16
     i32.lt_u
     if
      local.get $3
      local.set $11
      local.get $6
      local.set $12
      local.get $10
      local.set $13
      i32.const 0
      local.set $14
      local.get $11
      local.get $12
      i32.const 4
      i32.shl
      local.get $13
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $14
      i32.store offset=96
      local.get $10
      i32.const 1
      i32.add
      local.set $10
      br $for-loop|1
     end
    end
    local.get $6
    i32.const 1
    i32.add
    local.set $6
    br $for-loop|0
   end
  end
  local.get $0
  i32.const 1572
  i32.add
  local.set $15
  i32.const 0
  drop
  local.get $3
  local.get $15
  memory.size
  i64.extend_i32_s
  i64.const 16
  i64.shl
  call $~lib/rt/tlsf/addMemory
  drop
  local.get $3
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 0
  i32.ne
  if (result i32)
   local.get $0
   i32.const 15
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  if (result i32)
   local.get $1
   call $~lib/rt/common/BLOCK#get:mmInfo
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 562
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  return
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  i32.const 0
  drop
  local.get $1
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
  i32.const 1
  i32.or
  call $~lib/rt/common/BLOCK#set:mmInfo
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/__free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   return
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/checkUsedBlock
  call $~lib/rt/tlsf/freeBlock
 )
 (func $~lib/rt/itcms/free (param $0 i32)
  local.get $0
  global.get $~lib/memory/__heap_base
  i32.lt_u
  if
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:nextWithColor
   local.get $0
   i32.const 0
   call $~lib/rt/itcms/Object#set:prev
  else
   global.get $~lib/rt/itcms/total
   local.get $0
   call $~lib/rt/itcms/Object#get:size
   i32.sub
   global.set $~lib/rt/itcms/total
   i32.const 0
   drop
   local.get $0
   i32.const 4
   i32.add
   call $~lib/rt/tlsf/__free
  end
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      local.set $1
      local.get $1
      i32.const 0
      i32.eq
      br_if $case0|0
      local.get $1
      i32.const 1
      i32.eq
      br_if $case1|0
      local.get $1
      i32.const 2
      i32.eq
      br_if $case2|0
      br $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     i32.const 0
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     i32.const 1
     i32.mul
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $2
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $0
      call $~lib/rt/itcms/Object#get:color
      local.get $2
      i32.ne
      if
       local.get $0
       local.get $2
       call $~lib/rt/itcms/Object#set:color
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       i32.const 0
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       i32.const 1
       i32.mul
       return
      end
      local.get $0
      call $~lib/rt/itcms/Object#get:next
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    i32.const 0
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/iter
    call $~lib/rt/itcms/Object#get:next
    local.set $0
    local.get $0
    global.get $~lib/rt/itcms/toSpace
    i32.eq
    if
     i32.const 0
     call $~lib/rt/itcms/visitStack
     global.get $~lib/rt/itcms/iter
     call $~lib/rt/itcms/Object#get:next
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $0
       call $~lib/rt/itcms/Object#get:color
       local.get $2
       i32.ne
       if
        local.get $0
        local.get $2
        call $~lib/rt/itcms/Object#set:color
        local.get $0
        i32.const 20
        i32.add
        i32.const 0
        call $~lib/rt/__visit_members
       end
       local.get $0
       call $~lib/rt/itcms/Object#get:next
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $3
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $3
     global.set $~lib/rt/itcms/toSpace
     local.get $2
     global.set $~lib/rt/itcms/white
     local.get $3
     call $~lib/rt/itcms/Object#get:next
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    i32.const 1
    i32.mul
    return
   end
   global.get $~lib/rt/itcms/iter
   local.set $0
   local.get $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    call $~lib/rt/itcms/Object#get:next
    global.set $~lib/rt/itcms/iter
    i32.const 1
    drop
    local.get $0
    call $~lib/rt/itcms/Object#get:color
    global.get $~lib/rt/itcms/white
    i32.eqz
    i32.eq
    i32.eqz
    if
     i32.const 0
     i32.const 176
     i32.const 229
     i32.const 20
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    call $~lib/rt/itcms/free
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:nextWithColor
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   call $~lib/rt/itcms/Object#set:prev
   i32.const 0
   global.set $~lib/rt/itcms/state
   br $break|0
  end
  i32.const 0
  return
 )
 (func $~lib/rt/itcms/interrupt
  (local $0 i32)
  i32.const 0
  drop
  i32.const 0
  drop
  i32.const 1024
  i32.const 200
  i32.mul
  i32.const 100
  i32.div_u
  local.set $0
  loop $do-loop|0
   local.get $0
   call $~lib/rt/itcms/step
   i32.sub
   local.set $0
   global.get $~lib/rt/itcms/state
   i32.const 0
   i32.eq
   if
    i32.const 0
    drop
    global.get $~lib/rt/itcms/total
    i64.extend_i32_u
    i32.const 200
    i64.extend_i32_u
    i64.mul
    i64.const 100
    i64.div_u
    i32.wrap_i64
    i32.const 1024
    i32.add
    global.set $~lib/rt/itcms/threshold
    i32.const 0
    drop
    return
   end
   local.get $0
   i32.const 0
   i32.gt_s
   br_if $do-loop|0
  end
  i32.const 0
  drop
  global.get $~lib/rt/itcms/total
  i32.const 1024
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.sub
  i32.const 1024
  i32.lt_u
  i32.mul
  i32.add
  global.set $~lib/rt/itcms/threshold
  i32.const 0
  drop
 )
 (func $~lib/rt/tlsf/computeSize (param $0 i32) (result i32)
  local.get $0
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $0
   i32.const 4
   i32.add
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   i32.const 4
   i32.sub
  end
  return
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 112
   i32.const 448
   i32.const 461
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  call $~lib/rt/tlsf/computeSize
  return
 )
 (func $~lib/rt/tlsf/roundSize (param $0 i32) (result i32)
  local.get $0
  i32.const 536870910
  i32.lt_u
  if (result i32)
   local.get $0
   i32.const 1
   i32.const 27
   local.get $0
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
  else
   local.get $0
  end
  return
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $2
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $1
   call $~lib/rt/tlsf/roundSize
   local.set $4
   i32.const 4
   i32.const 8
   i32.mul
   i32.const 1
   i32.sub
   local.get $4
   i32.clz
   i32.sub
   local.set $2
   local.get $4
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $3
   local.get $2
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $2
  end
  i32.const 1
  drop
  local.get $2
  i32.const 23
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 16
   i32.lt_u
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 334
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  block $~lib/rt/tlsf/GETSL|inlined.2 (result i32)
   local.get $0
   local.set $5
   local.get $2
   local.set $6
   local.get $5
   local.get $6
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=4
   br $~lib/rt/tlsf/GETSL|inlined.2
  end
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $7
  i32.const 0
  local.set $8
  local.get $7
  i32.eqz
  if
   local.get $0
   call $~lib/rt/tlsf/Root#get:flMap
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $9
   local.get $9
   i32.eqz
   if
    i32.const 0
    local.set $8
   else
    local.get $9
    i32.ctz
    local.set $2
    block $~lib/rt/tlsf/GETSL|inlined.3 (result i32)
     local.get $0
     local.set $10
     local.get $2
     local.set $11
     local.get $10
     local.get $11
     i32.const 2
     i32.shl
     i32.add
     i32.load offset=4
     br $~lib/rt/tlsf/GETSL|inlined.3
    end
    local.set $7
    i32.const 1
    drop
    local.get $7
    i32.eqz
    if
     i32.const 0
     i32.const 448
     i32.const 347
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    block $~lib/rt/tlsf/GETHEAD|inlined.2 (result i32)
     local.get $0
     local.set $12
     local.get $2
     local.set $13
     local.get $7
     i32.ctz
     local.set $14
     local.get $12
     local.get $13
     i32.const 4
     i32.shl
     local.get $14
     i32.add
     i32.const 2
     i32.shl
     i32.add
     i32.load offset=96
     br $~lib/rt/tlsf/GETHEAD|inlined.2
    end
    local.set $8
   end
  else
   block $~lib/rt/tlsf/GETHEAD|inlined.3 (result i32)
    local.get $0
    local.set $15
    local.get $2
    local.set $16
    local.get $7
    i32.ctz
    local.set $17
    local.get $15
    local.get $16
    i32.const 4
    i32.shl
    local.get $17
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    br $~lib/rt/tlsf/GETHEAD|inlined.3
   end
   local.set $8
  end
  local.get $8
  return
 )
 (func $~lib/rt/tlsf/growMemory (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i32.const 0
  drop
  local.get $1
  i32.const 256
  i32.ge_u
  if
   local.get $1
   call $~lib/rt/tlsf/roundSize
   local.set $1
  end
  memory.size
  local.set $2
  local.get $1
  i32.const 4
  local.get $2
  i32.const 16
  i32.shl
  i32.const 4
  i32.sub
  block $~lib/rt/tlsf/GETTAIL|inlined.1 (result i32)
   local.get $0
   local.set $3
   local.get $3
   i32.load offset=1568
   br $~lib/rt/tlsf/GETTAIL|inlined.1
  end
  i32.ne
  i32.shl
  i32.add
  local.set $1
  local.get $1
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $2
  local.tee $5
  local.get $4
  local.tee $6
  local.get $5
  local.get $6
  i32.gt_s
  select
  local.set $7
  local.get $7
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    unreachable
   end
  end
  memory.size
  local.set $8
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  local.get $8
  i64.extend_i32_s
  i64.const 16
  i64.shl
  call $~lib/rt/tlsf/addMemory
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/rt/common/BLOCK#get:mmInfo
  local.set $3
  i32.const 1
  drop
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 361
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 4
  i32.const 12
  i32.add
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   local.set $5
   local.get $5
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   call $~lib/rt/common/BLOCK#set:mmInfo
   local.get $0
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const 1
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
   block $~lib/rt/tlsf/GETRIGHT|inlined.3 (result i32)
    local.get $1
    local.set $7
    local.get $7
    i32.const 4
    i32.add
    local.get $7
    call $~lib/rt/common/BLOCK#get:mmInfo
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    br $~lib/rt/tlsf/GETRIGHT|inlined.3
   end
   block $~lib/rt/tlsf/GETRIGHT|inlined.2 (result i32)
    local.get $1
    local.set $6
    local.get $6
    i32.const 4
    i32.add
    local.get $6
    call $~lib/rt/common/BLOCK#get:mmInfo
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    br $~lib/rt/tlsf/GETRIGHT|inlined.2
   end
   call $~lib/rt/common/BLOCK#get:mmInfo
   i32.const 2
   i32.const -1
   i32.xor
   i32.and
   call $~lib/rt/common/BLOCK#set:mmInfo
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.set $2
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/searchBlock
  local.set $3
  local.get $3
  i32.eqz
  if
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/growMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.set $3
   i32.const 1
   drop
   local.get $3
   i32.eqz
   if
    i32.const 0
    i32.const 448
    i32.const 499
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  i32.const 1
  drop
  local.get $3
  call $~lib/rt/common/BLOCK#get:mmInfo
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 448
   i32.const 501
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $3
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  i32.const 0
  drop
  local.get $3
  return
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
  return
 )
 (func $~lib/rt/itcms/Object#set:rtId (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/rt/itcms/Object#set:rtSize (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 112
   i32.const 176
   i32.const 261
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   call $~lib/rt/itcms/interrupt
  end
  i32.const 16
  local.get $0
  i32.add
  call $~lib/rt/tlsf/__alloc
  i32.const 4
  i32.sub
  local.set $2
  local.get $2
  local.get $1
  call $~lib/rt/itcms/Object#set:rtId
  local.get $2
  local.get $0
  call $~lib/rt/itcms/Object#set:rtSize
  local.get $2
  global.get $~lib/rt/itcms/fromSpace
  global.get $~lib/rt/itcms/white
  call $~lib/rt/itcms/Object#linkTo
  global.get $~lib/rt/itcms/total
  local.get $2
  call $~lib/rt/itcms/Object#get:size
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.set $3
  local.get $3
  i32.const 0
  local.get $0
  memory.fill
  local.get $3
  return
 )
 (func $node_modules/asdom/assembly/Object/Object#set:__ptr__ (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  i32.const 1
  drop
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 176
   i32.const 295
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 20
  i32.sub
  local.set $3
  local.get $3
  call $~lib/rt/itcms/Object#get:color
  global.get $~lib/rt/itcms/white
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.set $4
   local.get $4
   call $~lib/rt/itcms/Object#get:color
   local.set $5
   local.get $5
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $2
    if
     local.get $4
     call $~lib/rt/itcms/Object#makeGray
    else
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   else
    local.get $5
    i32.const 3
    i32.eq
    if (result i32)
     global.get $~lib/rt/itcms/state
     i32.const 1
     i32.eq
    else
     i32.const 0
    end
    if
     local.get $3
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $node_modules/asdom/assembly/Window/Window#set:__document (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#set:__customElements (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#set:__history (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#set:__location (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#set:__onclick (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#set:__onpopstate (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=24
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Object/Object#get:__ptr__ (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $node_modules/asdom/assembly/Window/Window#get:__document (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $node_modules/asdom/assembly/Node/Node#set:__childNodes (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Document/Document#set:__location (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Document/Document#set:__onclick (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Document/Document#set:__children (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#get:__customElements (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:buckets" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:bucketsMask" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entries" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesCapacity" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesOffset" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesCount" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
 )
 (func $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#set:__defs (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/Window/Window#get:__history (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $start:node_modules/asdom/assembly/index
  call $start:node_modules/asdom/assembly/CustomElementRegistry
  call $start:node_modules/asdom/assembly/Window
 )
 (func $~lib/array/Array<index/SecondsCounter>#get:length_ (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<index/SecondsCounter>#get:dataStart (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 100000
  i32.lt_u
  if
   local.get $0
   i32.const 100
   i32.lt_u
   if
    i32.const 1
    local.get $0
    i32.const 10
    i32.ge_u
    i32.add
    return
   else
    i32.const 3
    local.get $0
    i32.const 10000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 1000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  else
   local.get $0
   i32.const 10000000
   i32.lt_u
   if
    i32.const 6
    local.get $0
    i32.const 1000000
    i32.ge_u
    i32.add
    return
   else
    i32.const 8
    local.get $0
    i32.const 1000000000
    i32.ge_u
    i32.add
    local.get $0
    i32.const 100000000
    i32.ge_u
    i32.add
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa32_dec_lut (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  (local $8 i64)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  loop $while-continue|0
   local.get $1
   i32.const 10000
   i32.ge_u
   if
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $3
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $4
    local.get $3
    local.set $1
    local.get $4
    i32.const 100
    i32.div_u
    local.set $5
    local.get $4
    i32.const 100
    i32.rem_u
    local.set $6
    i32.const 1084
    local.get $5
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $7
    i32.const 1084
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $7
    local.get $8
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $while-continue|0
   end
  end
  local.get $1
  i32.const 100
  i32.ge_u
  if
   local.get $1
   i32.const 100
   i32.div_u
   local.set $9
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $10
   local.get $9
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 1084
   local.get $10
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $11
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $11
   i32.store
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   i32.const 1084
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $12
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $12
   i32.store
  else
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $13
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $13
   i32.store16
  end
 )
 (func $~lib/util/number/utoa_hex_lut (param $0 i32) (param $1 i64) (param $2 i32)
  loop $while-continue|0
   local.get $2
   i32.const 2
   i32.ge_u
   if
    local.get $2
    i32.const 2
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 1504
    local.get $1
    i32.wrap_i64
    i32.const 255
    i32.and
    i32.const 2
    i32.shl
    i32.add
    i32.load
    i32.store
    local.get $1
    i64.const 8
    i64.shr_u
    local.set $1
    br $while-continue|0
   end
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   i32.const 1504
   local.get $1
   i32.wrap_i64
   i32.const 6
   i32.shl
   i32.add
   i32.load16_u
   i32.store16
  end
 )
 (func $~lib/util/number/ulog_base (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i32)
  block $~lib/util/number/isPowerOf2<i32>|inlined.0 (result i32)
   local.get $1
   local.set $2
   local.get $2
   i32.popcnt
   i32.const 1
   i32.eq
   br $~lib/util/number/isPowerOf2<i32>|inlined.0
  end
  if
   i32.const 63
   local.get $0
   i64.clz
   i32.wrap_i64
   i32.sub
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   i32.div_u
   i32.const 1
   i32.add
   return
  end
  local.get $1
  i64.extend_i32_s
  local.set $3
  local.get $3
  local.set $4
  i32.const 1
  local.set $5
  loop $while-continue|0
   local.get $0
   local.get $4
   i64.ge_u
   if
    local.get $0
    local.get $4
    i64.div_u
    local.set $0
    local.get $4
    local.get $4
    i64.mul
    local.set $4
    local.get $5
    i32.const 1
    i32.shl
    local.set $5
    br $while-continue|0
   end
  end
  loop $while-continue|1
   local.get $0
   i64.const 1
   i64.ge_u
   if
    local.get $0
    local.get $3
    i64.div_u
    local.set $0
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $while-continue|1
   end
  end
  local.get $5
  i32.const 1
  i32.sub
  return
 )
 (func $~lib/util/number/utoa64_any_core (param $0 i32) (param $1 i64) (param $2 i32) (param $3 i32)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  local.get $3
  i64.extend_i32_s
  local.set $4
  local.get $3
  local.get $3
  i32.const 1
  i32.sub
  i32.and
  i32.const 0
  i32.eq
  if
   local.get $3
   i32.ctz
   i32.const 7
   i32.and
   i64.extend_i32_s
   local.set $5
   local.get $4
   i64.const 1
   i64.sub
   local.set $6
   loop $do-loop|0
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 2560
    local.get $1
    local.get $6
    i64.and
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $1
    local.get $5
    i64.shr_u
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|0
   end
  else
   loop $do-loop|1
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $1
    local.get $4
    i64.div_u
    local.set $7
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    i32.const 2560
    local.get $1
    local.get $7
    local.get $4
    i64.mul
    i64.sub
    i32.wrap_i64
    i32.const 1
    i32.shl
    i32.add
    i32.load16_u
    i32.store16
    local.get $7
    local.set $1
    local.get $1
    i64.const 0
    i64.ne
    br_if $do-loop|1
   end
  end
 )
 (func $~lib/number/I32#toString (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/util/number/itoa32
  return
 )
 (func $index/SecondsCounter#get:countOutput (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $~lib/function/Function<%28%29=>void>#get:index (param $0 i32) (result i32)
  local.get $0
  i32.load
  return
 )
 (func $node_modules/asdom/assembly/elements/Element/Element#set:__children (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/elements/Element/Element#set:__onclick (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $node_modules/asdom/assembly/elements/Element/Element#set:__shadowRoot (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=16
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $index/SecondsCounter#set:countOutput (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=20
  local.get $0
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
 )
 (func $start:index~anonymous|1 (result i32)
  i32.const 0
  call $index/SecondsCounter#constructor
 )
 (func $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:index (param $0 i32) (result i32)
  local.get $0
  i32.load
  return
 )
 (func $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#get:__defs (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/rt/common/OBJECT#get:rtSize (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/common/OBJECT#get:rtSize
  i32.const 1
  i32.shr_u
  return
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:buckets" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:bucketsMask" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:taggedNext" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:key" (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/util/string/compareImpl (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $5
  local.get $2
  local.get $3
  i32.const 1
  i32.shl
  i32.add
  local.set $6
  i32.const 0
  i32.const 2
  i32.lt_s
  drop
  local.get $4
  i32.const 4
  i32.ge_u
  if (result i32)
   local.get $5
   i32.const 7
   i32.and
   local.get $6
   i32.const 7
   i32.and
   i32.or
   i32.eqz
  else
   i32.const 0
  end
  if
   block $do-break|0
    loop $do-loop|0
     local.get $5
     i64.load
     local.get $6
     i64.load
     i64.ne
     if
      br $do-break|0
     end
     local.get $5
     i32.const 8
     i32.add
     local.set $5
     local.get $6
     i32.const 8
     i32.add
     local.set $6
     local.get $4
     i32.const 4
     i32.sub
     local.set $4
     local.get $4
     i32.const 4
     i32.ge_u
     br_if $do-loop|0
    end
   end
  end
  loop $while-continue|1
   local.get $4
   local.tee $7
   i32.const 1
   i32.sub
   local.set $4
   local.get $7
   if
    local.get $5
    i32.load16_u
    local.set $8
    local.get $6
    i32.load16_u
    local.set $9
    local.get $8
    local.get $9
    i32.ne
    if
     local.get $8
     local.get $9
     i32.sub
     return
    end
    local.get $5
    i32.const 2
    i32.add
    local.set $5
    local.get $6
    i32.const 2
    i32.add
    local.set $6
    br $while-continue|1
   end
  end
  i32.const 0
  return
 )
 (func $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:value" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesOffset" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=16
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCapacity" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCount" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=20
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entries" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:key" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store
 )
 (func $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:value" (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:taggedNext" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store offset=8
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.set $1
   local.get $1
   call $~lib/rt/itcms/Object#get:color
   i32.const 3
   i32.eq
   if
    i32.const 3088
    i32.const 176
    i32.const 338
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   local.get $1
   global.get $~lib/rt/itcms/pinSpace
   i32.const 3
   call $~lib/rt/itcms/Object#linkTo
  end
  local.get $0
  return
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $1
  local.get $1
  call $~lib/rt/itcms/Object#get:color
  i32.const 3
  i32.ne
  if
   i32.const 3152
   i32.const 176
   i32.const 352
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $1
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   local.get $1
   global.get $~lib/rt/itcms/fromSpace
   global.get $~lib/rt/itcms/white
   call $~lib/rt/itcms/Object#linkTo
  end
 )
 (func $~lib/rt/itcms/__collect
  i32.const 0
  drop
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
    i32.const 0
    i32.ne
    if
     call $~lib/rt/itcms/step
     drop
     br $while-continue|0
    end
   end
  end
  call $~lib/rt/itcms/step
  drop
  loop $while-continue|1
   global.get $~lib/rt/itcms/state
   i32.const 0
   i32.ne
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i32.const 200
  i64.extend_i32_u
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
  i32.const 0
  drop
  i32.const 0
  drop
 )
 (func $~lib/rt/__visit_globals (param $0 i32)
  (local $1 i32)
  global.get $index/elements
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $index/SecondsCounter.observedAttributes
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  i32.const 304
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 512
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 752
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 112
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 3088
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 3152
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 1504
  local.get $0
  call $~lib/rt/itcms/__visit
  i32.const 2560
  local.get $0
  call $~lib/rt/itcms/__visit
  global.get $node_modules/asdom/assembly/Window/window
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $node_modules/asdom/assembly/Window/document
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $node_modules/asdom/assembly/Window/customElements
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $node_modules/asdom/assembly/Window/history
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement.observedAttributes
  local.tee $1
  if
   local.get $1
   local.get $0
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/arraybuffer/ArrayBufferView~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  i32.load
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/object/Object~visit (param $0 i32) (param $1 i32)
 )
 (func $~lib/array/Array<~lib/string/String>#get:dataStart (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/array/Array<~lib/string/String>#get:length_ (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/string/String>#get:buffer (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/array/Array<~lib/string/String>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/string/String>#__visit
 )
 (func $node_modules/asdom/assembly/Window/Window~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/EventTarget/EventTarget~visit
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=20
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=24
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $node_modules/asdom/assembly/EventTarget/EventTarget~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/Object/Object~visit
 )
 (func $node_modules/asdom/assembly/Object/Object~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
 )
 (func $node_modules/asdom/assembly/Document/Document~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/Node/Node~visit
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $node_modules/asdom/assembly/Node/Node~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/EventTarget/EventTarget~visit
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $node_modules/asdom/assembly/elements/Element/Element~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/Node/Node~visit
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=12
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
  local.get $0
  i32.load offset=16
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $node_modules/asdom/assembly/nodes/ShadowRoot/ShadowRoot~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/DocumentFragment/DocumentFragment~visit
 )
 (func $node_modules/asdom/assembly/DocumentFragment/DocumentFragment~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/Node/Node~visit
  local.get $0
  i32.load offset=8
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/Object/Object~visit
  local.get $0
  i32.load offset=4
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/elements/Element/Element~visit
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>~visit" (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#__visit"
 )
 (func $index/SecondsCounter~visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $0
  local.get $1
  call $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement~visit
  local.get $0
  i32.load offset=20
  local.tee $2
  if
   local.get $2
   local.get $1
   call $~lib/rt/itcms/__visit
  end
 )
 (func $~lib/array/Array<index/SecondsCounter>#get:buffer (param $0 i32) (result i32)
  local.get $0
  i32.load
 )
 (func $~lib/array/Array<index/SecondsCounter>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/array/Array<index/SecondsCounter>#__visit
 )
 (func $~lib/function/Function<%28%29=>void>#get:_env (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/function/Function<%28%29=>void>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/function/Function<%28%29=>void>#__visit
 )
 (func $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:_env (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
 )
 (func $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>~visit (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $~lib/object/Object~visit
  local.get $0
  local.get $1
  call $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#__visit
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  block $invalid
   block $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>
    block $~lib/function/Function<%28%29=>void>
     block $~lib/array/Array<index/SecondsCounter>
      block $index/SecondsCounter
       block $node_modules/asdom/assembly/History/History
        block $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>"
         block $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement
          block $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry
           block $node_modules/asdom/assembly/DocumentFragment/DocumentFragment
            block $node_modules/asdom/assembly/nodes/ShadowRoot/ShadowRoot
             block $node_modules/asdom/assembly/elements/Element/Element
              block $node_modules/asdom/assembly/HTMLCollection/HTMLCollection
               block $node_modules/asdom/assembly/Location/Location
                block $node_modules/asdom/assembly/NodeList/NodeList<node_modules/asdom/assembly/Node/Node>
                 block $node_modules/asdom/assembly/Node/Node
                  block $node_modules/asdom/assembly/Document/Document
                   block $node_modules/asdom/assembly/Object/Object
                    block $node_modules/asdom/assembly/EventTarget/EventTarget
                     block $node_modules/asdom/assembly/Window/Window
                      block $~lib/array/Array<~lib/string/String>
                       block $~lib/arraybuffer/ArrayBufferView
                        block $~lib/string/String
                         block $~lib/arraybuffer/ArrayBuffer
                          block $~lib/object/Object
                           local.get $0
                           i32.const 8
                           i32.sub
                           i32.load
                           br_table $~lib/object/Object $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $~lib/array/Array<~lib/string/String> $node_modules/asdom/assembly/Window/Window $node_modules/asdom/assembly/EventTarget/EventTarget $node_modules/asdom/assembly/Object/Object $node_modules/asdom/assembly/Document/Document $node_modules/asdom/assembly/Node/Node $node_modules/asdom/assembly/NodeList/NodeList<node_modules/asdom/assembly/Node/Node> $node_modules/asdom/assembly/Location/Location $node_modules/asdom/assembly/HTMLCollection/HTMLCollection $node_modules/asdom/assembly/elements/Element/Element $node_modules/asdom/assembly/nodes/ShadowRoot/ShadowRoot $node_modules/asdom/assembly/DocumentFragment/DocumentFragment $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>" $node_modules/asdom/assembly/History/History $index/SecondsCounter $~lib/array/Array<index/SecondsCounter> $~lib/function/Function<%28%29=>void> $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement> $invalid
                          end
                          return
                         end
                         return
                        end
                        return
                       end
                       local.get $0
                       local.get $1
                       call $~lib/arraybuffer/ArrayBufferView~visit
                       return
                      end
                      local.get $0
                      local.get $1
                      call $~lib/array/Array<~lib/string/String>~visit
                      return
                     end
                     local.get $0
                     local.get $1
                     call $node_modules/asdom/assembly/Window/Window~visit
                     return
                    end
                    return
                   end
                   return
                  end
                  local.get $0
                  local.get $1
                  call $node_modules/asdom/assembly/Document/Document~visit
                  return
                 end
                 local.get $0
                 local.get $1
                 call $node_modules/asdom/assembly/Node/Node~visit
                 return
                end
                return
               end
               return
              end
              return
             end
             local.get $0
             local.get $1
             call $node_modules/asdom/assembly/elements/Element/Element~visit
             return
            end
            local.get $0
            local.get $1
            call $node_modules/asdom/assembly/nodes/ShadowRoot/ShadowRoot~visit
            return
           end
           local.get $0
           local.get $1
           call $node_modules/asdom/assembly/DocumentFragment/DocumentFragment~visit
           return
          end
          local.get $0
          local.get $1
          call $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry~visit
          return
         end
         local.get $0
         local.get $1
         call $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement~visit
         return
        end
        local.get $0
        local.get $1
        call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>~visit"
        return
       end
       return
      end
      local.get $0
      local.get $1
      call $index/SecondsCounter~visit
      return
     end
     local.get $0
     local.get $1
     call $~lib/array/Array<index/SecondsCounter>~visit
     return
    end
    local.get $0
    local.get $1
    call $~lib/function/Function<%28%29=>void>~visit
    return
   end
   local.get $0
   local.get $1
   call $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>~visit
   return
  end
  unreachable
 )
 (func $~start
  call $start:index
 )
 (func $~stack_check
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__data_end
  i32.lt_s
  if
   i32.const 36096
   i32.const 36144
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $node_modules/asdom/assembly/Object/Object#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.const 7
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $~lib/object/Object#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  local.get $0
  call $node_modules/asdom/assembly/Object/Object#set:__ptr__
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/EventTarget/EventTarget#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.const 6
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/Object/Object#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/Window/Window#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 28
   i32.const 5
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/EventTarget/EventTarget#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#set:__document
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#set:__customElements
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#set:__history
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#set:__location
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#set:__onclick
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#set:__onpopstate
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/Node/Node#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 9
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/EventTarget/EventTarget#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Node/Node#set:__childNodes
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/Document/Document#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 20
   i32.const 8
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/Node/Node#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Document/Document#set:__location
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Document/Document#set:__onclick
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/Document/Document#set:__children
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/Window/Window#get:document (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $node_modules/asdom/assembly/Window/Window#get:__document
  local.tee $1
  i32.store offset=4
  local.get $1
  i32.eqz
  if
   local.get $0
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   call $node_modules/asdom/assembly/Document/Document#constructor
   local.tee $1
   i32.store offset=4
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=8
   local.get $2
   call $node_modules/asdom/assembly/Window/Window#set:__document
   local.get $0
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $node_modules/asdom/assembly/Object/Object#get:__ptr__
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $node_modules/asdom/assembly/Object/Object#get:__ptr__
   call $node_modules/asdom/assembly/imports/getDocument
  end
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#constructor" (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 18
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 4
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:buckets"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 4
  i32.const 1
  i32.sub
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:bucketsMask"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.const 4
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.0" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.0"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entries"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 4
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesCapacity"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesOffset"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesCount"
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.const 16
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/Object/Object#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#constructor"
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=8
  local.get $1
  call $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#set:__defs
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/Window/Window#get:customElements (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $node_modules/asdom/assembly/Window/Window#get:__customElements
  local.tee $1
  i32.store offset=4
  local.get $1
  i32.eqz
  if
   local.get $0
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   call $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#constructor
   local.tee $1
   i32.store offset=4
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=8
   local.get $2
   call $node_modules/asdom/assembly/Window/Window#set:__customElements
   local.get $0
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $node_modules/asdom/assembly/Object/Object#get:__ptr__
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $node_modules/asdom/assembly/Object/Object#get:__ptr__
   call $node_modules/asdom/assembly/imports/getCustomElements
  end
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $node_modules/asdom/assembly/History/History#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.const 19
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/Object/Object#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/Window/Window#get:history (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $node_modules/asdom/assembly/Window/Window#get:__history
  local.tee $1
  i32.store offset=4
  local.get $1
  i32.eqz
  if
   local.get $0
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   call $node_modules/asdom/assembly/History/History#constructor
   local.tee $1
   i32.store offset=4
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=8
   local.get $2
   call $node_modules/asdom/assembly/Window/Window#set:__history
   local.get $0
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $node_modules/asdom/assembly/Object/Object#get:__ptr__
   local.get $1
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   local.get $2
   call $node_modules/asdom/assembly/Object/Object#get:__ptr__
   call $node_modules/asdom/assembly/imports/getHistory
  end
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $start:node_modules/asdom/assembly/Window
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  memory.size
  i32.const 16
  i32.shl
  global.get $~lib/memory/__heap_base
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 224
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/pinSpace
  i32.const 256
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/toSpace
  i32.const 400
  call $~lib/rt/itcms/initLazy
  global.set $~lib/rt/itcms/fromSpace
  i32.const 0
  call $node_modules/asdom/assembly/Window/Window#constructor
  global.set $node_modules/asdom/assembly/Window/window
  global.get $node_modules/asdom/assembly/Window/window
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $node_modules/asdom/assembly/Object/Object#get:__ptr__
  call $node_modules/asdom/assembly/imports/trackWindow
  global.get $node_modules/asdom/assembly/Window/window
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $node_modules/asdom/assembly/Window/Window#get:document
  global.set $node_modules/asdom/assembly/Window/document
  global.get $node_modules/asdom/assembly/Window/window
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $node_modules/asdom/assembly/Window/Window#get:customElements
  global.set $node_modules/asdom/assembly/Window/customElements
  global.get $node_modules/asdom/assembly/Window/window
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  call $node_modules/asdom/assembly/Window/Window#get:history
  global.set $node_modules/asdom/assembly/Window/history
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<index/SecondsCounter>#get:length (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  call $~lib/array/Array<index/SecondsCounter>#get:length_
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
  return
 )
 (func $~lib/array/Array<index/SecondsCounter>#__get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $1
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/array/Array<index/SecondsCounter>#get:length_
  i32.ge_u
  if
   i32.const 304
   i32.const 704
   i32.const 114
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/array/Array<index/SecondsCounter>#get:dataStart
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $2
  i32.store offset=4
  i32.const 1
  drop
  i32.const 0
  i32.eqz
  drop
  local.get $2
  i32.eqz
  if
   i32.const 752
   i32.const 704
   i32.const 118
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement#set:innerText (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  call $node_modules/asdom/assembly/Object/Object#get:__ptr__
  local.get $1
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $node_modules/asdom/assembly/imports/setInnerText
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $index/SecondsCounter#update (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=8
  local.get $2
  call $index/SecondsCounter#get:countOutput
  local.tee $1
  i32.store offset=12
  local.get $1
  if (result i32)
   local.get $1
  else
   i32.const 2656
   i32.const 2784
   i32.const 92
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  global.get $index/count
  i32.const 10
  call $~lib/number/I32#toString
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store offset=4
  local.get $2
  call $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement#set:innerText
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:index~anonymous|0
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $index/count
  i32.const 1
  i32.add
  global.set $index/count
  i32.const 0
  local.set $0
  global.get $index/elements
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/array/Array<index/SecondsCounter>#get:length
  local.set $1
  loop $for-loop|0
   local.get $0
   local.get $1
   i32.lt_s
   if
    global.get $index/elements
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=4
    local.get $2
    local.get $0
    call $~lib/array/Array<index/SecondsCounter>#__get
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store
    local.get $2
    call $index/SecondsCounter#update
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $node_modules/ecmassembly/assembly/setInterval/setInterval (param $0 i32) (param $1 f32) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/function/Function<%28%29=>void>#get:index
  local.get $1
  call $node_modules/ecmassembly/assembly/setInterval/_setInterval
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
  return
 )
 (func $node_modules/asdom/assembly/elements/Element/Element#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 20
   i32.const 13
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/Node/Node#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/elements/Element/Element#set:__children
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/elements/Element/Element#set:__onclick
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $node_modules/asdom/assembly/elements/Element/Element#set:__shadowRoot
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 20
   i32.const 17
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/elements/Element/Element#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $index/SecondsCounter#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.const 20
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  call $index/SecondsCounter#set:countOutput
  global.get $~lib/memory/__stack_pointer
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement#constructor
  local.tee $0
  i32.store
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/util/hash/HASH<~lib/string/String> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $19 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  i32.const 1
  drop
  block $~lib/util/hash/hashStr|inlined.0 (result i32)
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.tee $1
   i32.store
   local.get $1
   i32.const 0
   i32.eq
   if
    i32.const 0
    br $~lib/util/hash/hashStr|inlined.0
   end
   local.get $1
   local.set $19
   global.get $~lib/memory/__stack_pointer
   local.get $19
   i32.store offset=4
   local.get $19
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   local.set $2
   local.get $2
   local.set $3
   local.get $1
   local.set $4
   local.get $3
   i32.const 16
   i32.ge_u
   if
    i32.const 0
    i32.const -1640531535
    i32.add
    i32.const -2048144777
    i32.add
    local.set $5
    i32.const 0
    i32.const -2048144777
    i32.add
    local.set $6
    i32.const 0
    local.set $7
    i32.const 0
    i32.const -1640531535
    i32.sub
    local.set $8
    local.get $3
    local.get $4
    i32.add
    i32.const 16
    i32.sub
    local.set $9
    loop $while-continue|0
     local.get $4
     local.get $9
     i32.le_u
     if
      block $~lib/util/hash/mix|inlined.0 (result i32)
       local.get $5
       local.set $10
       local.get $4
       i32.load
       local.set $11
       local.get $10
       local.get $11
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.0
      end
      local.set $5
      block $~lib/util/hash/mix|inlined.1 (result i32)
       local.get $6
       local.set $12
       local.get $4
       i32.load offset=4
       local.set $13
       local.get $12
       local.get $13
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.1
      end
      local.set $6
      block $~lib/util/hash/mix|inlined.2 (result i32)
       local.get $7
       local.set $14
       local.get $4
       i32.load offset=8
       local.set $15
       local.get $14
       local.get $15
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.2
      end
      local.set $7
      block $~lib/util/hash/mix|inlined.3 (result i32)
       local.get $8
       local.set $16
       local.get $4
       i32.load offset=12
       local.set $17
       local.get $16
       local.get $17
       i32.const -2048144777
       i32.mul
       i32.add
       i32.const 13
       i32.rotl
       i32.const -1640531535
       i32.mul
       br $~lib/util/hash/mix|inlined.3
      end
      local.set $8
      local.get $4
      i32.const 16
      i32.add
      local.set $4
      br $while-continue|0
     end
    end
    local.get $2
    local.get $5
    i32.const 1
    i32.rotl
    local.get $6
    i32.const 7
    i32.rotl
    i32.add
    local.get $7
    i32.const 12
    i32.rotl
    i32.add
    local.get $8
    i32.const 18
    i32.rotl
    i32.add
    i32.add
    local.set $2
   else
    local.get $2
    i32.const 0
    i32.const 374761393
    i32.add
    i32.add
    local.set $2
   end
   local.get $1
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.set $18
   loop $while-continue|1
    local.get $4
    local.get $18
    i32.le_u
    if
     local.get $2
     local.get $4
     i32.load
     i32.const -1028477379
     i32.mul
     i32.add
     local.set $2
     local.get $2
     i32.const 17
     i32.rotl
     i32.const 668265263
     i32.mul
     local.set $2
     local.get $4
     i32.const 4
     i32.add
     local.set $4
     br $while-continue|1
    end
   end
   local.get $1
   local.get $3
   i32.add
   local.set $18
   loop $while-continue|2
    local.get $4
    local.get $18
    i32.lt_u
    if
     local.get $2
     local.get $4
     i32.load8_u
     i32.const 374761393
     i32.mul
     i32.add
     local.set $2
     local.get $2
     i32.const 11
     i32.rotl
     i32.const -1640531535
     i32.mul
     local.set $2
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     br $while-continue|2
    end
   end
   local.get $2
   local.get $2
   i32.const 15
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   i32.const -2048144777
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 13
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   i32.const -1028477379
   i32.mul
   local.set $2
   local.get $2
   local.get $2
   i32.const 16
   i32.shr_u
   i32.xor
   local.set $2
   local.get $2
   br $~lib/util/hash/hashStr|inlined.0
  end
  local.set $19
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $19
  return
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  local.get $0
  i32.const 0
  i32.eq
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 0
   i32.eq
  end
  if
   i32.const 0
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  local.get $1
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  call $~lib/string/String#get:length
  i32.ne
  if
   i32.const 0
   local.set $3
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  local.get $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store
  local.get $3
  i32.const 0
  local.get $1
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=4
  local.get $3
  i32.const 0
  local.get $2
  call $~lib/util/string/compareImpl
  i32.eqz
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#find" (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:buckets"
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:bucketsMask"
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  loop $while-continue|0
   local.get $3
   if
    local.get $3
    call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:taggedNext"
    local.set $4
    local.get $4
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:key"
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.store
     local.get $5
     local.get $1
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $5
     i32.store offset=4
     local.get $5
     call $~lib/string/String.__eq
    else
     i32.const 0
    end
    if
     local.get $3
     local.set $5
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $5
     return
    end
    local.get $4
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $while-continue|0
   end
  end
  i32.const 0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $5
  return
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#rehash" (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $3
  i32.store
  local.get $2
  i32.const 8
  i32.mul
  i32.const 3
  i32.div_s
  local.set $4
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  local.get $4
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.1" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.1"
  end
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.tee $5
  i32.store offset=4
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entries"
  local.set $6
  local.get $6
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.2" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.2"
  end
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  loop $while-continue|0
   local.get $6
   local.get $7
   i32.ne
   if
    local.get $6
    local.set $9
    local.get $9
    call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $10
     global.get $~lib/memory/__stack_pointer
     local.get $9
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:key"
     local.tee $11
     i32.store offset=12
     local.get $10
     local.get $11
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:key"
     local.get $10
     local.get $9
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:value"
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:value"
     local.get $11
     local.set $14
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store offset=8
     local.get $14
     call $~lib/util/hash/HASH<~lib/string/String>
     local.get $1
     i32.and
     local.set $12
     local.get $3
     local.get $12
     i32.const 4
     i32.mul
     i32.add
     local.set $13
     local.get $10
     local.get $13
     i32.load
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:taggedNext"
     local.get $13
     local.get $8
     i32.store
     local.get $8
     block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.3" (result i32)
      i32.const 12
      br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.3"
     end
     i32.add
     local.set $8
    end
    local.get $6
    block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.4" (result i32)
     i32.const 12
     br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.4"
    end
    i32.add
    local.set $6
    br $while-continue|0
   end
  end
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:buckets"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $1
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:bucketsMask"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $5
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entries"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $4
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesCapacity"
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=8
  local.get $14
  local.get $0
  local.set $14
  global.get $~lib/memory/__stack_pointer
  local.get $14
  i32.store offset=16
  local.get $14
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCount"
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesOffset"
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set" (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store offset=8
  local.get $1
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $~lib/util/hash/HASH<~lib/string/String>
  local.set $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  local.get $1
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store offset=4
  local.get $8
  local.get $3
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#find"
  local.set $4
  local.get $4
  if
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
  else
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesOffset"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCapacity"
   i32.eq
   if
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store
    local.get $8
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCount"
    local.get $0
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store offset=4
    local.get $8
    call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCapacity"
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:bucketsMask"
    else
     local.get $0
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $8
     i32.store offset=4
     local.get $8
     call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:bucketsMask"
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#rehash"
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entries"
   local.tee $5
   i32.store offset=8
   local.get $5
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesOffset"
   local.tee $6
   i32.const 1
   i32.add
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesOffset"
   local.get $6
   block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.5" (result i32)
    i32.const 12
    br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.5"
   end
   i32.mul
   i32.add
   local.set $4
   local.get $4
   local.get $1
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:key"
   i32.const 1
   drop
   local.get $0
   local.get $1
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $4
   local.get $2
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:value"
   i32.const 1
   drop
   local.get $0
   local.get $2
   i32.const 1
   call $~lib/rt/itcms/__link
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store offset=4
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesCount"
   i32.const 1
   i32.add
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:entriesCount"
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:buckets"
   local.get $3
   local.get $0
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $8
   i32.store
   local.get $8
   call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:bucketsMask"
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $7
   local.get $4
   local.get $7
   i32.load
   call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set:taggedNext"
   local.get $7
   local.get $4
   i32.store
  end
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $8
  return
 )
 (func $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#define (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  call $node_modules/asdom/assembly/Object/Object#get:__ptr__
  local.get $1
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  local.get $2
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  call $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:index
  local.get $3
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  call $node_modules/asdom/assembly/imports/define
  local.get $0
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=12
  local.get $4
  call $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#get:__defs
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  local.get $1
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  local.get $2
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#set"
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:index
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  call $start:node_modules/asdom/assembly/index
  i32.const 2832
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  f32.const 1e3
  call $node_modules/ecmassembly/assembly/setInterval/setInterval
  drop
  global.get $node_modules/asdom/assembly/Window/customElements
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store
  local.get $4
  i32.const 2992
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=4
  local.get $4
  i32.const 3056
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=8
  local.get $4
  global.get $index/SecondsCounter.observedAttributes
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $4
  i32.store offset=12
  local.get $4
  call $node_modules/asdom/assembly/CustomElementRegistry/CustomElementRegistry#define
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<~lib/string/String>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 1
  drop
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<~lib/string/String>#get:dataStart
  local.set $2
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<~lib/string/String>#get:length_
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   if
    local.get $2
    i32.load
    local.set $4
    local.get $4
    if
     local.get $4
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<~lib/string/String>#get:buffer
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#__visit" (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:buckets"
  local.get $1
  call $~lib/rt/itcms/__visit
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entries"
  local.set $2
  i32.const 1
  drop
  local.get $2
  local.set $3
  local.get $3
  local.get $0
  local.set $8
  global.get $~lib/memory/__stack_pointer
  local.get $8
  i32.store
  local.get $8
  call $"~lib/map/Map<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:entriesOffset"
  block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.6" (result i32)
   i32.const 12
   br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.6"
  end
  i32.mul
  i32.add
  local.set $4
  loop $while-continue|0
   local.get $3
   local.get $4
   i32.lt_u
   if
    local.get $3
    local.set $5
    local.get $5
    call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:taggedNext"
    i32.const 1
    i32.and
    i32.eqz
    if
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:key"
     local.set $6
     i32.const 0
     drop
     local.get $6
     local.get $1
     call $~lib/rt/itcms/__visit
     i32.const 1
     drop
     local.get $5
     call $"~lib/map/MapEntry<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:value"
     local.set $7
     i32.const 0
     drop
     local.get $7
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $3
    block $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.7" (result i32)
     i32.const 12
     br $"~lib/map/ENTRY_SIZE<~lib/string/String,%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>|inlined.7"
    end
    i32.add
    local.set $3
    br $while-continue|0
   end
  end
  local.get $2
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<index/SecondsCounter>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  i32.const 1
  drop
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<index/SecondsCounter>#get:dataStart
  local.set $2
  local.get $2
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<index/SecondsCounter>#get:length_
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_u
   if
    local.get $2
    i32.load
    local.set $4
    local.get $4
    if
     local.get $4
     local.get $1
     call $~lib/rt/itcms/__visit
    end
    local.get $2
    i32.const 4
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  local.get $0
  local.set $5
  global.get $~lib/memory/__stack_pointer
  local.get $5
  i32.store
  local.get $5
  call $~lib/array/Array<index/SecondsCounter>#get:buffer
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/function/Function<%28%29=>void>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/function/Function<%28%29=>void>#get:_env
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#__visit (param $0 i32) (param $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  call $~lib/function/Function<%28%29=>node_modules/asdom/assembly/elements/HTML/HTMLElement/HTMLElement>#get:_env
  local.get $1
  call $~lib/rt/itcms/__visit
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/object/Object#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store
  end
  local.get $0
  local.set $1
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 512
   i32.const 560
   i32.const 52
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.const 1
  call $~lib/rt/itcms/__new
  local.tee $2
  i32.store
  i32.const 2
  global.get $~lib/shared/runtime/Runtime.Incremental
  i32.ne
  drop
  local.get $2
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
  return
 )
 (func $~lib/util/number/itoa32 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $1
  i32.const 2
  i32.lt_s
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.const 36
   i32.gt_s
  end
  if
   i32.const 880
   i32.const 1008
   i32.const 373
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.eqz
  if
   i32.const 1072
   local.set $14
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $14
   return
  end
  local.get $0
  i32.const 31
  i32.shr_u
  i32.const 1
  i32.shl
  local.set $2
  local.get $2
  if
   i32.const 0
   local.get $0
   i32.sub
   local.set $0
  end
  local.get $1
  i32.const 10
  i32.eq
  if
   local.get $0
   call $~lib/util/number/decimalCount32
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.const 1
   i32.shl
   local.get $2
   i32.add
   i32.const 2
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store
   local.get $3
   local.get $2
   i32.add
   local.set $5
   local.get $0
   local.set $6
   local.get $4
   local.set $7
   i32.const 0
   i32.const 1
   i32.ge_s
   drop
   local.get $5
   local.get $6
   local.get $7
   call $~lib/util/number/utoa32_dec_lut
  else
   local.get $1
   i32.const 16
   i32.eq
   if
    i32.const 31
    local.get $0
    i32.clz
    i32.sub
    i32.const 2
    i32.shr_s
    i32.const 1
    i32.add
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.set $9
    local.get $0
    local.set $10
    local.get $8
    local.set $11
    i32.const 0
    i32.const 1
    i32.ge_s
    drop
    local.get $9
    local.get $10
    i64.extend_i32_u
    local.get $11
    call $~lib/util/number/utoa_hex_lut
   else
    local.get $0
    local.set $12
    local.get $12
    i64.extend_i32_u
    local.get $1
    call $~lib/util/number/ulog_base
    local.set $13
    global.get $~lib/memory/__stack_pointer
    local.get $13
    i32.const 1
    i32.shl
    local.get $2
    i32.add
    i32.const 2
    call $~lib/rt/itcms/__new
    local.tee $3
    i32.store
    local.get $3
    local.get $2
    i32.add
    local.get $12
    i64.extend_i32_u
    local.get $13
    local.get $1
    call $~lib/util/number/utoa64_any_core
   end
  end
  local.get $2
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  local.set $14
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $14
  return
 )
)
