const input_texto1 = document.querySelector("#text1")
const input_texto2 = document.querySelector("#text2")
const calcula = document.querySelector(".button")


function calcular(){
    let check = document.querySelector('input[name="listaOperacoes"]:checked')     
    let num1 = Number(input_texto1.value)
    let num2 = Number(input_texto2.value)  
    
    if(check.value == "somar"){
        let calc = num1 + num2
        alert(`Adição = ${calc}`)
    }else if(check.value == "subtrair"){
        let calc = num1 - num2
        alert(`Subtração = ${calc}`)
    }else if(check.value == "multiplicar"){
        let calc = num1 * num2
        alert(`Multiplicação = ${calc}`)
    }else{
        let calc = num1 / num2
        alert(`Divisão = ${calc}`)
    }



    }



calcula.addEventListener("click", () => calcular())
