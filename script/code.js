let inputBox = document.querySelector('#enter-task');
let listContainer = document.querySelector('#list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("Please add a task!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//Save the data to localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()


//Sorting button function
// function sortTasksAscending() {
//     let tasks = Array.from(document.querySelectorAll('ul#listContainer li'));
//     tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
//     tasks.forEach(task => document.querySelector('ul#listContainer').appendChild(task));
// }

function sortTaskAscending(){
    
}
