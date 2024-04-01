// Function to check if a number is prime
function isPrime(num) {
    // Prime numbers are greater than 1
    if (num < 2) return false;

    // Loop through all numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the number is divisible by any other number (excluding 1 and itself), it's not prime
        if (num % i === 0) return false;
    }
    // If the loop completes without finding any divisors, the number is prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(arr) {
    // Use the filter method to return only prime numbers from the input array
    return arr.filter(num => isPrime(num));
}

// Test the filterPrimes function with an example array
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: [2, 3, 5, 7]
