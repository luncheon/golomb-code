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
  assert.deepEqual(encodeGolomb(13, m, zigzag).toArray(), [1, 0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(14, m, zigzag).toArray(), [1, 0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(15, m, zigzag).toArray(), [1, 0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(16, m, zigzag).toArray(), [1, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(17, m, zigzag).toArray(), [1, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(18, m, zigzag).toArray(), [1, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(19, m, zigzag).toArray(), [1, 0, 1, 1, 1, 1]);
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
  assert.deepEqual(encodeGolomb(-7, 10, true).toArray(), [1, 0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(7, 10, true).toArray(), [1, 0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(-8, 10, true).toArray(), [1, 0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(8, 10, true).toArray(), [1, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(-9, 10, true).toArray(), [1, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(9, 10, true).toArray(), [1, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(-10, 10, true).toArray(), [1, 0, 1, 1, 1, 1]);
}

for (let m = 1; m < 1000; m++) {
  for (let n = 0; n < 1000; n++) {
    assert.equal(decodeGolomb(encodeGolomb(n, m), m), n);
    assert.equal(decodeGolomb(encodeGolomb(n, m, true), m, true), n);
    assert.equal(decodeGolomb(encodeGolomb(-n, m, true), m, true), 0 - n);
  }
}
```

## Note

Golomb code `encodeGolomb(n, m)` generates a sequence of length at least `n / m`. For example,

```js
$ node

> const { encodeGolomb } = await import("@luncheon/golomb-code")

> encodeGolomb(100, 3).reduce((s, n) => s + n, "")
'111111111111111111111111111111111010'

> encodeGolomb(1000, 3).reduce((s, n) => s + n, "")
'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111010'
```

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/**exponential-golomb-code**](https://www.npmjs.com/package/@luncheon/exponential-golomb-code): An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.
- [@luncheon/**fibonacci-code**](https://www.npmjs.com/package/@luncheon/fibonacci-code): A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native [varint](https://en.wikipedia.org/wiki/Variable-length_quantity) codec supporting arbitrary chunk sizes and zigzag encoding.
