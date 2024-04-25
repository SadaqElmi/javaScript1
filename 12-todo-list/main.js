const todolist = [];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todolist.push(name);
  console.log(todolist);

  inputElement.value = "";
}

// simple 2

const todolist1 = ["Sadaq", "Elmi"];

randerTodoList();

function randerTodoList() {
  let todolistHtml = "";

  for (i = 0; i < todolist1.length; i++) {
    const todo = todolist1[i];
    const html = `<p>${todo}</p>`;
    todolistHtml += html;
  }
  console.log(todolistHtml);

  document.querySelector(".js-todo-list-1").innerHTML = todolistHtml;
}

function addTodo1() {
  const inputElement = document.querySelector(".js-name-input1");
  const name = inputElement.value;

  todolist1.push(name);
  console.log(todolist1);

  inputElement.value = "";
  randerTodoList();
}

// simple 3

const todolist2 = JSON.parse(localStorage.getItem("todolist")) || [
  {
    name: "Sadaq",
    dueDate: "24-04-2024",
  },
  {
    name: "Elmi",
    dueDate: "24-04-2024",
  },
];

randerTodoList1();

function randerTodoList1() {
  let todolistHtml = "";

  todolist2.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
    
    <div> ${name}  </div>
    <div> ${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-btn"  >
    Delete
    </button>
    `;
    todolistHtml += html;
  });

  document.querySelector(".js-todo-list-2").innerHTML = todolistHtml;
  const deleteTodoButtons = document
    .querySelectorAll(".js-delete-todo-btn")
    .forEach((event, index) => {
      event.addEventListener("click", () => {
        todolist2.splice(index, 1);
        randerTodoList1();
      });
    });
}

const addTodoButton = document.querySelector(".js-add-todo-btn");
addTodoButton.addEventListener("click", () => {
  addTodo2();
});

function addTodo2() {
  const inputElement = document.querySelector(".js-name-input2");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todolist2.push({ name, dueDate });

  inputElement.value = "";
  randerTodoList1();
  SaveLocalStorage();
}

function SaveLocalStorage() {
  localStorage.setItem("todolist", JSON.stringify(todolist2));
}
