const ButtonEnum = require("./button.enum");


Object.keys(ButtonEnum).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return ButtonEnum[key]; }
        });
    }
});