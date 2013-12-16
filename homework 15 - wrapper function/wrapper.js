var mainObject = {
    prop: 3,
    print: function(arg){
        console.log('print method is working');
        console.log(arg);
        console.log(this.prop);
        return 5;
    }
};

function logAndExec(functionToBeWrapped){
    var originalFunction = functionToBeWrapped;
    functionToBeWrapped = function(){
        console.log('Print method starts');
        var result = originalFunction.apply(this, arguments);
        console.log('Print method has just returned 5');
        return result;
    };
    functionToBeWrapped();
}

mainObject.print = logAndExec(mainObject.print(1000000));





