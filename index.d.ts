export function encodeGolomb(n: number, m: number, zigzag?: boolean): Generator<0 | 1>
export function decodeGolomb(bitSequence: Iterable<number> | Iterator<number>, m: number, zigzag?: boolean): number;
