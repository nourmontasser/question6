## Overview

The `findMissingNumber` function is a JavaScript function that takes an array of integers containing the first 44 numbers (from 1 to 44) with one missing number. The function calculates and returns the missing number in the array.

## How it works

The findMissingNumber function works as follows:

1- It calculates the expected sum of the first 45 numbers (from 1 to 45) using the formula (n * (n + 1)) / 2, where n is the last number in the sequence (45 in this case). This formula gives us the sum of a sequence of consecutive numbers.
2- It calculates the actual sum of the given array using the reduce method.
3- It finds the missing number by subtracting the actual sum from the expected sum. The missing number is the difference between the two sums.
4- The function returns the missing number.
