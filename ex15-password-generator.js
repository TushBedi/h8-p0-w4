function changeVocals (str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetUpper = alphabet.toUpperCase()
     let changeVocal = ''
     for(let a = 0; a < str.length; a++){
     if(str[a] === 'a' ||str[a] === 'i' ||str[a] === 'u' ||str[a] === 'e' ||str[a] === 'o'){
       let i  = alphabet.indexOf(str[a])
       changeVocal += alphabet[i+1]
     }else if(str[a] == 'A' ||str[a] == 'I' ||str[a] == 'U' ||str[a] == 'E' ||str[a] == 'O'){
       let j = alphabetUpper.indexOf(str[a])
       changeVocal += alphabetUpper[j+1]
     }
     else{
       changeVocal += str[a]
     }

     }
   return changeVocal
 }


 function reverseWord (str) {
   let reversed = ''
   for(let b = str.length - 1; b >= 0; b--){
     reversed += str[b]
   }
   return reversed
 }


 function setLowerUpperCase (str) {
   let oppositecase = '';
   const lower = str.toLowerCase();
   const upper = str.toUpperCase();

   for(let c = 0; c < str.length; c++){
     if(str[c] === upper[c]){
       oppositecase += lower[c]
     }else{
       oppositecase += upper[c]
     }
   }
   return oppositecase
 }


 function removeSpaces (str) {
   str = str.replace(/\s/g, '')
   return str
 }

 function passwordGenerator (name) {

  if(name.length < 5){
    return 'minimal karakter yang diinputkan adalah 5 karakter'
  }
   let changeVocal = changeVocals(name)
   let oppositecase = setLowerUpperCase(changeVocal)
   let reversed = reverseWord(oppositecase);
   let finalString = removeSpaces(reversed)

   return finalString
 }



 console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
 console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
 console.log(passwordGenerator('Alexei')); // 'JFXFLb'
 console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
