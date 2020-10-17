const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr){
  let result = [];
  let newArr = arr;

  if(Object.prototype.toString.call(newArr) != '[object Array]'){
      throw new Error('arr is not an Array');l
  }
  else{
    for(i = 0; i < newArr.length; i++){ 
      if(newArr[i] === '--discard-next'){
        if(i === newArr.length - 1){
          result = result;
        }
        else{
          i++;
        }
      }
      else if(newArr[i] === '--discard-prev'){
        if(newArr[i - 2] === '--discard-next'){
          result = result;
        }
        else{
          if(i === 0){
            result = result;
          }
          else{
            result.pop(i - 1);
          }
        }
      }
      else if(newArr[i] === '--double-next'){
        if(i === newArr.length - 1){
          result = result
        }
        else{
          result.push(newArr[i + 1]);
        } 
      }
      else if(newArr[i]  === '--double-prev'){
        if(newArr[i - 2] === '--discard-next'){
          result = result;
        }
        else{
          if(i === 0){
            result = result;
          }
          else{
            result.push(newArr[i - 1]); 
          }
        }
      }
      else{
        result.push(newArr[i]); 
      }
    }
  }  
  return result;  
}