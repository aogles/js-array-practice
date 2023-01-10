// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
const newArr = {

    1: "a",
    2: "b",
    3: "c",
};
newArr.1



// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

//Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//index:The index of the current element being processed in the array.
//Array.from(arrayLike, (element, index) => { /* … */ })

const arr = N => Array.from{length:N},(_,index)=>index

/* Array.from() lets you create Arrays from:

-iterable objects (objects such as Map and Set); or, if the object is not iterable,
-array-like objects (objects with a length property and indexed elements).
*/

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

// I found an answer but dont quite understand it and plan to ask for clarification during lab 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function flyBy(lamps, drone) {
    var lampArr = lamps.split('');
    for (let i=0; i < drone.length; i++) {
      if (lampArr[i] === "x") {
        lampArr.splice(i, 1, "o");
      }
    }
    return lampArr.join('');
  }


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript




// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
const array = [0, 1, 2]
array.reverse()

console.log(array)