inštalácia AssemblyScript kompilátora 
- npm install assemblyScript

príkazy kompilácie: 

- 00: npx asc index.ts -o output.wasm -t output.wat
- 01: npx asc index.ts -o output.wasm -t output.wat -b esm
- 02: npx asc index.ts -o output.wasm --importMemory
- 03: npx asc index.ts -o output.wasm  --exportRuntime --exportTable

inštalácia knižnice asdom
- npm install asdom

