//cria uma lista de tarefas vazia
let tarefas = [];
// criar uma função que adiciona uma tarefa a lista de tarefas
function adicionarTarefa() {
  
  //recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value.trim()

  const mensagem = document.getElementById("mensagem")

  // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
  if (tarefa == "") {
      //mostre uma mensagem de erro
      let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
      mensagem.textContent = mensagemErro
  } else {
      //mensagem de tarefa adicionada com sucesso
      let mensagemSucesso = "Tarefa adicionada com sucesso!"
      mensagem.textContent = mensagemSucesso
//adiciona a tarefa na lista de tarefas
      tarefas.push(tarefa)
      renderizarTarefas()
      //cria novo item (li) e insere na (lista ul)
      
  }

  //limpa o input do usuário
  inputTarefa.value = ""
}

// function adicionarTarefa() 
function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas")
  listaTarefas.innerHTML = ""
for (let i = 0; i < tarefas.length; i++) {
  //cria um novo elemento (li) e insere na (lista ul)
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]
    listaTarefas.appendChild(novaTarefa)
}
}

// function renderizarTarefas() {
//   //cria uma lista de tarefas vazia
//   let tarefas = ["Estudar", "Fazer exercícios", "Ler"]

//   //cria um elemento ul
//   const listaTarefas = document.getElementById("listaTarefas")
//   //limpa a lista de tarefas
//   listaTarefas.innerHTML = ""

//   //para cada tarefa na lista de tarefas
//   tarefas.forEach((tarefa) => {
//       //cria um novo elemento (li) e insere na (lista ul)
//       let novaTarefa = document.createElement("li")
//       novaTarefa.textContent = tarefa
//       listaTarefas.appendChild(novaTarefa)
//   })
// 