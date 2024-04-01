//Function to swap case of characters in a string
function swapCase(str) {
    // Initialize an empty array to store the result
    let result = [];

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result.push(str[i].toLowerCase());
      } else if (str[i] === str[i].toLowerCase()) {
        result.push(str[i].toUpperCase());
      } else {
        result.push(str[i]);
      }
        // Check if the character is uppercase
        if (str[i] === str[i].toUpperCase()) {
            // Convert uppercase character to lowercase and push to result array
            result.push(str[i].toLowerCase());
        } 
        // Check if the character is lowercase
        else if (str[i] === str[i].toLowerCase()) {
            // Convert lowercase character to uppercase and push to result array
            result.push(str[i].toUpperCase());
        } 
        // If the character is neither uppercase nor lowercase (e.g., special character), keep it unchanged
        else {
            result.push(str[i]);
        }
    }
    // Join the characters in the result array and return as a string
    return result.join('');
  }
  
  console.log(swapCase('The Quick Brown Fox')); // tHE qUICK bROWN fOX
