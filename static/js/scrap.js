scrap

// import the daata from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

console.log(doubleAddition(65,34));

// arrow functions
printHello = () => "Hello there!";

// Converted to an arrow function
addition = (a, b) => a + b;

// Converted to an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;

// Basic form of js if statement
// if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
    Filter the default data to show only the date entered
};