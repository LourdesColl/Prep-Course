// No cambies los nombres de las funciones.

const { convertToRecursiveGlob } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array=[];
  for (var clave in objeto){
   array.push([`${clave}`, objeto[clave]])
  }
  return array;
  // var result= object.keys(objeto).map(function(key){
  //   return [Number(key), objeto[key]];
  // });

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var separar= string.split('')
// tengo q armar un objeto q tenga la letra y la cantidad de veces q se cuenta, uso this?
var objeto={}
for (var i=0; i< separar.length;i++){
  if (objeto.hasOwnProperty(separar[i])){ //si es q existe
    objeto[separar[i]]=objeto[separar[i]]+1
  } else {
    objeto[separar[i]]=1
  }
  // var contador=0
  // // for (var j=i+1; j<separar.length; j++){
  //   if (separar[i]===separar[j]){
  //     contador= contador+1
  //   } 
  //} 
//   objeto.separar[i]=contador

 }
console.log(objeto+" aquiiiiiiiiiiiiiiiiiiii")
return objeto

  // var array=[]
  // for (var clave in objeto)
  // array.push(`${clave}`, objeto[clave])

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var separar= s.split('')
   var stringmay=[]
   var stringmin=[]
  for (var i=0; i< separar.length; i++){
    if(separar[i].toUpperCase()===separar[i]){
      stringmay.push(separar[i])
    } else {
      stringmin.push(separar[i])
    }
  }
  var unimos=stringmay.join("")+stringmin.join("")
return unimos
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var separo= str.split(" ")
  var divido=[]
  for (var i=0; i< separo.length; i++){

    divido.push(separo[i].split("").reverse().join(""))
  }
return divido.join(" ")

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string= numero.toString()
  var invertido= string.split('').reverse().join('')
  //for (var i=0; i<numero.length; i++){
    if (string===invertido){
    return "Es capicua";
  } 
    else {
      return "No es capicua"
    }
 // }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var letra=cadena.split("")
  var letranueva=[];
  for(var i=0; i<letra.length;i++){
    if(letra[i]!=="a"&letra[i]!=="b"&letra[i]!=="c"){
      letranueva.push(letra[i])
    }
  }
   //letra.replace("a","")
   return letranueva.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 // for(var i=0; i<arr.length; i++){
   // for (var j=i+1; j< arr.length; j++){
 var ordenado= arr.sort((a,b)=>a.length- b.length)
 return ordenado 
 //   }
//  }
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3=arreglo1.concat(arreglo2);
  var nuevaarray=[]
  for (var i=0; i< arreglo3.length; i++){
    for (var j=i+1; j< arreglo3.length; j++){
      if(arreglo3[i]===arreglo3[j]){
        nuevaarray.push(arreglo3[i])
      }
    }
  }
  return nuevaarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

