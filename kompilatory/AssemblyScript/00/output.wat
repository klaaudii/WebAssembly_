(module
 (type $0 (func (param i32)))
 (type $1 (func (param i32 i32) (result i32)))
 (type $2 (func (result i32)))
 (import "index" "log" (func $index/log (param i32)))
 (global $~lib/memory/__data_end i32 (i32.const 60))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32828))
 (global $~lib/memory/__heap_base i32 (i32.const 32828))
 (memory $0 1)
 (data $0 (i32.const 12) ",\00\00\00\00\00\00\00\00\00\00\00\02\00\00\00\16\00\00\00H\00e\00l\00l\00o\00 \00W\00o\00r\00l\00d\00\00\00\00\00\00\00")
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "add" (func $index/add))
 (export "getHelloString" (func $index/getHelloString))
 (export "memory" (memory $0))
 (func $index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
  call $index/log
  local.get $0
  local.get $1
  i32.add
  return
 )
 (func $index/getHelloString (result i32)
  i32.const 32
  return
 )
)
