// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// startingValue = 0
// let ans = arr.reduce(
//     (accumulator, currentValue) => (accumulator + currentValue), startingValue
// );

// console.log(ans);



// const myNum = [1, 2, 3];

// const myTotal = myNum.reduce(
//     function (accumulation, currentValue) {
        
//     }
// )

// console.log(myTotal);


const shopingCart = [
    {
        itemName : "JS Course",
        price : 2999,
    },
    {
        itemName : "mobile Course",
        price : 999,
    },
    {
        itemName : "data science Course",
        price : 1000,
    },
    {
        itemName : "Ruby on rales Course",
        price : 5555,
    },
]

const total = shopingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(`Total Price: ${total} AED`);
