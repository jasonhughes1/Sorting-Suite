import { assert } from 'chai'
import mergeSort from '../scripts/mergeSort.js'
import randomArrayGenerator from '../scripts/randomArrayGenerator.js'




describe('TDD with mergeSort', () => {

  it('should be a function', () => {
    assert.equal(typeof mergeSort, 'function')
  })


    it('should sort an array', () => {
      let array = [4, 3, 2, 1];

      assert.deepEqual(array, [4, 3, 2, 1]);
      assert.deepEqual(mergeSort(array), [1, 2, 3, 4])
    })

    it('should sort an array of large numbers', () => {
      let array = randomArrayGenerator(1320, 2000);

      assert.equal(mergeSort(array)[0] <= mergeSort(array)[1], true)
    })

    it('should sort an array of negative numbers', () => {
      let array = [-1, -2, -3, -4];

      assert.deepEqual(array, [-1, -2, -3, -4]);
      assert.deepEqual(mergeSort(array), [-4, -3, -2, -1])
    })


    it('should sort an array of large negative numbers', () => {
      let array = randomArrayGenerator(-1320, -2000);

      assert.equal(mergeSort(array)[0] <= mergeSort(array)[1], false)
      })
})
