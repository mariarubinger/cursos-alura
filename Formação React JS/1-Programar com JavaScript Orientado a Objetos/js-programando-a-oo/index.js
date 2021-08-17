import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
//console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

//conta2.cliente = null; //nesse caso se quiser que vem nulo, caso contrário, se não definir vem como Undefined por padrão

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

//conta2.saldo = 30000;
//console.log(conta2.saldo);

//console.log("valor: ", valor)
console.log(cliente2);

console.log(contaCorrenteRicardo);


console.log(ContaCorrente.numeroDeContas);

//console.log(cliente1);
//console.log(cliente2);