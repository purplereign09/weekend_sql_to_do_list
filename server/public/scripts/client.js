$(document).ready(function(){
  console.log('jQuery sourced.');
  $('#submitBttn').on('click', submitTask);
  refreshTasks();
});

function addClickHandlers() {
  

};

//Submit your task and add input values to your form
//empty placeholders once data is collected
//append data to the DOM and store in the table through
// as POST 
function submitTask(){
    console.log('submit button clicked.');
   let task = {};
   task.taskName = $('#taskName').val();
   task.taskDescription =$('#taskDescription').val();
   task.taskCompleted = $('#taskCompleted').val();
   task.taskDueDate = $('#taskDueDate').val();
   addTask(task);
   task.taskName = $('#taskName').val('');
   task.taskDescription =$('#taskDescription').val('');
   task.taskCompleted = $('#taskCompleted').val('');
   task.taskDueDate = $('#taskDueDate').val('');
    
}

//render books to the page
function refreshTasks() {
  $.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log(response);
    renderTasks(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
}

function addTask(taskToAdd) {
  $.ajax({
    type: 'POST',
    url: '/tasks',
    data: taskToAdd,
    }).then(function(response) {
      console.log('Response from server.', response);
      refreshTasks();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add book at this time. Please try again later.');
    });
}

//
function renderTasks(tasks){
$('.tableBody').empty();
console.log('hi');
for(let i = 0; i < tasks.length; i += 1) {
    let task = tasks[i];
    console.log(task);
    // For each book, append a new row to our table
    $('.tableBody').append(`
    <tr data-id="${task.id}">
        <td>${task.taskName}</td>
        <td>${task.taskDescription}</td>
        <td>${task.taskCompleted}</td>
        <td><type="checkbox" class="switch" id="taskCompleted"</td>
        <td>${task.taskDueDate}</td>
        <td><input type="text" id="taskDueDate"></td>
    </tr>
    `);
  }
}
