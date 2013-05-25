var kitten = new Kitten('April', 'I wanna live');
kitten.name; // 'April'
kitten.die(); // logs 'I wanna live'

var stupidKitten = new Kitten('Nyasha', 'meow');



var bag = new Bag;
bag.put(kitten);
bag.put(stupidKitten);
bag.getKitten('April') === kitten; // true
bag.getKitten('notExistedKitten') === null; // true
bag.sink(); // logs 'I wanna live' 'meow'

