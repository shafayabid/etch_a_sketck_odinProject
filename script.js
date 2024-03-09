
const grid = document.querySelector(".grid");

const button = document.querySelector(".btn");

let numOfBoxes = 10;

generateBoxes();

button.addEventListener("click", () => {
    numOfBoxes = parseInt(prompt("Please Enter The Number of Boxes in The Grid", 10));
    generateBoxes();
})


function generateBoxes(){

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < numOfBoxes; i++) {

        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = 1;
    
        for (let j = 0; j < numOfBoxes; j++){
    
            const box = document.createElement("div");
            // box.style.borderStyle = "solid";
            box.style.flex = 1;
            box.style.boxSizing = "border-box";
    
            box.addEventListener("mouseover", function (e) {
                e.target.style.background = "black";
              });
    
            row.appendChild(box);
        }
    
        grid.appendChild(row)
    
    }
}

