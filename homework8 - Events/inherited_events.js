function inherit(View, MyView){
    var temp = function(){};
    temp.prototype = View.prototype;
    MyView.prototype = new temp;
}





