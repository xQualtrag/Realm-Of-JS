//Calculator Using Reduce() method

//First of all create an empty array
let storeNumber = [];
//Now use a prompt() function to ask the user for a number
//Make sure to parseInt()
//After that we should code something that will ask the user for amount of number to be calculated
let arrLength = parseInt(prompt("How many items do you want to add to the array?"));
//Now use a prompt() function to ask the user for a number
//Make sure to parseInt()
let number1st = parseInt(prompt("[1] Please enter a number: "));
storeNumber.push(number1st);

//After that we should code something that will ask us for the next number
for (i = 0; i < arrLength-1; i++) {
  let number2ndLooper = parseInt(prompt(`[${[i+2]}] Please enter another number: `));
  storeNumber.push(number2ndLooper);
}
//Making a function to add all numbers
function arrAdd(total,num)
  {
    return total+num
  }
//calling the function
console.log(storeNumber.reduce(arrAdd))
