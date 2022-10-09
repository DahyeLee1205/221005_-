const authorInput = document.querySelector("#authorName");
const authorForm = document.querySelector("#author");
const authorLogout = document.querySelector("#logout");
const authorNAME = document.querySelector("#authorname");
const CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

const todoList = document.querySelector("#todoform");

function getLogin(event){
  const username= authorInput.value;
  event.preventDefault();
  authorForm.classList.add(CLASS_NAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintAuthor(username);
}



function paintAuthor(username){

  authorNAME.innerText = `${username}님`;
  authorNAME.classList.remove(CLASS_NAME);
  authorLogout.classList.remove(CLASS_NAME);
  todoList.classList.remove(CLASS_NAME);
  authorLogout.addEventListener("click", getLogout);
}

function getLogout(){
  localStorage.removeItem(USERNAME_KEY, savedUserName);
  alert("logout complete!");
  window.location.reload();

}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  authorForm.classList.remove(CLASS_NAME);
    authorForm.addEventListener("submit", getLogin);
}
else{

paintAuthor(savedUserName);
}
