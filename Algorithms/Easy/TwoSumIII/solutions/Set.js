class TwoSum {

    constructor() {
        this.set = new Set();
    }

    add(num) {
        this.set.add(num);
    }

    find(num) {
        let isFound = false;
        for(let item of this.set.keys()) {
            if (this.set.has(num - item)) {
                isFound = true;
            }
        }
        return isFound;
    }
}
