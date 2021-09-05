const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //JSON.stringify()는 배열,객체를 문자로 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 저장공간에 toDos를 저장
}

function deleteToDo(event) {
  //target 은 클릭된 HTML element
  //parentElemnet는 클릭된 element의 부모
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //클릭 된 li.id 를 제외하고 반환
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // <li> 만들기
  li.id = newTodo.id;
  const span = document.createElement("span"); // <span> 만들기
  span.innerText = newTodo.text; // <span> 안에 newTodo 담기
  const button = document.createElement("button"); // <button> 만들기
  button.innerText = "X"; // <button> 안에 x 담기
  button.addEventListener("click", deleteToDo)
  li.appendChild(span); // <li> 안에 <span> 넣기
  li.appendChild(button); // <li> 안에 <button> 넣기
  toDoList.appendChild(li); // <ul id="todo-list"> 안에 <li> 넣기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; // input 에 저장된 정보를 비움
  const newTodoObj = { // text와 id를 저장하도록 설정
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // newTodo(텍스트)를 toDos 에 push
  paintToDo(newTodoObj); // 화면에 newTodo 나타냄
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
  console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // string을 JavaScript에서 사용할 수 있는 object/array로 변환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // array의 각 item에 대해 하나의 function을 실행
}

function sexyFilter(item) {
  return item !== 3;
}

[1, 2, 3, 4, 5].filter(sexyFilter)