
// Assignment 1: Color Changer with .css() and .click()

 $(function(){ 
   $('#changeColor').on('click',function(){
     $('#colorBox').css('background','blue');
   })
 });




// Assignment 2: Toggle Visibility with .hide(), .show(), and .click() 

$(function(){
 $('#toggleButton').on('click', function(){
  $('#text').toggle();
 });
});


// Assignment 3: Append and Prepend List Items with .append() and .prepend()

$(function(){
 $('#addToTop').on('click', function(){
  var item = $('#itemText').val().trim();
  if(item){
   $('#itemList').prepend('<li>' + item + '<li>');
   $('itemText').val('')
  }
 
 
 })

 
  $('#addToBottom').on('click', function(){
   var item = $('#itemText').val().trim()
   if(item){
    $('#itemList').append('<li>' + item + '<li>');
    $('itemText').val('');
   }
  
  
  })


})
// Assignment 4: Toggle Class with .toggleClass()

$(function(){
  $('#toggleDiv').on('click', function(){
   $(this).find('.text').toggleClass('highlight') 
  });
 });



// Assignment 5: Load Content via AJAX with $.get()

 
 
  $(function(){
    $('#loadContent').on('click', function(){
      $.ajax( {
        url: 'content.txt', 
        type: 'GET',
        success: function(data){
          $('#ajaxContent').html(data)
        }
      })
     .fail(function(jqXHR, textStatus, errorThrown){
        $('#ajaxContent').html('<p>Error</p>');
        console.error("AJAX Error: " + textStatus + " - " + errorThrown);
       })
      })
    })
  
 
 
