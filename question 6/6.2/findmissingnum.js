function findMissingNumber(arr) {
    // Calculates the expected sum of the first 45 numbers using the formula (n * (n + 1)) / 2
    const expectedSum = (45 * (45 + 1)) / 2;
  
    // Calculates the actual sum of the given array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    // Find the missing number by subtracting the actual sum from the expected sum
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  // Example:
  let numbersArray= [];
    for (let i = 1; i < 45; i++) {
        numbersArray.push(i);
    } // The array should contain the first 45 numbers with one missing number
  const missingNumber = findMissingNumber(numbersArray);
  console.log("Missing Number:", missingNumber);
  