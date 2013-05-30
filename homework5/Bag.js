function Bag(){
    this.kittens = {};
}

Bag.prototype.put = function(newKitten){
    this.kittens[newKitten.name] = newKitten;
};

Bag.prototype.getKitten = function(name){
    return this.kittens[name];
};

Bag.prototype.sink = function(){
    for( var kittenName in this.kittens ) {
        console.log(this.kittens[kittenName].die());
    }
};
