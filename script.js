let cont = 1;

let initial = 541;
let final = 560;

while (initial <= final) {
  let baseEl = document.querySelector(".container-rifa").cloneNode(true);
  baseEl.style.display = "flex";
  baseEl.querySelector("#numero-canhoto").textContent = initial;
  baseEl.querySelector("#numero").textContent = initial;

  if (cont == 10) {
    baseEl.classList.add("breakPage");
    cont = 1;
  } else {
    cont++;
  }

  document.querySelector("#container").appendChild(baseEl);

  initial++;
}
