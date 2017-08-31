var a = [10, 9, 2, 7, 8, 6, 4, 3, 5];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
	debugger;

  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];
  for ( var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }

    var result = [...quickSort(left), pivot, ...quickSort(right)];
    return result;
}

console.log(quickSort(a));


export default quickSort
