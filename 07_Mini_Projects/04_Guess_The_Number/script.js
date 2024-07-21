let randomNumber = parseInt(Math.random() *100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numguess = 1 

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess =  parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
        {
            alert("Please Enter a Valid Number:")
        }
        else if(guess < 1)
        {
            alert("Please Enter Number Greater than 1")
        }
        else if(guess > 100)
        {
            alert("Please Enter Number Smaller Than the 100")
        }
        else
        {
            prevGuess.push(guess)

            if(numguess === 11)
            {
                displayGuess(guess)
                displayMsg(`Game Over: Random Number Was ${randomNumber}`)
                endGame()
            }
            else
            {
                displayGuess(guess)
                checkGuess(guess)
            }
        }
}

function checkGuess(guess)
{
    if(guess === randomNumber){
        displayMsg(`You Guessed Right`)
        endGame()
    }
    else if(guess < randomNumber)
    {
        displayMsg(`Number is TOO low`)
    }
    else if(guess > randomNumber)
        {
            displayMsg(`Number is TOO High`)
        }
}

function displayGuess(guess)
{
    userInput.value = ''
    guesSlot.innerHTML += `${guess}  `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}

function displayMsg(message)
{
    lowOrHi.innerHTML = `<h2>${message} </h2>`;
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2id="newGame">Start A Newm Game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() *100 + 1);
        prevGuess = []
        numguess = 1
        guesSlot.innerHTML =''
        remaining.innerHTML = `${11- numguess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true
    })
}

