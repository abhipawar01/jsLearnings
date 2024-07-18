var c = 300

if(true)
{
    let a =10
    const b =20
    c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one()
{
    const username = "Abhishek"

    function two()
    {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website)
    // two()
}
// one()


// ++++++++++Intresting++++++++++++++++++
// addTwo(2) --- can not call before initialization.
const addTwo = function(num)
{
    return num +2
}

// console.log(add(2))------can be called before the defination of function 
function add(num)
{
    return num + 2
}