let libnut;

if (process.platform === 'win32') {
    libnut = require("../libnut-win32");
} else if (process.platform === 'linux') {
    libnut = require("../libnut-linux");
} else {
    libnut = require("../libnut-darwin");
}

exports.libnut = libnut;
