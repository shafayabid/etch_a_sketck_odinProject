
const grid = document.querySelector(".grid");

for (let i = 0; i < 10; i++) {
    
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = 1;

    for (let j = 0; j < 10; j++){

        const box = document.createElement("div");
        box.style.borderStyle = "solid";
        box.style.flex = 1;
        box.style.boxSizing = "border-box";

        box.addEventListener("mouseover", function (e) {
            e.target.style.background = "black";
          });

        row.appendChild(box);
    }

    grid.appendChild(row)

}