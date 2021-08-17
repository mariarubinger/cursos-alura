//window.location vai dizer qual o endereço da nossa página

const pegaURL = new URL(window.location)
console.log(pegaURL)

const id = pegaURL.searchParams.get('id')
console.log(id)

//vai aparecer no input as informações do cliente que queremos editar
const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

//quando a promise for resolvida vai executar a função
detalhaCliente(id).then(dados => {
    inputCPF.value = dados[0].cpf
    inputNome.value = dados[0].nome
})

//Evento no formulário de edição
const formEdicao = document.querySelector('[data-form]')


//Mensagem para o usuário
const mensagemSucesso = (mensagem) => {
    const linha = document.createElement("tr");
  
    const conteudoLinha = `
    <div class="alert alert-success" role="alert">
        ${mensagem}
    </div>

    `;
  
    linha.innerHTML = conteudoLinha;
    return linha;
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement("tr");
  
    const conteudoLinha = `
    <div class="alert alert-warning" role="alert">
        ${mensagem}
    </div>

    `;
  
    linha.innerHTML = conteudoLinha;
    return linha;
}


formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    //coloca a ! para já negativar (caso isso for falso)
    if(!validaCPF(inputCPF.value)){
        alert("ESSE CPF NÃO EXISTE")
        return
    }

    if(inputCPF.value.length !== 11){
        alert("ESSE CPF NÃO EXISTE")
        return 
    }

    //o editaCliente retorna uma Promise e quando obter a resposta dela ela vai executar uma função 
    editaCliente(id, inputCPF.value, inputNome.value).then(resposta => {
        //status da requisição for 200 que é de sucesso
        if(resposta.status === 200){
            formEdicao.appendChild(mensagemSucesso(
                'Cliente editado com sucesso!'
            ))
        } else {
            formEdicao.appendChild(mensagemErro(
                'Erro na edição do cliente'
            ))
        }

    })
})
