function isValid(s) {
    const stack = [];
    
    for (let char of s) {
      switch (char) {
        case '(': case '[': case '{':
          // If the character is an opening bracket, push it onto the stack.
          stack.push(char);
          break;
        case ')':
          if (stack.pop() !== '(') {
            return false; // Mismatched closing bracket.
          }
          break;
        case ']':
          if (stack.pop() !== '[') {
            return false; // Mismatched closing bracket.
          }
          break;
        case '}':
          if (stack.pop() !== '{') {
            return false; // Mismatched closing bracket.
          }
          break;
        default:
          // If the character is not a bracket, ignore it.
      }
    }
    
    // After processing all characters, the stack should be empty if the string is valid.
    return stack.length === 0;
  }
  
  console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
