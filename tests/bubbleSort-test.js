import { assert } from 'chai'
import bubbleSort from '../scripts/bubbleSort.js'
import randomArrayGenerator from '../scripts/randomArrayGenerator.js'



describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.equal(typeof bubbleSort, 'function')
  })

  it('should sort an array of more than one number', () => {
    let array = randomArrayGenerator(1000, 2000);
    bubbleSort(array);
    // console.log(array);
    assert.equal(array[0] <= array[1], true);
    assert.equal(array[Math.floor(array.length / 2)] <= array[Math.floor(array.length / 2) +1], true);
    assert.equal(array[array.length - 1] >= array[array.length - 2], true);
  })

})
