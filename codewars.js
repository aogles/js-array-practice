// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
const newArr = {

    1: "a",
    2: "b",
    3: "c",
};
newArr.1

for ...Of
const numbers = [1, 2, 3, 4];

for( const number of numbers) {
    console.log(number)
}
for(const[ index, number] of numbers.entries()) {
    console log(index, number);
}


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
//read more on splice
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
// I found an answer but dont quite understand it and plan to ask for clarification during lab 
function calcAverage(array) {
    var total = 0;
    var count = 0;

    jQuery.each(arry, function(index, value) {
        total += value;
        count++;
    });

    return total / count;
}

console.log(calcAverage(arry));

// Finding the total number of elements in an array (basically, its length)
  //can be obtained by calculating the length of the array using the length method
//Finding the sum of all the elements of an array (sum)
//initialize a variable called ‘total’ and loop over the array and add each element of the array to the ‘total’ variable
// Dividing the values obtained in Step 1 & 2.(sum/length)


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
const array = [0, 1, 2]
array.reverse()

console.log(array)


/* for ( initial expresson,condition, increment expression) {
   for (let i=0; i < arr.length; i++)
}
we use 'let' because it is block scoped, var will leak out of the expression

for (const [index, number] of numbers.entries()){
    console.log(index, numbr);
}

*do Not use for each for return value, forEach is for side effects*

["sally","peter", "eric"].forEach(function(name,index, arr){
    console.log(name);
}

[1,2,3].map(function(num){
    return num *2; new array was have 2,4,6
}); -transforms, results 

const numbers = [1,2,3,4];
numbers.filter(function(num){
    return num >= 3;  //new array will contain anything greater than or equal to 3
})

[1,2,3].reduce(functions(acc,i){
    rturn acc +i;  //first two arguments are accumulated value, this will return a singe value 
})

result for This is 6 
*/

