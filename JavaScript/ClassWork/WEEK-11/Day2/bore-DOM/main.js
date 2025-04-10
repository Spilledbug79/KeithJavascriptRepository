// 1. Alter the text color of the paragraph to a shade of aqua.

    const paraText = document.querySelector('p');
    paraText.style.color ='aqua'

// 2. Adjust the font size of the heading to 42 pixels.

    const heading = document.querySelector('h1');
    heading.style.fontSize = "42px";
    heading.style.textAlign = "center"

    // 3. Replace the text in the paragraph with the new Lorem Ipsum content.

paraText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.";


// 4. Reduce the opacity of the 13th item to 30% transparency.

const thirteen = document.getElementById("item-13");

thirteen.style.opacity ="30%"

// 5. Modify the text of the 3rd item to read "Greetings!"
 
const third = document.getElementById('item-3');

third.textContent = "Greetings!"


// 6. Update the image below the list to display the new image.

const img = document.querySelector('.imgDiv img');

img.src ="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=";

// 7. Resize the new image to a height of 250 pixels.

img.style.height = '250px';

// 8. Integrate an additional image using innerHTML below the existing image.

const newImage = document.createElement('img');
 
newImage.src = "meme-duck-i-cant-believe-you-6ot-plastic-surgery.jpeg";

document.querySelector('.imgDiv').insertAdjacentElement('beforebegin', newImage);

// 9. Adjust the height of the new image to 280 pixels programmatically.

newImage.style.height ="280px";

// 10. Append a 16th <li> element to the list using innerHTML.

const itemList = document.querySelector('ul');

itemList.innerHTML += '<li id ="item-16">16</li>';

itemList.innerHTML += '<li id ="item-17" class ="item" >17</li>';

itemList.innerHTML += '<li id ="item-18">18</li>';

// 11. Assign the same class as the other list items to the new <li> element using JavaScript.

const newItem = document.getElementById('item-16');
newItem.classList.add('item');

const eighteen = document.getElementById('item-18');
newItem.classList.add('item');

// 12. Populate the new <li> with the text "Never gonna give you up."

newItem.textContent ="Never gonna give you up.";

const seventeen = document.getElementById("item-17")

seventeen.textContent = "I am going to give you up."

eighteen.textContent = "Sometimes going to give you up."
