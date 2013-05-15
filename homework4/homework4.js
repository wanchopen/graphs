var initialArray = [];

var countArrays = function(){
    initialArray.reduce(function(a, b){
        var multiplyArray = initialArray[0].reduce(function(a, b) {
            return a * b;
        });
        function getFinalArray(){
            finalArray.push(multiplyArray);
            return finalArray;
        }
    });
};

initialArray = [[3, 4, 5], [1, 5], [6, 8]];
countArrays(initialArray);