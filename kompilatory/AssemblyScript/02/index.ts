export function gray(length: i32): void {

    for (let i = 0; i < length; i += 4) {
        const r = load<u8>(i);
        const g = load<u8>(i + 1);
        const b = load<u8>(i + 2);
        const gray = u8(r * 0.299 + g * 0.587 + b * 0.114);

        store<u8>(i, gray);
        store<u8>(i+1, gray);
        store<u8>(i+2, gray);
    }
}

export function invert(length: i32): void {
    for (let i = 0; i < length; i += 4) {
        const r = load<u8>(i);
        const g = load<u8>(i + 1);
        const b = load<u8>(i + 2);

        store<u8>(i,255 - r);
        store<u8>(i+1, 255 - g);
        store<u8>(i+2, 255 - b);
    }
}
