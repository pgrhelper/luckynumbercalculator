var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");
var thirdInput = document.getElementById("thirdInput");
var fourthInput = document.getElementById("fourthInput");
var fifthInput = document.getElementById("fifthInput");
var luckyNumberInput = document.getElementById("luckyNumberInput");

var diagonalLeft = document.getElementById("diagonalLeft");
var diagonalRight = document.getElementById("diagonalRight");
var down1 = document.getElementById("down1");
var down2 = document.getElementById("down2");
var down3 = document.getElementById("down3");
var side1 = document.getElementById("side1");
var side2 = document.getElementById("side2");
var side3 = document.getElementById("side3");

var calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click",()=>{
diagonalLeft.innerText = "";
diagonalRight.innerText = "";
down1.innerText = "";
down2.innerText = "";
down3.innerText = "";
side1.innerText = "";
side2.innerText = "";
side3.innerText = "";
var numbers = [1,2,3,4,5,6,7,8,9];
removeNumber(numbers,firstInput);
removeNumber(numbers,secondInput);
removeNumber(numbers,thirdInput);
removeNumber(numbers,fourthInput);
removeNumber(numbers,fifthInput);
if(numbers.length !== 4){
    alert("Wrong values");
    return;
}


var first = parseInt(firstInput.value);
var second = parseInt(secondInput.value);
var third = parseInt(thirdInput.value);
var fourth = parseInt(fourthInput.value);
var fifth = parseInt(fifthInput.value);
var luckyNumber = parseInt(luckyNumberInput.value);
//diagonalLeft
if((first + third + fifth) === luckyNumber)
diagonalLeft.innerText = "100%";
else
diagonalLeft.innerText = "0";
//diagonalRight
if((second + third + fourth) === luckyNumber)
diagonalRight.innerText = "100%";
else
diagonalRight.innerText = "0";
//down1
down1.innerText = getSuccessCountTwoNumbers(first,fourth,numbers,luckyNumber);
//down2
down2.innerText = getSuccessCountOneNumber(third,numbers,luckyNumber);
//down3
down3.innerText = getSuccessCountTwoNumbers(second,fifth,numbers,luckyNumber);
//side1
side1.innerText = getSuccessCountTwoNumbers(first,second,numbers,luckyNumber);
//side2
side2.innerText = getSuccessCountOneNumber(third,numbers,luckyNumber);
//side3
side3.innerText = getSuccessCountTwoNumbers(fourth,fifth,numbers,luckyNumber);
alert("Success");
function getSuccessCountTwoNumbers(first,second,numbers,luckyNumber){
    var successCount = 0;
    for(var num1 of numbers){
        if(first + second + num1 == luckyNumber)
        successCount++;
    }
    return successCount;
}
function getSuccessCountOneNumber(first,numbers,luckyNumber){
    var successCount = 0;
    for(var num1 of numbers){
        for(var num2 of numbers){
            if(first + num2 + num1 == luckyNumber)
            successCount++;
        }
    }
    return successCount;
}
function removeNumber(numbers,input){
    var index = numbers.indexOf(parseInt(input.value));
    if (index > -1) { // only splice array when item is found
      numbers.splice(index, 1); // 2nd parameter means remove one item only
    }
}
});
