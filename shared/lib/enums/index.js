const ButtonEnum = require("./button.enum");
const ColormodeEnum = require("./colormode.enum");

Object.keys(ButtonEnum).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return ButtonEnum[key]; }
        });
    }
});

Object.keys(ColormodeEnum).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return ColormodeEnum[key]; }
        });
    }
});