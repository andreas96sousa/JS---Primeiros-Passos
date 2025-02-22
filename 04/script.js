const anteriorbtn = document.querySelector("#anteriorbtn");
const proximobtn = document.querySelector("#proximobtn");
let nomeDoCliente = document.querySelector("#nomedocliente");

proximobtn.addEventListener("click", () => proximoCliente());
anteriorbtn.addEventListener("click", () => anteriorCliente());

const cliente01 = {
  nome: "Maria Madalena",
  lorem:
    "Cliente 01 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, amet quidem, harum minus praesentium nobis ipsa reiciendis totam, quam inventore soluta vitae. Totam, possimus labore neque est rerum eveniet sapiente?",
};
const cliente02 = {
  nome: "Outro Nome Qualquer",
  lorem:
    "Cliente 02 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, amet quidem, harum minus praesentium nobis ipsa reiciendis totam, quam inventore soluta vitae. Totam, possimus labore neque est rerum eveniet sapiente?",
};
const cliente03 = {
  nome: "Nayara Oliveira",
  lorem:
    "Cliente 03 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, amet quidem, harum minus praesentium nobis ipsa reiciendis totam, quam inventore soluta vitae. Totam, possimus labore neque est rerum eveniet sapiente?",
};
const cliente04 = {
  nome: "Andreas Sousa",
  lorem:
    "Cliente 04 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, amet quidem, harum minus praesentium nobis ipsa reiciendis totam, quam inventore soluta vitae. Totam, possimus labore neque est rerum eveniet sapiente?",
};

const clientes = [cliente01, cliente02, cliente03, cliente04];

let numero = 1;
nomeDoCliente.innerText = clientes[numero - 1].nome;
function proximoCliente() {
  numero = numero + 1;
  if (numero > 4) {
    numero = 1; // Reinicia para 1 ao ultrapassar 4

    nomeDoCliente.innerText = clientes[0].nome;
  }
  let imagem = document.querySelector("#imagemCliente");
  imagem.setAttribute("src", "media/cliente" + numero + ".jpg");
}

function anteriorCliente() {
  numero = numero - 1;
  if (numero < 1) {
    numero = 4; // Reinicia para 4 se for menor que 1
  }
  let imagem = document.querySelector("#imagemCliente");
  imagem.setAttribute("src", "media/cliente" + numero + ".jpg");
}
