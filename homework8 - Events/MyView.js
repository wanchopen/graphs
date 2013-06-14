function MyView () {

    // ...

}

MyView.prototype.events = {

"click": "doSmth",

"click .a": "doA",

"click .b": "doB"

};

MyView.prototype.doSomething = function(){

    console.log("doSomething");

};

MyView.prototype.doA = function(){

    console.log("doA");

};

MyView.prototype.doB = function(){

    console.log("doB");

};
