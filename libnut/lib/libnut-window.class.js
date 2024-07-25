
const import_libnut = require("../import_libnut");
const shared = require("../../shared");
class WindowAction {
    getWindows() {
        return new Promise((resolve, reject) => {
            try {
                resolve(import_libnut.libnut.getWindows());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    getActiveWindow() {
        return new Promise((resolve, reject) => {
            try {
                resolve(import_libnut.libnut.getActiveWindow());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    getWindowRegion(windowHandle) {
        return new Promise((resolve, reject) => {
            try {
                const windowRect = import_libnut.libnut.getWindowRect(windowHandle);
                resolve(new shared.Region(windowRect.x, windowRect.y, windowRect.width, windowRect.height));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    getWindowTitle(windowHandle) {
        return new Promise((resolve, reject) => {
            try {
                resolve(import_libnut.libnut.getWindowTitle(windowHandle));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    focusWindow(windowHandle) {
        return new Promise((resolve, reject) => {
            try {
                resolve(import_libnut.libnut.focusWindow(windowHandle));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    moveWindow(windowHandle, newOrigin) {
        return new Promise((resolve, reject) => {
            try {
                resolve(import_libnut.libnut.moveWindow(windowHandle, newOrigin));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    resizeWindow(windowHandle, newSize) {
        return new Promise((resolve, reject) => {
            try {
                resolve(import_libnut.libnut.resizeWindow(windowHandle, newSize));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    minimizeWindow(_) {
        throw new Error("Method not implemented in libnut.");
    }
    restoreWindow(_) {
        throw new Error("Method not implemented in libnut.");
    }
}
exports.default = WindowAction;
//# sourceMappingURL=libnut-window.class.js.map