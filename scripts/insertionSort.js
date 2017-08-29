const insertionSort = (numberArray) => {
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if(numberArray[j + 1] < numberArray[j]) {
        [numberArray[j + 1], numberArray[j] ] =  [numberArray[j], numberArray[j + 1] ]
      }
    }
  }
  return numberArray;
}

insertionSort([ 4, 3, 2, 1]);


export default insertionSort
