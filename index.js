module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  this.letters = function letters() {
    //return this.content; // stub return value
    return Array.from(this.content)
      .filter((x) => x.match(/[a-z]/i))
      .join("");
  };
}
