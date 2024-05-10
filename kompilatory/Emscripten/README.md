príkazy kompilácie:

- 00: emcc main.cpp -s WASM=1 -o out.html
- 01: emcc snake.cpp -s WASM=1 -s USE_SDL=2 -o out.html
- 02: emcc main.cpp -o out.html -sEXPORTED_FUNCTIONS=[_main,_add_cpp] -sEXPORTED_RUNTIME_METHODS='ccall,cwrap'




