const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
      return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  str = str.split(""); //convert 'jQuery' to array
  str = str.reverse(); //reverse 'jQuery' order 
  str = str.join(""); 
  return str;
}; 

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  var sorted_arr = arr.slice().sort();
  var results = [];
  for (var i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] !== sorted_arr[i]) {
          results.push(sorted_arr[i]);
      }
  }
  return results;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let fac = 1;
  for(let i = 2; i <= num; i++){
    fac*=i;
  }
  return fac;
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(arr1.length !== arr2.length)
    return -1;
  const arr = [];
  for(let i = 0; i < arr1.length; i++){
    const el1 = arr1[i];
    const el2 = arr2[i];
    const arr3 = [];
    arr3.push(el1);
    arr3.push(el2);
    arr.push(arr3);
  }
  return arr;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  const arr1=[];
  const arr2=[];
  for(let el of arr){
      arr1.push(el[0]);
      arr2.push(el[1]);
  }
  arr = [];
  arr.push(arr1);
  arr.push(arr2);
  return arr;
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const len = str.length;
  num = num%len;
  let str1 = str.slice(0, len-num);
  str = str.slice(len-num, len);
  str = str.concat(str1);
  return str;
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const d = new Date();
  var numberToWords = require('number-to-words');
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];;
  const y = d.getFullYear();
  const m = months[d.getMonth()];
  const day = d.getDate();
  var h = d.getHours();
  var part = "";
  if(h >= 12){
    part = "evening";
  }
  else{
    part = "morning";
  }
  if(h === 0){
    h = 12;
  }
  const min = d.getMinutes();
  let str = `Today's date is ${m} ${numberToWords.toOrdinal(day)}, ${y} .It is ${numberToWords.toWords(h)} ${numberToWords.toWords(min)} in the ${part}.`
  return str;
};

//console.log(tokenize("ask asdbkj aksjdn"));
//console.log(zip([1, 2, 3], [5, 3, 1]));
//console.log(uniqueOnes([1, 2, 3, 4, 5, 6, 1, 2, 4, 3,]));
//console.log(unzip([[ 1, 5 ], [ 2, 3 ], [ 3, 1 ]]));
//console.log(announceDate());
// Write tests here:

assert(shiftRight("Hello", 3) === "lloHe");
assert(factorial(3) === 6);
assert(reverse("3df") === "fd3");
