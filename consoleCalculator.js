//Calculator Using Reduce() method
console.log('Please select a menu:');
console.log('1.Calculator V1')
console.log('2.Calculator V2')
let menuSel = prompt('Answer:[1 or 2]');
console.log(`Selected ${menuSel}`);
if (menuSel === '1') {
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
//Making functions to use them 
function arrAdd(total,num)
  {
    return total+num
  }
function arrSub(total,num)
  {
    return total-num
  }
function arrMulti(total,num)
  {
    return total*num
  }
function arrDvd(total,num)
  {
    return total/num
  }
//calling the specific function
  console.log('Please select an operator: ')
  //Not finished yet
  
console.log(storeNumber.reduce())

}

if (menuSel === '2') {
  console.log('Sorry.Thats under development')
}
else{
  for(let i=0;i!== 1 || i!== 2;i++){
  console.log('Sorry.You have selected an invalid option')
  console.log('Please select a menu:');
console.log('1.Calculator V1')
console.log('2.Calculator V2')
let menuSel = prompt('Answer:[1 or 2]');
  }
}
