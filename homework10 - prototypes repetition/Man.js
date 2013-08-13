var Man = function(level){
    this.level = level;
    this.girls = [];
};

Man.prototype.pickUp = function(girlsArray){
    if (Math.random() < this.level / 10){
        for (var i = 0; i < girlsArray.length; i++){
            this.girls.push(girlsArray[i]);
        }
    }
    return this.girls;
};