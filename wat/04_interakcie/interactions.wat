(module
  (import "env" "asyncJs" (func $async_js (result i32)))
  (import "env" "callbackInsideJs" (func $callbackJs))
     (func $fnc (export "fnc") (result i32)
         call $async_js
     )
     (func $fnc2 (export "fnc2") (result i32)
         call $callbackJs
         i32.const 1
     )
)


