/*document.write("Hello");
window.alert("Hello class");
print("Hello");
console.log("Heloooooooo");
console.log(12456);
console.log(7 > 9);
let num = BigInt(12456789988756442);
console.log(num);
let value;
console.log(value);
var author = "Joyce Meyer";

author = "Danielle Steel";
console.log(author)
let book = "chef lo's cooking guide";
book = "Rich dad, poor dad";
console.log(book);
const carModel = "KIA";

console.log(carModel);*/
// let favColor = "Green";
// console.log("my favourite color is "  + favColor);
// let name = "Audu";
// console.log(name);
// let lastName = "Linus";
// console.log(lastName);
// const favMeal = "Rice and Plantain";
// console.log(favMeal);
// let favBook = "Sell your Brain";
// console.log(favBook);
// console.log(favBook,favColor,lastName,name,favMeal);

// let num1= 20;
// let num2 = 10;
// console.log(num1+num2);

// // The Area of rectangle
// let length=4;
// let breadth=5;
// let area =length*breadth;
// console.log("The area is " + area + "m2");
// Functions
function area (length, breadth){
    console.log(30 * 10);
}
area();

// function school(){
//     let classRoom = "SS3";
//     console.log(classRoom);
// }
// school();
// let Parden = {height:"5ft 6", skinColor: "black",
// hairType:"bald"};
// console.log("Linux is" + Parden.height + "tall");

const student = {username: "stu_ID", password:1245}
console.log("Your username is "+ student.username +  " and password is " +student.password);

// let user = {
//     firstName:"John",
//     lastName:"Doe",
//     age:22,
//     email:"doe@gmail.com"
// }
// alert("Welcome Mr "+ user.firstName + "" + user.lastName);

let user = {
    firstName:"John",
    lastName:"Doe",
    age:22,
    email:"doe@gmail.com",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
alert("Welcome to T-Max, Mr "+ user.fullName());



