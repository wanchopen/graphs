function multiplyArray() {
    var arrayResult = [];
    for (n = 0; n < arguments.length; n++){
        var array = arguments[n];
        var result = array[0];
        for (i = 1; i < array.length; i++) {
            result = result * array[i];
        }
        arrayResult.push(result);
    }
    return arrayResult;

}

console.log(multiplyArray([2,3,5],[4,5]));