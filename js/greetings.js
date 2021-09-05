const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); //이동 또는 새로고침 이벤트 실행X
    loginForm.classList.add(HIDDEN_CLASSNAME); // .hidden 을 넣어서 화면에서 안보이게 함
    const username = loginInput.value; //username 에 유저 정보를 할당
    localStorage.setItem(USERNAME_KEY, username); //localStorage 에 유저 정보를 셋
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //greeting 안에 `Hello ${username}` 넣고,
    greeting.classList.remove(HIDDEN_CLASSNAME); //.hidden 제거 해서 화면에 띄움
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { //savedUsername 이 비었을 때, .hidden을 제거해서 login-form 을 나타냄
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { //savedUsername 이 비어있지 않을 경우 paintGreetings 에 savedUsername 을 전달하여 실행
    paintGreetings(savedUsername); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
}