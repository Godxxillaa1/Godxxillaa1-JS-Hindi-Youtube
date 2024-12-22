const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const a = []
// myNumbers.forEach(number => (a.push(number + 10)));
// console.log(a);


// const a = myNumbers.map( (num) => num + 10 )
// console.log(a);

const newNum = myNumbers
    .map((num) => (num * 10))
    .map((num2) => (num2 + 1))
    .filter((num3) => (num3 >= 40));

console.log(newNum);
