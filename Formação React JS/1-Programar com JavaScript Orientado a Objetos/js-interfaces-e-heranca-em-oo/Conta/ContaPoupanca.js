import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    //propriedade de instância
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}