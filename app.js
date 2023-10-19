const sign_in_btn=document.querySelector('#sign-in-button');
const sign_up_btn=document.querySelector('#sign-up-button');
const container=document.querySelector('.container');

const form_container=document.querySelector('.form-container');
var username=document.forms['form']['username'];
var password=document.forms['form']['password'];
var email=document.forms['form']['email'];

var user_error=document.getElementById('user_error');
var pass_error=document.getElementById('pass_error');
var email_error=document.getElementById('email_error');

function validated(){
    if(username.value.length < 9){
        /*username.style.border='1px solid red';*/
        user_error.style.display="block";
        username.focus();
        return false;
    }
    if(email.value.length < 9){
        email.style.border='1px solid red';
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(password.value.length < 9){
        password.style.border='1px solid red';
        pass_error.style.display="block";
        password.focus();
        return false;
    }
    
}

function valid(){
   
    if(email.value.length < 9){
        email.style.border='1px solid red';
        email_error.style.display="block";
        email.focus();
        return false;
    }
    
    
}


 function user_verify(){
   if(username.value.length >= 8){
      username.style.border="1px solid silver";
      user_error.style.display="none";
      return true;
   }
 }
 function email_verify(){
    if(email.value.length >= 8){
       email.style.border="1px solid silver";
       email_error.style.display="none";
       return true;
    }
  }

 function pass_verify(){
    if(password.value.length >= 5){
       password.style.border="1px solid silver";
       pass_error.style.display="none";
       return true;
    }
  }
 



/*
function checkmail(){
    const pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailinput.value.match(pattern)){
           return email.classList.add('invalide');
    }
    return email.classList.remove('invalide');
    
}
format.addEventListener('submit',(e)=>{
 e.preventDefault();
 checkmail();
})
*/
sign_up_btn.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
})


username.addEventListener('textInput',user_verify);
password.addEventListener('textInput',pass_verify);
email.addEventListener('textInput',email_verify);

