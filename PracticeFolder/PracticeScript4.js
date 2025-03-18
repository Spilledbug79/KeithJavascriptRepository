 // let myMessage = document.getElementById('message');
 
 // function showMessage(){

 //  myMessage.className="show";

 // };

 // setTimeout(showMessage, 3000);


 let colourChanger = document.getElementById('colour-changer');
 
 let colours = ['red', 'blue', 'green', 'pink'];

 let counter = 0;

 function changeColour(){

  colourChanger.style.background = colours[counter];
  counter++;

 }

 setInterval(changeColour, 3000)
