// function addTask(){
// 	console.log("Task added!");
// 	const input=document.getElementById("taskInput");
// 	const taskText=input.value.trim();

// 	if (taskText == ""){
// 		alert("Please enter a task!");
// 		return;
// 	}
// }

/* testing purpose*/
let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;
  tasks.push(taskText);
  input.value = '';
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <div class="task-container">
        <div class="task-imag"><img src="images/task1.jpg" alt="task-image"></img></div>
        <h3>${task}</h3>
        <p>Task description</p>
        <button class="button button1" onclick="editTask(${index})">Edit</button>
        <button class="button button2"  onclick="deleteTask(${index})">Delete</button>
    </div>
    `;
  });
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
