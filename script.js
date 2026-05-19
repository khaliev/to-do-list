// We're selecting DOM elements
const newTaskInput = document.getElementById("task-input");
const addTaskButton = document.querySelector("button");

const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

function addTask(taskText) {
  // Create a new list item for the task
  const listItem = document.createElement("li");
  // Here we create the list item with a checkbox, task text, and delete button
  listItem.innerHTML = `<input type="checkbox" id="task1" /> <span>${taskText}</span> <button class="delete-btn">Delete</button>`;
  // Here we append // add the new list item to the task list
  taskList.appendChild(listItem);
  // Clear the input field after adding a task
  newTaskInput.value = "";
  // Optionally, we can set focus back to the input field for better user experience
  newTaskInput.focus();
}

// Add event listener to the form to handle task submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior which would cause a page reload/refresh
  event.preventDefault();
  // Get the task text from the input field and trim any extra whitespace
  const input = document.querySelector("#task-input");
  const taskText = input.value.trim();
  // Check if the input is not empty before adding the task
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  // Call the addTask function to create and add the new task to the list
  addTask(taskText);
  // Clear the input field after adding a task
  input.value = "";
});

// Add event listener to the task list to handle delete button clicks
taskList.addEventListener("click", (event) => {
  // Check if the clicked element is a delete button by checking if it has the class "delete-btn"
  if (
    event.target.tagName === "BUTTON" &&
    event.target.classList.contains("delete-btn")
  ) {
    // If it is a delete button, remove the parent list item (the task) from the task list
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});
