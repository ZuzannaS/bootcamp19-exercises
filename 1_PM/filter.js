// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  if(el % 7 === 0 && typeof el === 'number')
    return true;
  else
    return false;
};

Array.prototype.filter = function(fun) {
  let ar = []
  for(let el of arr)
    if(fun(el))
      ar.push(el)
  return ar
};

const newArr = arr.filter(multOf7);

console.log(newArr);
