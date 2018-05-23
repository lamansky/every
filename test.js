'use strict'

const assert = require('assert')
const every = require('.')

describe('every()', function () {
  it('should return true for an empty array', function () {
    assert.strictEqual(every([], x => true), true)
    assert.strictEqual(every([], x => true, {vacuously: true}), true)
    assert.strictEqual(every([], x => true, true), true)
  })

  it('should return false for an empty array if `vacuously` is false', function () {
    assert.strictEqual(every([], x => true, {vacuously: false}), false)
    assert.strictEqual(every([], x => true, false), false)
  })

  it('should return true if test function returns true for every iterated value', function () {
    assert.strictEqual(every([1, 2, 3], x => typeof x === 'number'), true)
  })

  it('should return false if test function returns false for any iterated value', function () {
    assert.strictEqual(every([1, 2, 3], x => x > 1), false)
  })

  it('should return true if every iterated value is contained in test array', function () {
    assert.strictEqual(every([1, 2, 3], [1, 2, 3, 4]), true)
  })

  it('should return false if any iterated value is not contained in test array', function () {
    assert.strictEqual(every([1, 2, 3], [1, 2]), false)
  })

  it('should return true if every iterated value equals test', function () {
    assert.strictEqual(every([1, 1], 1), true)
  })

  it('should return false if any iterated value does not equal test', function () {
    assert.strictEqual(every([1, 2, 3], 1), false)
  })

  it('should return true if every iterated value is truthy when test is omitted', function () {
    assert.strictEqual(every([1, 2, 3]), true)
  })

  it('should return false if any iterated value is falsey when test is omitted', function () {
    assert.strictEqual(every([0, 1, 2]), false)
  })

  it('should work on non-array iterables', function () {
    assert.strictEqual(every([1, 2, 3][Symbol.iterator](), x => typeof x === 'number'), true)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(every.call([1, 2, 3], x => typeof x === 'number'), true)
  })
})
