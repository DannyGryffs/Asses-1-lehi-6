// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
//complete
function greaterThanTen(numbers) {
  let newArr = []
  for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 10){
    newArr.push(numbers[i])
    }
  }
  return newArr
}
greaterThanTen([1, 2, 3, 11, 12, 13]);

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
//complete
function bWords(words) {
  let newArr = []
  for(let i = 0; i < words.length; i++)
  if(words[i].includes('b') || words[i].includes('B')){
    newArr.push(words[i])
  }
  return newArr
}
bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
//complete
function extend(originalArray, additionalItems) {
  
  originalArray.push(additionalItems)
  //use spread operator
  return originalArray
}
extend([1, 2, 3], [4, 5, 6]);

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
//complete
function itemsWithLength(items, length) {
  let newArr = [];
  for(let i = 0; i < items.length; i++) {
    if(items[i].length === length){
      newArr.push (items[i]);
    }
  }
  return newArr;
}
itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
//complete
function everyOtherItem(items) {
  let newArr = [];
  for(let i = 0; i < items.length; i += 2){
    newArr.push(items[i]);
  }
  return newArr;
}
everyOtherItem(['a', 'b', 'c', 'd', 'e']);

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
//TBC
function findWordsStartingWith(words, letter) {
  const newArr = [];
  for(let i = 0; i < words.length; i++){
    if(words[i].length.startsWith(letter)){
      newArr.push(words[i])
    }
  }

}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  //you need to write a conditional statement
}
range(1, 5);


export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
