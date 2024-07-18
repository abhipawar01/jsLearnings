const user = {
    username: "Abhishek",
    price: 199,

    welcomeMsg: function()
    {
        console.log(`${this.username}, Welcome to the Website`)
    }
}

    // user.welcomeMsg()
    // user.username = "sam"
    // user.welcomeMsg()
    const user2 = {
        username: "Sanket"
    }
    // console.log(this)

    //Arrow Function

    const sample = (num1,num2) => {
        return num1 + num2
    }

    // console.log(sample(1,2))

    const sample2 = (num1 ,num2) => (num1+num2)
    // console.log(sample2(2,3))

    