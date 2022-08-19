
// Generates a random num and assigns it to Y

let y = Math.floor(Math.random() * 10 + 1);
console.log(y)

//creates guess variable
let timesGuessed = 0;

//array that collects all incorrect guesses
const arr1 = [];

//event listener 
document.getElementById("FormGuessNum").addEventListener("submit", function (event) {
    event.preventDefault()

    // grabs number guessed by user     
    let x = Number(document.getElementById("guess").value);
    console.log(x)

    //pushes all guesses into an array
    arr1.push(x);

    document.getElementById("wrongGuesses").innerHTML = arr1


    //compares users guess to random number generated
    if (x === y) {

        //feedback alerts

        alert("Correct, it was " + y + "! You are very good at guessing! "
            + timesGuessed + " GUESS ");
    }
    // return if users guess is too high, will also incrament onto guess count
    else if (x > y) {
        timesGuessed++;
        alert("OOOF! Thats a little high! Go lower!");
    }
    //returns if users guess is too low, will also incrament onto guess count
    else {
        timesGuessed++;
        alert("Not quite! Try a bigger number!")
    }
}
)
