// metodo de string "Slice" fatia parte declarada de uma string a partir da entrada de 1 ou 2 numeros

const text = "Preciso de um emprego";

const fatia = text.slice(0, 7); // limitando leitura do index com 2 de numeros
const fatia2 = text.slice(-7); // anda no index de tras pra frente 

console.log(fatia, fatia2);