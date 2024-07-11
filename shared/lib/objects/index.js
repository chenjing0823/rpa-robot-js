const PointClass = require("./point.class");


Object.keys(PointClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return PointClass[key]; }
        });
    }
});