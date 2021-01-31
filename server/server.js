const http = require("http")

const {requisicao} = require("../execute_transform")
const requestListener = function (request, response) {
    response.writeHead(200);
    resposta = requisicao()
    resposta(request,response)
  }
  
const server = http.createServer(requestListener);

exports.server = server;