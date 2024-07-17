//singleton objects
//objects that get created through the constructors
//object.create method

//Object Literals 
const jsUser = {
    name: "Abhi",
    age: 21,
    location: "Mumbai",
    isLoggedIn: false,
    email: "xyz@gmail.com"
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);

// Object.freeze(jsUser);
jsUser.email = "abc@gmail.com"
// console.log(jsUser);

jsUser.greeting = function()
{
    console.log(`Hello From the JS, ${this.name}`);
}
  console.log(jsUser.greeting());