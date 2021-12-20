/*Ejercicio #1
We want to check if a string is empty. If a string is not empty, we want to print out the first
character of that string. If a string is empty, print out a text saying "This string is empty".
 */
function checkEmptyString(str) {
    if(str){
    console.log(str.charAt(0));
    }else{
    console.log("This string is empty");
    }
}

/*Ejercicio #2
We want to compare two strings and check if they are the same - case insensitive.* Return a boolean -
true if the two strings are the same, and false if they are not. */

let cad1 = prompt("contraseña");
let cad2 = prompt("escribe nuevamente tu contraseña");
function validar2(password1,password2){
if (password1==password2){
console.log(true);
} else {
console.log(false);
}
}
validar2(cad1,cad2)
