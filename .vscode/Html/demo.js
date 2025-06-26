let input = prompt("Enter a number:");
let number = parseFloat(input);

if (Number.isInteger(number)) {
  alert(number + " is an integer.");
} else {
  alert(number + " is NOT an integer.");
}
