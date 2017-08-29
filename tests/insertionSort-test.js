import { assert } from 'chai'
import insertionSort from '../scripts/insertionSort.js'


function randomArrayGenerator(count, max) {
  let numbers = [];

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }

  return numbers;
}


describe('TDD with insertionSort', () => {

  it('should be a function', () => {
    assert.equal(typeof insertionSort, 'function')
  });

  it('should sort an array of more than one number', () => {
    let array = randomArrayGenerator(10000, 20000)
    insertionSort(array);
    // console.log(array);
    assert.equal(array[0] <= array[1], true);
    assert.equal(array[Math.floor(array.length / 2)] <= array[Math.floor(array.length / 2) +1], true);
    assert.equal(array[array.length - 1] >= array[array.length - 2], true);
  })
})
