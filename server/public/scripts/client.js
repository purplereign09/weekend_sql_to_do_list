
$(document).ready(function(){
  console.log('jQuery sourced.');

  //WHAT DOES IT DO WHERE IS IT EXECUTED?

// POST method submit button that append new tasks to the table/DOM AND saves to db
  $('#submitTask').on('click', submitNewTask);

//GET method that renders all tasks and new tasks to the DOM
  getTasks();


//PUT method where the row changes color on the 'check off' of a task.
$('#tableBox').on('click', '.completeInput', checkOffTask);

//DELETE metod where the table row is deleted and the information is deleted from the db
$('#tableBox').on('click', '.deleteBttn', deleteTaskRow);
});



//GET
//Getting all tasks from the DB and rendering on DOM
function getTasks(){
$.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log(response);
    //function to render tasks
    renderTasks(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
};//end getTasks function

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
    task.iscompleted = false;
   updateTasks(task);
    $('#taskName').val('');
    $('#taskDescription').val('');
}//end submitNewTask


   function updateTasks(taskToAdd){
   $.ajax({
    type: 'POST',
    url: '/tasks',
    data: taskToAdd,
    }).then(function(response) {
      console.log('Response from server.', response);
      getTasks();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add book at this time. Please try again later.');
    });
}//end update tasks and corrected response typo and added getTasks function

//render books to the page including any new ones 
//once the submit button has been clicked
function renderTasks(tasks) {
    $('#tableBody').empty();
for(let i = 0; i < tasks.length; i += 1) {
    // For each task, append a new row to our table
    $('#tableBody').append(`
        <tr data-id="${tasks[i].id}">
            <td>${tasks[i].task}</td>
            <td>${tasks[i].description}</td>
            <td><button class="completeInput completed-${tasks[i].iscompleted}"></button></td>
            <td><button class="deleteBttn">X</button></td>
        </tr>
      `);
  }
};//end renderTasks


//I want to insert a box --but not a checkbox

// Completed BOOLEAN DEFAULT FALSE
// add a user input>
// if true, set css to green ***FINISHED RIGHT HERE ...
function checkOffTask(){
  console.log($(this));
  let taskIsCompleted = $(this).closest('tr').data('id');

  //   for(let i = 0; i < tasks.length; i += 1) {
  //   // For each task, append a new row to our table
  //   // $('#tableBody').append(`
  //   //     <tr data-id="${tasks[i].id}">
  //   //         <td>${tasks[i].task}</td>
  //   //         <td>${tasks[i].description}</td>
  //   //         <td>${tasks[i].iscompleted}</td>
  //   //     </tr>
  //   //   `);
  // }//end checkOffTask function
  console.log('checkOffTask');
$.ajax({
    method: 'PUT',
    url: `/tasks/${taskIsCompleted}`,
})
.then( function(response) {
console.log(response);  
  getTasks();
})
.catch( function(error) {
    alert('Error on vote on song', error);
})
};

  


function deleteTaskRow() {
  console.log('hi');
  const taskToDelete = $(this).closest('tr').data('id');
  console.log(taskToDelete);
$.ajax({
    type: 'DELETE',
    url: `/tasks/${taskToDelete}`,
    data: 'taskToDelete'
    }).then((response) => {
      console.log('Response from server.', response);
      getTasks();
    }).catch((error) => {
      console.log('Error in POST', error)
      alert('Unable to delete task at this time. Please try again later.');
    });
  };

