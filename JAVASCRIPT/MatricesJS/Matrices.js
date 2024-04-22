//matrices en javascript
//creamos una matriz de 3x3

let matriz = [[],[]];

//Modificar los valores
//reglon 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;
//reglon 1
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//imprimir la matriz
console.log(`Elemento 0,1: ${matriz[0][1]}`);
console.log(`Elemento 1,2: ${matriz[1][2]}`);

//forma resumida

let matriz1 = [[100,200,300],[400,500,600]];

//Modificar los valores


//imprimir la matriz
console.log(`Elemento 0,1: ${matriz1[0][1]}`);
console.log(`Elemento 1,2: ${matriz1[1][2]}`);

//Ahora utilizaremos for para recorrer la matriz
let matriz2 = [[100,200,300],[400,500,600]];

//N° de Reglones
console.log(matriz2.length);
//N. col(depende del reglon seleccionado)
console.log(matriz2[0].length);
console.log(matriz2[1].length);
//configurar ciclo for

//reglones
for (let ren = 0; ren < matriz2.length; ren++) {
   //columnas
   for (let col = 0; col < matriz2[ren].length; col++) {
     console.log(`Elemento [${ren},${col}] = ${matriz2[ren][col]}`);
   }
}

