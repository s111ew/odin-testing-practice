function analyzeArr(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length
  }
}

function average(arr) {
  let total = 0
  arr.forEach(element => {
    total += element
  });
  return Math.floor(total / arr.length)
}

function min(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  return sortedArr[0]
}

function max(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  return sortedArr[sortedArr.length - 1]
}

console.table(analyzeArr([3, 5, 7, 2]))

module.exports = analyzeArr