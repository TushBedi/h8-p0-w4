/*
  Function: Sorting String by Alphabet

  ALGORITHM:
  Create variable dictionary from a to z
  Create variable index as a array
  FOR i from 0 to str.length - 1
    FOR j from 0 to dictionary.length - 1
      IF str[i] = dictionary[j] THEN
        index.push(j)
      ENDIF
    ENDFOR
  ENDFOR
  Sort index in ascending order function(a,b){a>b}
  FOR i from 0 to index.length
    FOR j from 0 to dictionary.length
      IF index[i] === j THEN
        index[i] === dictionary[j]
      ENDIF
    ENDFOR
  ENDFOR
  Let output = Join index with ''
  return output

*/

function  sortString(str) {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz';
  let index = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (str[i] === dictionary[j]) {
        index.push(j);
      }
    }
  }
  index.sort(function(a,b){return a > b})
  for (let i = 0; i < index.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (index[i] === j) {
        index[i] = dictionary[j];
      }
    }
  }
  const output = index.join('');
  return output;
}

// TEST CASES
console.log(sortString('hello')); // 'ehllo'
console.log(sortString('truncate')); // 'acenrttu'
console.log(sortString('developer')); // 'deeeloprv'
console.log(sortString('software')); // 'aeforstw'
console.log(sortString('aegis')); // 'aegis'
