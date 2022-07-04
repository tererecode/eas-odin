const container = document.querySelector(".container");

function createDiv(divs){
    for (let i = 1; i <= divs; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-Div")
        newDiv.textContent= i;
        container.appendChild(newDiv)

    }
}
createDiv(256);