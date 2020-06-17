// Declarations

const container = document.querySelector("#container");
const resetbtn = document.querySelector("#resetbtn");
let size = 16;

// create gridsize

function createGrid(size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let div = document.createElement("div");
        div.onmouseover = () => div.style.backgroundColor = "white";
        div.classList.add("square");
        container.appendChild(div);
}
}

createGrid(size);

// Reset button 

resetbtn.onclick = function () {
    size = prompt("What size?");
    container.querySelectorAll(".square").forEach((square) => square.remove());
    createGrid(size);
};
