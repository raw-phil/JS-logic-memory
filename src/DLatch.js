const Bit = require('./Bit');


// Load of data is not syncronized by a clock
class DLatch {

    #S;
    #R;
    #Q;

    constructor() {
        // Initial state of the latch
        this.#S = new Bit(0);
        this.#R = new Bit(1);

        this.#Q = new Bit(0);
    }

    // Get the current state of the outputs
    output() {
        return this.#Q.getValue();
    }

    input(value) {

        const D = new Bit(value);

        //D goes in S and inverted D in R
        this.#S.setValue(D.getValue());
        this.#R.setValue(1 - D.getValue());

        this.#srLogic(this.#S.getValue(), this.#R.getValue());

    }

    // NOR SR latch logic
    #srLogic(S, R) {
        if (S === 0) {
            if (R === 1) {
                this.#Q.setValue(0);
            }

        } else {
            if (R === 0) {
                this.#Q.setValue(1);
            } else {
                throw new Error("race around. S and R could NOT be set to 1");
            }
        }
    }

    toString() {
        return `Q: ${this.#Q.getValue()}`;
    }
}

module.exports = DLatch;