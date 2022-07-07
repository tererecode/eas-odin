const container = document.querySelector(".container");
const clearBtn = document.getElementById("clear-Btn")

let randomColor = () => {
    let r = () => Math.floor(Math.random() * 256);
    let color = `rgb(${r()}, ${r()}, ${r()})`;
    return color;
    }

function createDiv(divs){
    const width = ((960/ Math.sqrt(divs)) / 960)*100;
    
    for (let i = 1; i <= divs; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-Div")
        //newDiv.textContent= i;
        newDiv.setAttribute("onmouseover", "activatedSingleColor(this)")
        
        //Alternative style where random color is applied every mouseover event
        //newDiv.setAttribute("onmouseover", "activatedMultiColor(this)")
        newDiv.style.width = `${width}%`
        container.appendChild(newDiv)

    }
}
createDiv(256);

function activatedMultiColor(element){
    if (element.classList.contains("o100") == true){
        return;
    } else if (element.classList.contains("o10") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o10", "o20");
    } else if (element.classList.contains("o20") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o20", "o30");
    } else if (element.classList.contains("o30") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o30", "o40");
    } else if (element.classList.contains("o40") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o40", "o50");
    } else if (element.classList.contains("o50") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o50", "o60");
    } else if (element.classList.contains("o60") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o60", "o70");
    } else if (element.classList.contains("o70") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o70", "o80");
    } else if (element.classList.contains("o80") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o80", "o90");
    } else if (element.classList.contains("o90") == true){
        element.style.backgroundColor = randomColor();
        element.classList.replace("o90", "o100");
    } else {
        element.classList.add("o10")
        element.style.backgroundColor = randomColor();
    }
    
}

function activatedSingleColor(element){
    if (element.classList.contains("o100") == true){
        return;
    } else if (element.classList.contains("o10") == true){
        element.classList.replace("o10", "o20");
    } else if (element.classList.contains("o20") == true){
        element.classList.replace("o20", "o30");
    } else if (element.classList.contains("o30") == true){
        element.classList.replace("o30", "o40");
    } else if (element.classList.contains("o40") == true){
        element.classList.replace("o40", "o50");
    } else if (element.classList.contains("o50") == true){
        element.classList.replace("o50", "o60");
    } else if (element.classList.contains("o60") == true){
        element.classList.replace("o60", "o70");
    } else if (element.classList.contains("o70") == true){
        element.classList.replace("o70", "o80");
    } else if (element.classList.contains("o80") == true){
        element.classList.replace("o80", "o90");
    } else if (element.classList.contains("o90") == true){
        element.classList.replace("o90", "o100");
    } else {
        element.classList.add("o10")
        element.style.backgroundColor = randomColor();
    }
    
}
clearBtn.onclick = () => {
    let newBoard = prompt("How many squares per side do you want?");
    if (newBoard === null){
        return
    }
    if (newBoard > 100 || newBoard == "") {
        alert("Input out of range (must be no greater than 100)");
        return
    }
    container.innerHTML= "";
    newBoard = newBoard * newBoard;
    createDiv(newBoard);
}