$(document).ready(function(){
  console.log('jQuery sourced.');
  $('#submitBttn').on('click', submitTask);
});

function addClickHandlers() {
  
//   $('#bookShelf').on('click', '.deleteBttn', deleteRow); 
//   $('#markAsRead').on('click', updateBooks);
  // TODO - Add code for edit & delete buttons
};

function submitTask(){
    console.log('submit button clicked.');
}