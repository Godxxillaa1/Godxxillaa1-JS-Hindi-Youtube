// Exercise 1: Creating a Simple Object
// Create an object named car with the following properties:
const car = {
    color : "red",
    brand : "Toyota",
    model : "Camry"
}

// 2. Log the brand of the car to the console.
console.log(car.brand);

// Exercise 2: Accessing and Modifying Properties
// 1. Create an object named person with the following properties:
const person = {
    name : "Alice",
    age : 30,
    city : "New York"
};

// 2. Log the person's name to the console
console.log(person.name);

// 3. Change the person's city to "Los Angeles".
person.city = "Los Angeles";
console.log(person.city);

// Exercise 3: Adding a Method to an Object
// 1. Create an object named rectangle with the following properties:
// width: 5
// height: 3
const rectangle = {
    width : 5,
    height : 3
};

/* 2. Add a method named getArea to the rectangle object. 
This method should calculate and return the area of the 
rectangle (width * height). */

rectangle.getArea = function () {
    return this.width * this.height;
};
// 3. Log the result of calling the getArea method to the console.
console.log(rectangle.getArea());

/* Create an object named student with the following properties: 
name: "Bob"
grades:
math: 90
science: 85
english: 92
*/
const student = {
    name : "Bob",
    grades : {
        math: 90,
        science: 85,
        english: 92
    },

    
    avgGrade : function () {
        const arryValues = Object.values(this.grades);
        const arryLength = arryValues.length;
        console.log(arryLength);
        
        let sumOfArry = 0;
        for (i = 0; i < arryLength; i++) {
            sumOfArry += arryValues[i]
        };        
        console.log(sumOfArry / arryLength);
    },
};

// 2. Log the student's math grade to the console.
console.log(student.grades.math);

// 3. Calculate the average of the student's grades and log it to the console
student.avgGrade()

/* Exercise 5: Working with Arrays of Objects
    1. Create an array of objects named products. Each object in the array should represent
    a product with the following properties: 

    name: "Product name"
    price: Product price
    category: "Product category"
    */
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "T-Shirt", price: 25, category: "Clothing" },
    { name: "Book", price: 15, category: "Books" },
    { name: "Headphones", price: 80, category: "Electronics" }
  ];

// 2. Iterate through the array and log the name and price of each product.
for (i = 0; i < products.length; i++) {
    console.log(`Product Name: ${products[i].name} | Product Price: ${products[i].price}$`);
};

// Find and log the product with the highest price.
for (i = 0; i < products.length; i++) {
    products.price 
};