document.addEventListener("DOMContentLoaded", () => {
    const timeInput = document.getElementById("timeInput");
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const taskList = document.getElementById("taskList");
    const noteSection = document.getElementById("noteSection");
    const viewSelector = document.getElementById("viewSelector");
    const body = document.body;

    // Add task to list
    function addTask() {
        const time = timeInput.value;
        const task = taskInput.value.trim();
        const priority = priorityInput.value;

        if (time === "" || task === "") {
            alert("Please enter both time and task.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `<strong>${time}</strong> - ${task} <span class='priority ${priority}'>${priority}</span> <button class='delete-btn'>X</button>`;

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
        timeInput.value = "";
        taskInput.value = "";
    }

    // Event listener for adding task via button
    document.querySelector("button").addEventListener("click", addTask);

    // Event listener for adding task via Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Toggle between light and dark themes
    function toggleTheme() {
        body.classList.toggle("dark-theme");
    }

    // Sync Calendar feature
    function syncCalendar() {
        alert("Calendar sync feature coming soon!");
    }

    // Set up the theme and calendar actions
    document.querySelector("button[onclick='toggleTheme()']").addEventListener("click", toggleTheme);
    document.querySelector("button[onclick='syncCalendar()']").addEventListener("click", syncCalendar);

    // Handle view changes
    viewSelector.addEventListener("change", () => {
        alert(`Switched to ${viewSelector.value} view!`);
    });
});
