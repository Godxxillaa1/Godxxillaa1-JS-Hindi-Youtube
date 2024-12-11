const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.IsLoggedIn = false;

delete tinderUser.id

// console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userfullname :{
            first_name : "Sam",
            last_name : "Altman"
        }
    }
}

// console.log(regularUser.fullname.userfullname.first_name);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};

// console.log(obj3);


const users = [
    {
        id : "123",
        email : "dd@gmail.com"
    },
    {
        id : "123",
        email : "dd@gmail.com"
    },
    {
        id : "123",
        email : "dd@gmail.com"
    },
]

// console.log(users[1].email);


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructer : "Musab Khan"
}

// course.courseInstructer

const {courseInstructer : instructer} = course

console.log(instructer);
// console.log(courseInstructer);


const navbar = () => {
    
}

