const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item); 
//     return item;
// } )
// console.log(values);


const good_ones = coding.filter( (type) => {
    return type != "js" && type != "python"
} )

// console.log(good_ones);


const sum = (a, b) => (
    a + b + 100
);


// console.log(sum(2, 2));

myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];

myNums.forEach(mynum => {
    if (mynum > 9) {
        newNums.push(mynum);
    }
});

console.log(newNums);


