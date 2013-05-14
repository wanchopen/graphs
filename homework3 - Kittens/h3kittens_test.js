var kitten = createKitten('Pushok','Long Live the King!');

console.assert(kitten.name === 'Pushok', 'Wrong kitten name');
console.assert(typeof kitten.die === 'function', '.die is not a function');

bag.put(kitten);

console.assert(bag.getKitten === 'Pushok', 'getKitten does not work properly');
console.assert(bag.getKiiten === 'noname', 'getKitten does not properly because of wrong name');

bag.sink();

