function inherit(Parent, Child){
    var temp = function(){};
    temp.prototype = Parent.prototype;
    Child.prototype = new temp;

}
