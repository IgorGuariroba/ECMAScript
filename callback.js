/**
 * SIMULANDO O ENVIO DE E-MAIL
 * @param {*} corpo 
 * @param {*} para 
 */

function enviarEmail(corpo, para, callback){
    // function com um time de tempo para ser executada
    setTimeout(() => {

        var error = false;

        if(error){
            callback(true,"Envio de e-mail falhou!");
        }else{
        callback(false,"OK",5,"8s");
        }
        
    }, 3000)   
}


console.log("inicio do envio de e-mail")
// terceiro parametro
enviarEmail("Oi, Sejá bem vindo!", "1g0r.guari@gmail.com", (erro,status,amount,time) => {
    
    if(erro == true){
        console.log("ops " + status);
        
    }else{
        console.log(`
        E-mail enviado!

        Status: ${status}
        -----------------
        Contatos: ${amount}
        ------------------
        Tempo de envio: ${time}
        `);
    }
    
});
