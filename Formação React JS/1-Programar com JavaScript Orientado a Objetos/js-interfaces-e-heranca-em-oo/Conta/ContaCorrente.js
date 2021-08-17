import { Conta } from "./Conta.js";

//Herança 
//a classe ContaCorrente herda as propriedades e métodos da classe Conta
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        //super é uma referência da classe pai
        //super é uma palavra especial pra chamar o Construtor da classe pai ue nesse caso é a Classe Conta
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //está sobrescrevendo o comportamento do método sacar()
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}