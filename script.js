//div inside body
const container = document.querySelector(".container");
container.style.cssText = "display: flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

//boundary box
const box = document.createElement("div");
box.setAttribute("id", "playArea");
box.style.cssText = "height: 50rem; width: 50rem; border: solid 2px black; display: flex;";
box.style.justifyContent = "stretch";
box.style.flexDirection = "column";
box.style.overflow = "hidden"
container.appendChild(box);

//now of tiles in a grid
n = prompt("Enter the size of grid (from 1 to 100)");
for (i = 1; i <= n; i++) {
  const rows = document.createElement("div");
  rows.style.cssText = "display: flex; height: 100%";
  box.appendChild(rows);

  for (j = 0; j <= n - 1; j++) {
    const columns = document.createElement("div");
    columns.style.cssText = "display: flex; width: 100%";
    columns.style.backgroundColor = "white";
    columns.textContent = "c";
    rows.appendChild(columns);
  }
}
