//Use JS to create the grid with given inputs
//Right now: Hard program in the sizes; later: take user input for sizes
function createGrid(width = 100, height = 100){
    for (let i = 0; i < height; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("row");
        for (let j = 0; j < width; j++){
            const newElement = document.createElement("div");
            newElement.classList.add("element");
            newElement.addEventListener('mouseover', ()=>{
                newElement.classList.add("hovered");
            })
            newDiv.appendChild(newElement);
        }
        const canvas = document.getElementById("canvas");
        canvas.appendChild(newDiv);
    }
};

createGrid();

let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let grid = document.getElementsByClassName("element");
    for (let element of grid){
        if (element.classList.contains("hovered")){ 
            element.classList.remove("hovered");
        }
    }
});