let completedCount = 0;

function handleTaskCompletion(buttonId, taskName) {
  const button = document.getElementById(buttonId)

  button.addEventListener('click', function () {
      button.disabled = true
      button.innerText = 'Completed'
      button.classList.remove('bg-blue-600')
      button.classList.add('bg-gray-500', 'cursor-not-allowed')

      const taskAssigned = document.getElementById('task-assigned')
      taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1

      const navNumber = document.getElementById('nav-number')
      navNumber.innerText = parseInt(navNumber.innerText) + 1

      alert('Board updated Successfully')

      const container = document.getElementById('clear-history')
      const time = new Date().toLocaleTimeString()

      const div = document.createElement('div')
      div.classList.add('bg-gray-100')
      div.innerHTML = `<p class="bg-white p-2 m-2 shadow-lg">You have completed the task ${taskName} at <span>${time}</span></p>`;
      container.appendChild(div)

      completedCount++;

      if (completedCount === 6) {
          alert('All tasks completed')
      }
  })
}

// Apply to all buttons
handleTaskCompletion('completed-1', 'Fix Mobile Button Issue')
handleTaskCompletion('completed-2', 'Add Dark Mode')
handleTaskCompletion('completed-3', 'Optimize Home page ')
handleTaskCompletion('completed-4', 'Add new emoji')
handleTaskCompletion('completed-5', 'Integrate OpenAI API')
handleTaskCompletion('completed-6', 'Improve Job searching')
