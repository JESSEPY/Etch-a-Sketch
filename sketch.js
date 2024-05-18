const container = document.querySelector(".container");

let gridSize = 16;

let grid = (grid) => {
  for (i = 0; i < grid * grid; i++) {
    const square = document.createElement("div");
    container.style.width = grid * 30 + "px";
    square.classList.add("square");
    container.appendChild(square);

    // hover
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    });
  }
};

let clearGrid = () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    container.removeChild(square);
  });
  console.log(squares);
};

grid(gridSize);
const inputButton = document.querySelector(".input");
document.addEventListener("click", () => {
  gridSize = prompt("Input your grid size (max of 100)");
  clearGrid();
  grid(gridSize);
});
