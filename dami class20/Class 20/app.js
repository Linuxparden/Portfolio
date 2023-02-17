//var name; // Global Scope

// function newName(){
//     name = "Dami";
//     const lastName = "Cole";
//     console.log(lastName);
// }
// // newName();
// let i = newFunction(10, 20);
// console.log(i);

// function newFunction(value1, value2){
//     return value1 + value2;
// }

// i = function (value1, value2){
//     return value1 * value2;
// }

// let x = i(6, 5);

// const header = document.querySelector(".header");
// header.innerText = "Hello";
// header.style.background = 'grey';
// header.style.color = 'brown';

// const body = document.querySelector("body");
// body.style.background = 'grey';

// const parent = document.querySelector(".main");
// parent.style.background = '#e389b9';

// const child = document.querySelector(".child");
// child.style.background = "#ffce30";

// function validateForm(){
//   var x=document.forms["myForm"]["email"].value;["password"].value;["confirm password"].value;
// if (x==null || x=="")
//   {
//   alert("email must be filled out");
//   return false;
//   }
// 	else if($pwd!=$cpwd)
// 	{alert ("password not match");}
// 	else{
// 		alert ("submitted sucessfully");
		
// 		}
    // let x = document.forms["myForm"]["fname"].value;
    // let sliced = x.length;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    //}
 // }
//  function validateform(){  
//   var name=document.myform.name.value;  
//   var password=document.myform.password.value;  
//   var confirmPassword=document.myform.confirmPassword.value;
//   if (name==null || name==""){  
//     alert("Name can't be blank");  
//     return false;  
//   }
//   else if( password==null || password=="" && password.length<6){  
//     alert("Password cant be blink and  must be at least 6 characters long. ");  
//     return false;  
//     }   
//     else if( password != confirmPassword){  
//       alert("Password does not match.");  
//       return false;  
//       }  
    
 //}  
//  function validateform(){  
//   var name=document.myform.name.value;  
//   var password=document.myform.password.value;  
    
//   if (name==null || name==""){  
//     alert("Name can't be blank");  
//     return false;  
//   }else if(password.length<6){  
//     alert("Password must be at least 6 characters long.");  
//     return false;  
//     }  
    
//   } 




function confirmForm(){
  var username=document.forms['login']['username'].value;
  var password=document.forms['login']['password'].value;
   const user = {
      username:'Parden',
      password:'tma123'
     }
  if (username =="" ){
    alert("Enter username");
    
  }
    if(password== ""){
      alert("Enter password");
    }
    if (username == user.username && password==user.password){
      alert("login successful")
    }
    else{
      alert("invalid login");
    }
  
 }
// function formSubmit(){
//   document.getElementById("form").submit();
// }
