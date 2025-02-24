const form = document.getElementById("taskForm")
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const addTaskButton = document.getElementById("addTask");
const taskListContainer = document.getElementById("taskList");
const pendingStatus = document.getElementById("pendingTasks");
const completedStatus = document.getElementById("completedTasks");

let tasks = [];

addTaskButton.addEventListener("click", function (event) {
    event.preventDefault(); 
    addTask();
});

function addTask() {
    const title = taskTitleInput.value.trim()
    const desc = taskDescriptionInput.value.trim()

    if (title === "") {
        alert("Task title cannot be empty!");
        return;
    }

    const newTask = {
        title: title,
        desc: desc,
        completedStatus : false, 
    };

    tasks.push(newTask);

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";

    renderTasks();
}

function updateTaskStatus() {
    let pendingCount = tasks.filter(task => !task.completed).length;
    
    let completedCount = tasks.filter(task => task.completed).length;

    pendingStatus.textContent = pendingCount;
    completedStatus.textContent = completedCount;
}


function renderTasks() {
    taskListContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        if (task.completed) {
            taskItem.classList.add("completed");
        }

        taskItem.innerHTML = `
            <p class="${task.completed ? "completed-text" : ""}">${task.title} - ${task.desc}</p>
            <div class="task-actions">
                <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskListContainer.appendChild(taskItem);
    });

    updateTaskStatus();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    renderTasks();
}

const deleteTask = function removeTask(index) {
    tasks.splice(index, 1);

    renderTasks();
}
