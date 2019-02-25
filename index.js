document.querySelector("form").addEventListener("submit", addTodo);

function addTodo(event) {
  event.preventDefault()
  let item = document.createElement("li")
  item.innerText = document.getElementById("item").value
  item.addEventListener("click", completeTodo)


  let button = document.createElement("button")
  button.innerText = "X";
  button.addEventListener("click", removeTodo)
  item.append(button)

  let list = document.querySelector("ul")
  list.appendChild(item)
}

function removeTodo(event){
  event.target.parentNode.remove();
}

function completeTodo(event){
  let value = event.target.getAttribute("aria-checked")

  if(value === "true"){
    event.target.setAttribute("aria-checked", "false")
  } else {
    event.target.setAttribute("aria-checked", "true")
  }
}
