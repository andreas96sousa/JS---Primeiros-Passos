let titulo = document.querySelector("#titulo");
const dataCompleta = new Date();
let dia = dataCompleta.getDate();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let mes = months[dataCompleta.getMonth()];
let ano = dataCompleta.getFullYear();

titulo.textContent = dia + " de " + mes + " de " + ano;
