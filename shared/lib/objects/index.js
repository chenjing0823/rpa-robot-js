const PointClass = require("./point.class.js");
const RgbaClass = require("./rgba.class.js");
const QueryClass = require("./query.class.js");
const RegionClass = require("./region.class.js");
const ImageClass = require("./image.class.js");
const MatchRequestClass = require("./match-request.class.js");
const MatchResultClass = require("./match-result.class.js");




Object.keys(PointClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return PointClass[key]; }
        });
    }
});

Object.keys(RgbaClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return RgbaClass[key]; }
        });
    }
});

Object.keys(QueryClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return QueryClass[key]; }
        });
    }
});

Object.keys(RegionClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return RegionClass[key]; }
        });
    }
});

Object.keys(ImageClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return ImageClass[key]; }
        });
    }
});

Object.keys(MatchRequestClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return MatchRequestClass[key]; }
        });
    }
});

Object.keys(MatchResultClass).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return MatchResultClass[key]; }
        });
    }
});