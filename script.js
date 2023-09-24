//Task 1
function add(num1, num2)
{
    return num1+num2;
}

let a=20;
let b=10;
var sum= add(a,b);
let statement= `Sum of ${a} and ${b}=`;

console.log(statement+sum);

//Task 2
function isEven(num)
{
    if(num%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var even=isEven(2);

console.log(even);

//Task 3
function reverseString(strToReverse)
{
    let newStr='';

  for(let i=strToReverse.length-1;i>=0;i--)
  {
    newStr+=str[i];
  }
  return newStr;
}

let str='hello';
var strReversed= reverseString(str);

console.log(strReversed);

//Task 4
function calculateFactorial(num)
{
    let factorial=1;

    if(num==0)
    {
        console.log("Factorial is 1")
    }
    else
    {
        for(i=1;i<=7;i++)
      {
       factorial*=i;
      }
    return factorial;
    }
}

let num=7;
var factorialResult=calculateFactorial(num);

console.log(factorialResult);

//Task 5
function convertTemperature(temperature)
{
  let formula=temperature*(9/5)+32;

  return formula;
}

let temp=82;
var convertedTemperature=convertTemperature(temp);

console.log(convertedTemperature);

//Task 6
function countVowels(str)
{
    let count=0;

    for(let i=0;i<str.length;i++)
    {
        const char = str[i];

        if(char=='a'|| char=='e'||char=='i'||char=='o'||char=='u' ||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
        {
           count++;
        }
    }

    return count;
}

let word='hEaleR';
var countedVowels=countVowels(word);

console.log(countedVowels);
