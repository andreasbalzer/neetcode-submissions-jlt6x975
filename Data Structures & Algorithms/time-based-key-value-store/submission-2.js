class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            console.log(`store does not have ${key}`);
            return "";
        }
        const values = this.keyStore.get(key);
        let left = 0;
        let right = values.length - 1;
        let result = "";
        console.log(`searching ${key} ${timestamp}`);
        console.log(values);
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            console.log(`l ${left} r ${right} mid ${mid} ts ${values[mid][0]}`);
            if (values[mid][0] <= timestamp) {
                result = values[mid][1];
                left = mid + 1;
            }
            if (values[mid][0] > timestamp) {
                right = mid - 1;
            }
        }
        console.log(`ret ${result}`);
        return result;
    }
}
