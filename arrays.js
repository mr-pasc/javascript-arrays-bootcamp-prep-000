var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array, element){
  return array.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  return array.
}