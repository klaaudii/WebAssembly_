declare function log(n: i32): void
export function add(a: i32, b: i32): i32 {
    log(a+b);
    return a + b;
}

export function getHelloString(): string {
    return "Hello World"
}