function totalDigitRecursive(num) {
  let numString = num.toString()
  let numSlice = numString.slice(-1)
  let numNew = numString.slice(0,numString.length-1);
  if(numString.length === 1){
    return num;
  }else{
    return Number(numSlice) + totalDigitRecursive(Number(numNew))
  }
}

// TEST CASES
console.log(totalDigitRecursive(512)); // 8
console.log(totalDigitRecursive(1542)); // 12
console.log(totalDigitRecursive(5)); // 5
console.log(totalDigitRecursive(21)); // 3
console.log(totalDigitRecursive(11111)); // 5
