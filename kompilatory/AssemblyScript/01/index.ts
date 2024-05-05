declare function log(n: i32): void

export function add(a: i32, b: i32): i32 {
    log(a+b);
    return a + b;
}

export function getHelloString(): string {
    return "Hello World"
}

export function getMap(): Map<string, i32> {
    let map = new Map<string, i32>()
    map.set("age",40)
    map.set("height", 185)
    return map;
}

export function receiveMap(map: Map<string, i32>): void {
    log(map.size)
    log(map.get("age"))
}

export function getArray(): Array<i32> {
    return [10,20,30];
}

export function processArray(array: Array<i32>): void {
    log(array[0])
}