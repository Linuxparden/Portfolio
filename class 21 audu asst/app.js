// let text = document.querySelector("#txt");
// let btn = document.querySelector(".btn");

// function changeColor(){
//   //  text.style.color = 'red';
//   text.classList.add('textD');
// }
const showImageButton = document.getElementById("show-image-button");
const myImage = document.getElementById("my-image");
showImageButton.addEventListener("click", () =>{
  myImage.classList.toggle("visible");
});