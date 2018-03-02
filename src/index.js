class SmartCalculator {
    constructor(initialValue) {
        this.initial = initialValue;
        this.operations = [];
        this.numbers = [];
    }

    add(number) {
        this.operations.push('+');
        this.numbers.push(number);
        return this;
    }
  
    subtract(number) {
        this.operations.push('-');
        this.numbers.push(number);
        return this;
  }

    multiply(number) {
        this.operations.push('*');
        this.numbers.push(number);
        return this;
    }

    devide(number) {
        this.operations.push('/');
        this.numbers.push(number);
        return this;
    }


    pow(number) {
        this.operations.push('**');
        this.numbers.push(number);
        return this;
    }

    valueOf() {
        var result = this.initial;
        for (var i = 0; i < this.operations.length; i++) {
            result += this.operations[i];
            result += this.numbers[i];
        }
        result = eval(result);
        return result;
    }
}

module.exports = SmartCalculator;
