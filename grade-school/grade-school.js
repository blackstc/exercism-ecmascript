export default class School {
    constructor() {
        this.rosterDetail = {};
    }

    roster() {
        return this.getCopy(this.rosterDetail);
    }

    add(student, grade) {
        let roster = this.rosterDetail;

        roster[grade] ? roster[grade].push(student) : roster[grade] = [student];
        roster[grade].sort();
    }

    grade(gradeNum) {
        return this.getCopy(this.rosterDetail[gradeNum] || []);
    }

    getCopy(db) {
       return JSON.parse(JSON.stringify(db));
    }

}
