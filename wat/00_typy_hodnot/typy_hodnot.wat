;;wat2wasm typy_hodnot.wat -f reference_types

(module
    (import "env" "logi32" (func $logi32 (param i32)))
    (import "env" "logi64" (func $logi64 (param i64)))
    (import "env" "logf32" (func $logf32 (param f32)))
    (import "env" "logf64" (func $logf64 (param f64)))
    (import "env" "logArray" (func $logArray (param externref)))
    (import "env" "table" (table $table 10 funcref))

    (global $array (import "env" "array")  externref)
    (global $i32  i32 (i32.const 500000))
    (global $i64  i64 (i64.const 5000000000))
    (global $f32  f32 (f32.const 500000.12))
    (global $f64  f64 (f64.const 5000000000.12))

    (elem (i32.const 0) $log)
    (elem (i32.const 1) $add)

    (func $log
      global.get $i32
      call $logi32
      global.get $i64
      call $logi64
      global.get $f32
      call $logf32
      global.get $f64
      call $logf64
      global.get $array
      call $logArray
    )

    (func $add (param i32 i32) (result i32)
     local.get 0
     local.get 1
     i32.add
    )

    (func $get_func (export "getFnc") (param i32) (result funcref)
        (table.get  $table (local.get 0))
    )
)