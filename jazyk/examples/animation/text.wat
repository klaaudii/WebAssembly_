(module
 (type $0 (func (param i32) (result i32)))
 (type $1 (func (param i32 i32) (result i32)))
 (type $2 (func (param i32)))
 (type $3 (func (param i32 i32 i32)))
 (type $4 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $5 (func (param i32 i32 i32 i32 i32)))
 (type $6 (func (param i32 i32)))
 (type $7 (func (param i32 i32 i32 i32) (result i32)))
 (type $8 (func))
 (import "env" "memory" (memory $mem 0 65536))
 (import "env" "throwError" (func $error (param i32)))
 (global $freeMemIndex (mut i32) (i32.const 0))
 (export "f" (func $f))
 (export "addv" (func $addv))
 (export "add2" (func $add2))
 (export "ff" (func $ff))
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
 (func $vector-ref (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (if
   (i32.eq
    (local.get $0)
    (i32.const -1)
   )
   (call $error
    (i32.const 10)
   )
  )
  (if
   (i32.ne
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (select
     (i32.const 4)
     (i32.const 5)
     (i32.and
      (local.get $0)
      (i32.const 1)
     )
    )
   )
  )
  (if
   (i32.eq
    (i32.and
     (local.get $1)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (i32.const 1)
   )
   (if
    (i32.eq
     (i32.and
      (local.get $1)
      (i32.const 3)
     )
     (i32.const 1)
    )
    (call $error
     (i32.const 0)
    )
   )
  )
  (local.set $2
   (i32.trunc_f32_s
    (f32.reinterpret_i32
     (local.get $1)
    )
   )
  )
  (if
   (i32.lt_s
    (local.get $1)
    (i32.const 0)
   )
   (call $error
    (i32.const 11)
   )
  )
  (if
   (i32.ge_s
    (local.get $2)
    (i32.load
     (local.tee $0
      (i32.shr_u
       (local.get $0)
       (i32.const 2)
      )
     )
    )
   )
   (call $error
    (i32.const 11)
   )
  )
  (i32.load
   (i32.add
    (local.get $0)
    (i32.shl
     (i32.add
      (local.get $2)
      (i32.const 1)
     )
     (i32.const 2)
    )
   )
  )
 )
 (func $vector-length (; has Stack IR ;) (param $0 i32) (result i32)
  (if
   (i32.eq
    (local.get $0)
    (i32.const -1)
   )
   (return
    (i32.const 0)
   )
  )
  (if
   (i32.ne
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (select
     (i32.const 4)
     (i32.const 5)
     (i32.and
      (local.get $0)
      (i32.const 1)
     )
    )
   )
  )
  (i32.reinterpret_f32
   (f32.convert_i32_s
    (i32.load
     (i32.shr_u
      (local.get $0)
      (i32.const 2)
     )
    )
   )
  )
 )
 (func $vector-set! (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (if
   (i32.eq
    (local.get $0)
    (i32.const -1)
   )
   (call $error
    (i32.const 10)
   )
  )
  (if
   (i32.ne
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (select
     (i32.const 4)
     (i32.const 5)
     (i32.and
      (local.get $0)
      (i32.const 1)
     )
    )
   )
  )
  (if
   (i32.eq
    (i32.and
     (local.get $1)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (i32.const 1)
   )
   (if
    (i32.eq
     (i32.and
      (local.get $1)
      (i32.const 3)
     )
     (i32.const 1)
    )
    (call $error
     (i32.const 0)
    )
   )
  )
  (if
   (i32.and
    (local.get $2)
    (i32.const 1)
   )
   (call $error
    (i32.eq
     (i32.and
      (local.get $2)
      (i32.const 3)
     )
     (i32.const 3)
    )
   )
  )
  (local.set $3
   (i32.trunc_f32_s
    (f32.reinterpret_i32
     (local.get $1)
    )
   )
  )
  (if
   (i32.lt_s
    (local.get $1)
    (i32.const 0)
   )
   (call $error
    (i32.const 11)
   )
  )
  (if
   (i32.ge_u
    (local.get $3)
    (i32.load
     (local.tee $0
      (i32.shr_u
       (local.get $0)
       (i32.const 2)
      )
     )
    )
   )
   (call $error
    (i32.const 11)
   )
  )
  (i32.store
   (i32.add
    (local.get $0)
    (i32.shl
     (i32.add
      (local.get $3)
      (i32.const 1)
     )
     (i32.const 2)
    )
   )
   (local.get $2)
  )
 )
 (func $vectorAdd (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (if
   (i32.eq
    (local.get $0)
    (i32.const -1)
   )
   (return
    (local.get $0)
   )
  )
  (if
   (i32.eq
    (local.get $2)
    (i32.const -1)
   )
   (return
    (local.get $0)
   )
  )
  (if
   (i32.ne
    (i32.and
     (local.get $0)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (select
     (i32.const 4)
     (i32.const 5)
     (i32.and
      (local.get $0)
      (i32.const 1)
     )
    )
   )
  )
  (if
   (i32.ne
    (i32.and
     (local.get $2)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (select
     (i32.const 4)
     (i32.const 5)
     (i32.and
      (local.get $2)
      (i32.const 1)
     )
    )
   )
  )
  (if
   (i32.eq
    (i32.and
     (local.get $1)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (i32.const 1)
   )
   (if
    (i32.eq
     (i32.and
      (local.get $1)
      (i32.const 3)
     )
     (i32.const 1)
    )
    (call $error
     (i32.const 0)
    )
   )
  )
  (if
   (i32.eq
    (i32.and
     (local.get $3)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (i32.const 1)
   )
   (if
    (i32.eq
     (i32.and
      (local.get $3)
      (i32.const 3)
     )
     (i32.const 1)
    )
    (call $error
     (i32.const 0)
    )
   )
  )
  (if
   (i32.eq
    (i32.and
     (local.get $4)
     (i32.const 3)
    )
    (i32.const 3)
   )
   (call $error
    (i32.const 1)
   )
   (if
    (i32.eq
     (i32.and
      (local.get $4)
      (i32.const 3)
     )
     (i32.const 1)
    )
    (call $error
     (i32.const 0)
    )
   )
  )
  (local.set $5
   (i32.add
    (local.tee $8
     (i32.shr_u
      (local.get $0)
      (i32.const 2)
     )
    )
    (i32.const 4)
   )
  )
  (local.set $2
   (i32.add
    (local.tee $9
     (i32.shr_u
      (local.get $2)
      (i32.const 2)
     )
    )
    (i32.add
     (i32.shl
      (i32.trunc_f32_s
       (f32.reinterpret_i32
        (local.get $3)
       )
      )
      (i32.const 2)
     )
     (i32.const 4)
    )
   )
  )
  (local.set $6
   (i32.trunc_f32_s
    (f32.add
     (f32.reinterpret_i32
      (local.get $1)
     )
     (f32.const -0)
    )
   )
  )
  (local.set $3
   (i32.trunc_f32_s
    (f32.sub
     (f32.reinterpret_i32
      (local.get $4)
     )
     (f32.reinterpret_i32
      (local.get $3)
     )
    )
   )
  )
  (if
   (i32.lt_s
    (i32.load
     (local.get $8)
    )
    (i32.trunc_f32_s
     (f32.reinterpret_i32
      (local.get $1)
     )
    )
   )
   (call $error
    (i32.const 11)
   )
  )
  (if
   (i32.lt_s
    (i32.load
     (local.get $9)
    )
    (i32.trunc_f32_s
     (f32.reinterpret_i32
      (local.get $4)
     )
    )
   )
   (call $error
    (i32.const 11)
   )
  )
  (local.set $1
   (select
    (local.get $6)
    (local.get $3)
    (i32.gt_s
     (local.get $3)
     (local.get $6)
    )
   )
  )
  (loop $loopAdd
   (if
    (i32.ge_s
     (local.get $1)
     (local.tee $7
      (i32.add
       (local.get $7)
       (i32.const 4)
      )
     )
    )
    (block
     (v128.store
      (local.get $5)
      (f32x4.add
       (v128.load
        (local.get $5)
       )
       (v128.load
        (local.get $2)
       )
      )
     )
     (v128.store
      (local.get $5)
      (v128.and
       (v128.load
        (local.get $5)
       )
       (v128.const i32x4 0xfffffffe 0xfffffffe 0xfffffffe 0xfffffffe)
      )
     )
     (local.set $5
      (i32.add
       (local.get $5)
       (i32.const 16)
      )
     )
     (local.set $2
      (i32.add
       (local.get $2)
       (i32.const 16)
      )
     )
     (br $loopAdd)
    )
   )
  )
  (local.get $0)
 )
 (func $addv (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
  (if
   (i32.le_s
    (call $checkNumberTypeAndGetValue
     (local.get $3)
    )
    (call $checkNumberTypeAndGetValue
     (local.get $4)
    )
   )
   (block
    (drop
     (call $vectorAdd
      (local.get $0)
      (i32.const 1082130432)
      (local.get $1)
      (local.get $2)
      (local.get $3)
     )
    )
    (call $addv
     (local.get $0)
     (local.get $1)
     (local.get $3)
     (i32.and
      (i32.reinterpret_f32
       (f32.add
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (local.get $3)
         )
        )
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (i32.const 1082130432)
         )
        )
       )
      )
      (i32.const -2)
     )
     (local.get $4)
    )
   )
  )
 )
 (func $f (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (call $addv
   (local.get $0)
   (local.get $1)
   (i32.const 0)
   (i32.const 1082130432)
   (call $vector-length
    (local.get $1)
   )
  )
  (call $vector-set!
   (local.get $0)
   (i32.const 0)
   (i32.and
    (i32.reinterpret_f32
     (f32.div
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.and
         (i32.reinterpret_f32
          (f32.add
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (call $vector-ref
              (local.get $0)
              (i32.const 0)
             )
            )
           )
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (call $vector-ref
              (local.get $0)
              (i32.const 1073741824)
             )
            )
           )
          )
         )
         (i32.const -2)
        )
       )
      )
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.and
         (i32.reinterpret_f32
          (f32.div
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (call $vector-length
              (local.get $1)
             )
            )
           )
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (i32.const 1073741824)
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
    (i32.const -2)
   )
  )
  (call $vector-set!
   (local.get $0)
   (i32.const 1065353216)
   (i32.and
    (i32.reinterpret_f32
     (f32.div
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.and
         (i32.reinterpret_f32
          (f32.add
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (call $vector-ref
              (local.get $0)
              (i32.const 1065353216)
             )
            )
           )
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (call $vector-ref
              (local.get $0)
              (i32.const 1077936128)
             )
            )
           )
          )
         )
         (i32.const -2)
        )
       )
      )
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.and
         (i32.reinterpret_f32
          (f32.div
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (call $vector-length
              (local.get $1)
             )
            )
           )
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (i32.const 1073741824)
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
    (i32.const -2)
   )
  )
 )
 (func $add2 (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (call $vectorAdd
   (local.get $0)
   (call $vector-length
    (local.get $0)
   )
   (local.get $1)
   (i32.const 0)
   (call $vector-length
    (local.get $1)
   )
  )
 )
 (func $ff (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (call $f
   (local.get $0)
   (local.get $1)
  )
  (call $add2
   (local.get $1)
   (local.get $2)
  )
 )
 (func $main (; has Stack IR ;)
  (nop)
 )
)
