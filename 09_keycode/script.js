function tellKey() {
  window.addEventListener("keydown", function (e) {
    const element = document.querySelector(".main_div");
    

    element.innerHTML = `
        <p>You have pressed: <span>${e.key === " " ? "Space" : e.key}</span> <br> key.</p>
        `;
  });
}

tellKey();
