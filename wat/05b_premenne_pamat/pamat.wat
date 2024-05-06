(module
  (import "env" "fncJs" (func $fncJs (param i32) (result i32)))
  (export "var" (global $var))
  (memory (export "memory") 1 10)
  (global $var  (mut i32)  i32.const 0 )
     (func $fnc (export "fnc") (param i32 )(result i32)
         (global.set $var (i32.add (global.get $var) (i32.const 1)))
         local.get 0
         call $fncJs
     )

     (func $fnc2 (export "fnc2") (param i32 )(result i32)
         i32.const 0
         i32.load
         i32.const 0
         i32.const 10
         i32.store
     )



)


