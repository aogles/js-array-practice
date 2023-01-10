// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------



const arr = Array(7).fill("Hello",0);
for (let i=0; i< arr.length; i++) {
arr[1] = new Array(5).fill("Hello",0);
}
//


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

const array = [0, 7, 9, 5]
array.reverse()

console.log(array)




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------
/* syntax array.filter(function(currentValue, index, array), 
thisValue) */


const arr = [3, "test", undefined, null,  5, false, "", 7, NaN];
const newArray = arr.filter(Boolean);   
console.log(newArray);






// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
const newStudent = {

    name:"Amber",
    age: "27",
    Class: "code school",
};

 newStudent.name
 //'Amber









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------
// Defining function to get unique values from an array
function allNames(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1) { //indexOf() method compares searchElement to elements of the array using strict equality
            newArray.push(array[i]);            //The first index of the element in the array; -1 if not found.


        }
    }
    return newArray;
}

var names = ["Rowan", "Aelin", "Chaol", "Dorian", "Aedion", "Aelin"];
var newNames = allNames(names);
console.log(newNames); 
// 5,['Rowan', 'Aelin', 'Chaol', 'Dorian', 'Aedion']








// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
