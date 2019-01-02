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