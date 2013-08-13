var theFirstMan = new Man(7);
var theSecondMan = new Man(6);
var theThirdMan = new Man(8);

var theGirls = [new Girl("Ann"), new Girl("Katie"), new Girl("Natalie")];

console.assert(theFirstMan.pickUp(theGirls).length === 3, 'this man is not that good');
console.assert(theSecondMan.pickUp(theGirls).length === 3, 'this man is not that good');
console.assert(theThirdMan.pickUp(theGirls).length === 3, 'this man is not that good');