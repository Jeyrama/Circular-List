/*
A circular list is of finite size, 
but can infititely be asked for its previous and next elements. 
This is because it acts like it is joined at the ends and loops around.

For example, imagine a CircularList of [1, 2, 3, 4]. 
Five invocations of next() in a row should return 1, 2, 3, 4 and then 1 again. 
At this point, five invocations of prev() in a row should return 4, 3, 2, 1 and then 4 again.

Your CircularList is created by passing a vargargs parameter in, e.g. new CircularList(1, 2, 3). 
Your list constructor/init code should throw an Exception if nothing is passed in.
*/


// Solution

class CircularList {
  constructor(...args) {
    this.arr = [...args];
    if (!args || this.arr.length < 1) throw "Error";
    this.count = -1;
  }
  
  next() {
    this.count = (this.count + 2 > this.arr.length) ? this.count = 0 : this.count + 1
    return this.arr[this.count];
  }
  
  prev() {
    this.count = (this.count - 1 < 0) ? this.arr.length - 1 : this.count - 1
    return this.arr[this.count];
  }
}

// or

class CircularList {
  constructor(...args) {
    if(!args.length){throw new Error()}
    this.circularList = [...args];
    this.currentElement = -1;
  }
  next() {
    this.currentElement++;
    if(this.currentElement > this.circularList.length - 1) this.currentElement = 0;
    return this.circularList[this.currentElement];
  }
  prev() {
	this.currentElement--;
  if(this.currentElement < 0) this.currentElement = this.circularList.length - 1;
	
	    return this.circularList[this.currentElement];
  }
}