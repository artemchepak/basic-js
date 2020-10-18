const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  result: [],
  getLength() {
    this.chainArray.length;
    return this;
  },
  addLink(value){
    if(value === undefined){
      this.chainArray.push('( ' + ' )');
      return this;  
    }
    else{
      this.chainArray.push('( ' + value + ' )');
      return this;  
    }  
  },
  removeLink(position) {
    if(position < 1 || position > this.chainArray.getLength){
      this.chainArray = [];
      throw Error('Error on removing wrong link');
    }
    else{
      this.chainArray.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chainArray;
    this.chainArray = [];
    return this.result.join('~~');
  }
};


module.exports = chainMaker;



/*

const chainMaker = {
  chainArray: [],
  getLength() {
    this.chainArray.length;
    return this;
  },
  addLink(value){
    this.chainArray.push('( ' + value + ' )');
    return this;    
  },
  removeLink(position) {
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    return this.chainArray.join('~~');
  }
};

*/