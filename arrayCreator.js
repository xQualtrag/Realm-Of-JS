console.log('1.String Mode')
console.log('2.Array Mode')
let menuSel = prompt('Please select a menu:');
console.log(`Selected ${menuSel}`);
if (menuSel === '1') {
let customArr = []
let arrLength = prompt("How many items do you want to add to the array?")
for (i = 0; i < arrLength; i++) {
  let pushUserValue = prompt('Please enter a value to add to the array: ')
  customArr.push(pushUserValue)
}
console.log(customArr)
}
if(menuSel === '2') {
let customArr = []
let arrLength = parseInt(prompt("How many items do you want to add to the array?"))
for (i = 0; i < arrLength; i++) {
  let pushUserValue = parseInt(prompt('Please enter a value to add to the array: '))
  customArr.push(pushUserValue)
}
console.log(customArr)
}
