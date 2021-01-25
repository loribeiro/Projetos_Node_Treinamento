
function obterParametro(flag){
    let indexAfterFlag = process.argv.indexOf(flag) +1
    return process.argv[indexAfterFlag]
}

function main(){
    const mode = obterParametro("--mode")
    if(mode == undefined || mode  == "shell"){
        const {entrada_manual} = require("./lib/entrada_dados_terminal/entrada_manual")
        entrada_manual()
    }else if(mode == "server"){
        const {server} = require("./server/server")
        console.log("servidor iniciado.. porta:8080")
        server.listen(8080);
    }
}
main()