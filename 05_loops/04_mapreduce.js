//map 
// const myNumbers = [1,2,3,4,5,6,7,8,9]
// const newNums = myNumbers.map( (num) => {
//     return num + 10
// })
// console.log(newNums)


//reduce 

const muNums = [1,2,3]

const muTotal = muNums.reduce( (acc , curr) => {
    return acc + curr
} , 0)

console.log(muTotal)