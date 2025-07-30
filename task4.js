//  1) Reverse Words in a Sentence
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// Example:
console.log(reverseWords("Hello World")); 
// Output: "World Hello"
