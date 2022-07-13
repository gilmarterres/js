window.addEventListener('focus', event => {
    console.log('que legal vc voltou');
    console.log(agora2.getDate());
} )


document.addEventListener('click', event => {
    console.log('click')
    console.log(agora2.getDate())
});


let agora = Date.now();
let agora2 = new Date();

console.log(agora2.getDate());
console.log(agora2.getFullYear());
console.log(agora2.getMonth());
console.log(agora2.toLocaleDateString('pt-BR'));



let carros = ["palio 98","toro","uno",343,true, new Date(), function(){}];

console.log(carros);
console.log(carros.length);
console.log(carros[2]);
console.log(carros[5].getFullYear());

carros.forEach(function(value, index){
    console.log(index, value);
})