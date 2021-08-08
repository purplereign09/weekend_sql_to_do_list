$(document).ready(function(){
  console.log('jQuery sourced.');
  //click button and append new task to the table/DOM
  $('#submitBttn').on('click', submitNewTask);
  //after an new task has been placed, refresh tasks
  refreshTasks();
  //render all tasks and new tasks to the DOM
  renderTasks();
//clich checkbox and turn row red
$('#taskCompleted').on('click', checkOffTask);
});

function addClickHandlers() {
  $('#tableBox').on('click', '.deleteBttn', deleteTaskRow);

};

//GET
//Getting all tasks from the DB and rendering on DOM
function renderTasks(task){
$.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log(response);
    //function to render tasks
    // renderTasks(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
  $(document).append('<table id="tableBox"></table>')
}

//POST
//Submit your task and add input values to your form
//empty placeholders once data is collected
//append data to the DOM and store in the table through
// as POST 
function submitNewTask(taskToAdd){
    console.log('submit button clicked.');
   let task = {};
    task.taskName = $('#taskName').val();
    task.taskDescription =$('#taskDescription').val();
    task.taskCompleted = $('#taskCompleted').val();
    task.taskDueDate = $('#taskDueDate').val();
   updateTasks(task);
    task.taskName = $('#taskName').val('');
    task.taskDescription =$('#taskDescription').val('');
    task.taskCompleted = $('#taskCompleted').val('');
    task.taskDueDate = $('#taskDueDate').val('');
   $.ajax({
    type: 'POST',
    url: '/tasks',
    data: taskToAdd,
    }).then(function(response) {
      console.log('Response from server.', response);
      renderTasks();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add book at this time. Please try again later.');
    });
}

//render books to the page including any new ones 
//once the submit button has been clicked
function renderTasks() {
    $('.tableBody').empty();
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
        <td><button class="deleteBttn">X</button></td>
        <td>${task.taskDueDate}</td>
        <td><input type="text" id="taskDueDate"></td>
    </tr>
    `);
  }
$.ajax({
    method: 'PUT',
    url: `/tasks/${tasksID}`,
})
.then( function(response) {
console.log(response);  
})
.catch( function(error) {
    alert('Error on vote on song', error);
})
};

  


function deleteTaskRow(taskToDelete) {
  console.log('hi');
}
