/*
  Function: Minimum Factors Required To Multiply

  ALGORIGTHM
  Create variable Factors
  FOR i from 0 to number
    IF number %
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
