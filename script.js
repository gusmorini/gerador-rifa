let cont = 1;

let initial = 501;
let final = 520;

while (initial <= final) {
  let baseEl = document.querySelector(".container-rifa").cloneNode(true);
  baseEl.style.display = "flex";
  baseEl.querySelector("#numero-canhoto").textContent = initial;
  baseEl.querySelector("#numero").textContent = initial;

  // if (cont == 5) {
  //   baseEl.style.marginBottom = "58px";
  //   cont = 1;
  // } else {
  //   cont++;
  // }

  document.querySelector("#container").appendChild(baseEl);

  initial++;
}
