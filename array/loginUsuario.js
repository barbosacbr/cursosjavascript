let dadosClientes = [
    
{
nome:"paulo",
email:"paulo@figueirense.com.br",
password:"figueira2024",
},

{
nome:"samuel",
email:"samucadamae@gmail.com",
password:"samucadamamae2",
},

{
nome:"marcon",
email:"marcon@figueirense.com",
password:"miau65",
},{
nome:"yasmin",
email:"yasmin@hotmail.com",
password:"tecoetco3",
},{
nome:"garfield",
email:"garfield23@hotmail.com",
password:"garfield2",
},{
nome:"lucas",
email:"lucas78@hotmail.com",
password:"lucasdamae",
},{
nome:"henrique",
email:"henriquedamae2@hotmail.com",
password:"damae2",
},{
nome:"weiles",
email:"weiilessilva@hotmail.com",
password:"miau65",
},{
nome:"gabriel",
email:"gabriel@ides.com",
password:"ides87",
},{
nome:"hugo",
email:"hugoboss@hotmail.com",
password:"miau65",
},{
nome:"pepito",
email:"pepito@ides.com",
password:"pepitodaides91",
},]


let repetir = false
while(repetir != true){
let emailUsuario = prompt("Digite seu e-mail")
let passwordUsuario = prompt ("Digite sua senha")

let encontrar = dadosClientes.find(element => element.email == emailUsuario && element.password == passwordUsuario)

console.log(encontrar)
    if(encontrar){
        alert("Login efetuado com sucesso!!!")
        repetir = true
}else{
    alert("E-mail ou senha incorreto")
}
}











// Imprimir o password do garfield
/* 
let usuario = "gabriel@ides.com";
let password = "ides87"

if(usuario == dadosClientes[8].email && password == dadosClientes[8].password){
    console.log("FOI, WALLIS!!!!!!!!!")
}else{
    console.log("NÃO FOI, WALLIS!!!!!!!!!!")
}
 */













