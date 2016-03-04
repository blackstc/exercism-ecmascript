export default class Pangram {
    constructor(string) {
        this.string = string.toLowerCase();
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }

    isPangram() {
        if (this.string === '') return false;

        let remainingLetters = this.alphabet.split('');

        let filtered = remainingLetters.filter((letter) => {
            return this.string.indexOf(letter) === -1;
        });

        return !filtered.length;
    }
}