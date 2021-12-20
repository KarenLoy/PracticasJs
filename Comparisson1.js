/*Ejercicio #1
Create a function that takes in one number and checks if the number is greater than 10. Print
out to the console true if it is greater and false otherwise.*/
let num = parseInt(prompt("Introduce un numero"));
if(num>=10){
console.log(true);
} else{
console.log(false);
}
/* Ejercicio #2
Create a function that takes in one number and checks if it is divisible by 4 or divisible by 9.
Print out to the console true if a number if divisible by 4 or 9, and false if a number is not
divisible by either number.*/

let num = parseInt(prompt("Escribe un numero"));
let residuo = num % 4;
let residuo2 = num % 9;
if (residuo == 0 || residuo2 == 0){
Console.log(true);
} else {
Console.log(false)
}

