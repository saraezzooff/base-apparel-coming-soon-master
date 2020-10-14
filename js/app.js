const form       =  document.querySelector('.main form'),
      email      =  document.querySelector('.main form input[type=email]'),
      error_icon =  document.querySelector('.main form .error-icon'),
      error_text =  document.querySelector('.main form .error-text');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let emailVal = email.value;
        if(validateEmail(emailVal)){
            error_icon.style.display = 'none';
            error_text.style.display = 'none';
            email.classList.remove('error');
          
        }
        else{
            error_icon.style.display = 'block';
            error_text.style.display = 'block';
            email.classList.add('error');
            // email.style.border = '1px solid hsl(0, 93%, 68%)';
        
        }
        
    });


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
