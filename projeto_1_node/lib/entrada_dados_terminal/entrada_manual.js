const {computarValores} = require( "../1122/algoritmo_prog_dinamica")
const { rl } = require("./interface_entrada_saida");

const entrada_manual =()=>{
    let n=-1,f;
    let vetor=[];
    const leituraRecursiva = async ()=>{
        if(n==-1){
            
            rl.question("Digite dois numeros separados por espaço: \n",data=>{
                n = parseInt(data.split(" ")[0])
                f = parseInt(data.split(" ")[1])
                if (n == 0 && f == 0){
                    process.stdin.pause()
                }else{
                    leituraRecursiva()
                }
                
            })
        }else{
            if(vetor.length == n){
                let resposta = computarValores()
                const imprimir = await resposta(n,f,vetor)
                console.log(imprimir)
                n=-1, f=0, vetor = [];
                leituraRecursiva()
            }
            rl.question(`Transação numero ${(vetor.length+1)}: `,data=>{
                vetor.push(parseInt(data))
                leituraRecursiva()
            
            })
        }
    }
    leituraRecursiva()
}

exports.entrada_manual = entrada_manual;