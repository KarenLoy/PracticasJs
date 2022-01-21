//https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions
/* Ejercicio 1.
Tienes una lista de nombres: var names = ["Maria", "Antony", "Joy", "Juan"]*/ 

// parte 1. Escriba una función para insertar un nombre al final de la lista. Agregue su propio nombre al final de la lista.

var names = ["Maria", "Antony", "Joy", "Juan"];
console.log(names)
function agregar(){
    names.push("Karen"); /*agrego mi nombre al final del arreglo */
    console.log(names);
}  /* funcion para agregar un nombre al final del arreglo*/
agregar(); 

// parte 2. Escribe una función que tome un nombre y verifique si la lista tiene ese nombre. Debería devolver un booleano - verdadero/falso.

var lista = ["Karen","Ruben","Rubi"];
function tomarNombre(){
    var nombre = prompt("escribe un nombre");
    if (nombre === lista){
        console.log(true);
    }else {
        console.log(false);
    }
}
tomarNombre();

// parte 3. Escribe una función que tome una lista de nombres. Esta función debería comparar la lista tomada en la nameslista que tiene actualmente. La función debe devolver una matriz con los nombres que están en ambas listas.

function matriz(){
    var names2 = ["Neto", "Maria", "Felix", "Juan"];
    var matriz1=[[],[]];
    var contador=0;
    for(let j=0;j<names.length;j++){
        names[j];
        for(let u=0;u<names2.length;u++){
        if(names2[u]==names[j]){
            matriz1[0][contador]=names2[u];
            matriz1[1][contador]=names2[u];
            contador++;
        }
    }
    }
    console.log(matriz1);
}

// parte 4. Escriba una función que tome una lista de nombres y devuelva una lista de números enteros con la longitud de los nombres en el mismo orden en que se recibieron. Sugerencia para usar la función de empuje

function listInt(){
    var longitud=[];
    for(let i=0;i<names.length;i++){
        longitud.push(names[i].length);
    }
    console.log(names);
    console.log(longitud);
}

// Ejercicio 2. ¿A qué se refieren las siguientes expresiones?
/*
false || (true && false); 
true || (11 + 12);
(31 + 22) || true;
true && (1 + 7); 
false && (3 + 4);
(1 + 2) && true;
(32 * 4) >= 129;
false !== !true;
true === 4;
false === (847 === '847');
false === (887 == '887');
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
*/

// Ejercicio 3.Escribe una función que registre si un número está entre 0 y 25 (inclusive), entre 26 y 100 (inclusive), mayor que 100 o menor que 0.

function range(){

    var numberRange=90;   
    
    if(numberRange>0&&numberRange<=25){
        console.log(numberRange+" is between 0 and 25");
    }else if(numberRange>25&&numberRange<=100){
        console.log(numberRange+" is between 26 and 100");
    }else if(numberRange>100){
        console.log(numberRange+" is greater than 100");
    }else if(numberRange<0){
        console.log(numberRange+" is less than 0");
    }
    
    }
