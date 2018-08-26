var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  newArray = array.unshift(element)
  return newArray
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array, element){
  array = array.slice(-2)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift()
  return array
}