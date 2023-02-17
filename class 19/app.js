//operators
// +
// -
// =
// /
// *
///let value1 = 17;
// let value2 = 27;
// console.log(value1 * value2)
// value = value1 + 1;
// value1++;
// value1 += 4;
// console.log(value1);

// value1 -= 4;
// console.log(value1);

// value1 == 4;
// console.log(value1);

// value1 *=4;
//  console.log(value1);

// value1 *= 4;
//  console.log(value1);
//COMPARISON
/* ==
<=
>=
!=
&&
||*/
// console.log(value1==16);
//console.log(value1 > 16 && value ==17); //both has to work
//console.log(value1 > 16 || value ==17); // one has to work
// conditionals
//if (true) execute
//false
// if (value1 == 17){
//     console.log("the values are the same ")
// }
// if (value1 == 20){
//          console.log("the values are the same ");//identation:another way to next 
//     }
//     else{
//         console.log("they are not the same");
//     }
// let time =10;
// if (time < 12){
//     console.log("Goodmorning ");//identation:another way to next 
// }
// else{
//    console.log("GoodAfternoon");
// }
// let age =18;
// if (age >=18){
//     console.log("Welcome you can vote");
// }
// else{
//    console.log("Sorry under age");
// }
//Algorithms and variabls
//variables
//let height = 1.74; 
// to ask for user input prompt("please enter your height in meters");
//let weight = prompt("please enter your weight in kilogram");
//body mass index
// let bmi = weight / (height * height);
// console.log(bmi);

// if(bmi >= 18.0 && bmi <= 24.9){
//     console.log("congratc, you are healthy"); //alert( bmi + "congrt,you are healthy")
// }
// else if(bmi < 18.0){
//     console.log("sorry, you are too skinny");
// }
// else if(bmi > 25.0 && bmi < 30.9){
//     console.log("Oga, go and watch your weight");
// }
// else{
//     console.log("your bmi falls within the range");
// }
// if(bmi >= 18.0 && bmi <= 24.9){
//         alert( Math.round(bmi) + "congrat, you are healthy"); //alert( bmi + "congrt,you are healthy")
//     }
//     else if(bmi < 18.0){
//         alert(Math.round(bmi) + "sorry, you are too skinny");
//     }
//     else if(bmi > 25.0 && bmi < 30.9){
//         alert(Math.round(bmi) + "Oga, go and watch your weight");
//     }
//     else{
//         alert(Math.round(bmi) + "your bmi falls within the range");
//     } ///math.round makes the valur a round figure

// let bulb =0;
// switch(bulb){
//     case 1:
//         console.log("Bulb is on");
//         break;
//         case 0:
//         console.log("Bulb off");
//         break;
//         default:
//             console.log("No light");
// }

// let user = {
//     usrname: "Parden",
//     password: 1234
// }
// let login = prompt("Enter your username");
// let pass = prompt("Enter your password"); 

// if (login == user.usrname && pass == user.password){
//     alert("Login sucessfully");
// }
// else{
//     alert("Invalid detail");
// }

// let voter = {
//     age:18,
//     nationality: "Nigerian"
// }
// let userAge = prompt("Enter your ag");
// let userD = prompt("Enter Nationality")
// if (userAge >= voter.age && userD == voter.nationality){
//        document.write("Eligible to vote");
//      }
//     else{
//         document.write("Not Eligible");
//     }

//(Iterations) Loops
// let x = 8;
// for (let x = 0; x <=10; x++){
//     console.log(x);
// }
//  for (let x = 0; x <10; x++){
//    console.log(x);
//  }


//class 20
//creatin a loop with an array
// const students = ["joe", "stella", "semi", "seyi", "Abiodun"];
// console.log(students [5]);
// for(student of students){
//   console.log(student);
// }
// for(student of students){
//   if (student == "stella"){ 
//     console.log(student + " is in the class");
// }
// else{
//     console.log("opps not in class");
// } 
//   }
// let value = "Parden";
// value = "Bala";

//While loop
// let x = 0;
// while (x <= 10) {
//     console.log( "This is a looping number " + x);
//     x++;
// }
// let x = 0;
// do {
//     console.log( "This is a looping number " + x);
//     x++;
// }
// while (x <= 10);
// const students = ["joe", "stella", "semi", "seyi", "Abiodun"];
// let x =0;
// while (students[x]) {
//     let student = students[x];
//     x++;
//         console.log( "welcome to class " + student);
        
//      }

//multiplication table

// let number = prompt("Please enter a number: ");
// for (let digit = 1; digit < 13; digit++){
//     console.log(number + " X " + digit + " = " + number * digit);
// }

// let i = 1;
// while(i < 13){
//     console.log(number + " X " + i + " = " + number * i);
//     i++;
// } 

    


