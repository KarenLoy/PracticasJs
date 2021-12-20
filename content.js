// Exercise #1
// Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.
 
 
function big(arr){
    var ini = arr[0];
    for(var i=0; i<arr.length; i++){
       
        var cadena = arr[i];
        //console.log(cadena);
 
        if(cadena >= ini ){
            ini = cadena;
 
        }
         
    }
    console.log(ini);
}
 
big([3, 5, 7, 1, 6]);


//ejercicio 2
const numeros = [3, 5, 1, 7, 6]
numeros.sort (function (x,y){
    return y-x
});
console.log(numeros);

//Exercise #3
function bigger(arr){
 
    big = [];
    for(var i=0; i<arr.length; i++){
        var max = arr[i][0];
        //console.log(max);
        for(var j=0; j<arr[i].length; j++){
            var actual = arr[i][j];
            if(actual >= max){
                max = actual;
               
            }
        }
       
        big.push(max);
       
    }
 
        var uno = big[0];
        var dos = big[1];
        //console.log(dos);
 
        if(uno>=dos){
            console.log(uno);
        } else {
            console.log(dos);
        }
    //console.log(big);
}
 
bigger([[9, 52, 7, 41, 16], [3, 45, 6, 9, 5]]);


