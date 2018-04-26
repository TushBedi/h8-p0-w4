/*
  Function: Find Word with Most Recurring Letters
*/

function countProfit(shoppers) {
  let shopList = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var stock = []
  for(let i = 0; i < shopList.length; i++){
    stock.push(shopList[i][2])
  }

if(shoppers.length === 0){
  return []
}

for(let i = 0; i < shopList.length; i++){
  shopList[i].push([])
  for(let j = 0; j < shoppers.length; j++){
   if(shopList[i][0] == shoppers[j].product && (shopList[i][2] - shoppers[j].amount)>= 0 ){
      shopList[i][2] -=shoppers[j].amount
      shopList[i][3].push(shoppers[j].name)
   }
 }shopList[i].push(stock[i])
}

var finalProfit = [];
for (let i = 0; i<shopList.length;i++){
  finalProfit.push({
    product: shopList[i][0],
    shoppers: shopList[i][3],
    leftOver: shopList[i][2],
    totalProfit:(((shopList[i][4]) - (shopList[i][2])) * shopList[i][1])


  })
}
return finalProfit


  // you can only write your code here!
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]
