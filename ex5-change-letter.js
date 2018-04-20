/*
  Function: Changing Letter += 1

  ALGORIGTHM:
  Create Variable output a string
  Create Variable dictionary containing alphabet (a-z) as a string
  FOR i from 0 until word.length - 1
    FOR j from 0 until dictionary.length - 1
      IF word[i] == dictionary[j] THEN
        output += dictionary[j+1]
      ENDIF
    ENDFOR
  ENDFOR
  Return output

  }
*/

function changeLetter(word) {
  let output = '';
  let dictionary = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (word[i] == dictionary[j]) {
        output += dictionary[j+1]
      }
    }
  } return output;
}

// TEST CASES
console.log(changeLetter('wow')); // xpx
console.log(changeLetter('developer')); // efwfmpqfs
console.log(changeLetter('javascript')); // kbwbtdsjqu
console.log(changeLetter('keren')); // lfsfo
console.log(changeLetter('semangat')); // tfnbohbu
