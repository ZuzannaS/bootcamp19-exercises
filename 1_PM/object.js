// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for(let el in obj){
    if(typeof obj[el] === 'object'){
      if(hasFalsyValue(obj[el]) === true){
        return true
      }
    }
    else if(!obj[el]){
      return true
    }
  }
  return false
};
