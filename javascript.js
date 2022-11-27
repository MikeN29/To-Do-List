



let newTask = '';

function addTask() {
    let newTask = document.getElementById('newTask').value;
    createTaskElement(newTask, false)
}




let newLi 

function createTaskElement(newTask, completed) {
     let newLi = document.createElement("div");
     const newContent = document.createTextNode(newTask);
     newLi.appendChild(newContent);
     const currentDiv = document.getElementById("tasks");
     const parentDiv = document.getElementById("tasksDiv");
     parentDiv.insertBefore(newLi, currentDiv);


     if (completed) {
        newLi.classList.add("completed");
    }
    
    parentDiv.appendChild(newLi);
    newLi.addEventListener("dblclick", toggleToDoItemState);
    
    }

    



    function toggleToDoItemState() {
      if (this.classList.contains("completed")) {
      this.classList.remove("completed");
      } else {
      this.classList.add("completed");
      }
    }



    function clearCompleted(completed){
      const elements = document.getElementsByClassName('completed');
      while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
      }
    }





function saveItems(completed){  
    localStorage.setItem('savedTasks', tasksDiv.innerHTML);
    //localStorage.setItem('savedTasks', JSON.stringify(tasksDiv.innerHTML));
    
    //console.log(savedTasks)
    
}



var saved = localStorage.getItem('savedTasks');


if (saved) {
	tasksDiv.innerHTML = saved;
    
}

//document.getElementById('tasksDiv').addEventListener("dblclick", toggleToDoItemState)
//newLi.addEventListener("dblclick", toggleToDoItemState)


function clearList() {
    localStorage.clear();
}

//double click completed function does not work on locally stored data once page has been refreshed


