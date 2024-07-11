const clipboardy = require('clipboardy');
console.log(clipboardy);
class default_1 {
    constructor() {
    }
    async hasText() {
        return new Promise((resolve, reject) => {
            try {
                const content = clipboardy.readSync();
                resolve(content.length > 0);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    clear() {
        return Promise.reject("Method not implemented.");
    }
    async copy(text) {
        return new Promise((resolve, reject) => {
            try {
                clipboardy.writeSync(text);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    async paste() {
        return clipboardy.read();
    }
}
exports.default = default_1;
//# sourceMappingURL=clipboardy-clipboard.class.js.map