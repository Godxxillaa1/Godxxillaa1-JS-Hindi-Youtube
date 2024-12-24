const form = document.querySelector("form")

form.addEventListener("submit", function (e){
    e.preventDefault();

    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const results = document.querySelector("#results")

    if (weight === "" || isNaN(weight) || weight < 0) {
        console.log("Enter number in weight!");
    } else if (height === "" || isNaN(height) || height < 0){
        console.log("Enter number in weight!");
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.textContent = `Your BMI is: ${bmi} You are under weight.`

        } else if (bmi >= 18.6 && bmi <= 24.9){
            results.textContent = `Your BMI is: ${bmi} You are at Normal Range.`

        } else {
            results.textContent = `Your BMI is: ${bmi} You are over weight.`

        }
    }
    

})
// console.log(form);
