(module
 (type $0 (func (param i32 i32)))
 (type $1 (func (param i32)))
 (type $2 (func (param i32 i32) (result i32)))
 (type $3 (func (param i32 i32 i32)))
 (type $4 (func (param i32) (result i32)))
 (type $5 (func))
 (type $6 (func (param i32 i32 i32 i32)))
 (type $7 (func (param i32 i32 i32) (result i32)))
 (type $8 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $9 (func (param i32 i32 i32 i32) (result i32)))
 (import "env" "memory" (memory $mem 0 65536))
 (import "env" "throwError" (func $error (param i32)))
 (import "env" "createCanvasElement" (func $create-canvas-js (param i32 i32 i32)))
 (import "env" "updateCanvasData" (func $update-canvas-data-js (param i32)))
 (import "env" "addCanvasOnClickListener" (func $add-canvas-onclick-listener-js (param i32 i32)))
 (import "env" "canvasFillText" (func $canvas-fill-text-js (param i32 i32 i32 i32)))
 (global $board-state (mut i32) (i32.const 0))
 (global $red (mut i32) (i32.const 0))
 (global $bg (mut i32) (i32.const 0))
 (global $blue (mut i32) (i32.const 0))
 (global $yellow (mut i32) (i32.const 0))
 (global $token-radius (mut i32) (i32.const 0))
 (global $board (mut i32) (i32.const 0))
 (global $player (mut i32) (i32.const 0))
 (global $game-end (mut i32) (i32.const 0))
 (global $n-tokens (mut i32) (i32.const 0))
 (global $freeMemIndex (mut i32) (i32.const 0))
 (global $startStructMemIndex (mut i32) (i32.const 0))
 (export "click" (func $click))
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
 (func $list-ref (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (if
   (i32.eq
    (local.get $0)
    (i32.const -3)
   )
   (call $error
    (i32.const 9)
   )
  )
  (if
   (i32.ne
    (local.tee $2
     (i32.and
      (local.get $0)
      (i32.const 3)
     )
    )
    (i32.const 1)
   )
   (call $error
    (select
     (i32.const 2)
     (i32.const 3)
     (i32.eq
      (local.get $2)
      (i32.const 3)
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
   (i32.const 0)
  )
  (local.set $1
   (i32.trunc_f32_s
    (f32.reinterpret_i32
     (local.get $1)
    )
   )
  )
  (local.set $0
   (i32.shr_u
    (i32.and
     (local.get $0)
     (i32.const -4)
    )
    (i32.const 2)
   )
  )
  (loop $loop (result i32)
   (if (result i32)
    (i32.eq
     (local.get $1)
     (local.get $2)
    )
    (i32.load
     (local.get $0)
    )
    (block
     (local.set $0
      (i32.load offset=4
       (local.get $0)
      )
     )
     (local.set $2
      (i32.add
       (local.get $2)
       (i32.const 1)
      )
     )
     (br $loop)
    )
   )
  )
 )
 (func $process-int-input (; has Stack IR ;) (param $0 i32) (result i32)
  (i32.trunc_f32_s
   (f32.reinterpret_i32
    (call $checkNumberTypeAndGetValue
     (local.get $0)
    )
   )
  )
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
 (func $color (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (i32.or
   (i32.or
    (i32.or
     (i32.shl
      (i32.and
       (call $process-int-input
        (i32.const 1132396544)
       )
       (i32.const 255)
      )
      (i32.const 24)
     )
     (i32.shl
      (i32.and
       (call $process-int-input
        (local.get $2)
       )
       (i32.const 255)
      )
      (i32.const 16)
     )
    )
    (i32.shl
     (i32.and
      (call $process-int-input
       (local.get $1)
      )
      (i32.const 255)
     )
     (i32.const 8)
    )
   )
   (i32.and
    (call $process-int-input
     (local.get $0)
    )
    (i32.const 255)
   )
  )
 )
 (func $fill-text (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (call $canvas-fill-text-js
   (local.get $0)
   (local.get $1)
   (i32.const 1132068864)
   (i32.const 1132068864)
  )
 )
 (func $draw-token (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 f32)
  (local $4 f32)
  (local $5 i32)
  (local $6 f32)
  (local $7 f32)
  (local $8 f32)
  (local $9 f32)
  (local $10 i32)
  (local $11 f32)
  (local.set $5
   (global.get $board)
  )
  (local.set $0
   (i32.and
    (i32.reinterpret_f32
     (f32.add
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.const 1112014848)
       )
      )
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
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
             (i32.const 1120403456)
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
  (local.set $1
   (i32.and
    (i32.reinterpret_f32
     (f32.add
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.const 1112014848)
       )
      )
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (i32.and
         (i32.reinterpret_f32
          (f32.mul
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (local.get $1)
            )
           )
           (f32.reinterpret_i32
            (call $checkNumberTypeAndGetValue
             (i32.const 1120403456)
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
  (local.set $10
   (global.get $token-radius)
  )
  (local.set $3
   (f32.convert_i32_s
    (call $process-int-input
     (local.get $0)
    )
   )
  )
  (local.set $7
   (f32.convert_i32_s
    (call $process-int-input
     (local.get $1)
    )
   )
  )
  (local.set $9
   (f32.add
    (local.tee $4
     (f32.convert_i32_s
      (call $process-int-input
       (local.get $10)
      )
     )
    )
    (local.get $4)
   )
  )
  (local.set $11
   (f32.add
    (f32.add
     (f32.convert_i32_s
      (local.get $5)
     )
     (f32.const 8)
    )
    (f32.mul
     (f32.add
      (f32.sub
       (local.get $3)
       (local.get $4)
      )
      (f32.mul
       (f32.sub
        (local.get $7)
        (local.get $4)
       )
       (local.tee $7
        (f32.convert_i32_s
         (call $process-int-input
          (i32.load
           (local.get $5)
          )
         )
        )
       )
      )
     )
     (f32.const 4)
    )
   )
  )
  (loop $height
   (local.set $3
    (f32.const 0)
   )
   (loop $width
    (if
     (f32.lt
      (f32.sqrt
       (f32.add
        (f32.mul
         (local.tee $8
          (f32.sub
           (local.get $4)
           (local.get $3)
          )
         )
         (local.get $8)
        )
        (f32.mul
         (local.tee $8
          (f32.sub
           (local.get $4)
           (local.get $6)
          )
         )
         (local.get $8)
        )
       )
      )
      (local.get $4)
     )
     (if
      (i32.gt_s
       (local.tee $0
        (i32.trunc_f32_s
         (f32.add
          (local.get $11)
          (f32.add
           (f32.mul
            (local.get $6)
            (f32.const 4)
           )
           (f32.mul
            (local.get $7)
            (f32.mul
             (local.get $3)
             (f32.const 4)
            )
           )
          )
         )
        )
       )
       (i32.add
        (local.get $5)
        (i32.const 4)
       )
      )
      (i32.store
       (local.get $0)
       (local.get $2)
      )
     )
    )
    (br_if $width
     (f32.gt
      (local.get $9)
      (local.tee $3
       (f32.add
        (local.get $3)
        (f32.const 1)
       )
      )
     )
    )
   )
   (br_if $height
    (f32.gt
     (local.get $9)
     (local.tee $6
      (f32.add
       (local.get $6)
       (f32.const 1)
      )
     )
    )
   )
  )
  (call $update-canvas-data-js
   (local.get $5)
  )
 )
 (func $draw-token-row (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (if
   (i32.le_s
    (call $checkNumberTypeAndGetValue
     (local.get $1)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 1088421888)
    )
   )
   (block
    (call $draw-token
     (local.get $1)
     (local.get $0)
     (global.get $bg)
    )
    (call $draw-token-row
     (local.get $0)
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
 (func $draw-token-spaces (; has Stack IR ;) (param $0 i32)
  (if
   (i32.le_s
    (call $checkNumberTypeAndGetValue
     (local.get $0)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 1086324736)
    )
   )
   (block
    (call $draw-token-row
     (local.get $0)
     (i32.const 0)
    )
    (call $draw-token-spaces
     (i32.and
      (i32.reinterpret_f32
       (f32.add
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
 (func $draw-board (; has Stack IR ;)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local.set $1
   (global.get $board)
  )
  (local.set $4
   (global.get $blue)
  )
  (local.set $0
   (call $process-int-input
    (i32.const 0)
   )
  )
  (local.set $3
   (call $process-int-input
    (i32.const 0)
   )
  )
  (local.set $5
   (call $process-int-input
    (i32.const 1143930880)
   )
  )
  (local.set $6
   (call $process-int-input
    (i32.const 1142292480)
   )
  )
  (local.set $3
   (i32.add
    (i32.add
     (local.get $1)
     (i32.const 8)
    )
    (i32.shl
     (i32.add
      (local.get $0)
      (i32.mul
       (local.get $3)
       (local.tee $7
        (call $process-int-input
         (i32.load
          (local.get $1)
         )
        )
       )
      )
     )
     (i32.const 2)
    )
   )
  )
  (loop $height
   (local.set $0
    (i32.const 0)
   )
   (loop $width
    (i32.store
     (i32.add
      (local.get $3)
      (i32.add
       (i32.mul
        (local.get $7)
        (i32.shl
         (local.get $0)
         (i32.const 2)
        )
       )
       (i32.shl
        (local.get $2)
        (i32.const 2)
       )
      )
     )
     (local.get $4)
    )
    (br_if $width
     (i32.gt_s
      (local.get $6)
      (local.tee $0
       (i32.add
        (local.get $0)
        (i32.const 1)
       )
      )
     )
    )
   )
   (br_if $height
    (i32.gt_s
     (local.get $5)
     (local.tee $2
      (i32.add
       (local.get $2)
       (i32.const 1)
      )
     )
    )
   )
  )
  (call $update-canvas-data-js
   (local.get $1)
  )
  (call $draw-token-spaces
   (i32.const 0)
  )
 )
 (func $token-space-is-empty (; has Stack IR ;) (param $0 i32) (param $1 i32) (result i32)
  (if (result i32)
   (i32.gt_s
    (call $checkNumberTypeAndGetValue
     (local.get $0)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 1084227584)
    )
   )
   (i32.const 0)
   (select
    (i32.const 1065353216)
    (i32.const 0)
    (i32.eq
     (call $checkNumberTypeAndGetValue
      (call $vector-ref
       (call $list-ref
        (global.get $board-state)
        (local.get $0)
       )
       (local.get $1)
      )
     )
     (call $checkNumberTypeAndGetValue
      (i32.const 0)
     )
    )
   )
  )
 )
 (func $get-dir-token-count (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local.set $5
   (i32.and
    (i32.reinterpret_f32
     (f32.add
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (local.get $0)
       )
      )
      (f32.reinterpret_i32
       (call $checkNumberTypeAndGetValue
        (local.get $2)
       )
      )
     )
    )
    (i32.const -2)
   )
  )
  (local.set $6
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
        (local.get $3)
       )
      )
     )
    )
    (i32.const -2)
   )
  )
  (if (result i32)
   (i32.and
    (i32.and
     (i32.and
      (i32.le_s
       (call $checkNumberTypeAndGetValue
        (local.get $5)
       )
       (call $checkNumberTypeAndGetValue
        (i32.const 1084227584)
       )
      )
      (i32.ge_s
       (call $checkNumberTypeAndGetValue
        (local.get $5)
       )
       (call $checkNumberTypeAndGetValue
        (i32.const 0)
       )
      )
     )
     (i32.ge_s
      (call $checkNumberTypeAndGetValue
       (local.get $6)
      )
      (call $checkNumberTypeAndGetValue
       (i32.const 0)
      )
     )
    )
    (i32.le_s
     (call $checkNumberTypeAndGetValue
      (local.get $6)
     )
     (call $checkNumberTypeAndGetValue
      (i32.const 1086324736)
     )
    )
   )
   (if (result i32)
    (i32.eq
     (call $checkNumberTypeAndGetValue
      (call $vector-ref
       (call $list-ref
        (global.get $board-state)
        (local.get $0)
       )
       (local.get $1)
      )
     )
     (call $checkNumberTypeAndGetValue
      (call $vector-ref
       (call $list-ref
        (global.get $board-state)
        (local.get $5)
       )
       (local.get $6)
      )
     )
    )
    (call $get-dir-token-count
     (local.get $5)
     (local.get $6)
     (local.get $2)
     (local.get $3)
     (i32.and
      (i32.reinterpret_f32
       (f32.add
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (i32.const 1065353216)
         )
        )
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (local.get $4)
         )
        )
       )
      )
      (i32.const -2)
     )
    )
    (local.get $4)
   )
   (local.get $4)
  )
 )
 (func $check-dir (; has Stack IR ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (select
   (i32.const 1065353216)
   (i32.const 0)
   (i32.gt_s
    (call $checkNumberTypeAndGetValue
     (i32.and
      (i32.reinterpret_f32
       (f32.add
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (call $get-dir-token-count
           (local.get $0)
           (local.get $1)
           (local.get $2)
           (local.get $3)
           (i32.const 0)
          )
         )
        )
        (f32.reinterpret_i32
         (call $checkNumberTypeAndGetValue
          (call $get-dir-token-count
           (local.get $0)
           (local.get $1)
           (i32.and
            (i32.reinterpret_f32
             (f32.mul
              (f32.reinterpret_i32
               (call $checkNumberTypeAndGetValue
                (i32.const -1082130432)
               )
              )
              (f32.reinterpret_i32
               (call $checkNumberTypeAndGetValue
                (local.get $2)
               )
              )
             )
            )
            (i32.const -2)
           )
           (i32.and
            (i32.reinterpret_f32
             (f32.mul
              (f32.reinterpret_i32
               (call $checkNumberTypeAndGetValue
                (i32.const -1082130432)
               )
              )
              (f32.reinterpret_i32
               (call $checkNumberTypeAndGetValue
                (local.get $3)
               )
              )
             )
            )
            (i32.const -2)
           )
           (i32.const 0)
          )
         )
        )
       )
      )
      (i32.const -2)
     )
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 1073741824)
    )
   )
  )
 )
 (func $set-start-board-row (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (if
   (i32.le_s
    (call $checkNumberTypeAndGetValue
     (local.get $1)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 1086324736)
    )
   )
   (block
    (call $vector-set!
     (local.get $0)
     (local.get $1)
     (i32.const 0)
    )
    (call $set-start-board-row
     (local.get $0)
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
 (func $set-start-board (; has Stack IR ;) (param $0 i32)
  (local $1 i32)
  (if
   (i32.ne
    (local.tee $1
     (i32.and
      (local.get $0)
      (i32.const 3)
     )
    )
    (i32.const 1)
   )
   (call $error
    (select
     (i32.const 2)
     (i32.const 3)
     (i32.eq
      (local.get $1)
      (i32.const 3)
     )
    )
   )
  )
  (if
   (i32.ne
    (local.get $0)
    (i32.const -3)
   )
   (block
    (if
     (i32.eq
      (local.get $0)
      (i32.const -3)
     )
     (call $error
      (i32.const 9)
     )
    )
    (if
     (i32.ne
      (local.tee $1
       (i32.and
        (local.get $0)
        (i32.const 3)
       )
      )
      (i32.const 1)
     )
     (call $error
      (select
       (i32.const 2)
       (i32.const 3)
       (i32.eq
        (local.get $1)
        (i32.const 3)
       )
      )
     )
    )
    (call $set-start-board-row
     (i32.load
      (i32.shr_u
       (i32.and
        (local.get $0)
        (i32.const -4)
       )
       (i32.const 2)
      )
     )
     (i32.const 0)
    )
    (if
     (i32.eq
      (local.get $0)
      (i32.const -3)
     )
     (call $error
      (i32.const 9)
     )
    )
    (if
     (i32.ne
      (local.tee $1
       (i32.and
        (local.get $0)
        (i32.const 3)
       )
      )
      (i32.const 1)
     )
     (call $error
      (select
       (i32.const 2)
       (i32.const 3)
       (i32.eq
        (local.get $1)
        (i32.const 3)
       )
      )
     )
    )
    (call $set-start-board
     (i32.or
      (i32.shl
       (i32.load
        (i32.add
         (i32.shr_u
          (i32.and
           (local.get $0)
           (i32.const -4)
          )
          (i32.const 2)
         )
         (i32.const 4)
        )
       )
       (i32.const 2)
      )
      (i32.const 1)
     )
    )
   )
  )
 )
 (func $click (; has Stack IR ;) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (if
   (i32.eq
    (call $checkNumberTypeAndGetValue
     (global.get $game-end)
    )
    (call $checkNumberTypeAndGetValue
     (i32.const 1065353216)
    )
   )
   (block
    (call $set-start-board
     (global.get $board-state)
    )
    (global.set $player
     (i32.const 1065353216)
    )
    (call $draw-board)
    (global.set $game-end
     (i32.const 0)
    )
    (global.set $n-tokens
     (i32.const 0)
    )
   )
   (block
    (local.set $2
     (i32.and
      (i32.reinterpret_f32
       (f32.trunc
        (f32.div
         (f32.reinterpret_i32
          (call $checkNumberTypeAndGetValue
           (i32.and
            (i32.reinterpret_f32
             (f32.ceil
              (f32.reinterpret_i32
               (call $checkNumberTypeAndGetValue
                (local.get $0)
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
           (i32.const 1120403456)
          )
         )
        )
       )
      )
      (i32.const -2)
     )
    )
    (if
     (i32.and
      (i32.eq
       (call $checkNumberTypeAndGetValue
        (call $token-space-is-empty
         (local.tee $0
          (i32.and
           (i32.reinterpret_f32
            (f32.trunc
             (f32.div
              (f32.reinterpret_i32
               (call $checkNumberTypeAndGetValue
                (i32.and
                 (i32.reinterpret_f32
                  (f32.ceil
                   (f32.reinterpret_i32
                    (call $checkNumberTypeAndGetValue
                     (local.get $1)
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
                (i32.const 1120403456)
               )
              )
             )
            )
           )
           (i32.const -2)
          )
         )
         (local.get $2)
        )
       )
       (call $checkNumberTypeAndGetValue
        (i32.const 1065353216)
       )
      )
      (i32.eq
       (call $checkNumberTypeAndGetValue
        (call $token-space-is-empty
         (i32.and
          (i32.reinterpret_f32
           (f32.add
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
         (local.get $2)
        )
       )
       (call $checkNumberTypeAndGetValue
        (i32.const 0)
       )
      )
     )
     (block
      (global.set $n-tokens
       (i32.and
        (i32.reinterpret_f32
         (f32.add
          (f32.reinterpret_i32
           (call $checkNumberTypeAndGetValue
            (i32.const 1065353216)
           )
          )
          (f32.reinterpret_i32
           (call $checkNumberTypeAndGetValue
            (global.get $n-tokens)
           )
          )
         )
        )
        (i32.const -2)
       )
      )
      (if
       (i32.eq
        (call $checkNumberTypeAndGetValue
         (global.get $player)
        )
        (call $checkNumberTypeAndGetValue
         (i32.const 1065353216)
        )
       )
       (block
        (call $draw-token
         (local.get $2)
         (local.get $0)
         (global.get $red)
        )
        (global.set $player
         (i32.const 1073741824)
        )
        (call $vector-set!
         (call $list-ref
          (global.get $board-state)
          (local.get $0)
         )
         (local.get $2)
         (i32.const 1073741824)
        )
       )
       (block
        (call $draw-token
         (local.get $2)
         (local.get $0)
         (global.get $yellow)
        )
        (call $vector-set!
         (call $list-ref
          (global.get $board-state)
          (local.get $0)
         )
         (local.get $2)
         (i32.const 1065353216)
        )
        (global.set $player
         (i32.const 1065353216)
        )
       )
      )
      (if
       (i32.eq
        (call $checkNumberTypeAndGetValue
         (if (result i32)
          (i32.eq
           (call $checkNumberTypeAndGetValue
            (call $check-dir
             (local.get $0)
             (local.get $2)
             (i32.const 0)
             (i32.const 1065353216)
            )
           )
           (call $checkNumberTypeAndGetValue
            (i32.const 1065353216)
           )
          )
          (i32.const 1065353216)
          (if (result i32)
           (i32.eq
            (call $checkNumberTypeAndGetValue
             (call $check-dir
              (local.get $0)
              (local.get $2)
              (i32.const 1065353216)
              (i32.const 0)
             )
            )
            (call $checkNumberTypeAndGetValue
             (i32.const 1065353216)
            )
           )
           (i32.const 1065353216)
           (if (result i32)
            (i32.eq
             (call $checkNumberTypeAndGetValue
              (call $check-dir
               (local.get $0)
               (local.get $2)
               (i32.const 1065353216)
               (i32.const -1082130432)
              )
             )
             (call $checkNumberTypeAndGetValue
              (i32.const 1065353216)
             )
            )
            (i32.const 1065353216)
            (select
             (i32.const 1065353216)
             (i32.const 0)
             (i32.eq
              (call $checkNumberTypeAndGetValue
               (call $check-dir
                (local.get $0)
                (local.get $2)
                (i32.const 1065353216)
                (i32.const 1065353216)
               )
              )
              (call $checkNumberTypeAndGetValue
               (i32.const 1065353216)
              )
             )
            )
           )
          )
         )
        )
        (call $checkNumberTypeAndGetValue
         (i32.const 1065353216)
        )
       )
       (block
        (global.set $game-end
         (i32.const 1065353216)
        )
        (if
         (i32.eq
          (call $checkNumberTypeAndGetValue
           (global.get $player)
          )
          (call $checkNumberTypeAndGetValue
           (i32.const 1073741824)
          )
         )
         (call $fill-text
          (global.get $board)
          (block (result i32)
           (i32.store
            (global.get $freeMemIndex)
            (i32.const 8)
           )
           (global.set $freeMemIndex
            (i32.add
             (global.get $freeMemIndex)
             (i32.const 4)
            )
           )
           (i32.store
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118044160)
            )
           )
           (i32.store offset=4
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1116340224)
            )
           )
           (i32.store offset=8
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1116209152)
            )
           )
           (i32.store offset=12
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1107296256)
            )
           )
           (i32.store offset=16
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118699520)
            )
           )
           (i32.store offset=20
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117650944)
            )
           )
           (i32.store offset=24
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117519872)
            )
           )
           (i32.store offset=28
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1107558400)
            )
           )
           (global.set $freeMemIndex
            (i32.add
             (global.get $freeMemIndex)
             (i32.const 32)
            )
           )
           (i32.or
            (i32.shl
             (i32.sub
              (global.get $freeMemIndex)
              (i32.const 36)
             )
             (i32.const 2)
            )
            (i32.const 3)
           )
          )
         )
         (call $fill-text
          (global.get $board)
          (block (result i32)
           (i32.store
            (global.get $freeMemIndex)
            (i32.const 11)
           )
           (global.set $freeMemIndex
            (i32.add
             (global.get $freeMemIndex)
             (i32.const 4)
            )
           )
           (i32.store
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118961664)
            )
           )
           (i32.store offset=4
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1116340224)
            )
           )
           (i32.store offset=8
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117257728)
            )
           )
           (i32.store offset=12
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117257728)
            )
           )
           (i32.store offset=16
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117650944)
            )
           )
           (i32.store offset=20
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118699520)
            )
           )
           (i32.store offset=24
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1107296256)
            )
           )
           (i32.store offset=28
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118699520)
            )
           )
           (i32.store offset=32
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117650944)
            )
           )
           (i32.store offset=36
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1117519872)
            )
           )
           (i32.store offset=40
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1107558400)
            )
           )
           (global.set $freeMemIndex
            (i32.add
             (global.get $freeMemIndex)
             (i32.const 44)
            )
           )
           (i32.or
            (i32.shl
             (i32.sub
              (global.get $freeMemIndex)
              (i32.const 48)
             )
             (i32.const 2)
            )
            (i32.const 3)
           )
          )
         )
        )
       )
       (if
        (i32.eq
         (call $checkNumberTypeAndGetValue
          (global.get $n-tokens)
         )
         (call $checkNumberTypeAndGetValue
          (i32.const 1109917696)
         )
        )
        (block
         (global.set $game-end
          (i32.const 1065353216)
         )
         (call $fill-text
          (global.get $board)
          (block (result i32)
           (i32.store
            (global.get $freeMemIndex)
            (i32.const 5)
           )
           (global.set $freeMemIndex
            (i32.add
             (global.get $freeMemIndex)
             (i32.const 4)
            )
           )
           (i32.store
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1116209152)
            )
           )
           (i32.store offset=4
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118044160)
            )
           )
           (i32.store offset=8
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1115815936)
            )
           )
           (i32.store offset=12
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1118699520)
            )
           )
           (i32.store offset=16
            (global.get $freeMemIndex)
            (call $checkNumberTypeAndGetValue
             (i32.const 1107558400)
            )
           )
           (global.set $freeMemIndex
            (i32.add
             (global.get $freeMemIndex)
             (i32.const 20)
            )
           )
           (i32.or
            (i32.shl
             (i32.sub
              (global.get $freeMemIndex)
              (i32.const 24)
             )
             (i32.const 2)
            )
            (i32.const 3)
           )
          )
         )
        )
       )
      )
     )
    )
   )
  )
 )
 (func $main (; has Stack IR ;)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (global.set $startStructMemIndex
   (i32.or
    (i32.shl
     (global.get $freeMemIndex)
     (i32.const 2)
    )
    (i32.const 1)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.or
    (i32.shl
     (local.tee $0
      (i32.add
       (global.get $freeMemIndex)
       (i32.const 8)
      )
     )
     (i32.const 2)
    )
    (i32.const 3)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 40)
   )
  )
  (global.set $freeMemIndex
   (local.get $0)
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.const 7)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 4)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=8
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=12
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=16
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=20
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=24
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 28)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.or
    (i32.shl
     (i32.add
      (global.get $freeMemIndex)
      (i32.const 8)
     )
     (i32.const 2)
    )
    (i32.const 3)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 40)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 8)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.const 7)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 4)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=8
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=12
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=16
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=20
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=24
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 28)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.or
    (i32.shl
     (i32.add
      (global.get $freeMemIndex)
      (i32.const 8)
     )
     (i32.const 2)
    )
    (i32.const 3)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 40)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 8)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.const 7)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 4)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=8
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=12
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=16
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=20
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=24
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 28)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.or
    (i32.shl
     (i32.add
      (global.get $freeMemIndex)
      (i32.const 8)
     )
     (i32.const 2)
    )
    (i32.const 3)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 40)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 8)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.const 7)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 4)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=8
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=12
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=16
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=20
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=24
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 28)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.or
    (i32.shl
     (i32.add
      (global.get $freeMemIndex)
      (i32.const 8)
     )
     (i32.const 2)
    )
    (i32.const 3)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 40)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 8)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.const 7)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 4)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=8
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=12
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=16
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=20
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=24
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 28)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.or
    (i32.shl
     (i32.add
      (global.get $freeMemIndex)
      (i32.const 8)
     )
     (i32.const 2)
    )
    (i32.const 3)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (i32.const -1)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 8)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (i32.const 7)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 4)
   )
  )
  (i32.store
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=4
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=8
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=12
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=16
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=20
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (i32.store offset=24
   (global.get $freeMemIndex)
   (call $checkNumberTypeAndGetValue
    (i32.const 0)
   )
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 28)
   )
  )
  (global.set $board-state
   (global.get $startStructMemIndex)
  )
  (global.set $red
   (call $color
    (i32.const 1130102784)
    (i32.const 0)
    (i32.const 0)
   )
  )
  (global.set $bg
   (call $color
    (i32.const 0)
    (i32.const 0)
    (i32.const 1126825984)
   )
  )
  (global.set $blue
   (call $color
    (i32.const 0)
    (i32.const 0)
    (i32.const 1128792064)
   )
  )
  (global.set $yellow
   (call $color
    (i32.const 1132396544)
    (i32.const 1130102784)
    (i32.const 0)
   )
  )
  (global.set $token-radius
   (i32.const 1110704128)
  )
  (call $create-canvas-js
   (local.tee $0
    (global.get $freeMemIndex)
   )
   (local.tee $1
    (call $process-int-input
     (i32.const 1143930880)
    )
   )
   (local.tee $2
    (call $process-int-input
     (i32.const 1142292480)
    )
   )
  )
  (i32.store
   (local.get $0)
   (i32.const 1143930880)
  )
  (i32.store offset=4
   (local.get $0)
   (i32.const 1142292480)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (i32.const 8)
   )
  )
  (memory.fill
   (global.get $freeMemIndex)
   (i32.const -1)
   (local.tee $1
    (i32.shl
     (i32.mul
      (local.get $1)
      (local.get $2)
     )
     (i32.const 2)
    )
   )
  )
  (call $update-canvas-data-js
   (local.get $0)
  )
  (global.set $freeMemIndex
   (i32.add
    (global.get $freeMemIndex)
    (local.get $1)
   )
  )
  (global.set $board
   (local.get $0)
  )
  (global.set $player
   (i32.const 1065353216)
  )
  (global.set $game-end
   (i32.const 0)
  )
  (global.set $n-tokens
   (i32.const 0)
  )
  (call $add-canvas-onclick-listener-js
   (global.get $board)
   (i32.const 0)
  )
  (call $draw-board)
 )
)
