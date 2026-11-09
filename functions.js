// ============ STRING MANIPULATION ============

function reverseString(str) {
  let reversed = "";
  // start at the last character and go backwards to the first
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("hello world")); 

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeWords("i love javascript")); 


// ============ ARRAY FUNCTIONS ============

function findMax(numbers) {
  let max = numbers[0]; 
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; 
    }
  }
  return max;
}

function findMin(numbers) {
  let min = numbers[0]; 
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i]; 
    }
  }
  return min;
}
console.log(findMax([4, 9, 2, 7])); 
console.log(findMin([4, 9, 2, 7])); 

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4])); 

function filterArray(array, condition) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (condition(array[i]) === true) {
      result.push(array[i]); 
    }
  }
  return result;
}

function isEven(n) {
  return n % 2 === 0;
}
function isBiggerThan10(n) {
  return n > 10;
}
console.log(filterArray([1, 2, 3, 4, 5, 6], isEven));      
console.log(filterArray([5, 12, 8, 20], isBiggerThan10));  


// ============ MATHEMATICAL FUNCTIONS ============

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5)); 
console.log(factorial(0)); 


function isPrime(n) {
  if (n < 2) {
    return false; 
  }
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  return true;
}
console.log(isPrime(7));  
console.log(isPrime(10)); 
console.log(isPrime(1));  


function fibonacci(terms) {
  let sequence = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < terms; i++) {
    sequence.push(first);
    let next = first + second; 
    first = second;
    second = next;
  }
  return sequence;
}
console.log(fibonacci(8)); 
