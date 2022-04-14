// crie um algoritmo que converte dias em horas, 
//quando recebe um número de dias.

function converteDiaEmHora(dias){
    const converteHoras = dias * 24 
    return `${dias} dia(s) equivale(m) a ${converteHoras} horas`   
}
console.log(converteDiaEmHora(25))