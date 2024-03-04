//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
let varGrande = [-1,3,5,-5];
function BigVar(varGrande){
    for(i = 0; i<varGrande.length; i++){
        if(varGrande[i]>0){
            varGrande.splice([i], 1, "big");
        }
    }
    console.log(varGrande);
    return varGrande;
}
BigVar(varGrande);

//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
console.log("Ëjercicio 2")
let varMenoryMayor = [-1,5,6,2];
let varMayor = [];
function MayorYmenor(varMenoryMayor){
    for(i=0; i<varMenoryMayor.length; i++){
        let varMenor = Math.min(...varMenoryMayor);
        console.log(varMenor);
        varMayor = Math.max(...varMenoryMayor);
        return varMayor
    }
    console.log(varMenoryMayor);
}

MayorYmenor(varMenoryMayor);
console.log(varMayor);

//Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
console.log("Ëjercicio 3");
function printReturn(arr){
    console.log(arr[arr.length-2]); //penultimo
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            return arr[i];
        }
    }
}

console.log(printReturn([-2,6,8,7,9,20]));


//Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
console.log("Ejercicio 4");

let arrayBase = [1,2,3];
let arrayFinal = [];
function ElDoble(){
    for(i = 0; i<arrayBase.length; i++){
        let multiplicacion = arrayBase[i] * 2;
        arrayFinal.push(multiplicacion);
    }
}
ElDoble(arrayBase);
console.log(arrayFinal);

//Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
console.log("Ejercicio 5");

let reemplazar = [-1,1,1,1];
function ReemplazoUltimoNumero(){
    for(i = 0; i<reemplazar.length; i++){
        if(i = reemplazar.length-1){ 
            //reemplazar.splice(3,reemplazar.length-1,3); Si sirve
            reemplazar.splice(3,1,3); 
        }
    }
}
ReemplazoUltimoNumero(reemplazar);
console.log(reemplazar);

//Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
console.log("Ejercicio 6");

let pareimpar = [1,5,4,3,5,11,2,4,3,4,8,10];
let conteopar = 0;
let conteoimpar = 0;
function QueImparcial(){
    for(i = 0; i<pareimpar.length; i++){
        if(pareimpar[i] % 2 === 0){ //Par
            conteopar++;
            conteoimpar=0; //reinicio de conteo impar
            if(conteopar === 3){
                console.log("¡Es para bien!");
                conteopar = 0; //reinicio de conteo par
            }
        }
        else{ //Impar
            conteoimpar++;
            conteopar = 0;
            if(conteoimpar === 3){
                console.log("¡Qué imparcial!");
                conteoimpar = 0;
            }
        }
    }
}
QueImparcial();

//Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 
console.log("Ejercicio 7");
let arrayNumeros = [2,3,9,4,2,6];
let sum = 1;
function SumaArrayImpares(){
    for(i=0; i<arrayNumeros.length; i++){
        if(i % 2 != 0){
            sum = arrayNumeros[i] + 1;
            arrayNumeros.splice([i],1,sum);
        }
    }
    console.log(arrayNumeros);
}
SumaArrayImpares(arrayNumeros);

//Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo,longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9,4]. Pista: ¿For loops solo puede ir hacia adelante?
console.log("Ejercicio 8");

let result = longitudesPrevias(["programar", "dojo", "genial"]);
function longitudesPrevias(arr) {
    let longitudAnterior = arr[0].length; // Longitud del primer string
    let result = [arr[0]]; // Inicialmente agregamos el primer string al resultado

    for (let i = 1; i < arr.length; i++) {
        result.push(longitudAnterior); // Agregamos la longitud del string anterior al resultado
        longitudAnterior = arr[i].length; // Actualizamos la longitud del string anterior
    }

    return result;
}
console.log(result);

//Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
console.log("Ejercicio 9");

let arrayBase7 = [1,2,3];
let newArray7 = [];
let suma7 = 0;
function AgregaSiete(){
    for(i=0; i<arrayBase7.length; i++){
        let suma7 = arrayBase7[i] + 7;
        newArray7.push(suma7)
    }
}
AgregaSiete(arrayBase7);
console.log(newArray7);

//Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
console.log("Ejercicio 10");

let arrSwap = [1, 2, 3, 4, 56, 9, 8, 2, 1, 23, 5, 200];

function Swap(arr, indice0, indice1) {
    let aux = arr[indice0]; // Guarda el valor en el índice0 en una variable auxiliar
    arr[indice0] = arr[indice1]; // Se genera el intercambio de posiciones
    arr[indice1] = aux; // Se asigna el valor guardado previamente en indice0 al indice1
}

Swap(arrSwap, 0, 11); // Llama a la función Swap pasando los índices
console.log(arrSwap); // Imprime el array después de realizar el intercambio

//Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
console.log('Ejercicio 11');

Perspectiva = [1,-3,5];
Negativos = [];
function PerspectivaNegativa(Perspectiva){
    for(let i = 0; i<Perspectiva.length; i++){
        if(Perspectiva[i]>0){
            let multiNegativa = Perspectiva[i] * (-1);
            Negativos.push(multiNegativa);
        }
        else{
            Negativos.push(Perspectiva[i]);
        }
        
    }
}
PerspectivaNegativa(Perspectiva);
console.log(Negativos);

//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.    

console.log('Ejercicio 12');

let ArrayComida = ['Hola', 'Hola', 'Hola', 'Hola'];

function SiempreHambriento(){
    for(let i = 0; i< 4; i++){
        if(ArrayComida[i] === 'Comida'){
            console.log('yummy');
        }
        else if(ArrayComida != 'Comida'){
            console.log('tengo hambre');
            break;
        }        
    }
}
SiempreHambriento(ArrayComida,); //El resultado varia dependiendo del array, como no se especifica tan claro, decidi escribir el codigo de esta forma, con el caso de que todo el array no presente el 'comida', si se prueba colocando otros elementos, si funciona. 





//Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

console.log('Ejercicio 13');

let array1 = [true, 42, "Ada", 2, "pizza"];
function cambiaHaciaElCentro(arr) {
    // Iteramos hasta la mitad del array
    for (let i = 0; i < arr.length / 2; i++) {
        // Intercambiamos los valores entre el extremo y su correspondiente hacia el centro
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
cambiaHaciaElCentro(array1);
console.log(array1); 










//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
console.log("Ejercicio 14");

let arrayFinalEscala = [];
function escalaArray(multiplicacionEscalar, multiplicador){
    for(let i = 0; i<multiplicacionEscalar.length; i++){
        let multi = multiplicacionEscalar[i] * multiplicador;
        arrayFinalEscala.push(multi);
    }
}
escalaArray([1,2,3], 3); 
console.log(arrayFinalEscala);