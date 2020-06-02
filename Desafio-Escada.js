// Queremos representar uma escada com altura variável, utilizando um array de strings.

function escada(altura){
    var resultado = [];
    var degrau = "";
    var espaco = "";
    var escada1 = "";

    for(var i = 1; i <= altura; i++){
        degrau = "#".repeat(i);
        espaco = " ".repeat(altura - i);
        escada1 = espaco.concat(degrau);
        resultado.push(escada1);
    }

    return resultado;
}
