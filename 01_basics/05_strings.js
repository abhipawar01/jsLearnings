const name = "Abhishek"
const score = 20
//console.log(name + score);

//console.log('hello my name is ${name} and my score is ${score}');

const gameName = new String('Abhishek')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    Abhi   ";
console.log(newStringOne);
console.log(newStringOne.trim());
