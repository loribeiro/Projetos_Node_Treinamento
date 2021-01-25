
const computarValores=() =>{
    var positivo = [];
    var negativo = [];
    var soma_pares = {}

    function testarCaminhos(posicao,n,f,transacoes, soma){
        if(posicao == transacoes.length){
            if (soma == f){
                return true;
            }else{
                return false;
            }
    
        }
        if([posicao,soma] in soma_pares ){
            return soma_pares[[posicao, soma]];
        } 
        
        let pares =  testarCaminhos(posicao+1, n,f,transacoes, soma + transacoes[posicao]);
        let impares = testarCaminhos(posicao+1, n,f,transacoes, soma - transacoes[posicao])
        
        if(pares == true && impares == true){
            positivo[posicao] = true;
            negativo[posicao] = true;   
        }else if (pares == true && impares == false){
            positivo[posicao] = true;
        }else if(pares == false && impares == true){
            negativo[posicao] = true;
        }
        
        return soma_pares[[posicao,soma]] = (pares || impares) ? true : false;
    
    }

    async function solicitarBusca(n,f,transacoes){
        positivo =[], negativo = [], soma_pares={};
        return testarCaminhos(0,n,f,transacoes,0)
    }

    function retornarResposta(tamanho){
        let resposta = "";
        for(i=0;i<tamanho;i++){
            if(positivo[i] == negativo[i]){
                resposta = resposta + "?"
            }else if(positivo[i]== true){
                resposta = resposta + "+"
            }else if(negativo[i]){
                resposta = resposta + "-"
            }
        }
        
        return resposta
    }

    async function executar(n,f,transacoes){
        try {
            const data = await solicitarBusca(n, f, transacoes);
            if (data == false) {
                return "*"
            }else{         
                return retornarResposta(transacoes.length)
            }           
        } catch (err) {
            return err;
        }
    }
    return executar
}
exports.computarValores = computarValores;