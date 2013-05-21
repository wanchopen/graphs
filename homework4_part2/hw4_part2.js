var a = function (i) {
    return i * 2;
};

var b = function (i) {
    return i + 1;
};

var c = function () {
    return 5;
};

function cascadeCall() {
    var index = arguments.length-1,
        result = arguments[index]();
    return [].reduceRight.call(arguments, function (x, y) {
        return result = y(x);
    }, result);
}

cascadeCall(a, b, c);

