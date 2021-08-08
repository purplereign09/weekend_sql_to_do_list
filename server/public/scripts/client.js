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
    $('#toDoInput').val();
}

//render books to the page
function refreshTasks() {
  $.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log(response);
    renderBooks(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
}