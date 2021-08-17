//Classe abstrata - nunca pode ser construída diretamente, mas ela pode ser herdada
//Essa classe serve apenas como base para outras classes que irão herdar seu comportamento, suas características
//Classes abstratas são pensadas de forma que elas apenas possam ser herdadas por outras, elas nos ajudam a criar abstrações no código e a compartilhar código entre outras classes

//encapsulamento - Uma maneira de agrupar os dados e os métodos que usam os dados.
//proteger o saldo, proteger o cliente, vai utilizar o get, o set,

export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        //throw é lançar e new Error é um novo objeto de Erro
        //instanciar = criar um objeto de determinada Classe
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //É um Método Abstrato: não é feito para ser chamado direto, é um método para ser sempre subscrito
    //métodos abstratos devem ser sobrescritos pelas classes filhas
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;           
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}