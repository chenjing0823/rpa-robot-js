let libnut;
if (process.platform === 'darwin') {
    // libnut = require("./permissionCheck");
} else {
    libnut = require("bindings")("libnut");
}


module.exports = libnut;