const Bit = require('./src/Bit');
const DLatch = require('./src/DLatch');
const SIPO = require('./src/SIPO');

const b = new Bit(1);

console.log(`Bit value: ${b.getValue()}`); // Bit value: 1


/////////////////////////////////////////////


const l = new DLatch();

// input D
l.input(1);

// Get the current state of Q
console.log(`Current Q value: ${l.output()}`); // Current Q value: 1


/////////////////////////////////////////////


const register = new SIPO();

// serial input
register.input(1);
register.input(0);
register.input(1);
register.input(0);

// Get the current ( parallel ) state of the 4-bit register
const outputValues = register.output();
console.log('Output values:', outputValues); // Output values: [ 0, 1, 0, 1 ]