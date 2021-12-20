//Exercise #1
var arr = ["This", "is", "a", "sentence."];
function printOutString() {
        const arr = ["This", "is", "a", "sentence"]
        arr2 = arr [0]+ " " +arr [1]+" " +arr [2]+ " " +arr [3];
        console.log (arr2)
    }
 
printOutString();

//Exercise #2
const numbers = [];
 
let number = prompt("Digite un numero");
numbers.push(number);
    let number2 = prompt("Digite otro numero");
    numbers.push(number2);
        let number3 = prompt("Digite uno mas numero");
        numbers.push(number3);
 
console.log(numbers);
 
valor1 = numbers[0];
valor1 = valor1*2;
console.log(valor1);
        valor2 = numbers[1];
        valor2 = valor2*2;
        console.log(valor2);
                valor3 = numbers[2];
                valor3 = valor3*2;
                console.log(valor3);

// Exercise #3
const numbers = [];
 
let number = prompt("Digite un numero");
numbers.push(number);
let number2 = prompt("Digite otro numero");
numbers.push(number2);
let number3 = prompt("Digite uno mas numero");
numbers.push(number3);

console.log(numbers);

valor1 = numbers[0];
console.log(valor1);
valor2 = numbers[1];
console.log(valor2);
valor3 = numbers[2];
console.log(valor3);

var suma = parseInt(valor1) + parseInt(valor2) +       parseInt(valor3);

//Ejercicio #4
var student1Courses = ['Math', 'English', 'Programming'];
        var student2Courses = ['Geography', 'Spanish', 'Programming'];
        if (student1Courses === student2Courses)
        {
            console.log(student1Courses);
            console.log(student2Courses);
        }
        else{
            console.log("Los arreglos no son iguales")
}

// Ejercicio #5
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people); 
people.splice(1, 1)
people.splice(2, 1)
//Son para poner a Luis hasta el frente
people.splice(1, 1)//borra a Luis
people.unshift("Luis");// Lo inserta hasta adelante
//Agregar 
people.push("Azahid");
console.log(people);
var a = parseInt(people.indexOf("Maria")) + 1;
var i = 0 ;
do {
console.log(people [i]);
i ++
} while (i < a);
console.log(people.indexOf("Maria"));



