// const element = document.getElementById('element');

// let count = 0;

// element.innerHTML = count;

// function plusOne() {
//   count += 1;
//   element.innerHTML = count;
// }

// function minusOne() {
//   count -= 1;
//   element.innerHTML = count;
// }

// console.log(document);

function populateList(params) {
  const aux = [
    "arrumar o quarto",
    "ir no mercado",
    "comtemplar o vazio e falta de sentido da existencia",
  ];
  aux.forEach((task) => addTodo(task));
}

const todoList = [];

function addTodo(taskText) {
  todoList.push({
    id: `x0${todoList.length}`,
    task: taskText,
    complete: false,
  });
  main();
}

populateList();

function updateTask(id) {
  const position = todoList.findIndex((element) => element.id === id);
  todoList[position].complete = !todoList[position].complete;
}

function showList() {
  const listDiv = document.getElementById("todoList");
  const ids = [];
  listDiv.innerHTML = todoList
    .map((element) => {
      if (!element.complete) {
        ids.push(element.id);
        return `<div>
        <div>
          <p id="${element.id}">${element.task}<p>
        </div
      </div`;
      }
    })
    .join("");
  return ids;
}

function showCompletedList() {
  const listDiv = document.getElementById("completeList");
  const ids = [];
  listDiv.innerHTML = todoList
    .map((element) => {
      if (element.complete) {
        ids.push(element.id);
        return `<div>
        <div>
          <p id="${element.id}">${element.task}<p>
        </div
      </div`;
      }
    })
    .join("");
  return ids;
}

function addistener(elementID) {
  const element = document.getElementById(elementID);
  element.addEventListener("click", (e) => {
    updateTask(elementID);
    main();
  });
}

function getNewTask() {
  const newTask = document.getElementById("taskInput").value;
  addTodo(newTask);
  console.log(newTask);
}

function showForm() {
  const formStr = `<div>
    <form id="taskForm">
      <label for="taskInput">new task:</label>
      <input id="taskInput" type="text">
      <input type="button" value="add" onClick="getNewTask()" >
    </form>
  </div>`;
  const element = document.getElementById("formElement");
  element.innerHTML = formStr;
}

function main() {
  const todoIds = showList();
  const completeIds = showCompletedList();
  if (todoIds.length !== 0) {
    todoIds.forEach((id) => addistener(id));
  }
  if (completeIds.length !== 0) {
    completeIds.forEach((id) => addistener(id));
  }
}

main();
