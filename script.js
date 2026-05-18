function adicionarTarefa() {

  let input = document.getElementById("tarefa");
  let lista = document.getElementById("lista");

  let item = document.createElement("li");

  item.textContent = input.value;

  item.onclick = function() {
    item.remove();
  }

  lista.appendChild(item);

  input.value = "";
}