
// Function: Add task Button 
// Function or Loop: Display tasks 
// Function: Remove task button

// ----- Main -----

// All tasks
let tasks = [];

// New task to be added
let newTask = {
    taskName : 'Example',
    taskIcon : '✅'
};

// - 1 - The user types and clicks add a new task
const addTaskBtn = document.querySelector("#newTaskBtn");
addTaskBtn.addEventListener('click', () => {

    let taskInput = document.querySelector('#taskInput');

    // If the task is trying to be added with empty text
    if (taskInput.value === "") {
        document.getElementById("pleaseEnterText").style.display = "block";
        document.getElementById("taskInput").style.border = "2px solid #C21010";
        return;
    }

    // If the task has text, continue
    let taskName = taskInput.value;
    let taskIcon = document.querySelector('#iconSelector');
    let iconSelected = taskIcon.options[taskIcon.selectedIndex].text;
    // Empty the text input
    document.querySelector('#taskInput').value = '';
    // - 2 - The new task is visualized and added
    visualNewTask(iconSelected, taskName);
})
// - 3 - The user deletes an existing task
const taskContainer = document.getElementById('colTwo');
taskContainer.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    // If it is not a button, exit
    if (!isButton) {
      return;
    }
    // If it is the first task that is trying to be deleted, exit
    if(event.target.parentElement.getAttribute('class') === 'taskOne') {
        return;
    }
    // If it is another task besides the first task, delete it 
    event.target.parentElement.remove();
  })

// ----- Functions -----

// --- Add Task Function ---
// - 2 - The new task is visualized and added
function visualNewTask(icon, taskName) {

    // Remove "Please enter text"
    document.getElementById("pleaseEnterText").style.display = "none";
    // Remove red border in task input
    document.getElementById("taskInput").style.border = "none";

    // Access already created task object
    const taskObject = document.getElementById('taskItem');
    // Duplicate to replace it with new info
    const task = taskObject.cloneNode(true);

    task.setAttribute('class', 'task');
    console.log(`task class = ${task.getAttribute('class')}`);

    // Access all cloned task properties (elements inside the cloned div)
    const taskProperties = task.querySelectorAll('.taskProperty');
    const taskIcon = taskProperties[0]; // Task icon property??
    const taskLabel = taskProperties[1]; // Text Label Property

    // Set the cloned task label and icon to its parameters
    taskIcon.innerText = icon;
    taskLabel.innerText = taskName; 

    // Add task to HTML (Right Column Div)
    let rightColumn = document.getElementById('colTwo');
    rightColumn.append(task);
}