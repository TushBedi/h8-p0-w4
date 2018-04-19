/*
ALGORITHM:
  SORT a < b
  VAR factors =[]
  FOR i from 0 to a
    IF a modulus i === 0 THEN
      IF b modulus i === 0 THEN
        PUSH i to VAR factors
      ENDIF
    ENDIF
  ENDFOR

*/
function hcf(a, b) {
  const minNum = Math.min(a, b);
  var factors =[];
  for(var i = 0; i <= minNum; i++) {
    if(a % i === 0 && b % i === 0) {
      factors.push(i);
    }
  }
  let output = factors[factors.length-1];
  return output;
}

// TEST CASES
console.log(hcf(12, 16)); // 4
console.log(hcf(50, 40)); // 10
console.log(hcf(22, 99)); // 11
console.log(hcf(24, 36)); // 12
console.log(hcf(17, 23)); // 1
