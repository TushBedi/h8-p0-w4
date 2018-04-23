/*
  Function: Object Literal Change Me

  ALGORIGTHM:
  create variable obj = {}
  FOR each element, array
    show "(index + 1) + element[0] + [1]
    obj firstName = element[0]
    obj lastName = element[1]
    obj gender = element [2]
    IF element 3 is false OR greater than 2017, THEN
      show 'Invalid Birth Year'
    ELSE
      show 2018 - element[3]
    ENDIF
    show obj
  ENDFOR


*/
function  changeMe (arr) {
  let obj = {};
  let date = new Date();
  let year = date.getFullYear();
  arr.forEach(function(element, index) {
    obj.firstName = element[0];
    obj.lastName = element[1];
    obj.gender = element[2];
    if (!element[3] || element[3] >= year) {
      obj.age = 'Invalid Birth Year';
    } else {
      obj.age = year - element[3];
    }
    console.log(`${index+1}.${element[0]}${element[1]} \n`, obj); // \n -> new line
    // console.log(obj);
    // console.log('');
  });
}


// TEST CASES
changeMe ([[ ' Christ ' , ' Evans ' , ' Male ' , 1982 ], [ ' Robert ' , ' Downey ' , ' Male ' ]]);
// 1. Christ Evans:
// {firstName: 'Christ',
//    lastName: 'Evans',
//    gender: 'Male',
//    age: 36}
// 2. Robert Downey:
// {firstName: 'Robert',
//    gender: 'Male',
//    age: 'Invalid Birth Year'}
changeMe ([]); // ""
