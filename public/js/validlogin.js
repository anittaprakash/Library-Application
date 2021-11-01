
function checkvalid() {
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    var error=document.getElementById('error');

    console.log(password);
    console.log(username);
 
       if((username=="admin") && (password == "12345"))
       {
           return true;
       }
       else if((username=="") || (password == ""))
       {
           alert("Username && Password field cannot be blank");
           
            // error.innerHTML="Fields Can Not Be Empty";
            // error.style.color="red";
            // error.style.backgroundColor="black";
           return false;
           
       }
       else 
       {
           alert(" Invalid username or password or both");
           return false;
           

       }          

}
// function  checkvalid(){
//     let username=document.getElementById('username').value;
//     let password=document.getElementById('password').value;
//     var error=document.getElementById("error");
//     if(username.trim()==""||password.trim()==""){
//         loger.innerHTML="Fields Can Not Be Empty";
//         loger.style.color="red";
//         loger.style.backgroundColor="black";
//         return 0;
//     }
//     if(username.trim()!=""&&password.trim()!=""){
//         error.innerHTML="";
//         if(username=="admin" && password=="12345"){
//             return 1;
//         }
//         else{
//             error.innerHTML="User name/Password is incorrect";
//             error.style.color="red";
//             error.style.backgroundColor="black";
//             return 0;
//         }
//     }
// }

