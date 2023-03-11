    function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
    //num = 11711
    var aString = num.toString();
    var nuevoArray = aString.split("").reverse().join("")
    console.log (nuevoArray);
        if (nuevoArray == aString){
            console.log (true);
        }   else console.log (false);
    }
    numeroSimetrico("11711") 
  
  
  