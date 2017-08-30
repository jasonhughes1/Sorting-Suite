var a = [10, 9, 8, 7, 6, 5, 4, 3, 2];

function mergeSort(array) {
  debugger;
    if (array.length < 2)
        return array;
    var middle = Math.floor(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  debugger;
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
// console.log(mergeSort(a));

export default mergeSort
