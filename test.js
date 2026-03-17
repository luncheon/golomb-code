import assert from "node:assert/strict";
import { it } from "node:test";
import { decodeGolomb, encodeGolomb } from "./index.js";

// https://urchin.earth.li/~twic/Golombs_Original_Paper/
it("encode(m=1)", () => {
  assert.deepEqual(encodeGolomb(0, 1).toArray(), [0]);
  assert.deepEqual(encodeGolomb(1, 1).toArray(), [1, 0]);
  assert.deepEqual(encodeGolomb(2, 1).toArray(), [1, 1, 0]);
  assert.deepEqual(encodeGolomb(3, 1).toArray(), [1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(4, 1).toArray(), [1, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(5, 1).toArray(), [1, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(6, 1).toArray(), [1, 1, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(7, 1).toArray(), [1, 1, 1, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(8, 1).toArray(), [1, 1, 1, 1, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(9, 1).toArray(), [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(10, 1).toArray(), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]);
});

it("encode(m=2)", () => {
  assert.deepEqual(encodeGolomb(0, 2).toArray(), [0, 0]);
  assert.deepEqual(encodeGolomb(1, 2).toArray(), [0, 1]);
  assert.deepEqual(encodeGolomb(2, 2).toArray(), [1, 0, 0]);
  assert.deepEqual(encodeGolomb(3, 2).toArray(), [1, 0, 1]);
  assert.deepEqual(encodeGolomb(4, 2).toArray(), [1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(5, 2).toArray(), [1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(6, 2).toArray(), [1, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(7, 2).toArray(), [1, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(8, 2).toArray(), [1, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(9, 2).toArray(), [1, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(10, 2).toArray(), [1, 1, 1, 1, 1, 0, 0]);
});

it("encode(m=3)", () => {
  assert.deepEqual(encodeGolomb(0, 3).toArray(), [0, 0]);
  assert.deepEqual(encodeGolomb(1, 3).toArray(), [0, 1, 0]);
  assert.deepEqual(encodeGolomb(2, 3).toArray(), [0, 1, 1]);
  assert.deepEqual(encodeGolomb(3, 3).toArray(), [1, 0, 0]);
  assert.deepEqual(encodeGolomb(4, 3).toArray(), [1, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(5, 3).toArray(), [1, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(6, 3).toArray(), [1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(7, 3).toArray(), [1, 1, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(8, 3).toArray(), [1, 1, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(9, 3).toArray(), [1, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(10, 3).toArray(), [1, 1, 1, 0, 1, 0]);
});

it("encode(m=4)", () => {
  assert.deepEqual(encodeGolomb(0, 4).toArray(), [0, 0, 0]);
  assert.deepEqual(encodeGolomb(1, 4).toArray(), [0, 0, 1]);
  assert.deepEqual(encodeGolomb(2, 4).toArray(), [0, 1, 0]);
  assert.deepEqual(encodeGolomb(3, 4).toArray(), [0, 1, 1]);
  assert.deepEqual(encodeGolomb(4, 4).toArray(), [1, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(5, 4).toArray(), [1, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(6, 4).toArray(), [1, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(7, 4).toArray(), [1, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(8, 4).toArray(), [1, 1, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(9, 4).toArray(), [1, 1, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(10, 4).toArray(), [1, 1, 0, 1, 0]);
});

// https://en.wikipedia.org/wiki/Golomb_coding
it("encode(m=10)", () => {
  assert.deepEqual(encodeGolomb(0, 10).toArray(), [0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(1, 10).toArray(), [0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(2, 10).toArray(), [0, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(3, 10).toArray(), [0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(4, 10).toArray(), [0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(5, 10).toArray(), [0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(6, 10).toArray(), [0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(7, 10).toArray(), [0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(8, 10).toArray(), [0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(9, 10).toArray(), [0, 1, 1, 1, 1]);
  assert.deepEqual(encodeGolomb(10, 10).toArray(), [1, 0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(11, 10).toArray(), [1, 0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(12, 10).toArray(), [1, 0, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(13, 10).toArray(), [1, 0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(14, 10).toArray(), [1, 0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(15, 10).toArray(), [1, 0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(16, 10).toArray(), [1, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(17, 10).toArray(), [1, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(18, 10).toArray(), [1, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(19, 10).toArray(), [1, 0, 1, 1, 1, 1]);
  assert.deepEqual(encodeGolomb(20, 10).toArray(), [1, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeGolomb(21, 10).toArray(), [1, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeGolomb(22, 10).toArray(), [1, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeGolomb(23, 10).toArray(), [1, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeGolomb(24, 10).toArray(), [1, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(25, 10).toArray(), [1, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(26, 10).toArray(), [1, 1, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeGolomb(27, 10).toArray(), [1, 1, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeGolomb(28, 10).toArray(), [1, 1, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeGolomb(29, 10).toArray(), [1, 1, 0, 1, 1, 1, 1]);
});

it("encode(m=10, zigzag=true)", () => {
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
});

it("decode", () => {
  for (let m = 1; m < 1000; m++) {
    for (let n = 0; n < 1000; n++) {
      assert.equal(decodeGolomb(encodeGolomb(n, m), m), n);
      assert.equal(decodeGolomb(encodeGolomb(n, m, true), m, true), n);
      assert.equal(decodeGolomb(encodeGolomb(-n, m, true), m, true), 0 - n);
    }
  }
});

it("32bit boundary", () => {
  const m = 0x100000;
  for (const n of [0x3fffffff, 0x40000000, 0x40000001, 0x7fffffff, 0x80000000, 0xffffffff]) {
    assert.equal(decodeGolomb(encodeGolomb(n, m), m), n);
    assert.equal(decodeGolomb(encodeGolomb(n, m, true), m, true), n);
    assert.equal(decodeGolomb(encodeGolomb(-n, m, true), m, true), 0 - n);
  }
})

it("random", () => {
  for (let i = 0; i < 1000; i++) {
    const m = Math.round(Math.random() * (Number.MAX_SAFE_INTEGER - 2)) + 2;
    const n = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
    assert.equal(decodeGolomb(encodeGolomb(n, m), m), n);
    assert.equal(decodeGolomb(encodeGolomb(n, m, true), m, true), n);
    assert.equal(decodeGolomb(encodeGolomb(-n, m, true), m, true), 0 - n);
  }
});
