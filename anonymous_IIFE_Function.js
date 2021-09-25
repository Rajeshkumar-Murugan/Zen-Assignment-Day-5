// 1. Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array
let x=[1, 2, 3, 4, 5, 6, 7, 8, 9,10];

let anonymous = function(x){
let result = [];
// Using loop checking the prime numbers and pushing to result variable   
for(let i=0;i<x.length; i++)
{
    if(x[i]%2!=0)
    {
      result.push(x[i]);
    }
}

 console.log(result); 
}(x)


// b.Convert all the strings to title caps in a string array
let char = "Convert all the strings to title caps in a string array!!"

let titleCaps = function(char) {
	//coverting all the character to lowercase and spliting to words
	
    char = char.toLowerCase().split(' ');

    for (var i = 0; i < char.length; i++) {
	
	// conversion on 1st character to uppercase and replace the charater using slice method
	
      char[i] = char[i].charAt(0).toUpperCase() + char[i].slice(1); 
    }
	//joining the words to single string
	
  console.log(char.join(' '));
  }(char)

//c. Sum of all numbers in an array

let values=[0,1,2,4];
let sum = function(e){
let result =0;

for(let i=0; i<e.length; i++)
  {
	// adding the array of values using loop and assign to result  
  result+=e[i];
  } 
  console.log(result);
}(values)


//d. Return all the prime numbers in an array

let arrayvalue = [0,1,2,3,4,5,6,7,8,9,10,11];

let Prime = (function (number) {
	
	// Finding Prime numbers using filter method of an array
    return (number.filter(function(item) {
       
	   // 0 and 1 are not prime number so ignoring them from array
	   if(item==1||item==0)
         {
           return false;
         }
      else{
		  
		  // finding the prime numbers from 2
            for (i = 2; i < item; i++) {
            if (item % i === 0)
			      {
            return false;
            }
            }
            return true;
            }
      }))

})(arrayvalue)

console.log(Prime);



//e. Return all the palindromes in an array
let array = [123, 141, 323, 100];
let Palindrom = function (arr){ 

let result = [];
arr.forEach(function(e){
   // converting the arrayvalue to string+reverse+join and assign to temporary variable
 let temp = e.toString().split("").reverse().join("")
   if(e==temp){
	//comparing the temporary variable with element and pushing the palindrome value to result array   
    result.push(e) 
   }
 })
  console.log(result)
}(array)

//f. Return median of two sorted arrays of same size

let arr1 = [1, 2,3,4,5];
let arr2 = [6,7,8,9,10];

 
let Medianof2array = function(arr1, arr2){
if(arr1.length!=arr2.length)
  {
    console.log("Length of the given two array are not equal")
  }
 else{ 
  //concadinated and sorted array
let mergedarr = arr1.concat(arr2)
mergedarr.sort(function(a, b){return a - b})

//Length of merged array  
let lengthOfmerged = mergedarr.length

//median of merged array
let median = lengthOfmerged/2;

//average of the medianvalue
let result = (mergedarr[median]+mergedarr[median-1])/2;

console.log(result);
 }
}(arr1, arr2)


//g. Remove duplicates from an array
let arrayvalues = [1,1,2,2,3,3,4,4,5,6,5,7]

let Arraywithoutdup = (function(array) { 
  
 //Set object to store unique values
   return [...new Set(array)]
   
})(arrayvalues)

console.log(Arraywithoutdup)
 
//h. Rotate an array by k times

let array = [0,1,2,3,4,5]

 
let Rotation = function (element, k){
  
//using loop the condition is called for the k times 
    for (let i = 0; i < k; i++) {
 //The shift() method removes the first element when ever loop is called from an array and stores the element in temp. 
 // When a shift is called in an array the original array will be altered
        let temp = element.shift()
        
//The temp values are pushed into the orginal array at the end
        element.push(temp)

    }
    return element;
}(array, 3)

console.log(Rotation)