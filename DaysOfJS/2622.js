// 2622. Cache With Time Limit

class TimeLimitedCache {
    constructor() {
        this.data = new Map();
    }

    set(key, value, duration) {
        const currentTime = Date.now();

        // If key exists and is not expired
        if (this.data.has(key) && this.data.get(key).expirationTime > currentTime) {
            this.data.set(key, { value: value, expirationTime: currentTime + duration });
            return true;
        } else {
            this.data.set(key, { value: value, expirationTime: currentTime + duration });
            return false;
        }
    }

    get(key) {
        const currentTime = Date.now();

        // If key exists and is not expired
        if (this.data.has(key) && this.data.get(key).expirationTime > currentTime) {
            return this.data.get(key).value;
        } else {
            return -1;
        }
    }

    count() {
        const currentTime = Date.now();

        // Filter out the expired keys
        let validCount = 0;
        for (let entry of this.data.entries()) {
            if (entry[1].expirationTime > currentTime) {
                validCount++;
            }
        }
        return validCount;
    }
}