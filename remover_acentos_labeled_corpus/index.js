

async function removerAcentosStream(chunk){
  const removerAcentos = require("./lib/remove_acentos") 
  const lista_palavras = chunk.split(" ")
  var texto_tratado = ""
  
  for(let i =0; i<lista_palavras.length; i++){
      let palavra = lista_palavras[i].split("_")[0]
      let  classe =  lista_palavras[i].split("_")[1]
      texto_tratado = (texto_tratado === "" ? "" : (texto_tratado + " ") ) 
                        + removerAcentos(palavra) + (classe === undefined ? "" : ("_" + classe)) 
  }  
  
  return texto_tratado
  
}

module.exports = removerAcentosStream;
