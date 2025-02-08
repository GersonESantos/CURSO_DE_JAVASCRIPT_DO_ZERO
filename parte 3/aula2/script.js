function adicionarTarefa() {

  //recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value.trim()
  const mensagem = document.getElementById("mensagem")
  if (tarefa === "") 
    {
      //mensagem de tarefa adicionada com erro
    let mensagemErro = ("Por favor, insira uma tarefa válida!") 
    mensagem.textContent = mensagemErro

    }else{  
      //mensagem de tarefa adicionada com sucesso
      let mensagemSussesso = "Tarefa adicionada com sucesso!"
      mensagem.textContent = mensagemSussesso
      //cria novo item (li) e insere na (lista ul)
      const listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")
      novaTarefa.textContent = tarefa
      listaTarefas.appendChild(novaTarefa)
    }


  //limpa o input do usuário
  inputTarefa.value = ""


}