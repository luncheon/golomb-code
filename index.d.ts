export function encodeGolomb(n: number, m: number, zigzag?: boolean): Generator<0 | 1>
export function decodeGolomb(bitSequence: Iterable<unknown> | Iterator<unknown>, m: number, zigzag?: boolean): number;
