// 1. Write a typescript program which contains one function named as Maximum. That function accepts
// three parameters and it should returns largest value from three input parameters.
// Input : 23 89 6
// Output : Maximum number is 89

function Maximum(firstValue : number,secondValue : number, thirdValue : number) :number
{

    return firstValue > secondValue ? (firstValue>thirdValue ? firstValue:thirdValue) : (secondValue > thirdValue ? secondValue:thirdValue);

}

var max= Maximum(23,89,6);
console.log('Maximum Number is : '+max);


// 2. Write a typescript program which contains one function named as Area. That function should
// calculate area of circle. Accept value of radius from user and return its area. Default value of PI
// should be 3.14 if it is not provided by the caller.
// Input : 5
// Output : Area of circle is 78.5

function Area(radius:number,PI:number=3.14):number 
{ 
    return  (radius*radius*PI);
}

console.log('Area of the Circle is : '+Area(5));

// 3. Write a typescript program which contains one function named as DisplayFactors. That function
// should accept one number and display factors of that number.
// Input : 20
// Output : 1 2 4 5 10

function DisplayFactors(inputValue :number): number[]
{
var factors:number[] = new Array();

for (var i=0;i<=inputValue/2;i++)
{
    if(inputValue%i==0)
    {
        factors.push(i)
    }
}
return factors
}

console.log('Factors of a given number are : '+DisplayFactors(20));

// 4. Write a typescript program which contains one function named as ChkPrime. That function should
// accept one number and it should return true if the given number is prime and otherwise return false.
// Input : 11
// Output : It is prime number

function CheckPrime (inputValue : number):Boolean
{
var counter:number =0;

    for (var i=2;i<=inputValue/2;i++)
    {
        if (inputValue%i==0)
        {
            counter++;
        }
    }
    if (counter==0)
        return true;
    else
        return false
}

console.log(CheckPrime(11) == true ? "Number is Prime":"Number is not Prime");

// 5. Write a typescript program which contains one function named as Fibonacci. That function accept
// one number from user and print Fibonacci series till that number.
// Input : 21
// Output : 1 1 2 3 5 8 13 21

function Fibonacci(inputValue : number) :void
{
var firstNumber:number=0;
var secondNumber:number=1;
var nextNumber:number=0;
var fibbo:number[]= new Array();

while (nextNumber<=inputValue)
{
    fibbo.push(nextNumber);
    firstNumber=secondNumber;
    secondNumber=nextNumber;
    nextNumber=firstNumber+secondNumber;
}
console.log('Fibonacci series :  '+fibbo);
}

Fibonacci(21);