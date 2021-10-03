/* Justin Yeung CWID: 50018281
JavaScript Exercise 2 Part 2:
Write a JavaScript that outputs three tables. With each table output the annual balance after investing
1,000 with a fixed interest rate. Each entry of the table represents the balance after n years, where n runs from 1 to 5.
The first entry for year 1, the second entry for year 2, etc. Your program will output three tables with different interest rates;
the first table with interest rate of 5% and the last table with an interest rate of 7%.
Note the background color for the odd rows of the table should be yellow and the even rows should be light green.*/

let balance = 1000.00;
let int, intRate = 0.05;

for(x = 0; x <= 2; x++){
    var amt = balance;
    int = intRate + (x/100);
    document.write("<table>");
    document.write("<thead><tr><th>Year</th>");
    document.write("<th>Amount on deposit</th>");
    document.write("<th>Interest Rate</th>");
    document.write("</tr></thead><tbody>");

    for(y = 1; y <= 10; y++){
        amt = amt + (amt*int);
        document.write("<tr><td>"+y+"</td><td>"+amt.toFixed(2)+"</td><td>"+int.toFixed(2)+"</td></tr>")
    }
    
    document.write("</table><br>");
}
