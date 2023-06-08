function calcularEndereco(listaComandos){
    var endereco = 0;

    for (let i = 0; i < listaComandos.length; i++) {
        var comandoString = listaComandos[i].toString();
        if(comandoString.substr(0, 2) == "20"){
            var acrecenta = parseInt(comandoString.substr(2));
            endereco = endereco + acrecenta;
        }else if(comandoString.substr(0, 1) == "5"){
            var pula = parseInt(comandoString.substr(1));
            i = i + (pula - 1); 
        }  
    }

    return endereco;

}
module.exports = calcularEndereco;