

    let content = document.getElementById('content');
    let button = document.getElementById('show-more');

    button.onclick = function(){

    if(content.className == "open"){
      //shrink the box
      
    content.className ="";
    button.innerHTML = "Show More";

    } else {
     //expand the box
     
    content.className = "open";
    button.innerHTML = 'Show Less';

    };

 };





 

 