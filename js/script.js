const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0

function addTask(){
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
    taskContent.id = id

    const removeButton = document.createElement("button");
    removeButton.innerText = "delete";
    removeButton.id = id
    removeButton.addEventListener("click", () => removeTask(removeButton.id));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(removeButton);

    tasksContainer.appendChild(taskItemContainer);
    if(inputElement.value != ""){
        listTasks.push(inputElement.value);
    }
    inputElement.value = "";
    id++
}
addTaskButton.addEventListener("click", () => addTask());
function removeTask(id){
    listTasks.splice(id, 1);
    document.getElementById(id).remove();
    document.getElementById(id).remove();
}
const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid){
        return inputElement.classList.remove("error");
    }
}