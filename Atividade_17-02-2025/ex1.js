const prompt = require('prompt-sync')();

let saldo = 1000;
let input;

do {
    console.log("1- Ver saldo");
    console.log("2- Sacar");
    console.log("3- Depositar");
    console.log("4- Sair");

    input = prompt('Escolha uma opção: ');

    if (input == "1") {
        console.log("Seu saldo é: R$ " + saldo);
    } 
    else if (input == "2") {
        const valorSaque = prompt('Digite o valor a ser sacado: ');

        if (valorSaque <= saldo) {
            saldo = saldo - valorSaque;
            console.log("Saque realizado com sucesso");
            console.log("Seu novo saldo é: R$ " + saldo);
        } else {
            console.log("Saldo insuficiente");
        }
    } 
    else if (input == "3") {
        const valorDeposito = prompt(Number('Digite o valor a ser depositado: '));
        saldo = saldo + Number(valorDeposito);
        console.log("Depósito realizado com sucesso");
        console.log("Seu novo saldo é: R$ " + saldo);
    } 
    else if (input == "4") {
        console.log("Saindo");
    } 
    else {
        console.log("invalido");
    }

} while (input !== "4");