var cat1 = new Cat({name: 'Murka'});
var cat2 = new Cat({name: 'Frisky'});

console.assert(cat1.name === 'Murka', 'wrong cat name');
console.assert(cat2.name === 'Frisky', 'wrong cat name');
console.assert(Cat.prototype.name === undefined, 'name should not be property of Cat.prototype');
var kitten = cat1.reproduce();
console.assert(kitten instanceof Animal, 'Kitten should be instance of Animal');
console.assert(kitten instanceof Cat, 'Kitten should be instance of Cat');
console.assert(kitten.name === "Murka's son", 'Kitten has wrong name');
