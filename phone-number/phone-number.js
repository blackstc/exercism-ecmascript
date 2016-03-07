export default class PhoneNumber {
    constructor(num) {
        this.num = num.replace(/[() -. ]/g, '');
        this.error = '0000000000';
    }

    number() {
        if (this.num.length === 11 && this.num.charAt(0) === '1') {
            return this.num.substring(1, 11);
        } else if (this.num.length !== 10) {
            return this.error
        }

        return this.num;
    }

    areaCode() {
        return this.num.substring(0, 3);
    }

    toString() {
        const areaCodeString = `(${this.num.substring(0, 3)})`;
        const numString = `${this.num.substring(3, 6)}-${this.num.substring(6, 10)}`;

        return `${areaCodeString} ${numString}`;
    }
}
