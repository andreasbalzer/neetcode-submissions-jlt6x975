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
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const items = this.keyStore.get(key);
        if (!items) {
            return "";
        }

        let left = 0;
        let right = items.length - 1;
        let result = "";
        while (left <= right) {
            const mid = Math.floor((right - left) / 2 + left);
            if (items[mid].timestamp <= timestamp) {
                result = items[mid].value;
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
            
        }

        return result;
    }
}
