/*
  Function: Object Literal Shopping

  1. List product
  2. For each

*/

function shoppingTime(memberId, money) {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  const product = [ ['Sepatu Stacattu', 1500000],
                  ['Baju Zoro', 500000],
                  ['Baju H&N', 250000],
                  ['Sweater Uniklooh', 175000],
                  ['Casing Handphone', 50000]
                ]

  let tempMoney = money;
  let shoppingList = []
  for (let i = 0; i < product.length; i++) {
    if (tempMoney - product[i][1] >= 0) {
      shoppingList.push(product[i][0]);
      tempMoney -= product[i][1];
    }
  }

  const result = {
    memberId: memberId,
    money: money,
    listPurchased: shoppingList,
    changeMoney: tempMoney
  };
  return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
