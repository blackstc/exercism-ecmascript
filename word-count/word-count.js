export default class Words {
    count(string) {
        let result = {};
        const strArr = string.split(' ');

        strArr.forEach((word) => {
            result.hasOwnProperty(word) ? result[word]++ : result[word] = 1;
        })

        return result;
    }
}


