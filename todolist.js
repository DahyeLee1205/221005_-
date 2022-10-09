const todoForm = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoinput");
const doIt = document.querySelector("#doit");
let toDos = [];
const TODO_KEY = "todo";

  function addTodolist(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {text:newTodo, id: Date.now()};
    todoInput.value ="";
    toDos.push(newTodoObj);
    makeTodo(newTodoObj);
    saveTodos();
  }
  todoForm.addEventListener("submit", addTodolist);

  function makeTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo)
    doIt.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    }

  function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((TODO)=> TODO.id !== parseInt(li.id));
    li.remove();
    saveTodos();
    }

    function saveTodos(){
      localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
    }

    const savedTodos = localStorage.getItem(TODO_KEY);

    if(savedTodos !== null){
      const parsedTodos = JSON.parse(savedTodos);
      toDos = parsedTodos;
      parsedTodos.forEach(makeTodo);
      }
