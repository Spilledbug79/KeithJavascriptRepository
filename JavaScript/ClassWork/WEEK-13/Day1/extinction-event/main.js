//select elements
let strikeThrough = document.querySelectorAll('ol li');
let eraseList = document.querySelectorAll('ul li');
let dinos = document.querySelectorAll('img');

let dino2 = document.getElementById('dino2')

dino2.addEventListener('click', function(){
  dino2.textContent = 'Hello';
});

//use a for of loop to add a line-through the text a user clicks on
for (let listItem of strikeThrough){
  listItem.addEventListener('click', function(){
      listItem.style.textDecoration = 'line-through';
  });
};

//use a for of to erase and item when a user clicks on it

for(let listItem of eraseList){
  listItem.addEventListener('click', function(){
    listItem.style.opacity = 0;
  })
};

//use a for to make the image of the dinosaur disapear when clicked on 

for(let listItem of dinos){
  listItem.addEventListener('click', function(){
    listItem.style.width = "0px";
  })
};

// dinos.forEach(listItem => listItem.addEventListener('click', function(){
//   listItem.style.width = "0px"
// }))

//make all of the dinosaurs disapear when a user clicks the destroy-all element
//you will need to use document.getElementById() and addEventListener()


document.getElementById("destroy-all").addEventListener("click", function(){

dinos.forEach(listItem => listItem.style.width = "0px")

strikeThrough.forEach(listItem => listItem.style.textDecoration = "line-through")

eraseList.forEach(listItem => listItem.style.opacity = 0)
  
})

