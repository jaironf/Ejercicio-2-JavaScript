// 1 BOOLEANOS

let booleano1 = true;
let booleano2 = false;

//booleano and 
let booleanoAnd = booleano1 && booleano2;
//booleano Or
let booleanoOr = booleano1 || booleano2;
//booleano NOt
let booleanoNot = !booleano1;
//booleano Mix0
let booleanoMix0 = booleano1 || booleano2 && booleano1 || !booleano1 && !booleano2;

// 2 OPERADORES

let valorDivision = 17 / 3;
console.log(valorDivision.toFixed(2));

let valorResto = 17 % 7;
console.log(valorResto);

// 3 LOGICA DE PROGRAMACION

let a = 9;
let b = "9";

if (a == b) {
    console.log("Son Iguales")
    }else{
        console.log("No son Iguales")
    
}

if (a === b) {
    console.log("Son Iguales")
}else{
    console.log("No son Iguales")
}

let mochila = ["ordenador", "cuaderno", "bolígrafo", "cartera", "Gafas", "botella", "cargador", "bocadillo"];

if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas")
}else if (mochila.length = 10 && mochila.length >= 2) {
    console.log("Que bien voy con mi mochila")
}else{
    console.log("Creo que no necesito una mochila")
}



let contarHasta10 = 0 

for (contarHasta10; contarHasta10 <= 10; contarHasta10++) {
    console.log(contarHasta10)   
}



const diaFestivo = true;

const hoyEsFestivo = true ? "Hoy no trabajo" : "Hoy Trabajo";
console.log(hoyEsFestivo)



const arrayBucle = [];

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}
console.log(arrayBucle);

let suma = 0;
for(let i = 0; i < arrayBucle.length; i++){
   suma += arrayBucle[i];
}
console.log(suma)



const resultado = ["Con", "Sofia", "aprendiendo", "bucles"];

for (const resultadoFinal of resultado) {
    console.log("Estamos " + resultado)
}
for (const resultadoFinal in resultado) {
    console.log(resultado[resultadoFinal])
}
//para que salga en el valor por cada indice hay que ponerlo entre corchetes, sino, solo te muestra el índice.

// for(let key in resultado){
//     console.log(resultado[key]);
// }

//Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.


//ESTA COMENTADO POR QUE SALE UNA ALERTA CON TODOS LOS MULTIPLOS DE 3 

// let i = 0
// while (i <= 20) {
//     if (i % 3 == 0) {
//         alert("Patata " + i)
//     }
// console.log(i)
//     i++;
// }
 

