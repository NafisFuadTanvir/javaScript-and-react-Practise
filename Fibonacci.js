//a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

var a=0,b=1;

for(var i=0;i<10;i++){

    var temp= a+b;
    a=b;
    b=temp;
    console.log(temp);
}

