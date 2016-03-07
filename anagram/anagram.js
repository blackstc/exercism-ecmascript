export default class Anagram {
    constructor(word) {
        this.word = word;
    }

    matches(words) {
        words = Array.isArray(words) ? words : [].slice.call(arguments, 0);

        return words.filter((word) => {
            if (word.toLowerCase() === this.word.toLowerCase()) return false;

            return this.normalize(word) === this.normalize(this.word);
        });
    }

    normalize(word) {
        return word.toLowerCase().split('').sort().join();
    }
}