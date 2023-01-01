let customArr = []
let arrLength = prompt("How many items do you want to add to the array?")
for (i = 0; i < arrLength; i++) {
  let pushUserValue = prompt('Please enter a value to add to the array: ')
  customArr.push(pushUserValue)
}
console.log(customArr)
