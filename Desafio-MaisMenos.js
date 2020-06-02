// Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

// 1. na primeira posição, a fração de números que são positivos
// 2. na segunda posição, a fração de números que são zero
// 3. na última posição, a fração de números que são negativos
// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

function maisMenos(array){
    var aux1 = 0;
    var aux2 = 0;
    var aux3 = 0
    var resultado = [];

    for(var i = 0; i < array.length; i++){
        if(array[i]  > 0){
            aux1++;
        }

        if(array[i] === 0){
            aux2++;
        }

        if(array[i] < 0){
            aux3++;
        }
    }

    resultado.push(aux1/array.length);
    resultado.push(aux2/array.length);
    resultado.push(aux3/array.length);

    return resultado;
}
