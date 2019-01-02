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