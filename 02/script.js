let titulo = document.getElementById("titulo"); // titulo da página a ser editado na função
let btnColor = document.querySelector("#btnChangeColor"); // seleção do botão para mudar cor
const colors = ["red", "black", "blueviolet", "gray", "blue"]; // Array para armazenar as cores
let quantidadedeobjetos = colors.length; // saber a quantidade de cores dentro do Array

btnColor.addEventListener("click", () => mudarcor()); // evento de click no botão de mudar cor

//função para mudar o fundo da página (body) e identificar a cor no titulo
function mudarcor() {
  let aleatorio = colors[Math.floor(Math.random() * quantidadedeobjetos)];
  document.body.style.backgroundColor = aleatorio;
  titulo.innerText = "Background = " + aleatorio;
}
