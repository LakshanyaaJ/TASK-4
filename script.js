document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
    }
});

function addTask(taskValue) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <input type="checkbox" class="taskCheckbox">
        <span>${taskValue}</span>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
    `;

    // Edit button functionality
    listItem.querySelector('.editButton').addEventListener('click', function() {
        const newTaskValue = prompt('Edit your task:', taskValue);
        if (newTaskValue) {
            listItem.querySelector('span').textContent = newTaskValue;
        }
    });

    // Delete button functionality
    listItem.querySelector('.deleteButton').addEventListener('click', function() {
        taskList.removeChild(listItem);
        checkAllCompleted();
    });

    // Checkbox functionality
    const checkbox = listItem.querySelector('.taskCheckbox');
    checkbox.addEventListener('change', function() {
        checkAllCompleted();
    });

    taskList.appendChild(listItem);
}

function checkAllCompleted() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');
    const allCompleted = Array.from(tasks).every(task => task.querySelector('.taskCheckbox').checked);

    const completeAllButton = document.getElementById('completeAllButton');
    completeAllButton.style.display = allCompleted ? 'block' : 'none';
}

// Redirect to Thank You page when Completed button is clicked
document.getElementById('completeAllButton').addEventListener('click', function() {
    window.location.href = 'thankyou.html';
});
