    //function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
    // Probando primer commit
    // Tu código aca:
    
    array = [1, 'Henry', 2]
    nuevoArray = []
    
    for (i = 0; i < array.length; i ++){
        if (Number.isInteger(array[i]) == true){
        nuevoArray.push(array[i])}    
    }
    console.log(nuevoArray)