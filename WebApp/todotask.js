// /* =========================================================
//    Simple To-Do List App
//    Pattern for every change:
//    user action → update tasks array → save → renderTasks()
//    ========================================================= */

// /* ---------- Step 1: Select the HTML elements ---------- */
// const form  = document.getElementById("todo-form");
// const input = document.getElementById("todo-input");
// const list  = document.getElementById("todo-list");

// /* Counter: use the one in HTML, or create it after the form if missing */
// let counter = document.getElementById("task-counter");
// if (!counter && form) {
//   counter = document.createElement("p");
//   counter.id = "task-counter";
//   counter.setAttribute("aria-live", "polite");
//   form.insertAdjacentElement("afterend", counter);
// }

// /* ---------- Step 2: The tasks array ---------- */
// const STORAGE_KEY = "tasks";
// let tasks = loadTasks();

// /* ---------- Step 8: load & save ---------- */
// function loadTasks() {
//   try {
//     const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
//     return Array.isArray(saved) ? saved : [];
//   } catch (error) {
//     console.warn("Saved tasks were corrupted, starting fresh.", error);
//     return [];
//   }
// }

// function saveTasks() {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
// }

// function makeId() {
//   return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
// }

// /* ---------- Step 4: Render the list ---------- */
// function renderTasks() {
//   list.innerHTML = "";

//   tasks.forEach(function (task) {
//     const li = document.createElement("li");
//     li.dataset.id = task.id;
//     if (task.completed) li.classList.add("completed");

//     const span = document.createElement("span");
//     span.textContent = task.text;

//     const doneBtn = document.createElement("button");
//     doneBtn.type = "button";
//     doneBtn.className = "done-btn";
//     doneBtn.dataset.action = "toggle";
//     doneBtn.dataset.id = task.id;
//     doneBtn.textContent = task.completed ? "Undo" : "Done";

//     const deleteBtn = document.createElement("button");
//     deleteBtn.type = "button";
//     deleteBtn.className = "delete-btn";
//     deleteBtn.dataset.action = "delete";
//     deleteBtn.dataset.id = task.id;
//     deleteBtn.textContent = "Delete";

//     li.append(span, doneBtn, deleteBtn);
//     list.appendChild(li);
//   });

//   updateCounter();
// }

// /* ---------- Step 7: Remaining-task counter ---------- */
// function updateCounter() {
//   if (!counter) return;

//   const remaining = tasks.filter(function (task) {
//     return !task.completed;
//   }).length;

//   counter.textContent =
//     remaining === 1 ? "1 task left" : remaining + " tasks left";
// }

// /* ---------- Step 3: Add a task on form submit ---------- */
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const text = input.value.trim();
//   if (text === "") return;

//   tasks.push({
//     id: makeId(),
//     text: text,
//     completed: false,
//   });

//   input.value = "";
//   input.focus();

//   saveTasks();
//   renderTasks();
// });

// /* ---------- Steps 5 & 6: Complete and delete ---------- */
// list.addEventListener("click", function (event) {
//   const button = event.target.closest("button");
//   if (!button) return;

//   const id = button.dataset.id;

//   if (button.dataset.action === "toggle") {
//     tasks = tasks.map(function (task) {
//       if (task.id === id) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//   } else if (button.dataset.action === "delete") {
//     tasks = tasks.filter(function (task) {
//       return task.id !== id;
//     });
//   }

//   saveTasks();
//   renderTasks();
// });

// /* ---------- Put the pieces together ---------- */
// renderTasks();



// const todoForm = document.getElementById("todoForm");
// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");
// const taskCount = document.getElementById("taskCount");
// const emptyMessage = document.getElementById("emptyMessage");

// // Load saved tasks when the page opens.
// let tasks = [];

// try {
//   const savedTasks = localStorage.getItem("myTasks");
//   tasks = savedTasks ? JSON.parse(savedTasks) : [];

//   if (!Array.isArray(tasks)) {
//     tasks = [];
//   }
// } catch (error) {
//   tasks = [];
// }

// // Save tasks in the browser.
// function saveTasks() {
//   localStorage.setItem("myTasks", JSON.stringify(tasks));
// }

// // Display all tasks on the page.
// function renderTasks() {
//   taskList.replaceChildren();

//   tasks.forEach(function(task) {
//     const li = document.createElement("li");
//     li.className = "task-item";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.completed;
//     checkbox.setAttribute("aria-label", "Complete " + task.text);

//     const span = document.createElement("span");
//     span.className = "task-text";
//     span.textContent = task.text;

//     if (task.completed) {
//       span.classList.add("completed");
//     }

//     // Mark a task as completed or incomplete.
//     checkbox.addEventListener("change", function() {
//       task.completed = checkbox.checked;
//       saveTasks();
//       renderTasks();
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "delete-btn";
//     deleteButton.type = "button";

//     // Delete a task.
//     deleteButton.addEventListener("click", function() {
//       tasks = tasks.filter(function(item) {
//         return item.id !== task.id;
//       });

//       saveTasks();
//       renderTasks();
//     });

//     li.append(checkbox, span, deleteButton);
//     taskList.appendChild(li);
//   });

//   // Update the remaining task count.
//   const remaining = tasks.filter(function(task) {
//     return !task.completed;
//   }).length;

//   taskCount.textContent =
//     remaining + (remaining === 1
//       ? " task remaining"
//       : " tasks remaining");

