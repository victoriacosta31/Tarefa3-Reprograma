// Crie uma função que recebe 2 parâmetros e retorna o 
//resultado da divisão entre eles. Diga se esse número é par ou ímpar.

function descobrirSeResultadoÉParOuÍmpar (num1, num2){
    let resultado = num1 / num2 
    if (resultado % 2 == 0) {
    return `O número ${resultado} é par`
    } else {
    return `O número ${resultado} é ímpar`
    }
}

    console.log(descobrirSeResultadoÉParOuÍmpar(420,14))