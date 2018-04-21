/*
  Function: Minimum Factors Required To Multiply

  ALGORIGTHM
  Create variable factors
  FOR i from 0 to number
    IF number % i equals 0 THEN
      push 2 combined numbers into factors
    ENDIF
  ENDFOR
  Create variable min = (i*2)^2
  FOR i form 0 until factors.length - 1
    IF factors[i].length is less than min THEN
      min = factors[i].length
    ENDIF
  ENDFOR
  Return min
*/

function minDigitsMultiplied(number) {
  let factors = [];
  for (var i = 0; i <= number; i++) {
    if (number % i === 0) {
      factors.push(`${i}${(number/i)}`);
    }
  }
  let min = Math.pow(i*2,2);
  for (let i = 0; i < factors.length; i++) {
    if (factors[i].length < min) {
      min = factors[i].length;
    }
  } return min;
}

// TEST CASES
console.log(minDigitsMultiplied(24)); // 2
console.log(minDigitsMultiplied(90)); // 3
console.log(minDigitsMultiplied(20)); // 2
console.log(minDigitsMultiplied(179)); // 4
console.log(minDigitsMultiplied(1)); // 2