//   emptyMessage.hidden = tasks.length > 0;
// }

// // Add a new task when the form is submitted.
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const text = taskInput.value.trim();

//   // Do not add an empty task.
//   if (text === "") {
//     taskInput.focus();
//     return;
//   }

//   const newTask = {
//     id: crypto.randomUUID(),
//     text: text,
//     completed: false
//   };

//   tasks.push(newTask);

//   saveTasks();
//   renderTasks();

//   taskInput.value = "";
//   taskInput.focus();
// });

// // Show saved tasks when the app starts.
// renderTasks();

// const todoForm = document.getElementById("todo-form");
// const taskInput = document.getElementById("todo-input");
// const taskList = document.getElementById("todo-list");
// const taskCount = document.getElementById("task-count");
// const emptyMessage = document.getElementById("emptyMessage"); // may be null

// // Load saved tasks when the page opens.
// let tasks = [];

// try {
//   const savedTasks = localStorage.getItem("myTasks");
//   tasks = savedTasks ? JSON.parse(savedTasks) : [];

//   if (!Array.isArray(tasks)) {
//     tasks = [];
//   }
// } catch (error) {
//   tasks = [];
// }

// // Save tasks in the browser.
// function saveTasks() {
//   localStorage.setItem("myTasks", JSON.stringify(tasks));
// }

// // Display all tasks on the page.
// function renderTasks() {
//   taskList.replaceChildren();

//   tasks.forEach(function (task) {
//     const li = document.createElement("li");
//     li.className = "task-item";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.completed;
//     checkbox.setAttribute("aria-label", "Complete " + task.text);

//     const span = document.createElement("span");
//     span.className = "task-text";
//     span.textContent = task.text;

//     if (task.completed) {
//       span.classList.add("completed");
//     }

//     // Mark a task as completed or incomplete.
//     checkbox.addEventListener("change", function () {
//       task.completed = checkbox.checked;
//       saveTasks();
//       renderTasks();
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "delete-btn";
//     deleteButton.type = "button";

//     // Delete a task.
//     deleteButton.addEventListener("click", function () {
//       tasks = tasks.filter(function (item) {
//         return item.id !== task.id;
//       });

//       saveTasks();
//       renderTasks();
//     });

//     li.append(checkbox, span, deleteButton);
//     taskList.appendChild(li);
//   });

//   // Update the remaining task count.
//   const remaining = tasks.filter(function (task) {
//     return !task.completed;
//   }).length;

//   taskCount.textContent =
//     remaining + (remaining === 1 ? " task remaining" : " tasks remaining");

//   // Only touch emptyMessage if it exists in the HTML.
//   if (emptyMessage) {
//     emptyMessage.hidden = tasks.length > 0;
//   }
// }

// // Add a new task when the form is submitted.
// todoForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const text = taskInput.value.trim();

//   // Do not add an empty task.
//   if (text === "") {
//     taskInput.focus();
//     return;
//   }

//   const newTask = {
//     id:
//       typeof crypto !== "undefined" && crypto.randomUUID
//         ? crypto.randomUUID()
//         : String(Date.now()) + Math.random().toString(16).slice(2),
//     text: text,
//     completed: false
//   };

//   tasks.push(newTask);

//   saveTasks();
//   renderTasks();

//   taskInput.value = "";
//   taskInput.focus();
// });

// // Show saved tasks when the app starts.
// renderTasks();




const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("todo-input");
const taskList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("emptyMessage"); // may be null

// Load saved tasks when the page opens.
let tasks = [];

try {
  const savedTasks = localStorage.getItem("myTasks");
  tasks = savedTasks ? JSON.parse(savedTasks) : [];

  if (!Array.isArray(tasks)) {
    tasks = [];
  }
} catch (error) {
  tasks = [];
}

// Save tasks in the browser.
function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Display all tasks on the page.
function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.className = "task-item";

    // Text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    if (task.completed) {
      span.classList.add("completed");
    }

    // Done / Undo button
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "toggle-btn";

    if (task.completed) {
      toggleButton.textContent = "Undo";
      toggleButton.classList.add("undo-btn");
      toggleButton.setAttribute("aria-label", "Mark as not done: " + task.text);
    } else {
      toggleButton.textContent = "Done";
      toggleButton.classList.add("done-btn");
      toggleButton.setAttribute("aria-label", "Mark as done: " + task.text);
    }

    // Toggle completed state
    toggleButton.addEventListener("click", function () {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter(function (item) {
        return item.id !== task.id;
      });

      saveTasks();
      renderTasks();
    });

    li.append(span, toggleButton, deleteButton);
    taskList.appendChild(li);
  });

  // Update the remaining task count.
  const remaining = tasks.filter(function (task) {
    return !task.completed;
  }).length;

  taskCount.textContent =
    remaining + (remaining === 1 ? " task remaining" : " tasks remaining");

  // Only touch emptyMessage if it exists in the HTML.
  if (emptyMessage) {
    emptyMessage.hidden = tasks.length > 0;
  }
}

// Add a new task when the form is submitted.
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (text === "") {
    taskInput.focus();
    return;
  }

  const newTask = {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : String(Date.now()) + Math.random().toString(16).slice(2),
    text: text,
    completed: false
  };

  tasks.push(newTask);

  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
});

// Show saved tasks when the app starts.
renderTasks();