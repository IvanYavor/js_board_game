// Size of the board
const size = 9;

let container = document.getElementById("container");
let t = container.appendChild(document.createElement("table"));
let tbody = t.appendChild(document.createElement("tbody"));
let btn = document.getElementById("change-color-btn");
let clearBtn = document.getElementById("clear-btn");

for (let i = 0; i < size; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < size; j++) {
    let col = document.createElement("td");

    row.appendChild(col);
  }

  tbody.appendChild(row);
}

// Listeners
t.addEventListener("mousedown", (e) => {
  let target = e.target;

  if (target.tagName != "TD") return;

  changeColor(target);
});

btn.addEventListener("click", (e) => {
  t.classList.toggle("invert");
});

clearBtn.addEventListener("mousedown", (e) => {
  for (let row of t.rows) {
    for (let cell of row.cells) {
      cell.classList.remove("black-td");
    }
  }
});

changeColor = (td) => {
  td.classList.toggle("black-td");
};
