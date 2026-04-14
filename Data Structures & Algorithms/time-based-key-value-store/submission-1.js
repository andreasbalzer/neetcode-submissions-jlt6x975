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
        if (!this.keyStore.has(key)) {
            return "";
        }

        const data = this.keyStore.get(key);
        let left = 0;
        let right = data.length - 1;
        let result = Number.NEGATIVE_INFINITY;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (data[mid].timestamp > timestamp) {
                right = mid - 1;
            }
            else {
                result = Math.max(result, mid);
                left = mid + 1;
            }
        }
        
        if (result === Number.NEGATIVE_INFINITY) {
            return "";
        }

        return data[result].value;
    }
}
