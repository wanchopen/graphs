var finalArray = multiplyArray(
    [
        [3, 4, 5],
        [1, 5],
        [6, 8]
    ]
);
console.assert(finalArray.length === 3, 'Wrong array length');
console.assert(finalArray[0] === 60, 'Wrong first item');
console.assert(finalArray[1] === 5, 'Wrong first item');
console.assert(finalArray[2] === 48, 'Wrong first item');