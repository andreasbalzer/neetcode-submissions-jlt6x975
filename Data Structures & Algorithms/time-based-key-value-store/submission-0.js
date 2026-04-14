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

        this.keyStore.get(key).push({value, timestamp, });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        console.log(`get ${key} at ${timestamp}`);
        if (!this.keyStore.has(key)) {
            console.log("null check");
            return "";
        }

        const data = this.keyStore.get(key);
        let left = 0;
        let right = data.length - 1;
        let result = Number.NEGATIVE_INFINITY;
        console.log(data);
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            console.log(`left ${left} right ${right} mid ${mid}`);
            if (data[mid].timestamp > timestamp) {
                console.log("go left");
                right = mid - 1;
            }
            else {
                console.log("go right");
                result = Math.max(result, mid);
                left = mid + 1;
            }
        }
        
        if (result === Number.NEGATIVE_INFINITY) {
            console.log("not found");
            return "";
        }

        console.log(`return ${data[result].value}`);
        return data[result].value;
    }
}
