const marvel_heros =["thor" , "Ironman" , "Soiderman"];
const dc_heros = ["superman" , "flash" ,"batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

//const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const anothor_array = [1,2,3,[4,5],6,[7,8,[9]]];
const real_anothor_array = anothor_array.flat(Infinity);

// console.log(real_anothor_array);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
