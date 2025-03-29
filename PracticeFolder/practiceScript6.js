let myForm = document.forms.myForm;
let message = document.getElementById('message')
 
myForm.name.onfocus = function(){
 myForm.name.style.border ='4px solid pink';
};

myForm.name.onblur = function(){
 myForm.name.style.border ='none';
};


myForm.onsubmit = function(){

if(myForm.name.value == '') {
 
 message.innerHTML = "Please Enter a Name";
 return false;

}else{

 message.innerHTML =  '';
 return true;

};


};






 



 



 

