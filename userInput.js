/* Create a function that takes in 2 inputs (using prompt) and goes through the 5 arithmetic
operators (+, -, /, *, %). The expected output on the console is:
* `The sum is x` -> x is the calculated sum
* `The subtraction is y` -> y is the calculated difference
* `The multiplication is z` -> z is the calculated multiplication
* `The division is w` -> w is the calculated division
* `The remainder is q` -> q is the calculated remainder */
function mathematicOperations() {
    let dato1= parseInt(prompt("Ingrese el primer numero:"));
    let dato2=parseInt(prompt("Ingrese el segundo numero:"))
    suma=dato1+dato2;
    alert("La suma es:"+suma);
resta=dato1-dato2;
    alert("La resta es:"+resta);
    mult=dato1*dato2;
alert("la multiplicación es:"+mult);
div=dato1/dato2;
alert("La división es:"+div);
rem=dato1%dato2;
alert("El restante es:"+rem)
}
mathematicOperations();
