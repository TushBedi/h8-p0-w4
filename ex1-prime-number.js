/* Brainstorming:
 - Prime number - Number that can be divisible by 1 and itself (excluding 1)

 ALGORITHM
create var checker = 0
loop (var i)from number to 0 to (num)
  if number % i = 0,
    then checker ++
if checker = 2
  return true

*/

function primeNum(num) {
  var checker = 0;
  var output;
  for(var i = 0; i <= num; i++) {
    if(num%i === 0) {
      checker++
      // console.log(checker);
    }
  } if (checker === 2) {
    output = true;
  } else {
   output = false;
  } return output;
}

// TEST CASES
console.log(primeNum(3)); // true
console.log(primeNum(7)); // true
console.log(primeNum(6)); // false
console.log(primeNum(23)); // true
console.log(primeNum(33)); // false
