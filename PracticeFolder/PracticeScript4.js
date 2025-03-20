 // Pop Up
 
 let myMessage = document.getElementById('message');
 
 function showMessage(){

  myMessage.className="show";

 };

 setTimeout(showMessage, 2000);

 
 //Colour Changer


 let colourChanger = document.getElementById('colour-changer');
 
 let colours = ['red', 'blue', 'green', 'pink', 'orange', 'purple', 'yellow'];

 let counter = 0;

 function changeColour(){

  if ( counter >= colours.length){
   counter = 0;
  };

  colourChanger.style.background = colours[counter];
  counter++;

 };

 let myTimer = setInterval(changeColour, 1000)
 
 colourChanger.onclick = function(){

   clearInterval(myTimer);
   alert('Timer Stopped')

 };
