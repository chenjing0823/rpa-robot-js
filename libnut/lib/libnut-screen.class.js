const import_libnut = require("../import_libnut")
const shared = require("../../shared");

class ScreenAction {

    static determinePixelDensity(screen, screenShot) {
        return {
            scaleX: screenShot.width / screen.width,
            scaleY: screenShot.height / screen.height,
        };
    }
    constructor() {
    }
    grabScreenRegion(region) {
        return new Promise((resolve, reject) => {
            const screenShot = import_libnut.libnut.screen.capture(region.left, region.top, region.width, region.height);
            if (screenShot) {
                const pixelScaling = ScreenAction.determinePixelDensity(region, screenShot);
                resolve(new shared.Image(screenShot.width, screenShot.height, screenShot.image, 4, "grabScreenRegionResult", screenShot.bitsPerPixel, screenShot.byteWidth, shared.ColorMode.BGR, pixelScaling));
            }
            else {
                reject("Unable to fetch screen content.");
            }
        });
    }
    screenWidth() {
        return new Promise((resolve, reject) => {
            try {
                const size = import_libnut.libnut.getScreenSize();
                resolve(size.width);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    screenHeight() {
        return new Promise((resolve, reject) => {
            try {
                const size = import_libnut.libnut.getScreenSize();
                resolve(size.height);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    screenSize() {
        return new Promise((resolve, reject) => {
            try {
                const screenSize = import_libnut.libnut.getScreenSize();
                resolve(new shared.Region(0, 0, screenSize.width, screenSize.height));
            }
            catch (e) {
                reject(e);
            }
        });
    }
}

exports.default = ScreenAction;