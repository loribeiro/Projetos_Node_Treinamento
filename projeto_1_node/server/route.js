const url = require('url');

function requisicao(){
    function response_1122(requisicao,response){
        requisicao.on("data",async (chunk)=>{
            const entrada = JSON.parse(chunk.toString())
            const {computarValores} = require( "../lib/1122/algoritmo_prog_dinamica")

            if(entrada.n === entrada.transacoes.length){
                let checarTransacao = computarValores()
                const resposta = await checarTransacao(entrada.n, entrada.f, entrada.transacoes)
                response.end(resposta)
            }else{
                let mensagem = `Entrada em formato errado.\n
                 Por favor, utilize o formato de entrada disponível em: \n 
                 /1122 \n ou \n /video`
                
                 response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end(mensagem);
            }
            
        })
    }
    function response(requisicao, response){
        const reqUrl = url.pathToFileURL(requisicao.url)
        if(reqUrl.pathname === "/1122"){
            response_1122(requisicao,response)
        }else{
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Conteudo não encontrado.\n Conteudos disponiveis em: \n /1122 \n ou \n /video');       
        }
       
    }
    return response
}

exports.requisicao = requisicao;