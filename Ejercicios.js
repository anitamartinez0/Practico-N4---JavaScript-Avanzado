    // Instrucción:
    // Dada una cadena, escriba una función recursiva para devolver la cadena invertida. */// Ejemplo:
    // => 'divoco'
    //cadena inversa('covid')
    // Aqui tu codigo
    
    function CadenaInvertida(str) {

        if (str === "")
          return "";
        else
          return CadenaInvertida(str.substr(1)) + str.charAt(0);
    }
    
    console.log(CadenaInvertida("divoc"));


    // Instruction:
    //Dada una matriz, escriba una función recursiva para encontrar el entero más grande en una matriz. */// Ejemplos:
    //maxOf([1, 4, 5, 3])
    // => 5
    //maxOf([3, 1, 6, 8, 2, 4, 5])
    // => 8
    //Aqui tu codigo

    function EnteroMasGrande(array) {

        if (array.length === 1){ 
            return array[0]
        } else if(array[0]>array[array.length-1]){
            array.pop()
            return EnteroMasGrande(array) 
            } else {
            return EnteroMasGrande(array.slice(1) )
        }
    }
    
    console.log(EnteroMasGrande([1, 4, 5, 3]))
    
// Instrucción:
//Dada una cadena, escriba una función recursiva para imprimir una matriz de todas las permutaciones posibles de la cadena. */// Ejemplos:
//permutaciones('abc')
// => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//permutaciones('aabc')
// => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", " cbaa"]
//Aqui tu codigo

function Permutaciones(str){
    var nuevo = [];

    if(str.length === 1){
        nuevo.push(str)
        return nuevo
    }

    for(var i=0; i<str.length; i++){
        var primero = str[i];
        var segundo = str.substring(0,i) + str.substring(i+1);
        var segundo1 = Permutaciones(segundo);

        for(var j=0; j<segundo1.length; j++){
            nuevo.push(primero + segundo1[j])
        }
    }
    return nuevo;    
}
console.log(Permutaciones('abc'));

 
    // Usa closures para crear un cache para la funcion cb.
    // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
    // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
    // deberia retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // Aqui tu codigo

    function cacheFunction(cb) {

    }
