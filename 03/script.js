let diminuir = document.querySelector("#diminuir");
let resetar = document.querySelector("#resetar");
let aumentar = document.querySelector("#aumentar");
let contador = document.querySelector("#contador");



diminuir.addEventListener("click", () => diminuirContador());
resetar.addEventListener("click", () => resetarContador());
aumentar.addEventListener("click", () => aumentarContador());

function diminuirContador() {
  let numero = Number(contador.textContent);
  let menos = numero - 1;
  contador.innerText = menos;
}
function resetarContador(){
  contador.innerText = "0"
}
function aumentarContador() {
  let numero = Number(contador.textContent);
  let menos = numero + 1;
  contador.innerText = menos;
}