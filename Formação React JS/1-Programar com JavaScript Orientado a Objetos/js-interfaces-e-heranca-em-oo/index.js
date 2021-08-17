import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//instanciar um novo Diretor:

const diretor = new Diretor("Maria", 10000, 14045022200);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Angela", 5000, 14045033322);
gerente.cadastrarSenha("101010");

// método estático login (diretor, senha)

const cliente = new Cliente("Lais", 78945612379,"456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "101010");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);







/*
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
//contaCorrenteRicardo.depositar(500);
//contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);
console.log(contaPoupanca);
console.log(contaCorrenteRicardo); */