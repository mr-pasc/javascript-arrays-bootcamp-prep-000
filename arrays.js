var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.push(element)
}

function addElementToEndOfArray(array, element){
  var newArray = array.slice(array.length - 1)
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.slice(array.length - 1)
}

function accessElementInArray(array, index){
  return array[index]
}

