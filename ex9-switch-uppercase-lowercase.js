/*
  Function: Switch Uppercase & Lowercase Characters

  ALGORITHM:
  Create variable lower = sentence.toLowerCase
  Create variable upper = sentence.toUpperCase
  Create variable output as a string
  FOR i from 0 to sentence.length
    IF sentence[i] !== lower[i] THEN
      output += lower[i]
    ELSE
      output += upper[i]
    ENDIF
  ENDFOR
  Return output
*/

function switchUpperLower(sentence) {
  const upper = sentence.toLowerCase();
  const lower = sentence.toUpperCase();
  let output = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== lower[i])
      output += lower[i];
    else {
      output += upper[i];
    }
  } return output;
}

// TEST CASES
console.log(switchUpperLower('Hello World')); // "hELLO wORLD"
console.log(switchUpperLower('I aM aLAY')); // "i Am Alay"
console.log(switchUpperLower('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(switchUpperLower('IT sHOULD bE me')); // "it Should Be ME"
console.log(switchUpperLower('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
