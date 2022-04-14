// Crie uma função que retorna a palavra (impar/par) 
//de acordo com seu parâmetro.
function descobreParOuImpar(numero){
 if (numero % 2 == 0){
    return(`${numero} é par.`)
} else {
    return(`${numero} é ímpar.`)
}
}
console.log(descobreParOuImpar(57))