//pegar o formulário que a gente pega através do data-form


const formCadastroCliente = document.querySelector('[data-form]')

//criar um evento no formulário
formCadastroCliente.addEventListener("submit", event => {
    event.preventDefault()

    const nome = event.target.querySelector('[data-nome]')
    .value
    const cpf = event.target.querySelector('[data-cpf]')
    .value
    // função pra cadastrar cliente
    
    if(validaCPF(cpf)){
        cadastrarClientes(nome, cpf)
    } else {
        alert('O CPF não é válido!')
    }
})