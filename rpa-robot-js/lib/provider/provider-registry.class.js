class DefaultProviderRegistry {
    constructor() {
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

const { DefaultMouseAction } = require("../../../libnut");
providerRegistry.registerMouseProvider(new DefaultMouseAction());


exports.default = providerRegistry;