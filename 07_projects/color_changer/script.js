buttons = document.querySelectorAll(".button");
// console.log(buttons)

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target.id)
    if (e.target.id == "green") {
        document.body.style.backgroundColor = e.target.id
    };
    if (e.target.id == "blue") {
        document.body.style.backgroundColor = e.target.id
    };
    if (e.target.id == "red") {
        document.body.style.backgroundColor = e.target.id
    };
    if (e.target.id == "orange") {
        document.body.style.backgroundColor = e.target.id
    };
    if (e.target.id == "purple") {
        document.body.style.backgroundColor = e.target.id
    };
    if (e.target.id == "gray") {
        document.body.style.backgroundColor = e.target.id
    } 
    else {
        document.body.style.backgroundColor = document.body.style.backgroundColor
    }
  });
});
