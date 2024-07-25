
const color_finder_class = require("./color/color-finder.class.js")
class DefaultProviderRegistry {
    constructor() {
        this.getClipboard = () => {
            if (this._clipboard) {
                return this._clipboard;
            }
            const error = new Error(`No ClipboardProvider registered`);
            throw error;
        };
        this.registerClipboardProvider = (value) => {
            this._clipboard = value;
        };
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
        this.getKeyboard = () => {
            if (this._keyboard) {
                return this._keyboard;
            }
            const error = new Error(`No KeyboardProvider registered`);
            throw error;
        };
        this.registerKeyboardProvider = (value) => {
            this._keyboard = value;
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
        this.getWindow = () => {
            if (this._window) {
                return this._window;
            }
            const error = new Error(`No WindowProvider registered`);
            throw error;
        };
        this.registerWindowProvider = (value) => {
            this._window = value;
        };
        this.getWindowElementInspector = () => {
            if (this._windowElementInspector) {
                return this._windowElementInspector;
            }
            const error = new Error(`No WindowElementInspector registered`);
            throw error;
        };
        this.registerWindowElementInspector = (value) => {
            this._windowElementInspector = value;
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

const Clipboard = require("../../../default-clipboard-provider").default;
providerRegistry.registerClipboardProvider(new Clipboard());

const { DefaultKeyboardAction } = require("../../../libnut");
providerRegistry.registerKeyboardProvider(new DefaultKeyboardAction());

const { DefaultMouseAction } = require("../../../libnut");
providerRegistry.registerMouseProvider(new DefaultMouseAction());

const { DefaultScreenAction } = require("../../../libnut");
providerRegistry.registerScreenProvider(new DefaultScreenAction())

const { DefaultWindowAction } = require("../../../libnut");
providerRegistry.registerWindowProvider(new DefaultWindowAction());

// const { DefaultWindowElementInspector } = require("../../../libnut");
// providerRegistry.registerWindowElementInspector(new DefaultWindowElementInspector());


exports.default = providerRegistry;