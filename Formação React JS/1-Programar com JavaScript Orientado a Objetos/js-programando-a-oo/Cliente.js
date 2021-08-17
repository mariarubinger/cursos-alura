export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    //atributo Construtor é uque a classe precisa para criar um objeto - parâmetros nome e cpg
    //Construtores são utilizados para inicializar os atributos.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}