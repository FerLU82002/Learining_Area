function toUpper(string) {
    return string.toUpperCase();
}

const cats = ['Garfield', 'Heathcliff', 'Rigoberto'];

const uppercats = cats.map(toUpper);

console.log(uppercats); 

/// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const longwords = words.filter((word) => {
    return word.length > 6;
});

console.log(longwords);
