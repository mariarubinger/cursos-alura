import { Conta } from "./Conta.js";

//Conta Salario vai herdar da classe Conta
//super - valor inicial 0 e agencia 100
export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}