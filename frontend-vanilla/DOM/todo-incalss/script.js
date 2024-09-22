function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

// Dummy data for development (Model)
let gTodos = [
  {
    id: makeId(),
    title: "Clean room",
    isCompleted: false,
  },
  {
    id: makeId(),
    title: "do dishes",
    isCompleted: true,
  },
  {
    id: makeId(),
    title: "feed the cat",
    isCompleted: false,
  },
];

// DOM elmemets
const elTodoList = document.getElementById("todo-list");
const elTodoForm = document.getElementById("todo-form");

// Handling event listeners
elTodoForm.addEventListener("submit", function (ev) {
  // Prevent from page refresh
  ev.preventDefault();

  // Get the input element
  const elTodoInput = document.getElementById("todo-input");

  // Calling add todo function
  addTodo(elTodoInput.value);

  // Clearing the input field
  elTodoInput.value = "";
});

// Render the todos
function renderTodos() {
  // Clearing the list
  elTodoList.innerHTML = "";

  // Append each li to the list
  for (let i = 0; i < gTodos.length; i++) {
    const currentTodo = gTodos[i];

    // Creating todo element
    const elTodo = document.createElement("li");
    elTodo.textContent = currentTodo.title;
    // instead of doing if and else
    elTodo.classList.toggle("completed", currentTodo.isCompleted);

    // Creating button element
    const elDeleteBtn = document.createElement("button");
    elDeleteBtn.textContent = "Delete";

    // Adding event listener to toggle
    elTodo.addEventListener("click", function () {
      toggleTodo(currentTodo.id);
    });

    // Adding event listener to delete
    elDeleteBtn.addEventListener("click", function () {
      deleteTodo(currentTodo.id);
    });

    // Appending elments
    elTodo.appendChild(elDeleteBtn);
    elTodoList.appendChild(elTodo);
  }
}

// Adding todo
function addTodo(todoTitle) {
  if (!todoTitle) return;

  // Create new todo object and set its title
  const todo = {
    id: makeId(),
    title: todoTitle,
    isCompleted: false,
  };

  // Push the new todo to the todo gTodos array
  gTodos.push(todo);

  // Call renderTodos function
  renderTodos();
}

// Delete todo
function deleteTodo(id) {
  gTodos = gTodos.filter((currentTodo) => currentTodo.id !== id);
  renderTodos();
}

// Toggle Todo
function toggleTodo(id) {
  // Find the todo that you want to toggle
  const todo = gTodos.find((currentTodo) => currentTodo.id === id);

  // Toggle isCompleted value (false if true, true if false)
  if (!todo) return;
  todo.isCompleted = !todo.isCompleted;

  // Render todos
  renderTodos();
}

renderTodos();
