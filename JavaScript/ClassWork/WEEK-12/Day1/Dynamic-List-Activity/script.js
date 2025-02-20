let input = document.getElementById('item-input');

let addButton = document.getElementById("add-btn");

let list = document.getElementById('item-list');

 
let key = document.getElementById("item-input")

   //KEYPRESS
  
   key.addEventListener("keydown", function (event) {
  if (input.value.trim() !== '' && event.key === "Enter"){

    let newItem = document.createElement('li'); 
  
    newItem.textContent = input.value;
   
    let deleteButton = document.createElement("button");
    
    deleteButton.textContent = "delete"
    
    deleteButton.style.marginLeft ="15px"
    
    deleteButton.addEventListener("click", function(){
        
      list.removeChild(newItem)
      })
      
      newItem.appendChild(deleteButton);
    
      list.appendChild(newItem);
  
    input.value = ""; //clear input field }
  }
});
   

  //BUTTON:

  addButton.style.color ="green"

addButton.addEventListener("click", function(){
  if (input.value.trim() !== ''){
  
    let newItem = document.createElement('li'); 
  
    newItem.textContent = input.value;
   
    let deleteButton = document.createElement("button");
    
    deleteButton.textContent = "delete"
    
    deleteButton.style.marginLeft ="15px"
    
    deleteButton.addEventListener("click", function(){
        
      list.removeChild(newItem)
      })
      
      newItem.appendChild(deleteButton);
    
      list.appendChild(newItem);
  
    input.value = ""; //clear input field }
  }
});
     
  
    

 