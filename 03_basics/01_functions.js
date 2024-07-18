
// console.log("A")
// console.log("B")
// console.log("H")
// console.log("I")

function SayMyName()
{
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
}
//calling of function
// SayMyName()

// function addTwoNum(num1 ,num2)
// {
//     console.log(num1 + num2);
// }

// addTwoNum(2,3)

//function returning value

function returnsum(num1 ,  num2){
    return num1 + num2
}

const result = returnsum(2,3);
// console.log(result)

// function LoginUserMsg(username= "sam"){
//     if(!username)
//     {
//         console.log("Please enter valid username")
//         return
//     }
//     return `${username} is Logged in`
// }

// console.log(LoginUserMsg())

//rest operator

function calculateCartPrice(...num1)
{
    return num1
}

// console.log(calculateCartPrice(200,300,100,400));

const user = {
    username: "Abhishek",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`Name Of User is ${anyobject.username}`);
}

// handleObject(user);

const myArray = [2,3,4,5,6];

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myArray));