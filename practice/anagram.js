// function isAnagram (str1, str2) {

//   str1.form
// }

// isAnagram('listen','silent');

// let str1 = 'listen';
// let str2 = 'silent';

// let array1 = Array.from(str1.toLowerCase());
// let array2 = Array.from(str2.toLowerCase());

// for (let i = 0; i < arr1.length; i++) {
//   let newArr = [];
//   if(arr1[0] == arr2[i]) {
//     newArr.push(arr2[i]) ;
//   } 
//  console.log(newArr);
// }

function isAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  let array1 = Array.from(arr1.toLowerCase());
  let array2 = Array.from(arr2.toLowerCase());

  const sortedArr1 = array1.slice().sort();
  const sortedArr2 = array2.slice().sort();

  // console.log(sortedArr1);
  // console.log(sortedArr2);
  const newVal = sortedArr1.every((element, index) => element === sortedArr2[index]);

  
  return newVal;

 
}

 module.exports = isAnagram;


// const array1 = [1, 2, 3];
// const array2 = [3, 2, 1];
// console.log(isAnagram(array1, array2)); // Output: true



// const newArr = array1.slice().sort()
// console.log('original array: ',array1);
// console.log(array2);
// console.log(newArr);


// // sort()
// function sortExample(arr) {
//   console.log("Original Array:", arr);

//   arr.sort(function(a, b) {
//     return a - b;
//   });
//   console.log("After sort:", arr);
// }
// sortExample([5, 2, 3, 4, 1]);

  // const sortedArr1 = newArr1.slice().sort();
  // const sortedArr2 = newArr2.slice().sort();
  // const newVal = sortedArr1.every((element, index) => element === sortedArr2[index]);

  // console.log(newVal);

 