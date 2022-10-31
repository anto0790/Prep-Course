// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  const array = [];

  for (var clave in objeto) {
    array.push([clave, objeto[clave]]);
  }

  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  const objectSt = {};
  var letra, num;

  for (var i = 0; i < string.length; i++) {
    letra = string.charAt(i);

    if (estaLetra(letra, objectSt) == false) {
      num = cuentoLetra(letra, string);
      objectSt[string.charAt(i)] = num;
    }
  }

  return objectSt;
}

function estaLetra(lett, obj) {
  var estaL = false;
  var claves = Object.keys(obj);

  for (var i = 0; i < claves.length && estaL === false; i++) {
    if (claves[i] === lett) {
      estaL = true;
    }
  }

  return estaL;
}

function cuentoLetra(lett, st) {
  var total = 0;

  for (var i = 0; i < st.length; i++) {
    if (st.charAt(i) === lett) {
      total++;
    }
  }

  return total;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var sMayus = '';

  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      sMayus += (s.charAt(i));
    }
  }

  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toLowerCase()) {
      sMayus += (s.charAt(i));
    }
  }

  return sMayus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var strEspejo = '';
  var palabra = '';
  var pInv = '';

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      pInv = invierto(palabra);
      strEspejo += pInv;
      strEspejo += str.charAt(i);
      palabra = '';
    }
    palabra += str.charAt(i);

    if (i === str.length - 1) {
      pInv = invierto(palabra);
      strEspejo += pInv;
    }
  }

  return strEspejo;
}

function invierto(p) {
  var inv = '';

  for (var i = p.length; i > 0; i--) {
    inv += p.charAt(i);
  }
  if (p.charAt(i) != ' ') {
    inv += p.charAt(i);
  }
  if (p.length === 1) {
    inv = p;
  }

  return inv;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var esCapicua = false;
  var esCapi;

  if (numero < 10) {
    esCapicua = true;
  }
  else {
    numDij = [...`${numero}`];
    esCapicua = esCapicuaPrimo(numDij, numDij[0], numDij[numDij.length - 1], esCapicua);
  }

  if (esCapicua === true) {
    esCapi = "Es capicua";
  }
  else {
    esCapi = "No es capicua";
  }

  return esCapi;
}

function esCapicuaPrimo(num, pri, ult, ec) {
  if (num.length <= 2) {
    if (pri === ult) {
      ec = true;
    }
  }
  else {
    if (pri === ult) {
      num.shift();
      num.pop();
      ec = esCapicuaPrimo(num, num[0], num[num.length - 1], ec);
    }
  }

  return ec;
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var cadenaModif = '';

  for (var i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) != 'a' && cadena.charAt(i) != 'b' && cadena.charAt(i) != 'c') {
      cadenaModif += cadena.charAt(i);
    }
  }

  return cadenaModif;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var arr2 = [];
  var elem ='kdhfkushfsuhfudhsfhsdihfuisdhufusdhfdsduhfdushf';
  var iAux;

  while(arr2.length < arr.length){
    for(var i=0; i<arr.length; i++){
      if(arr[i] != null){
        if(arr[i].length < elem.length){
          elem=arr[i];
          iAux=i;
        }
      }
    }
    arr2.push(elem);
    arr[iAux]= null;
    elem='kdhfkushfsuhfudhsfhsdihfuisdhufusdhfdsduhfdushf';
  }

  return arr2;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var arr3=[];

  for(var i=0; i<arreglo1.length; i++){

    for(var j=0; j<arreglo2.length; j++){

      if(arreglo1[i]===arreglo2[j]){
        arr3.push(arreglo1[i]);
      }
    }
  }

  return arr3;
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

