(module
    (import "env" "memory" (memory 1))
    (global $mem_pointer (mut i32) (i32.const 128))
    (global $string_pointer (mut i32) (i32.const 128))

    (func $save_string
      (i32.store (global.get $mem_pointer) (i32.const 4))
      (i32.store (i32.add (global.get $mem_pointer) (i32.const 4)) (i32.const 65))
      (i32.store (i32.add (global.get $mem_pointer) (i32.const 8)) (i32.const 72))
      (i32.store (i32.add (global.get $mem_pointer) (i32.const 12)) (i32.const 79))
      (i32.store (i32.add (global.get $mem_pointer) (i32.const 16)) (i32.const 74))
      (global.set $mem_pointer (i32.add (global.get $mem_pointer) (i32.const 20)))
    )

    (func (export "getStringBase") (result i32)
      (global.get $string_pointer))

    (start $save_string)
)