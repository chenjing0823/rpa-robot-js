"use strict";

// 导入需要重新导出的模块
const enums = require("./enums");
const objects = require("./objects");
// const types = require("./types");
const functions = require("./functions");

// 导出除了默认导出以外的所有内容到 exports 对象中
Object.keys(enums).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return enums[key]; }
        });
    }
});

Object.keys(objects).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return objects[key]; }
        });
    }
});

// Object.keys(types).forEach(function (key) {
//     if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
//         Object.defineProperty(exports, key, {
//             enumerable: true,
//             get: function () { return types[key]; }
//         });
//     }
// });

Object.keys(functions).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return functions[key]; }
        });
    }
});
