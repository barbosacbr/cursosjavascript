function olaMundo (){
    console.log("ola mundo")

}

olaMundo()

function somar(n1,n2){
    console.log(n1+n2)


}
somar(5,5)

let idadeSamuel = 10

function verificarIdade () {
    if(idadeSamuel > 10){
        idadeSamuel = 5

    }
    return idadeSamuel

}

console.log(`o Samuel tem ${verificarIdade(idadeSamuel)}`)


function tempo(){
    setTimeout( () => alert ("o tempo terminou"), 1000)

   }   //executa uma ação após a contagem do tempo estimulado.

tempo ()
const tempoInverval = setInterval (() => {
console.log("um segundo se passou")
},100)

