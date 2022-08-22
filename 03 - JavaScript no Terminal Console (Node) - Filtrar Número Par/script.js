// Maneira 1
const array = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

function searchEven(array)
{
    return array.filter(function (n){ return (n%2 === 0)});
}

console.log(searchEven(array));

//Maniera 2

function filtrarPares(arr)
{
    return arr.filter(callback);
}

function callback(item)
{
    return item % 2 === 0;
}

const myArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtrarPares(myArray));

