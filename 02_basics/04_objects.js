// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Abhi"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Abhi",
            Lastname: "Pawar"
        }
    }   
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.firstName);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

// const targetObject = Object.assign({},obj1,obj2,obj3);
// console.log(targetObject);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

//array of objects

const users = [
    {
        id: "123ab",
        name: "Raj"
    },
    {
        id: "345ab",
        name: "Sahil"
    }
    ,
    {

    },
    {

    }
]

// console.log(users[0].name)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
