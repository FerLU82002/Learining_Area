//paso por Valor en JS
//En JS los valores primitivos se pasan por valor(number, bool,string)
//Solo se esta pasando copia de valor
function cambiarValor(parametro){
    parametro=20;
    return parametro;
}

let argumento= 10
cambiarValor(argumento);
console.log(argumento)