var result = cascadeCall();

cascadeCall(a, b, c);

console.assert(b(c) === 6, 'wrong calculation');
console.assert(result === 12, 'wrong calculation');

