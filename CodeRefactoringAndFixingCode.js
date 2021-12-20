// Code Refactoring & Fixing Code ejercicio #1
function someFunction(list) {
    if (list.length === 0) {
    return 0;
    } else{
    return list.length;
}
}
console.log(someFunction(nombres));
/* funcion para determinar el largo de una cadena*/

//Codigo exercise 2
function gradeLabel() {
    let grade = parseInt(prompt("Enter your grade")); //Se establece la variable grade con el mensaje Introduce tu calificacion
    if (grade < 6 && grade >= 0) { //Si la calificacion es menor que 6 y mayor que 0
        console.log("Failed");
    } else if (grade > 6 && grade <= 9) { //Si la calificacion es mayor a 6 y menor a 9
        console.log("Insufficient");
    } else if (grade > 9 && grade <= 14) { //Si la calificacion es mayor a 9 pero menor que 14
        console.log("Good");
    } else if (grade == 15) { //Si la calificacion es igual a 15 muestra este mensaje
        console.log("Excellent");
    } else {
        console.log("Error, outside of bounds") //Si no cumple cualquier otra condicion arroja este mensaje
    } return;
}
 
gradeLabel();


