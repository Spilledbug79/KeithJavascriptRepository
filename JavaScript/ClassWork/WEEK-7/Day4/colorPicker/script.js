// Create variables using const
//EXAMPLE const box = document.getElementById('colorBox);
//STEP 1

 

const colorBox = document.getElementById('colorBox');

const redButton = document.getElementById('redButton');

const greenButton = document.getElementById('greenButton');

const blueButton = document.getElementById('blueButton'); 

const colorInput = document.getElementById('colorInput');

const applyColorButton = document.getElementById('applyColorButton');

const resetButton = document.getElementById('resetButton')

// STEP 2 Event Handlers for buttons
// EXAMPLE- redButton.addEventListener('click', () => {
//   colorBox.style.backgroundColor = 'red';
// });

 

 redButton.addEventListener('click', () => {
  colorBox.style.backgroundColor = 'red';
 });

 greenButton.addEventListener('click', () => {
  colorBox.style.backgroundColor = 'green';
 });

 blueButton.addEventListener('click', () => {
  colorBox.style.backgroundColor = 'blue';});

  resetButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'lightgrey';
    colorBox.textContent ="Default Color";
    colorInput.value ="";
  }); 

 


 


//STEP 3 Event Handler for color input
 
//const colorInput = document.getElementById(colorInput);
//const ChangeColor = document.getElementById('colorBox');


 
applyColorButton.addEventListener('click', () => {
  const userColor = colorInput.value;
  colorBox.style.backgroundColor = userColor;
 });
 

//colorInput.addEventListener('input', (e) => {
  //colorBox.style.backgroundColor = e.target.value;});
  
 function validateColor(colorInput){
   
  color = colorInput;
  return  color === colorInput;
}

colorInput = document.getElementById('colorInput');
colorInput.addEventListener('input', () => {
  if (validateColor(colorInput.value)) {
    return ("valid color", colorInput.value)
  } else {
    return ("Invalid Color");
  }
  });

