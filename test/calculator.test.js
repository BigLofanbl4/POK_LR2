const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('../dist/calculator.js');

test('adds positive integers', () => {
  assert.equal(add(2, 3), 5);
});

test('adds a negative integer', () => {
  assert.equal(add(7, -4), 3);
});

test('adds zero', () => {
  assert.equal(add(0, 9), 9);
});
