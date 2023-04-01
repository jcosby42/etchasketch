//Use JS to create the grid with given inputs
//Right now: Hard program in the sizes; later: take user input for sizes
let colors = document.getElementsByClassName("color");
let currentColor = "black";
for (let btn of colors){
    btn.addEventListener('click', () => {
       currentColor = btn.id;
       
    });   
}

let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let grid = document.getElementsByClassName("element");
    for (let e of grid){
        /*if (e.classList.contains("hovered")){
            e.classList.remove("hovered");
        }*/
        if (e.style.backgroundColor !=='none') e.style.backgroundColor = 'none';
    }
});

function createGrid(size = 100){
    const canvas = document.getElementById("canvas");
    for (let i = 0; i < size; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("row");
        for (let j = 0; j < size; j++){
            const newElement = document.createElement("div");
            newElement.classList.add("element");
            newElement.addEventListener('mouseover', ()=>{
                //newElement.classList.add("hovered");
                newElement.style.backgroundColor = currentColor;
            })
            newDiv.appendChild(newElement);
        }
        canvas.appendChild(newDiv);
    }
};


createGrid();

/*let resize = document.querySelector(".resize");
resize.addEventListener('click', () =>{
    let size = parseInt(prompt("size?", 64));
    if (size < 10) size = 10;
    if (size > 100) size = 100;
    createGrid(size);
});*/

/* Iterate through the grid
*If an element has the "hovered" class
    change its background color to the current background color
*/