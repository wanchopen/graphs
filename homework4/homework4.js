var multiplyArray = function (x) {
    return x.map(function (element) {
        return element.reduce(function (a, b) {
            return a * b;
        });
    });
};
