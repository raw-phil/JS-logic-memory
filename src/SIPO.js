const DLatch = require('./DLatch');

// 4 bits register
class SPIO {

    #latches;

    constructor() {
        this.#latches = Array.from({ length: 4 }, () => new DLatch());
    }

    // serial input
    input(value) {
        for (let i = this.#latches.length - 1; i > 0; i--) {
            this.#latches[i].input(this.#latches[i - 1].output());
        }
        this.#latches[0].input(value);
    }

    // parallel output
    output() {
        return this.#latches.map(latch => latch.output());
    }
}

module.exports = SPIO;