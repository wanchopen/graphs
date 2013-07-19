Function.prototype.bind = function(context, arg){
    return this;
};

var a = function(arg1, arg2){
    return this.prop + arg1 + arg2;
};

var thing = {
    prop: 10
};

var b = a.bind(thing, 5);

b(6);


