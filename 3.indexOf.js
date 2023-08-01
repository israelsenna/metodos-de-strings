//saber se um email e valido
// tem q ter um @
//tem q ter pelo menos um ponto depois do @

const possivelEmail = "israel.senna@hotmail.com";

const indexArroba = possivelEmail.indexOf("@");

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisicoes");
} else {
    console.log("Nao ha nenhum ponto apos o arroba.");
}