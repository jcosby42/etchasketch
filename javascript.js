//Use JS to create the grid with given inputs
//Right now: Hard program in the sizes; later: take user input for sizes
function createGrid(){
    let width = 16, height = 16;
    for (let i = 0; i < height; i++){
        const newDiv = document.createElement("div");
        for (let j = 0; j < width; j++){
            const newSpan = document.createElement("span");
            const newContent = document.createTextNode("*");
            newSpan.appendChild(newContent);
            newDiv.appendChild(newSpan);
        }
        const canvas = document.getElementById("canvas");
        canvas.appendChild(newDiv);
    }
}

createGrid();