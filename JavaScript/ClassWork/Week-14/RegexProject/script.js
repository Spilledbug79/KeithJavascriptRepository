//1.Handling Form Submission & Preventing Default Behavior

let registrationForm = document.getElementById('registrationForm') 
 

// 2. Preventing Form Submission

registrationForm.addEventListener('submit', function(event){
  event.preventDefault();


// 3.Accessing Form Elements

let username = document.getElementById('username').value; 

let password = document.getElementById('password').value; 

let email = document.getElementById('email').value; 

let phone = document.getElementById('phone').value;


//4.Defining Validation Rules with Regular Expressions

 
 let usernameRegex = /^[a-zA-Z]{6,}$/
 
 let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/  
 
 let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
 
 let phoneRegex = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/ 
 

 
 //5.Displaying Error Messages

document.getElementById('usernameError').textContent = usernameRegex.test(username) ? '' : "Invalid username!";

document.getElementById('passwordError').textContent = passwordRegex.test(password) ? '' : "Invalid password!";

document.getElementById('emailError').textContent = emailRegex.test(email) ? '' : "Invalid email!";

document.getElementById('phoneError').textContent = phoneRegex.test(phone) ? '' : "Invalid phone!";


//6. Successful Form Submission

 
  if (usernameRegex.test(username) && passwordRegex.test(password) && emailRegex.test(email) && phoneRegex.test(phone)) 
    
    { return alert(`Welcome ${username} your account has been created.`); 
}
   else if (usernameRegex.test(username) && passwordRegex.test(password) && emailRegex.test(email) && phoneRegex.test(phone))
    
    {

  }
  
  })