let uname = document.getElementById('username');
let pswrd = document.getElementById('password');
let flag = 1;

function validate()
{
    // Username validations
    if(uname.value == '')
    {
        document.getElementById('username-correction').innerHTML = "username is empty"
        flag = 0;
    }
    else if(uname.value != "ompawar12")
    {
        document.getElementById('username-correction').innerHTML = "incorrect username"
        flag = 0;
    }
    else
    {
        document.getElementById('username-correction').innerHTML = "";
        flag = 1;
    }
   
    // password validation
    if(pswrd.value == "")
    {
        document.getElementById('password-correction').innerHTML = "password is empty";
        flag = 0;
       
    }
    else if(pswrd.value.length < 8)
    {
        document.getElementById('password-correction').innerHTML = "password should have atleast 8 characters";
        flag = 0;
    }
    else if(pswrd.value != "123123123")
    {
        document.getElementById('password-correction').innerHTML = "incorrect password";
        flag = 0;
    }
    else
    {
        document.getElementById('password-correction').innerHTML = "";
        flag = 1;
    }
    
    if(flag)
    {
        return true;
    }
    else
    {
        return false;
    }

}