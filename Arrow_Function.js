//3. Do the below programs in arrow functions
//a. Print odd numbers in an array

let x=[1, 2, 3, 4, 5, 6, 7, 8, 9,10];

let anonymous = (x)=>{
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
}
anonymous(x)

// b. Convert all the strings to title caps in a string array

let char = "Convert all the strings to title caps in a string array!!";

let titleCaps = (char)=> {
	//coverting all the character to lowercase and spliting to words
	
    char = char.toLowerCase().split(' ');

    for (var i = 0; i < char.length; i++) {
	
	// conversion on 1st character to uppercase and replace the charater using slice method
	
      char[i] = char[i].charAt(0).toUpperCase() + char[i].slice(1); 
    }
	//joining the words to single string
	
  console.log(char.join(' '));
  }
titleCaps(char)

// c. Sum of all numbers in an array

let values=[0,1,2,4];
let sum = (e)=>{
let result =0;

for(let i=0; i<e.length; i++)
  {
	// adding the array of values using loop and assign to result  
  result+=e[i];
  } 
  console.log(result);
}
sum(values)


// d. Return all the prime numbers in an array

let arrayvalue = [0,1,2,3,4,5,6,7,8,9,10,11];

let Prime = ((number)=> {
	
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

})

console.log(Prime(arrayvalue));

// e. Return all the palindromes in an array

let array = [123, 141, 323, 100]
let Palindrom = (arr) =>{ 

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
}
Palindrom(array)