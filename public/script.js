/*
  Project:   Hands-On Project 1-2
	Author:    Logan Rabalais
	Date:      08/31/17
	Purpose:   To illustrate variable initialization and use in a method
*/

//initialize variables for service names and speeds

var service1Name = "Basic";
var service2Name = "Express";
var service3Name = "Extreme";
var service4Name = "Ultimate";
var service1Speed = 5;
var service2Speed = 25;
var service3Speed = 50;
var service4Speed = 150;

//use document.write statements to form HTML5 table rows and cells 

document.write("<tr><td>"); //creates a new table row <tr> and first table cell <td>
document.write(service1Name); //writes out value stored in service1Name
document.write("</td>");
document.write("<td>"); //Creates a second table cell in the same row
document.write(service1Speed); //writes out the value stored in service1Speed
document.write("</td></tr>"); //ends the table row

document.write("<tr><td>"); //creates a new table row <tr> and first table cell <td>
document.write(service2Name); //writes out value stored in service2Name
document.write("</td>");
document.write("<td>"); //Creates a second table cell in the same row
document.write(service2Speed); //writes out the value stored in service2Speed
document.write("</td></tr>"); //ends the table row

document.write("<tr><td>"); //creates a new table row <tr> and first table cell <td>
document.write(service3Name); //writes out value stored in service3Name
document.write("</td>");
document.write("<td>"); //Creates a second table cell in the same row
document.write(service3Speed); //writes out the value stored in service3Speed
document.write("</td></tr>"); //ends the table row

document.write("<tr><td>"); //creates a new table row <tr> and first table cell <td>
document.write(service4Name); //writes out value stored in service4Name
document.write("</td>");
document.write("<td>"); //Creates a second table cell in the same row
document.write(service4Speed); //writes out the value stored in service4Speed
document.write("</td></tr>"); //ends the table row