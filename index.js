function mergeSort(array) {
  // Base case: if the array has one or zero elements, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  let mergedArray = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
      mergedArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from both halves
  while (leftIndex < sortedLeft.length) {
    mergedArray.push(sortedLeft[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < sortedRight.length) {
    mergedArray.push(sortedRight[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

//

const array = [38, 27, 43, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);
