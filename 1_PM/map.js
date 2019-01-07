// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = () => {
  for(let i = 0; i < arr.length; i++)
    arr[i] *=  3
};

Array.prototype.map = function(fun) {
  fun();
  return arr
};

console.log(arr.map(triple));
