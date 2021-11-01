let email=document.getElementById("email");
let error=document.getElementById("error");
function validemail()
{
  let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,3})+(.[a-z]{2,3})?$/;
  if(regexp.test(email.value)){
    error.innerHTML="";
    return true;
  }else{
    error.innerHTML="must be (name)@(domain).(extension)(.extention)";
    error.style.color="red";
    return false;
  }
}


  function checkPasswordStrength() {
      var number = /([0-9])/;
      var alphabets = /([a-zA-Z])/;
      var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
      if ($('#password').val().length < 9) {
          $('#password-strength-status').removeClass();
          $('#password-strength-status').addClass('weak-password');
          $('#password-strength-status').html("Weak (should be atleast 8 characters.)");
      } else {
          if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
              $('#password-strength-status').removeClass();
              $('#password-strength-status').addClass('strong-password');
              $('#password-strength-status').html("Strong");
          } else {
              $('#password-strength-status').removeClass();
              $('#password-strength-status').addClass('medium-password');
              $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
          }
      }
  }

  

function checkblankf(){

    var username=document.getElementById('username');
    var phoneNo = document.getElementById('txtPhoneNo');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var cpassword=document.getElementById('cpassword');
    

    if(username.value == "" || username.value == null ){
        alert("Please enter your user Name.");
        return false;
    }else if(phoneNo.value == "" || phoneNo.value == null){
            alert("Please enter your Mobile no");
            return false;
    }else if(email.value == "" || email.value == null ){
            alert("Please enter your Email");
            return false;
    }else if(password.value == "" || password.value == null ){
            alert("Please enter your Password");
            return false;
    }else if(cpassword.value == "" || cpassword.value == null ){
            alert("Please enter your Conform Password");
            return false;
    }
}

function checkblankfl(){
    
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    if(email.value == "" || email.value == null ){
        alert("Please enter your Email");
        return false;
    }else if(password.value == "" || password.value == null ){
        alert("Please enter your Password");
        return false;
    }
}
    
