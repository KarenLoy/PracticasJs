/* 1. Open a repl.it Javascript page and call it Algorithms Introduction Exercise 1.
2. Write a program where a user enters the number of tasks they have completed.
The program returns one of the following labels to the console:
**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
based on the conditions:
• Failed if they scored 6 or less
• Insufficient if they scored > 6 but less than 9 (9 included)
• Good if they scored > 9 but less than 14 (14 included)
• Excellent if they scored 15
• Error if participants enter a negative number or a number outside the range
supported (outside 0 - 15)
*/
let dato=prompt("Añade el numero de tareas:");
• if(dato == 0 && dato <=6){
• alert("Failed")
• } else
• if(dato>6&&dato<=9){
• alert("Insufficient")
• }
• else
• if(dato>9&&dato<=14){
• alert("good")
• }
• else
• if(dato == 15){
• alert("Excelent")
• }
• else
• if(dato<0){
• alert("error")
• }
• else
• if(dato>15){
• alert("error")
• }

/*1. Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
2. Write an algorithm to find the largest among 5 different numbers entered by the
user.
3. Print out the largest number to the console.*/
let n=5; // Longitud del array
5. let numero=[]; // Declarando el array
6.
7. // Ciclo para escanear los números
8. for(let i=0;i<n;i++){
9. numero[i] = parseInt(prompt("Ingrese un número: "));
10.}
11.
12.let maximo=numero[0]; // Declara como maximo el primer elemento del array
13.
14.// Ciclo para determinar el máximo
15.for(let i=1;i<n;i++){
16. if(numero[i]>maximo){ // Condicional para saber si el número es mayor
o no
17. maximo=numero[i];
18. }
19.}
20.
21.console.log("El máximo es: " + maximo);

/* PRACTICA 3
1. Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
2. We have 3 items and we know the price for each. However, we can only buy the
two least expensive items.
3. Write an algorithm that takes in three user inputs and outputs the two smallest
prices to the console. */
let articulo1 = parseInt(prompt("Introduce el precio del artículo: "));
let articulo2 = parseInt(prompt("Introduce el precio del artículo: "));
let articulo3 = parseInt(prompt("Introduce el precio del artículo: "));
let articulos = [articulo1,articulo2,articulo3];
articulos.sort();
articulos.splice(0,1);
console.log("Articulo 1-> " + articulos[0] + "\n" +
"Articulo 2-> " + articulos[1] + "\n");