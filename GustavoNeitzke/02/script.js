const input_texto1 = document.querySelector("#text1")
const input_texto2 = document.querySelector("#text2")
const botao = document.querySelector("#button")






function trocar(){
    let troca = ""
    let texto1 = input_texto1.value
    let texto2 = input_texto2.value
    troca = texto1
    texto1 = texto2
    texto2 = troca
    troca = ""
    alert(`O input 1 era: ${input_texto1.value} e agora é ${texto1} e O input 2 era: ${input_texto2.value} e agora é ${texto2}`)
    input_texto1.value = texto1
    input_texto2.value = texto2
}




botao.addEventListener("click", () => trocar())