//https://github.com/generation-org/JS/tree/master/JS-08%20-%20Introduction%20to%20Object%20Oriented%20Programming
/* Parte 1 JavaScript
Cree una clase llamada Persona que acepte el nombre de una persona como una cadena y su edad como un número.

La clase Person debe tener un método llamado Describe que devuelve una cadena con la siguiente sintaxis: "nombre, edad años".

Por ejemplo, si Manny tiene 19 años, la función Describe de su objeto devolverá "Manny, 19 años". */


class persona{
    constructor(nombre,edad){
        this.nombrePersona = nombre;
        this.edadPersona = edad;
    }

    describe(){
        return (this.nombrePersona+  ", " +this.edadPersona+ " años")
    }
}
var nom = prompt("Ingresa tu nombre");
var ed = prompt("ingresa tu edad");

let persona1 = new persona(nom,ed);
document.getElementById("id").innerHTML = persona1.describe();


/* HTML de la parte 2
Cree una página HTML que tenga 2 cuadros de entrada: uno para el nombre y otro para la edad. Cuando alguien ingresa un nombre y una edad, la página mostrará una lista de "{Nombre}, {x} años".*/

class usuarios{
    constructor(nom,edad){
    this.Name = nom,
    this.Age = edad;
    }

datosUsuario(){
    return (this.Name+ ", " + this.Age)
}

}
var Nombre = document.getElementById("Name")
var Edad = document.getElementById("age")
var Enviar = document.getElementById("submit").addEventListener("click", myFunction);

function myFunction(){
    let usuario = new usuarios(Nombre,Edad)
    localStorage.getItem(usuario);
    var Elemento = document.getElementById("lista").createElement("li");
    var usuario1 = usuario.datosUsuario();
    Elemento.innerHTML = localStorage.setItem(usuario1);
}





