//pasos por referencia js
//Objetos (Array) se pasan por referencia

function cambiarValor(parametro){
    parametro[0]= 20;
}

let arreglo=[10];
console.log(`Antes function: ${arreglo[0]}`)
cambiarValor(arreglo);
