// Crie uma função que recebe o ano de nascimento da pessoa 
//informando se ela é maior de idade ou menor.

function descobreMaioridade(ano){
    const idade = 2022- ano
    if (idade >= 18){
        return (`Sua idade é ${idade} anos, você é maior de idade.`)
    } else {
        return (`Sua idade é ${idade} ano(s), você é menor de idade.`)
    }
}

console.log(descobreMaioridade(2004))