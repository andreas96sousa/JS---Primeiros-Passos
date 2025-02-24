let inputText = document.querySelector("#text")
const inputButton = document.querySelector("#button")
inputButton.addEventListener("click", () => alertar())

function alertar(){
    let texto = inputText.value
    window.alert(texto)
}