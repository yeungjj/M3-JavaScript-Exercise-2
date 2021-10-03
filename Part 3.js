/* Justin Yeung CWID: 50018281
JavaScript Exercise 2 Part 3:
Write a script that asks the user to enter 3 numbers then you will output three rows of stars that correspond to the numbers entered. 
Note the numbers entered by the user cannot greater than 20 or less than 5. 
The second screenshot I not acceptable since user entered 234 which is greater than 20.The program will output three lines of stars. 
With the first one 10 stars in red, the second line 15 stars in yellow and the third line 12 stars in blue.*/

let input;

function enterNum(){
    while(true){
         input = parseInt(prompt("Enter a number."));
        if(input > 20 || input < 5){
            alert("Input invalid, Enter a number in the range 5-20");
        }else{
            break;
        }
    }
    return input;
}

function printStars(){
    let firstInt = enterNum();
    let secondInt = enterNum();
    let thirdInt = enterNum();

    for(var i = 0; i < firstInt; i++){
        document.getElementById("redStars").innerHTML += "<span style = 'color:red;'>*</span>";
    }

    for(var i = 0; i < secondInt; i++){
        document.getElementById("yellowStars").innerHTML += "<span style = 'color:yellow;'>*</span>";
    }

    for(var i = 0; i < thirdInt; i++){
        document.getElementById("blueStars").innerHTML += "<span style = 'color:blue;'>*</span>";
    }
}

printStars();


