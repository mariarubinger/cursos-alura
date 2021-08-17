import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; //atributo estático
    agencia;
    _cliente;
    _saldo = 0; //atributo privado
    // #saldo = 0; proposta de atributo privado mas não usado oficialmente 

    
   //GET E SET (de modo a encapsularmos comportamentos dos atributos da classe)

    //é um assessor do tipo atribuição - não é um método
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    //assessor do tipo get - pega o valor e retorna
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
        //console.log(this.#saldo);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}