const container = document.querySelector(".container");
const clearBtn = document.getElementById("clear-Btn")

function createDiv(divs){
    const width = ((960/ Math.sqrt(divs)) / 960)*100;
    
    for (let i = 1; i <= divs; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-Div")
        //newDiv.textContent= i;
        newDiv.setAttribute("onmouseover", "activatedColor(this)")
        newDiv.style.width = `${width}%`
        container.appendChild(newDiv)

    }
}
createDiv(256);

function activatedColor(element){
    element.style.backgroundColor = "plum";
}

clearBtn.onclick = () => {
    let newBoard = prompt("How many squares per side do you want?");
    if (newBoard === null){
        return
    }
    if (newBoard > 100) {
        alert("Input out of range (must be no greater than 100)");
        return
    }
    container.innerHTML= "";
    newBoard = newBoard * newBoard;
    createDiv(newBoard);
}