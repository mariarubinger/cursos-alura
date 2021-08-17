//Ser autenticavel significa ter a propriedade "senha".
//Ser autenticavel significa ter o método autenticar
//o método abstrato que receb uma senha vai melhorar o encapsulamento e deixar o vocabulário melhor
//método estático não precisa criar uma instância pra chamr esse método, pode chamar direto

//ducky type - fraca tipagem como o JS
//duck typing - não interessa o tipo do objeto, o que importa é se ele tem a propriedade que eu quero usar


export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
        
        // in vai verificar se a chave "autenticar" existe dentro do objeto autenticavel
    }
}


//se a senha for igual vai retornar verdadeiro
//Polimorfismo : Diferentes classes podem definir o mesmo método ou propriedade.
