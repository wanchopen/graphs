function multiplyArray() {
    var arrayResult = [],
        array,
        result;
    for (var n = 0, argumentsLength = arguments.length; n < argumentsLength; n++){
        array = arguments[n];
        result = array[0];
        for ( var i = 1, arrayLength = array.length; i < arrayLength; i++) {
            result *= array[i];
        }
        arrayResult.push(result);
    }
    return arrayResult;
}

console.log(multiplyArray([2,3,5],[4,5]));