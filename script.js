function adicionarTarefa() {

  let input = document.getElementById("tarefa");
  let lista = document.getElementById("lista");

  let item = document.createElement("li");

  item.textContent = input.value;

  lista.appendChild(item);

  input.value = "";
}