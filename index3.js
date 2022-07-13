function somar(x1, x2){

    return x1 + x2;

}

let resultado = somar(7,7);

console.log(resultado);


function calc(x1, x2, operador){

    return eval(`${x1} ${operador} ${x2}`);

}

let calc_result = calc(7,7,"*");

console.log(calc_result);


//função anonima
(function(x1, x2, operador){

    return eval(`${x1} ${operador} ${x2}`);

});



//arrow funciton
let calcarrow = (x1, x2, operador) => {

    return eval(`${x1} ${operador} ${x2}`);

}

