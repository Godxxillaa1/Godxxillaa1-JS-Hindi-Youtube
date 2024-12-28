const random_Number = Math.floor((Math.random() * 10) + 1)
console.log(random_Number)
form = document.querySelector("form");

let already_guessed = [];
let guess_remaining = 10;

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevented the defalt behavior of form
    let results = document.querySelector("#results_error")

    // Getting user input:
    const myInput = Number(form.querySelector("#myInput").value)
    // Checking the user input:
    if (isNaN(myInput)){
        results.textContent = "Enter A Number Only"
        // console.log("Enter A Number Only");
    } else if (myInput < 1){
        results.textContent = "Enter Greater Then 0"
        // console.log("Enter Greater Then 0");
    } else if (random_Number ===  myInput) {
        results.textContent = "You Win"
    } else {
        already_guessed.push(myInput)
        console.log(already_guessed);
        guess_remaining = guess_remaining - 1
        console.log(guess_remaining)

        if (guess_remaining === 0){
            results.textContent = "You Lost Refresh Page Try again!"
        }
    };

    // Displaying the results:
    let answer = String(already_guessed).replaceAll(",", " & ");
    document.querySelector("#results_prev-guesses").textContent = `You Have Guessed: ${answer}`
    document.querySelector("#results_guesses-remaining").textContent = `Attempts Remaining: ${guess_remaining}`
    
})