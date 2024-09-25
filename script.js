// Assignment 12 to 13

// Question 1

// var user = prompt("Enter Anything");

// if(user = user.typeof(String)){
    
//     alert("The input is string and Uppercase")
// }else{
//     alert("The input is number")
// }
// if(String.toUpperCase()){
//     alert("The input is string and Uppercase")
// }else if(String.toLowerCase()){
//     alert("The input is string and Lowercase")
// }


// Question 2

// var inp1 = +prompt("number 1");
// var inp2 = +prompt("number 2");

// if(inp1 > inp2 ){
// alert("the larger value is "+inp1);
// }else if(inp1 == inp2){
//     alert("the "+inp1+ " value is equal to "+inp2);
// }


// Question 3

// var user = +prompt("Enter a number", 10);

// if (user < 0) {
//   alert("The number is negative");
// } else if (user > 0) {
//   alert("The number is positive");
// }else if(user == 0){
//     alert("The number is zero");
// }




// Question 4

// var user = prompt("Write a letter");

// if(user == "a"){
//     alert("It's a Vowel");
// }else if(user == "e"){
//     alert("It's a Vowel");
// }else if(user == "i"){
//     alert("It's a Vowel");
// }else if(user == "o"){
//     alert("It's a Vowel");
// }else if(user == "u"){
//     alert("It's a Vowel");
// }else{
//     alert("It's a consonant");
// }

// Question 5

// var user = prompt("Password");

// var password = "sarfaraz";

// if(password == user){
//     alert("Correct!");
// }else{
//     alert("Incorrect password")
// }

// Question 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// Question 7

// var user = +prompt("Enter Hours");

// if(user == 13){
//     alert("It's 1pm");
// }else if(user == 14){
//     alert("It's 2pm");
// }else if(user == 15){
//     alert("It's 3pm");
// }else if(user == 16){
//     alert("It's 4pm");
// }else if(user == 17){
//     alert("It's 5pm");
// }else if(user == 18){
//     alert("It's 6pm");
// }else if(user == 19){
//     alert("It's 7pm");
// }else if(user == 20){
//     alert("It's 8pm");
// }else if(user == 21){
//     alert("It's 9pm");
// }else if(user == 22){
//     alert("It's 10pm");
// }else if(user == 23){
//     alert("It's 11pm");
// }else if(user == 24){
//     alert("It's 12am");
// }else{
//     alert("It's "+user+"am")
// }



// Assignment 14 to 16

// Question No 1

// let studentNames = [];

// Question No 2

// let studentNames = new Array();

// Question No 3

// let stringArray = ["Ali", "Ahmed", "Sara", "Zara"];

// Question No 4

// let numbersArray = [1, 2, 3, 4, 5];

// Question No 5

// let booleanArray = [true, false, true, false];

// Question No 6

// let mixedArray = ["Ali", 25, true, "Sara", 30, false];

// Question No 7

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Question No 8

// var StudentsName = ["Sarfaraz","Shams","Irshad"];

// var StudentsMarks = [320,230,480];


// Question No 10

// var StudentsScore = [320,230,480,120];

// var sort = StudentsScore;

// document.write("Score of Students : "+StudentsScore);
// document.write("<br>Ordered Score of Students : "+StudentsScore.sort());


// Question No 11

// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// document.write("Cities List : <br>"+city);
// document.write("<br>Selected Cities : <br>"+city.slice(0,2));

// Question No 12

// var arr = ["This", "is", "my", "cat"];

// document.write("Array : <br>"+arr);
// document.write("<br>String : <br>"+arr.join(" "));

// Assignment 17 to 20

// Question No 1

// var arr = [[]]

// Question No 2

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// Question No 3

// for(var i = 1; i<= 10 ; i++){
//     console.log(i);
// }

// Question No 4

// var input = prompt("Enter Table ");
// var input2 = prompt("Enter Table length");

// for(var i = 1; i <= input2; i++){
//     console.log(input +" x "+ i +" = "+ input*i);
// }

// Question No 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0; i <=fruits.length; i++){
//     document.write(fruits[i],"<br>");
// }

// for(var i = 0; i <=fruits.length; i++){
//     document.write("Element at index ", i ," is ", fruits[i],"<br>");
// }

// Question No 6
//A

// for(var i = 1; i <= 15; i++){
//     document.write(i+"<br>");
// }

//B

// for(var i = 10; i >= 1; i--){
//     document.write(i+"<br>");
// }

//C

// for(var i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         document.write(i+"<br>");
//     }
// }

//D

// for(var i = 1; i <= 20; i++){
//     if(i % 2){
//         document.write(i+"<br>");
//     }
// }

//E

// for(var i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         document.write(i,"k"+"<br>");
//     }
// }

//Question 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var user = prompt("Enter Fruit name")

// if(A.includes(user)){
//     document.write(user," is available at index ", A.indexOf(user)," in our bakery ","<br>")
// }else{
//     document.write("Sorry, we don't have ", user,"<br>")
// }


//Question 8

// var A = [24, 53, 78, 100, 12];
// var b = 0;

// for(var i =0; i <= A.length; i++){
//     if(b <= A[i]){
//         b = A[i]
//     }
// }

// document.write("The largest number is ",b);


// Question 9

// var A = [24, 1, 78, 100, 2];
// var b = A.length;

// for(var i =A.length; i >= 0; i--){
//     if(b >= A[i]){
//         b = A[i]
//     }
// }

// document.write("The smallest number is ",b);


// Question 10

// var u = 5;
// var ui = 100;

// for(var i = 1; i <= ui; i++){
//     document.write(u*i,"<br>")
// }