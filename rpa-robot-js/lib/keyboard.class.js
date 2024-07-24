
const shared = require("../../shared");
const sleep_function = require("./sleep.function");
const inputIsString = (input) => {
    return input.every((elem) => typeof elem === "string");
};
class KeyboardClass {
    constructor(providerRegistry) {
        this.providerRegistry = providerRegistry;
        this.config = {
            autoDelayMs: 300
        };
        if (this.providerRegistry.hasKeyboard()) {
            this.providerRegistry
                .getKeyboard()
                .setKeyboardDelay(this.config.autoDelayMs);
        }
    }
    async type(...input) {
        try {
            if (inputIsString(input)) {
                for (const char of input.join(" ")) {
                    await (0, sleep_function.sleep)(this.config.autoDelayMs);
                    await this.providerRegistry.getKeyboard().type(char);
                    // this.providerRegistry.getLogProvider().debug(`Tapped ${char}`);
                }
                // this.providerRegistry.getLogProvider().info(`Typed string ${input}`);
            }
            else {
                await this.providerRegistry.getKeyboard().click(...input);
                const key = input[input.length - 1];
                const modifiers = input.slice(0, -1);
                const keyName = shared.Key[key];
                const modifierNames = modifiers.map((modifier) => shared.Key[modifier]);
                // this.providerRegistry
                //     .getLogProvider()
                //     .info(`Tapped key ${keyName} with modifiers ${modifierNames}`);
            }
            return this;
        }
        catch (e) {
            // this.providerRegistry.getLogProvider().error(e);
            throw e;
        }
    }
    async pressKey(...keys) {
        try {
            await (0, sleep_function.sleep)(this.config.autoDelayMs);
            await this.providerRegistry.getKeyboard().pressKey(...keys);
            const keyNames = keys.map((key) => shared.Key[key]);
            // this.providerRegistry.getLogProvider().info(`Pressed keys ${keyNames}`);
            return this;
        }
        catch (e) {
            // this.providerRegistry.getLogProvider().error(e);
            throw e;
        }
    }
    async releaseKey(...keys) {
        try {
            await (0, sleep_function.sleep)(this.config.autoDelayMs);
            await this.providerRegistry.getKeyboard().releaseKey(...keys);
            const keyNames = keys.map((key) => shared.Key[key]);
            // this.providerRegistry.getLogProvider().info(`Released keys ${keyNames}`);
            return this;
        }
        catch (e) {
            // this.providerRegistry.getLogProvider().error(e);
            throw e;
        }
    }
}
exports.KeyboardClass = KeyboardClass;