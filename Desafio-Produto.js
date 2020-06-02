// Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.
// Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

function produto(numeros){
    var resultado = numeros[0];
    for(var i = 1; i < numeros.length; i++){
        var resultado = resultado * numeros[i];
    }

    return resultado;
} 
