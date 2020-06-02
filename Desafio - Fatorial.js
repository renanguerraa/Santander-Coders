// Escreva uma função fatorial, que calcule o fatorial de um número.

function fatorial(numero){
    var fatorial = 1;
    for(var i = 1; i < numero; i++){
        fatorial = fatorial * (i + 1);
    }

    return fatorial;
}
