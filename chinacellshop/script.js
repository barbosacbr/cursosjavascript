
let numeroUsuario;

do{

    numeroUsuario = Number(prompt('Bem vindo a CHINACELL SHOP.com\n A MELHOR LOJA DIRETO DA CHINA COM PRODUTOS OLIGINAIS! \n O que deseja? Digite a opção escolhida\n\n1 - Para adquirir celulares até R$ 2000,00 \n2 - Para adquirir elulares até R$ 5000,00 \n3 - Para adquirir elulares até R$ 7000,00 \n4 - Encerrar'));

    switch(numeroUsuario){

        case 1:
            alert("Confila os modelos até R$ 2000,00 que temos aqui na CHINACELLSHOP.com! :) \n\n Moto G Power por APENAS R$ 2000,00 \n Xiaomi Redmi Note 10 por APENAS R$ 1999,90 \n Samsung Galaxy A32 por APENAS R$ 1999,99")
        break ; 
        case 2:
            alert("Confila os modelos até R$ 5000,00,00 que temos aqui na CHINACELLSHOP.com! :) \n\n iPhone 13 por APENAS R$ 4800,00 \n OnePlus 9 por APENAS R$ 4900,90 \n Xiaomi Mi 11 por APENAS R$ 4600,99")
        break ;
        case 3:
            alert ("Confila os modelos até R$ 7000,00 que temos aqui na CHINACELLSHOP.com! :) \n\n PROMOÇÃO LIMITADA! iPhone 15 PRO MAX por APENAS R$ 6999,00 \n PROMOÇÃO IMPERDÍVEL!!! Samsung Galaxy S22 por APENAS R$ 6400,90 \n Google Pixel 6 Pro por APENAS R$ 6300,99")
        break ; 
        case 4: 
            alert ("Obligado por visitar a CHINACELLSHOP.com :) VOLTE SEMPRE! ")
        break ;
            default:
                alert("Erro. Digite o número correto."); 
            
    }
}while (numeroUsuario != 4)
    