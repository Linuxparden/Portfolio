//var name; // Global Scope

// function newName(){
//     name = "Dami";
//     const lastName = "Parden";
//console.log(lastName);
//}
// // newName();
//let i = newFunction(10, 20);
//console.log(i)

//function newFunction(value1, value2){
    // return value1 + value2;
//}
//i = function (value, value2){
    //return value1 * value2;
//}
// let x = i(6, 5);
//document.querySelector("h4").innerHTML = "Hello";
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

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let sliced = x.length;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
