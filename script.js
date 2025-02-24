document.addEventListener("DOMContentLoaded", () => {
    const timeInput = document.getElementById("timeInput");
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const taskList = document.getElementById("taskList");
    const noteSection = document.getElementById("noteSection");
    const viewSelector = document.getElementById("viewSelector");
    const body = document.body;

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

    document.querySelector("button").addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function toggleTheme() {
        body.classList.toggle("dark-theme");
    }

    function syncCalendar() {
        alert("Calendar sync feature coming soon!");
    }

    document.querySelector("button[onclick='toggleTheme()']").addEventListener("click", toggleTheme);
    document.querySelector("button[onclick='syncCalendar()']").addEventListener("click", syncCalendar);

    viewSelector.addEventListener("change", () => {
        alert(`Switched to ${viewSelector.value} view!`);
    });
});
