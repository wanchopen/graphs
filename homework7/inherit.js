function inherit(parent, child){
    var temp = function(){};
    temp.prototype = parent.prototype;
    parent = new temp;

}
