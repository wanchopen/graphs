function createKitten(name, lastWords){
    return {
        name: name,
        lastWords: lastWords,
        die: function() {
            console.log(this.lastWords);
        }
    }
}

var bag = {
    kittens: {},
    put: function(newKitten) {
        this.kittens[newKitten.name] = newKitten;
    },
    getKitten: function(newKitten) {
        console.log(this.kittens[newKitten])
    },
    sink: function() {
        for( var kittenName in this.kittens ) {
            console.log(this.kittens[kittenName].die());
        }
    }
};

var kitten = createKitten('Pushok','Long Live the King!');
bag.put(kitten);
bag.getKitten(kitten);
bag.sink();


