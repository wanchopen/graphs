var a = function (i) {
    return i * 2;
}

var b = function(i) {
    return i + 1;
}

var c = function(i) {
    return 5;
}

function cascadeCall() {
    var index = arguments.length-1,
        result = arguments[index];
    for (var n = arguments.length-2; n >= 0; n--) {
        result = arguments[n](result);
    }
}

cascadeCall(a, b, c);