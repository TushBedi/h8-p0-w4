/*
  Function: Check if String Contains Both A & B Special*

  ALGORIGTHM:
  IF words doesn't include 'a' & 'b' THEN
    return false
  ENDIF
  Create variable indexA = []
  Create variable indexB = []
  FOR i from 0 to words.length - 1
    IF word[i] === 'a' THEN
      push i to indexA
    ELSEIF word[i] === 'b' THEN
      push i to indexB
    ENDIF
  ENDFOR
  FOR i from 0 to indexB.length - 1
    FOR j from 0 to indexA.length - 1
      IF indexA[i] - indexB[j] === 4 or vice versa
        Return true
      ENDIF
    ENDFOR
  ENDFOR
  Return false
*/

function checkAB(word) {
  if (!word.includes('a' && 'b')) {
    return false;
  }
  let indexA = [];
  let indexB = [];
  for (let i =0; i < word.length; i++) {
    if (word[i] === 'a') {
      indexA.push(i);
    } else if (word[i] === 'b') {
      indexB.push(i);
    }
  }
  for (let i = 0; i < indexA.length; i++) {
    for (let j = 0; j < indexB.length; j++) {
      if (Math.abs(indexA[i] - indexB[j]) === 4)
        return true
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
