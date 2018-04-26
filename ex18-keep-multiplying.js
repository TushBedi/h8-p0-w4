function keepMultiplyingRecursive(num) {
  let numString = num.toString();
  let result= 1
  if(numString.length === 1 ){
    return num
  }else{
    for(let k = numString.length-1; k >= 0;k--){
      result  *= (Number(numString[k]))
    }return keepMultiplyingRecursive(result)
  }
}

// TEST CASES
console.log(keepMultiplyingRecursive(66)); // 8
console.log(keepMultiplyingRecursive(3)); // 3
console.log(keepMultiplyingRecursive(24)); // 8
console.log(keepMultiplyingRecursive(654)); // 0
console.log(keepMultiplyingRecursive(1231)); // 6
