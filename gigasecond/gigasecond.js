class Gigasecond {
    constructor(dob) {
        this.dob = dob;
    }

    date() {
        const gigDate = new Date(1e12 + this.dob.getTime());
        return new Date(gigDate.toDateString());
    }
}

export default Gigasecond;
