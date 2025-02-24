const input_texto1 = document.querySelector("#text1")
const input_texto2 = document.querySelector("#text2")
const botao = document.querySelector("#button")






function somedia(){
    let num1 = Number(input_texto1.value)
    let num2 = Number(input_texto2.value)
    let soma = num1 +  num2
    let media = soma / 2
    
    alert(`O input 1 era: ${input_texto1.value} e O input 2 era: ${input_texto2.value} ea soma dele é ${soma}, assim como a média é ${media}`)
    input_texto1.value = soma
    input_texto2.value = media
}




botao.addEventListener("click", () => somedia())