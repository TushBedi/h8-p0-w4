/*
  Function: Find Word with Most Recurring Letters
*/

function mostRecur(sentence) {
  const words = sentence.toLowerCase().split(' ');
  const wordsObj = {};

  words.forEach(word => {
    const modeObj = {};

    for (let i = 0; i < word.length; i += 1) {
      if (!modeObj[word[i]]) modeObj[word[i]] = 0;
      modeObj[word[i]] += 1;
    }

    const modeWord = Object.keys(modeObj);
    let counter = 0;

    for (let i = 0; i < modeWord.length; i += 1) {
      if (modeObj[modeWord[i]] > 1) counter += 1;
    }

    if (counter > 0) {
      wordsObj[word] = counter;
    }
  });

  const selectedWords = Object.keys(wordsObj);

  if (selectedWords.length === 0) return -1;

  let mostFrequent;
  let maxFrequency = 0;
  selectedWords.forEach(word => {
    if (wordsObj[word] > maxFrequency) {
      mostFrequent = word;
      maxFrequency = wordsObj[word];
    }
  });

  return mostFrequent;
}

// TEST CASES
console.log(mostRecur('Today, is the greatest day ever')); // greatest
console.log(mostRecur('I am a passionate developer')); // passionate
console.log(mostRecur('aku adalah anak gembala')); // adalah
console.log(mostRecur('rajin pangkal kaya')); // pangkal
console.log(mostRecur('mengayuh perahu di danau')); // danau
console.log(mostRecur('abcd abcd abcd abcd')); // -1
