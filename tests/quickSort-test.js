import { assert } from 'chai'
import quickSort from '../scripts/quickSort.js'
import randomArrayGenerator from '../scripts/randomArrayGenerator.js'



describe('TDD with quickSort', () => {

  it('should be a function', () => {
    assert.equal(typeof quickSort, 'function')
  })

  it('should sort an array', () => {
    let array = [4, 3, 2, 1];

    assert.deepEqual(array, [4, 3, 2, 1]);
    assert.deepEqual(quickSort(array), [1, 2, 3, 4])
  })

  it('should sort an array of large numbers', () => {
    let array = randomArrayGenerator(1320, 2000);

    assert.equal(quickSort(array)[0] <= quickSort(array)[1], true)
  })

  it('should sort an array of negative numbers', () => {
    let array = [-1, -2, -3, -4];

    assert.deepEqual(array, [-1, -2, -3, -4]);
    assert.deepEqual(quickSort(array), [-4, -3, -2, -1])
  })


  it('should sort an array of large negative numbers', () => {
    let array = randomArrayGenerator(-1320, -2000);

    assert.equal(quickSort(array)[0] <= quickSort(array)[1], false)
    })


})
