//for of
// const arr = [1,2,3,4,5]

// for(const i of arr)
// {
//     console.log(i);
// }

//map 

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United Sates Of America")


//for-of loop on map

for (const [key , value] of map)
{
    // console.log(key , value)
}

//for each loop 

const coding = ['js', 'cpp', 'ruby', 'swift']

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values);

const myNums =[1,2,3,4,5,6,7]

const newValues = myNums.filter( (num) => num < 4) //not using return  beacuse its happening in implicitly on same line without the curly braces.
console.log(newValues)
