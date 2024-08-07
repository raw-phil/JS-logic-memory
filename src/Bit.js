class Bit {

    #value
    constructor(value = 0) {
        this.#value = 0; // Default value is 0
        this.setValue(value);
    }

    setValue(value) {
        if (value !== 0 && value !== 1) {
            throw new Error('Bit value must be 0 or 1');
        }
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }
}

module.exports = Bit;
