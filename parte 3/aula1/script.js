function adicionarTarefa() {

  //recebe valor do input do usuário
  let inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value.trim()
  
  if (tarefa === "") 
    {
      //mensagem de tarefa adicionada com erro
    let mensagemErro = ("Por favor, insira uma tarefa válida!") 
    document.getElementById("mensagem").textContent = mensagemErro

    }else{  
      //mensagem de tarefa adicionada com sucesso
      let mensagemSucesso = "Tarefa adicionada com sucesso!"
      document.getElementById("mensagem").textContent = mensagemSucesso
      //cria novo item (li) e insere na (lista ul)
      let listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")
      novaTarefa.textContent = tarefa
      listaTarefas.appendChild(novaTarefa)
    }


  //limpa o input do usuário
  inputTarefa.value = ""


}