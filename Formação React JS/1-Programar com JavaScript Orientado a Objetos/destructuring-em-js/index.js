//Desestruturação de arrays e de objetos


const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

//fica um array de array's
//const numeros = [numerosPares, numerosImpares];
//console.log(numeros);

//descruction - abre o array e busca os dados dentro dele e coloca em uma array
const numeros = [...numerosPares, ...numerosImpares];
//console.log(numeros);

//cria uma array com o restantes dos outrosNumeros
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

//console.log(num1, num2, outrosNumeros);

const pessoa = {
    nome: 'Maria',
    idade: 29
}

const pessoaComTelefone = 
{...pessoa, telefone: 985744244}


//console.log(pessoa, pessoaComTelefone);

const { nome } = pessoa;
//console.log(nome);


function imprimeDados( { nome, idade }) {
    console.log(nome, idade)
}

imprimeDados(pessoa)