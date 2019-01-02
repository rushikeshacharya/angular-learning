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