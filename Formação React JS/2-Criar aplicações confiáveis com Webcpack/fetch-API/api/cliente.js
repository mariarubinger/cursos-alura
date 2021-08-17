const listarClientes = () => {
    return fetch("http://localhost:4000/clientes",
    {
      method: "get"
    })
      .then(resposta => {
        return resposta.json();
      })
      .then(json => {
        return json;
      });
  };
  
  //função de POST

  const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
      nome: nome,
      cpf: cpf
    })
    return fetch("http://localhost:4000/clientes/cliente",
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: json
    })
    .then( resp => {
      return resp.body
    });
  }

  //função de deletar cliente

  const deletaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
      method: 'DELETE'
    })
  }

  //função que vai trazer os dados da API pra gente
  //por padrão o fetch já faz um GET
  
  const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
      method: 'GET'
    })
    .then(resposta => {
      return resposta.json()
    })
  }


  //evento PUT vai ser responsável por fazer a atualização de dados

  const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
      nome: nome,
      cpf: cpf
    })
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: json
    })
  }