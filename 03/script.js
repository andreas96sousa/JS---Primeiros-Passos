let diminuir = document.querySelector("#diminuir"); // atribui o botão de diminuir
let resetar = document.querySelector("#resetar"); // atribui o botão de resetar
let aumentar = document.querySelector("#aumentar"); // atribui o botão de aumentar
let contador = document.querySelector("#contador"); // atribui o contador



diminuir.addEventListener("click", () => diminuirContador()); // evento de click para o botão de diminuir
resetar.addEventListener("click", () => resetarContador()); // evento de click para o botão de resetar
aumentar.addEventListener("click", () => aumentarContador()); // evento de click para o botão de aumentar


//função para diminuir
function diminuirContador() {
  let numero = Number(contador.textContent); //transforma o texto escrito dentro do html em numero
  let menos = numero - 1; // subtrai 1 do numero editado sempre que clica
  contador.innerText = menos; // reescreve o html
}

//função para resetar
function resetarContador(){
  contador.innerText = "0";  // reescreve o html para "0"
}

//função para aumentar
function aumentarContador() {
  let numero = Number(contador.textContent); //transforma o texto escrito dentro do html em numero
  let menos = numero + 1; // soma + 1 ao numero editado sempre que clica
  contador.innerText = menos; // reescreve o html
}