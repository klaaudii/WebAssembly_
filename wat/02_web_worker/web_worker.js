let moduleExports
function loadWasmModule() {
    fetch('./web_worker.wasm')
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes))
        .then(module => {
            moduleExports = module.instance.exports;
            self.postMessage({type: "wasmLoaded"})
            console.log("Wasm module instantiated")
        });
}

function fib(a){
    self.postMessage({type: "fibResult", result: moduleExports.fib(a)})
}

self.onmessage = function(message){
    if (message.data.type === 'loadWasm'){
        loadWasmModule();
    } else if (message.data.type === 'fib'){
        fib(message.data.a)
    }
}