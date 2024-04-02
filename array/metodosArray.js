/* console.log("ola")

let lista =["bernardo","ricardo","julia", "maria", "georgia"]

console.log(lista)

let encontrar = lista.find(element => element.incluedes("B")); //encontrar um dado dentro de um array 


console.log(encontrar)
 */

const dados = [ {
    nome:"Wallis",
    profissão:"Educador",
    cidade:"São Paulo",
},{
    nome:"Souza",
    profissão:"Motorista",
    cidade:"São Paulo",
}]

let encontrarItem = dados.find(item => item.nome == "Souza");

console.log(encontrarItem) // Encontrar itens dentro de um objeto.





