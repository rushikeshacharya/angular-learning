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