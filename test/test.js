const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');
const recursion = require('../src/recursion');

const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

describe('sumOfOther', () => {
  it('should return sum of other elements', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), ([8, 7, 6, 9]));
  });
});

describe('recursion', () => {
  it('should return array of arrays from tree object', () => {
    assert.deepEqual(recursion(tree), ([[100], [90, 120], [70, 99, 110, 130]]));
  });
});