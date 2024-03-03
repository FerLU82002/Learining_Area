/// suna de los 5 primeros numeros: 1+2+3+4+5 = 15
let maximo = 5;
let acumuladorSuma = 0;

for (let numero = 1; numero <= maximo; numero++) {
   /// imprimir lo q se va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);
    acumuladorSuma = acumuladorSuma + numero;
        console.log(acumuladorSuma);
}

console.log(acumuladorSuma);

