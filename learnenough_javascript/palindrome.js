// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds 'blank' method to the String object. Use regex /^$/
String.prototype.blank = function() {
  // return true if the string is empty or consists solely of
  // whitespaces (spaces, tabs, or newlines).
}

// Returns the last element  of an array.
Array.prototype.last = function() {
  return Array.from(this).slice(-1);
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

// Exercise
// After filling in the code in Listing 72, both Phrase and TranslatedPhrase
// have explicit calls to the toLowerCase method. Eliminate this duplication
// by filling in Listing 74 to define an appropriate processor method that
// returns the lower-case version of the content.

// return this.content.toLowerCase();
