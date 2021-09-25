//GUVI : Zen Code-Sprints :— JavaScript Functions — Warmup Pbms

//1. Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

var num = 10;
function addFive(num) { 
return num+5;
}
var result = addFive(num)
console.log(result)

//2. Write a function called “getOpposite”.
//Given a number, return its opposite

var num = -5;
function getOpposite(e){
  if(Number.isInteger(e)){
  return -e;
}
else{
  return -1;
}	
}

var result = getOpposite(num);
console.log(result);


//3. Fill in your code that takes an number minutes and converts it to seconds.
var min = 3;
function toSeconds(min) {
  return min*60;
}
var secs = toSeconds(min)
console.log(secs)

//4. Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
 return Number(mystr)
 
}
var myint = toInteger(mystr)
console.log(myint)


//5. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = -3;
function nextNumber(myint) {
  return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint)

//6. Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr) {
return arr[0];
}
var data = getFirstElement(arr)

console.log(data)

//7. Convert Hours into Seconds

var arr = [1, 2, 3];
function hourToSeconds(arr) {
  
  arr.forEach(element => console.log(element*3600));
  
}
var data = hourToSeconds(arr)

//8. Find the Perimeter of a Rectangle
function findPerimeter(num1,num2) {
  return 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri);


//9. Less Than 100?

function lessThan100(num1,num2) {
  if(num1+num2 <100){
    return true
  }
  else{
    return false
  }
}
var res = lessThan100(22,15)
console.log(res)


//10. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2) {
  return num1%num2
}
var res = remainder(1,3)
console.log(res)

//11. MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.


function CountAnimals(tur,horse,pigs) {
   tur = 2*tur;
   horse = 4*horse;
   pigs =  4*pigs;
 console.log(tur, horse,pigs)
}
var legs = CountAnimals(2,3,5)

//12. Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1,num2) {
  let fps = num2*60
  console.log(num1*fps)
}
var fps = frames(1,1)

// 13. Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
  if(num1%5==0)
    {
      console.log(true)
    }
  else{
    console.log(false)
  } 
}
var divisible = divisibleByFive(5)

//14. Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.

function isEven(num){
if(Number.isInteger(num)){
  if(num%2==0)
  {
    console.log(true)
   
  }
  else{
    console.log(false)
  }
}
else{
  console.log(-1)
}
}
var even = isEven(1)

//15. Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.


function areBothOdd(num1, num2){
if((num1%2!=0))
  {
    if(num2%2!=0){
      console.log(true)
    }
    else{
      console.log(false)
    }
  }
  else{
    console.log(false)
  }
}
var even = areBothOdd(2, 1)


// 16. Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.


function getFullName(firstName, lastName){
if(firstName == undefined){
  console.log(lastName)
}
else if(lastName == undefined)
  {
    console.log(firstName)
  }
  else{
    console.log(firstName.concat(" ", lastName));
  }
  
}

getFullName("GUVI", "GEEK");
getFullName("GUVI",  );
getFullName(undefined,"GEEK");
getFullName("", "");


//17. Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word1){
 if(typeof(word1)=="string"){
   console.log(word1.length)
 }
  else{
    console.log(-1)
  }
}

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);

//18. Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2){
   if(word1.length ==word2.length){
     console.log(true)
   }
   else{
     console.log(false)
   }
}

isSameLength("GUVI", "GEEK");

// 19. Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));

function getDistance(x1, y1, x2, y2)
{
 let squarofx= Math.pow(x2-x1, 2);
 let squarofy= Math.pow(y2-y1, 2);
 let distance = Math.sqrt(squarofx+squarofy);
  return distance
}

// 20. Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,n){
  console.log(array[n]) ;
}
getNthElement([1, 3, 5], 1);

// 21. Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

function getLastElement(array){
if(array.length==0){
  console.log(-1)
}
 else{
   console.log(array[array.length-1])
 }
}
getLastElement([]);

// 22. Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
 mykey: "value"
};

 function getProperty(obj, key) {
console.log(obj[key]) 
 }

 getProperty(obj,'mykey');
getProperty(obj,'dummykey');

// 23. Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = { };
function addProperty(obj, key){
obj[key]=true;
 console.log(obj)
}

addProperty(obj, "mykey");

// 24. Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.

const obj = {
  name: 'John Smith',
  position: 'Sales Manager'
};

function removeProperty(obj, key){
 delete obj[key]; 
 console.log(obj[key]); 
}

removeProperty(obj,"name")

//25.  Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
     
var ar2 = function countPositivesSumNegatives(arr) {
let count = 0;
let sum = 0;  
let result = [];  
arr.filter((e)=> {if(e>=-1){return true}}).map((e)=>(count++));
arr.filter((e)=> {if(e<-1){return true}}).map((e)=>(sum+=e));
result.push(count, sum)
return result
}
console.log(ar2(arr));

//26.  Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
return ar.filter((e)=> {if(e>=-1){return true}}).map((e)=>(e))
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//27.  Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
  var res = [];
  for(let i=0; i<n+1; i++){
    res.push(Math.pow(2, i))
  } 
  return res;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));

// 28. Find the maximum number in an array of numbers

function findMax(ar)
{
return Math.max(...ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


//29. Print the first 100 prime numbers

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n,"->",i);
 n++;
 }
 
 i++;
 }
}


// Returns true if a number is prime
 function isPrime(n)
 {
   if(n==1||n==0)
         {
           return false;
         }
      else{
          for (i = 2; i < n; i++) {
            if (n % i === 0)
			      {
            return false;
            }
            }
            return true;
            }      
 }
 
 //30. Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
getPrimes(10, 100);
function getPrimes(nPrimes, startAt)
{
 var n = 0;
 var i = startAt;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
  console.log(n,"->",i);
 n++;
 }
 
 i++;
 }
  
}

// Returns true if a number is prime
function isPrime(n)
{
 if(n==1||n==0)
         {
           return false;
         }
      else{
          for (i = 2; i < n; i++) {
            if (n % i === 0)
			      {
            return false;
            }
            }
            return true;
            }      
}

//31. Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
  return s.split("").reverse().join("") 
}

//32. Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 { 
 result.push(el);
 }
 for(let el of ar2)
 { 
 result.push(el);
 }

 return result;
}

//33. Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
let sum=0;
  s.split(",").map((e)=>(sum+=parseFloat(e)))
  return sum;
}