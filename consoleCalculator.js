console.log('Please select a menu:');
console.log('1.Calculator V1')
console.log('2.Calculator V2 [With More feature]')
var menuSel = parseInt(prompt('Answer:[1 or 2]'));
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
if (menuSel === 1) {
  console.log('Seleceted Menu: Calculator V1');
var storeNumber = [];
let arrLength = parseInt(prompt("How many items do you want to add to the array?"));
let number1st = parseInt(prompt("[1] Please enter a number: "));
storeNumber.push(number1st);

for (i = 0; i < arrLength-1; i++) {
  let number2ndLooper = parseInt(prompt(`[${[i+2]}] Please enter another number: `));
  storeNumber.push(number2ndLooper);
}
}
else if (menuSel === 2) {
  console.log('Seleceted Menu: Calculator V2');
  console.log('Sorry.Thats under development')
}
else{
  do {
    console.log('Please select a menu:');
console.log('1.Calculator V1')
console.log('2.Calculator V2')
var menuSel = parseInt(prompt('Answer:[1 or 2]'));
    if (menuSel === 1) {
    console.log('Seleceted Menu: Calculator V1');
var storeNumber = [];
let arrLength = parseInt(prompt("How many items do you want to add to the array?"));
let number1st = parseInt(prompt("[1] Please enter a number: "));
storeNumber.push(number1st);

for (i = 0; i < arrLength-1; i++) {
  let number2ndLooper = parseInt(prompt(`[${[i+2]}] Please enter another number: `));
  storeNumber.push(number2ndLooper);
}
}
    else if (menuSel === 2) {
  console.log('Seleceted Menu: Calculator V1');
  console.log('Sorry.Thats under development')
  } 
  }while (menuSel!== 1 && menuSel!== 2)
}
console.log('Select an opeartor: ')
console.log(`
1.Addition 
2.Subtraction 
3.Multiplication 
4.Division `)
let operatorSel = parseInt(prompt('Answer:[1/2/3/4/5]'));
if (operatorSel === 1) {
  console.log(`The Output is like: ${storeNumber.join('+')}`)
  console.log(storeNumber.reduce(arrAdd))
}
if (operatorSel === 2) {
  console.log(`The Output is like: ${storeNumber.join('-')}`)
  console.log(storeNumber.reduce(arrSub))
}
if (operatorSel === 3) {
  console.log(`The Output is like: ${storeNumber.join('*')}`)
  console.log(storeNumber.reduce(arrMulti))
}
if (operatorSel === 4) {
  console.log(`The Output is like: ${storeNumber.join('/')}`)
  console.log(storeNumber.reduce(arrDvd))
}
console.log('Select an option:')
  console.log(`
  1.Overview the Item as an array
  2.Edit a value in the array
  3.Add a value to the array
  4.Remove a value from the array
  5.Exit the program`)
  let optionSel = parseInt(prompt('Answer:[1/2/3/4/5]'));
if (optionSel === 1) {
  console.log(`Overview the Item as an Array: [${storeNumber}]`);
}
