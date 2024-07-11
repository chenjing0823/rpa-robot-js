"use strict";

// Define the Point class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

// Export the Point class
exports.Point = Point;

// Create an instance of Point for testing
const testPoint = new Point(100, 100);

// Get the keys of testPoint object
const pointKeys = Object.keys(testPoint);

// Define the isPoint function to check if an object is a Point
function isPoint(possiblePoint) {
    // Check if possiblePoint is an object
    if (typeof possiblePoint !== "object") {
        return false;
    }

    // Iterate over each key in pointKeys
    for (const key of pointKeys) {
        // Check if key exists in possiblePoint
        if (!(key in possiblePoint)) {
            return false;
        }

        // Check if the type of value at key in possiblePoint matches type in testPoint
        const possiblePointKeyType = typeof possiblePoint[key];
        const pointKeyType = typeof testPoint[key];
        if (possiblePointKeyType !== pointKeyType) {
            return false;
        }
    }

    // If all checks passed, then possiblePoint is considered a Point
    return true;
}

// Export the isPoint function
exports.isPoint = isPoint;
