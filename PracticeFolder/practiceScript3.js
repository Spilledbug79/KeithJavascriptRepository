// let newLi = document.createElement('li');
// console.log(newLi);

// let newFood = document.createElement('a');
// console.log(newFood);

// let foodList = document.getElementById('foodList').getElementsByTagName('ul')[0];

// console.log(foodList);

// foodList.appendChild(newLi);

// newLi.appendChild(newFood)

// newFood.innerHTML = "Cake";

// foodList.insertBefore(newLi, foodList.getElementsByTagName('li')[0])

// let parent = document.getElementById('foodList').getElementsByTagName('ul')[0];

// let child = parent.getElementsByTagName('li')[1]

// parent.removeChild(child)

// let title = document.getElementById('page-title');

// title.onclick = function(){
//   alert('you clicked me')
// };

// title.onmouseover = function() {
//   alert(' you hovered ')
// };

function setUpEvents(){

 let content = document.getElementById('content');
 let button = document.getElementById('show-more');

 button.onclick = function () {
 if ( content.className=='open'){
  content.className="";
  button.innerHTML="Show More"
 } else {
 content.className="open";
  button.innerHTML="Show Less"
 }
};

}

window.onload = function(){

    setUpEvents();

};