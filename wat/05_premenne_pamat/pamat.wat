(module
  (import "env" "fncJs" (func $fncJs (param i32) (result i32)))
  (export "var" (global $var))
  (global $var  (mut i32)  i32.const 0 )
     (func $fnc (export "fnc") (param i32 )(result i32)
         (global.set $var (i32.add (global.get $var) (i32.const 1)))
         local.get 0
         call $fncJs
     )

)


