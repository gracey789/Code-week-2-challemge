// Function to generate an array of numbers from start to end (inclusive)
function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers
    let arr = [];

    // Loop from start to end (inclusive)
    for (let i = start; i <= end; i++) {
        // Add the current number to the array
        arr.push(i);
    }
    // Return the array containing the generated numbers
    return arr;
}

// Log the array generated for the range 4 to 7
console.log(generateArray(4, 7));
console.log(generateArray(-4,7)); 
