 //1.  Slide Toggle a Panel 
 

$(function(){
 $('#togglePanelBtn').on('click', function(){
  $('#panel').slideToggle();
 });
});

// 2.  Add and Remove CSS Class
$(function(){
 $('#toggleHighlightBtn').on('click', function(){
  $("#content").toggleClass('highlight');
 })
})



// 3.  Change Image Source on Click

$(function(){
 $("#changeImageBtn").on('click', function(){
  $("#myImage").attr("src",'./images/fish.jpg'); 
 })
})