const {Transform} = require("stream");


class substituirTexto extends Transform{
    constructor(funcaoParaManipularTexto){
        super();
        this.manipularTexto = funcaoParaManipularTexto;
    }
    _transform(chunk,encoding,callback){
        const transformChunk = this.manipularTexto(chunk.toString());
        this.push(transformChunk);
        callback();
    }
}

module.exports = substituirTexto;
 
