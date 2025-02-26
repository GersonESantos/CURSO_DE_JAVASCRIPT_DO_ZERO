function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let inputTarefa = document.getElementById("inputTarefa");  
    console.log(inputTarefa.value);    
    document.getElementById("mensagem").textContent = mensagem;
    let listaTarefas = document.getElementById("listaTarefas");
    let tarefa = document.createElement("li");
    tarefa.textContent = inputTarefa.value;
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = "";
  }