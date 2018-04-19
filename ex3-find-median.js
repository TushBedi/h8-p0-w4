/*
  Function: Finding Median

ALGORITHM
  VAR lower = lower mid value in even length array
  VAR higher = higher mid value in even length array
    IF total inputs are even THEN
      VAR output = (lower + higher) / 2
    ELSE
      VAR output = higher
    ENDIF
  Return output

*/

function median(arr) {
  const lower = arr[Math.floor((arr.length-1)/2)]; //can improve code by making just one
  const higher = arr[Math.floor((arr.length)/2)]; //const midIndex = Math.floor((arr.length)/2)
  if(arr.length % 2 === 0) {
    return (lower + higher) / 2
  } else {
    return higher
  }
}

// TEST CASES
console.log(median([1, 2, 3, 4, 5])); // 3
console.log(median([1, 3, 4, 10, 12, 13])); // 7
console.log(median([3, 4, 7, 6, 10])); // 7
console.log(median([1, 3, 3])); // 3
console.log(median([7, 7, 8, 8])); // 7.5
