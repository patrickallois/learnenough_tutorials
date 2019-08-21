// Making URL-appropriate strings from an array.

// let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
//
// // urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));
//
// // urls: Functional version
// function functionalUrls(elements) {
//   return states.map(elements => elements.toLowerCase().split(/\s+/).join('-'));
// }
// console.log(functionalUrls(states));

////////////////////////////////////////////////////////////////////////////
// DECLARATIONS

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

////////////////////////////////////////////////////////////////////////////
// MAP

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function fullUrlify(string) {
  exampleUrl = "https://example.com/"
  return exampleUrl.concat('', string.toLowerCase().split(/\s+/).join("-"));
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// returns uls: https://example.com/<urlified form>
function fullUrl(elements) {
  return elements.map(element => fullUrlify(element));
}
console.log(fullUrl(states));

////////////////////////////////////////////////////////////////////////////
// FILTER

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Write two filter functions that return the Dakotas:
//    (1) using String#includes to test for the presence of the string "Dakota"
//    (2) using a regex that tests for the length of the split array being 2

// filter: Dakota presence
function functionalPresence(elements) {
  return elements.filter(element => element.split(/\s+/).includes("Dakota"));
}
console.log(functionalPresence(states));

// filter: length test
function functionalLength(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalLength(states));

////////////////////////////////////////////////////////////////////////////
// REDUCE

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// Using reduce, write a function that returns the product of all
// the elements in an array. Hint: Where += adds, *= multiplies.

function functionalProduct(elements) {
  return elements.reduce((product, n) => { return product *= n; });
}

console.log(functionalProduct(numbers));

// Remove the newlines in the reduce solution from (Listing 62)
// to turn it into a single long line. Does it still give the right
// answer? How long is the resulting line of code?

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}

console.log(functionalLengths(states));
