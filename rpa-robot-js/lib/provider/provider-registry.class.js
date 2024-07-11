
const color_finder_class = require("./color/color-finder.class.js")
class DefaultProviderRegistry {
    constructor() {
        this.getImageFinder = () => {
            if (this._imageFinder) {
                return this._imageFinder;
            }
            const error = new Error(`No ImageFinder registered`);
            throw error;
        };
        this.registerImageFinder = (value) => {
            this._imageFinder = value;
        };
        this.getMouse = () => {
            if (this._mouse) {
                return this._mouse;
            }
            const error = new Error(`No MouseProvider registered`);
            throw error;
        };
        this.registerMouseProvider = (value) => {
            this._mouse = value;
        };
        this.getScreen = () => {
            if (this._screen) {
                return this._screen;
            }
            const error = new Error(`No ScreenProvider registered`);
            throw error;
        };
        this.registerScreenProvider = (value) => {
            this._screen = value;
        };
        this.getTextFinder = () => {
            if (this._textFinder) {
                return this._textFinder;
            }
            const error = new Error(`No TextFinder registered`);
            throw error;
        };
        this.registerTextFinder = (value) => {
            this._textFinder = value;
        };
        this.getColorFinder = () => {
            if (this._colorFinder) {
                return this._colorFinder;
            }
            const error = new Error(`No ColorFinder registered`);
            throw error;
        };
        this.registerColorFinder = (value) => {
            this._colorFinder = value;
        };
    }
    hasClipboard() {
        return this._clipboard != null;
    }
    hasImageFinder() {
        return this._imageFinder != null;
    }
    hasKeyboard() {
        return this._keyboard != null;
    }
    hasMouse() {
        return this._mouse != null;
    }
    hasScreen() {
        return this._screen != null;
    }
    hasWindow() {
        return this._window != null;
    }
    hasTextFinder() {
        return this._textFinder != null;
    }
    hasWindowFinder() {
        return this._windowFinder != null;
    }
    hasImageReader() {
        return this._imageReader != null;
    }
    hasImageWriter() {
        return this._imageWriter != null;
    }
    hasImageProcessor() {
        return this._imageProcessor != null;
    }
    hasLogProvider() {
        return this._logProvider != null;
    }
    hasColorFinder() {
        return this._colorFinder != null;
    }
}

const providerRegistry = new DefaultProviderRegistry();
providerRegistry.registerColorFinder(new color_finder_class.default());

const { DefaultMouseAction } = require("../../../libnut");
providerRegistry.registerMouseProvider(new DefaultMouseAction());

const { DefaultScreenAction } = require("../../../libnut");
providerRegistry.registerScreenProvider(new DefaultScreenAction())


exports.default = providerRegistry;