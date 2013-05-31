function Animal(){
    this.name = params.name;
}

Animal.prototype.reproduce = function(){
    return new this.constructor({name: this.name + "'s son"});
};


