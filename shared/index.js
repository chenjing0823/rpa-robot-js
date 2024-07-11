// 导入 "./lib" 中所有导出，并将它们重新导出
const lib = require("./lib");
Object.keys(lib).forEach(function (key) {
    if (key !== "default" && !Object.prototype.hasOwnProperty.call(exports, key)) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () { return lib[key]; }
        });
    }
});
