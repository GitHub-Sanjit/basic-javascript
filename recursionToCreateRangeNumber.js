// Solutin 1
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}


// Solution 2
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}



// Solution 3
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}


