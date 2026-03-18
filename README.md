# @luncheon/golomb-code

A [Golomb coding](https://en.wikipedia.org/wiki/Golomb_coding) implementation.

```ts
import assert from "node:assert/strict";
import { decodeGolomb, encodeGolomb } from "@luncheon/golomb-code";

encodeGolomb(0, 10); // => Generator<0 | 1>

{
  const m = 10;
  const zigzag = false;

  assert.deepEqual(encodeGolomb(0, m, zigzag).toArray(), [0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(1, m, zigzag).toArray(), [0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(2, m, zigzag).toArray(), [0, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(3, m, zigzag).toArray(), [0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(4, m, zigzag).toArray(), [0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(5, m, zigzag).toArray(), [0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(6, m, zigzag).toArray(), [0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(7, m, zigzag).toArray(), [0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(8, m, zigzag).toArray(), [0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(9, m, zigzag).toArray(), [0, 1, 1, 1, 1]);
  assert.deepEqual(encodeGolomb(10, m, zigzag).toArray(), [1, 0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(11, m, zigzag).toArray(), [1, 0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(12, m, zigzag).toArray(), [1, 0, 0, 1, 0]);
}

{
  const m = 10;
  const zigzag = true;

  assert.deepEqual(encodeGolomb(0, 10, true).toArray(), [0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(-1, 10, true).toArray(), [0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(1, 10, true).toArray(), [0, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(-2, 10, true).toArray(), [0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(2, 10, true).toArray(), [0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(-3, 10, true).toArray(), [0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(3, 10, true).toArray(), [0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(-4, 10, true).toArray(), [0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(4, 10, true).toArray(), [0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(-5, 10, true).toArray(), [0, 1, 1, 1, 1]);
  assert.deepEqual(encodeGolomb(5, 10, true).toArray(), [1, 0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(-6, 10, true).toArray(), [1, 0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(6, 10, true).toArray(), [1, 0, 0, 1, 0]);
}

for (let m = 1; m < 1000; m++) {
  for (let n = 0; n < 1000; n++) {
    assert.equal(decodeGolomb(encodeGolomb(n, m), m), n);
    assert.equal(decodeGolomb(encodeGolomb(n, m, true), m, true), n);
    assert.equal(decodeGolomb(encodeGolomb(-n, m, true), m, true), 0 - n);
  }
}
```

## CLI

```bash
$ npx @luncheon/golomb-code --m=10 --zigzag -- 3 -10-10 0x80
   3 01100
 -10 101111
  -9 101101
  -8 10101
  -7 10011
  -6 10001
  -5 01111
  -4 01101
  -3 0101
  -2 0011
  -1 0001
   0 0000
   1 0010
   2 0100
   3 01100
   4 01110
   5 10000
   6 10010
   7 10100
   8 101100
   9 101110
  10 110000
 128 111111111111111111111111101100
```

## Note

Golomb code length is at least `n / m`. For example,

```bash
$ npx @luncheon/golomb-code --m=3 100 1000
  100 111111111111111111111111111111111010
 1000 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111010
```

## Reference

- [Solomon. W. Golomb. (1966). Run-length encodings](https://urchin.earth.li/~twic/Golombs_Original_Paper/)

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/**exponential-golomb-code**](https://www.npmjs.com/package/@luncheon/exponential-golomb-code): An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.
- [@luncheon/**fibonacci-code**](https://www.npmjs.com/package/@luncheon/fibonacci-code): A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native [varint](https://en.wikipedia.org/wiki/Variable-length_quantity) codec supporting arbitrary chunk sizes and zigzag encoding.
