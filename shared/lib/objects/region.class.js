
class Region {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    toString() {
        return `(${this.left}, ${this.top}, ${this.width}, ${this.height})`;
    }
}

function isRegion(possibleRegion) {
    if (!(possibleRegion instanceof Region)) {
        return false;
    }

    const regionKeys = ["left", "top", "width", "height"];

    for (const key of regionKeys) {
        if (!(key in possibleRegion)) {
            return false;
        }

        const possibleRegionKeyType = typeof possibleRegion[key];
        const regionKeyType = typeof testRegion[key];

        if (possibleRegionKeyType !== regionKeyType) {
            return false;
        }
    }

    return true;
}

module.exports = {
    Region,
    isRegion
};
