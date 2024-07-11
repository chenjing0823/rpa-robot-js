
const imageToJimp = require("./imageToJimp.function.js");
for (const key in imageToJimp) {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        exports[key] = imageToJimp[key];
    }
}
