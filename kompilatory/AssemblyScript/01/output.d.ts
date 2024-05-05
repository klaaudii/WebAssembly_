/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * index/getHelloString
 * @returns `~lib/string/String`
 */
export declare function getHelloString(): string;
/**
 * index/getMap
 * @returns `~lib/map/Map<~lib/string/String,i32>`
 */
export declare function getMap(): __Internref4;
/**
 * index/receiveMap
 * @param map `~lib/map/Map<~lib/string/String,i32>`
 */
export declare function receiveMap(map: __Internref4): void;
/**
 * index/getArray
 * @returns `~lib/array/Array<i32>`
 */
export declare function getArray(): Array<number>;
/**
 * index/processArray
 * @param array `~lib/array/Array<i32>`
 */
export declare function processArray(array: Array<number>): void;
/** ~lib/map/Map<~lib/string/String,i32> */
declare class __Internref4 extends Number {
  private __nominal4: symbol;
  private __nominal0: symbol;
}
