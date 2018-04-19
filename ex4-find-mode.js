
/*
  Function: Finding Mode

ALGORIGTHM
  Create var num as an array
  Create var count as an array
  Sort arr in an ascending order
  FOR i from 0 until arr.length
    IF arr[i] is not the same as arr[i+1] THEN
      push arr[i] to num
      push count[0] = 1
    ELSEIF arr[i] is the same as arr[i+1] THEN
      count[i] += 1
    ENDIF
  (Check code so far)
  ENDFOR
  return num[i]




*/

//[ 2, 4, 5, 10 ]
//[ 1, 2, 1, 1 ]
function mode(arr) {
  let num = [];
  let count = [];
  for (var i = 0; i < arr.length; i++) {
    let indexi = num.indexOf(arr[i]);
    if (indexi === -1) {
      num.push(arr[i]);
      count.push(1);
    } else {
      count[indexi] += 1
    }
  }
  for (let i = 0; i < count.length; i++) {
    for (let j = i+1; j < count.length; j++) {
      if (count[i] < count[j]) {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp

        let temp2 = count[i]
        count[i] = count[j]
        count[j] = temp2
      }
    }
  }
   if (count.length === 1 || count.length === arr.length) {
     return -1;
   } else {
     return num[0]
   }
}

// TEST CASES
console.log(mode([10, 4, 5, 2, 4])); // 4
console.log(mode([5, 10, 10, 6, 5])); // 5
console.log(mode([10, 3, 1, 2, 5])); // -1
console.log(mode([1, 2, 3, 3, 4, 5])); // 3
console.log(mode([7, 7, 7, 7, 7])); // -1
