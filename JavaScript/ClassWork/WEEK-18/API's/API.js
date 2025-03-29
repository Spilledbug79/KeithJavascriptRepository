 
document.getElementById('fetch-button').addEventListener('click', fetchUserNames);

function fetchUserNames(){
 console.log("Fetching usernames..."); // Debugging log
 
 fetch("https://jsonplaceholder.typicode.com/users").then(response => {
  if (!response.ok) {
    console.log('Network response was not ok')
      throw new Error(`Network Response was not ok status:${response.status}-${response.statusText}`)
  }; 
  return response.json();

}).then(data => { 
 
  console.log("Data received:", data) //debugging log
  
  const list = document.getElementById("user-list");
  list.innerHTML = ""; // Clear previous data
  data.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = user.username; // Display usernames
    list.appendChild(listItem);
  
   });
  })
 .catch(error => console.error("Error fetching data:", error));
}














 


