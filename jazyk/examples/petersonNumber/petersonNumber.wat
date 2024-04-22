(module
 (type $0 (func (param i32) (result i32)))
 (type $1 (func (param i32)))
 (type $2 (func (param f32)))
 (type $3 (func (param i32 i32) (result i32)))
 (type $4 (func))
 (import "env" "throwError" (func $error (param i32)))
 (import "env" "displayNumber" (func $displayNumber (param f32)))
 (import "env" "displayList" (func $displayList (param i32)))
 (import "env" "displayVec" (func $displayVec (param i32)))
 (global $freeMemIndex (mut i32) (i32.const 0))
 (export "isPetersonNumber" (func $is-peterson-number))
 (export "main" (func $main))
 (export "freeMemIndex" (global $freeMemIndex))
 (func $checkNumberTypeAndGetValue (; has Stack IR ;) (param $0 i32) (result i32)
  (if
   (i32.and
    (local.get $0)
    (i32.const 1)
   )
   (call $error
    (i32.eq
     (i32.and
      (local.get $0)
      (i32.const 3)
     )
     (i32.const 3)
    )
   )
  )
  (local.get $0)
 )
 (func $factorial (; has Stack IR ;) (param $0 i32) (result i32)
  (if (result i32)
   (i32.eq
    (call $checkNumberTypeAndGetValue
     (local.get $0)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 0)
    )
   )
   (i32.const 1065353216)
   (i32.and
    (i32.reinterpret_f32
     (f32.mul
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (local.get $0)
       )
      )
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (call $factorial
         (i32.and
          (i32.reinterpret_f32
           (f32.sub
            (f32.reinterpret_i32
             (call $checkNumberTypeAndGetValue
              (local.get $0)
             )
            )
            (f32.reinterpret_i32
             (call $checkNumberTypeAndGetValue
              (i32.const 1065353216)
             )
            )
           )
          )
          (i32.const -2)
         )
        )
       )
      )
     )
    )
    (i32.const -2)
   )
  )
 )
 (func $sum-of-factorial-of-digits (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (if (result i32)
   (i32.eq
    (call $checkNumberTypeAndGetValue
     (local.get $0)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 0)
    )
   )
   (local.get $1)
   (call $sum-of-factorial-of-digits
    (i32.and
     (i32.reinterpret_f32
      (f32.trunc
       (f32.div
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (local.get $0)
         )
        )
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (i32.const 1092616192)
         )
        )
       )
      )
     )
     (i32.const -2)
    )
    (i32.and
     (i32.reinterpret_f32
      (f32.add
       (f32.reinterpret_i32
        (call $checkNumberTypeAndGetValue
         (local.get $1)
        )
       )
       (f32.reinterpret_i32
        (call $checkNumberTypeAndGetValue
         (call $factorial
          (i32.and
           (i32.reinterpret_f32
            (f32.convert_i32_s
             (i32.rem_s
              (i32.trunc_f32_s
               (f32.reinterpret_i32
                (call $checkNumberTypeAndGetValue
                 (local.get $0)
                )
               )
              )
              (i32.trunc_f32_s
               (f32.reinterpret_i32
                (call $checkNumberTypeAndGetValue
                 (i32.const 1092616192)
                )
               )
              )
             )
            )
           )
           (i32.const -2)
          )
         )
        )
       )
      )
     )
     (i32.const -2)
    )
   )
  )
 )
 (func $is-peterson-number (; has Stack IR ;) (param $0 i32) (result i32)
  (select
   (i32.const 1065353216)
   (i32.const 0)
   (i32.eq
    (call $checkNumberTypeAndGetValue
     (local.get $0)
    )
    (call $checkNumberTypeAndGetValue
     (call $sum-of-factorial-of-digits
      (local.get $0)
      (i32.const 0)
     )
    )
   )
  )
 )
 (func $main (; has Stack IR ;)
  (local $0 i32)
  (if
   (i32.and
    (local.tee $0
     (call $is-peterson-number
      (i32.const 1125187584)
     )
    )
    (i32.const 1)
   )
   (if
    (i32.ne
     (i32.and
      (local.get $0)
      (i32.const 3)
     )
     (i32.const 3)
    )
    (call $displayList
     (local.get $0)
    )
    (call $displayVec
     (local.get $0)
    )
   )
   (call $displayNumber
    (f32.reinterpret_i32
     (local.get $0)
    )
   )
  )
 )
)
