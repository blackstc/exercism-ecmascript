class Transcriptor {
    toRna(dna) {
        const chart = {
           G: 'C',
           C: 'G',
           T: 'A',
           A: 'U',
        };

        let result = '';
        for (let i = 0; i < dna.length; i++) {
            result += chart[dna[i]];
        }

        return result;
    }
}

export default Transcriptor;
