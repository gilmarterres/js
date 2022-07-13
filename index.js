/**
 * teste comentatio 1
 * teste2
 */
var olaMundo = "Hello word";

console.log(olaMundo);
console.log("Olá mundo");
/*console.log("Olá mundo");
console.log("Olá mundo");*/

let a = 20;
const b = "20";

//compara apena do dado, não o tipo da variavel
console.log(a == b);
// com === compara dado e tipo
console.log(a === b);
//compara apena do dado, não o tipo da variavel
console.log(a != b);
// com === compara dado e tipo
console.log(a !== b);

console.log(a == b && typeof b == 'string');

//condição ou
console.log(a == b || typeof b == 'string');

////////////////////////////////////////////////////////

let cor = "amarelo";

if (cor === "verde"){

    console.log("siga");

}else if(cor === "amarelo") {

    console.log("atenção");

}else if("vermelho"){

    console.log("pare");

}