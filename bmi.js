var male = document.getElementById("male");
var female = document.getElementById("female");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");

var calcbtn = document.getElementById("btn");
var clr = document.getElementById("clr");

var bmi = document.getElementById("bmi");
var kcal = document.getElementById("kcal");
var protein = document.getElementById("protein");
var fat = document.getElementById("fat");
var carb = document.getElementById("carb");

calcbtn.onclick = function calcbmi(){
  bmi.value = weight.value / (height.value^2);
  if (male.checked){
    kcal.value = 13.397*weight.value+4.799*height.value-5.667*age.value+88.362;
  }
  else {
    kcal.value = 9.247*weight.value+3.098*height.value-4.33*age.value+447.593;
  }
  
}
