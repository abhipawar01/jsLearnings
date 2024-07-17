//array
const myArr = [1 , 2 , 3 , 4 , true, "Abhi"];
// console.log(myArr);
// console.log(myArr[0]);

const myHeros = ["Ironman" , "Shaktiman", "Spiderman"];
const myArr2 = new Array(5 , 6 , 7 , 8);


//Array Methods

myArr.push(5);
// console.log(myArr);
myArr.pop();
// console.log(myArr);

myArr.unshift(9);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(1));


// const newArray = myArr.join();
// console.log(myArr);
// console.log(typeof newArray);


//slice , splice
console.log("A" ,myArr);
const mynw = myArr.slice(1,2);

console.log(mynw)
console.log("B" ,myArr);

const mynm2 = myArr.splice(1,2);
console.log(mynm2);
console.log("c" , myArr);