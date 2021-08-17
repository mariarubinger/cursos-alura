//minha classe base

export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }
    
 /*    //assessor get
    //ninguém consegue atribuir dela, somente pelo método cadastrarSenha
    get senha(){
        return this._senha;
    }*/

    autenticar(senha){
        return senha == this._senha;
    }

    //Para autenticar os funcionarios eu preciso de senha
    cadastrarSenha(senha){
        this._senha = senha;
    }    
} 