const myNumber = Math.floor(Math.random() * 100) + 1

document.getElementById("submit").onclick = function () {
    const guessnumber = document.getElementById("guess").value;
    const guessAsNumber = parseInt(guessnumber);
    if (guessAsNumber === myNumber) {
        result = "Indovinato!"
    } else if (guessAsNumber < myNumber) { 
        result = "Troppo piccolo"
    } else if (guessAsNumber > myNumber) {
        result = "Troppo grande"
    }

    document.getElementById("result").innerHTML = result;

    console.log(guessAsNumber);
}