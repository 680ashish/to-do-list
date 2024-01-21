const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

const btn = document.querySelector('button');
// console.log(btn);
function addTask(){
    if(inputBox.value.trim()===''){
        alert("Please input a note !");
        // console.warn("you must write something");
    }
    else{
        let task= document.createElement("li");
        task.innerHTML =inputBox.value.trim();
        // listContainer.appendChild(task);
        listContainer.insertBefore(task, listContainer.firstChild);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        task.appendChild(span);
        // task.insertBefore(crossIcon, task.firstChild);
    }
    inputBox.value= '';
    saveData();
}
// Event listener for the button click
inputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();