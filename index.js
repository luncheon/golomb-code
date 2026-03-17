import { decodeTruncatedBinary, encodeTruncatedBinary } from "@luncheon/truncated-binary-code";

export function* encodeGolomb(n, m, zigzag) {
  if (n < 0 && !zigzag) throw RangeError("encodeGolomb: supports only non-negative integers.");
  if (zigzag && (n > 0x3fffffff || n < -0x40000000)) {
    n = BigInt(n);
    n = (n < 0n ? -1n : 0n) ^ (n << 1n);
    const mn = BigInt(m);
    for (let q = n / mn; q--; ) yield 1;
    yield 0;
    yield* encodeTruncatedBinary(Number(n % mn), m);
  } else {
    if (zigzag) n = (n << 1) ^ (n >> 31);
    for (let q = Math.floor(n / m); q--; ) yield 1;
    yield 0;
    yield* encodeTruncatedBinary(n % m, m);
  }
}

const decodeBigZigzag = (n) => (n >> 1n) ^ -(n & 1n);

export const decodeGolomb = (bitSequence, m, zigzag) => {
  const bitIterator = Iterator.from(bitSequence);
  let q = 0;
  while (1) {
    const it = bitIterator.next();
    if (it.done) throw RangeError("decodeGolomb: invalid code.");
    if (!it.value) break;
    q++;
  }
  const r = decodeTruncatedBinary(bitIterator, m);
  const n = q * m + r;
  return zigzag ? ((n | 0) === n ? (n >> 1) ^ -(n & 1) : Number(decodeBigZigzag(BigInt(q) * BigInt(m) + BigInt(r)))) : n;
};
