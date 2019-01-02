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