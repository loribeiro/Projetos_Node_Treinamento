
function executeTransformText(){
    
    function treatText(streamEntrada, streamSaida, transformFunction){
        streamEntrada.pipe(transformFunction).pipe(streamSaida)   
    }

    function execute(streamEntrada, streamSaida, transformFunction){   
        return treatText(streamEntrada,streamSaida, transformFunction)
    }
    
    return execute
}

exports.executeTransformText = executeTransformText;