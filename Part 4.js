/* Justin Yeung CWID: 50018281
JavaScript Exercise 2 Part 4:
Write a JavaScript program which will ask a user to enter two number between 1 and 20. 
Your program will then output the number, its square, and its cube from the smaller number to the larger number row by row.
If a user enters an invalid number, your program will continue to ask user until user enter a valid number. 
The following showed a user entered 23 first and the system asked the user to enter a valid number. The user then entered 10 which is valid.
The system will then ask the user to enter another number. The user then entered 2 which is also valid. 
Although the user did not enter numbers in ascending order, your program will compute squares and cubes from 2 to 10 rather than 10 to 2*/

while (true){
    let num1 = parseInt(prompt("Enter a number between 1-20"));
    let num2 = parseInt(prompt("Enter a number between 1-20"));

    if(num1 > num2 || num1 < 1 || num2 < 1 || num1 > 20 || num2 > 20){
        alert("Invalid range.");
    }else{
        document.write("<t3>Square and Cubes<table>");
        document.write("<tr><td>Number</td><td>Square</td><td>Cube</td></tr>");
        for(var i = num1; i <= num2; i++){
            document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
        }
        document.write("</table></t3>");
    break;
    }
}