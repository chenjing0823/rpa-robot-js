
const window_class = require("./window.class.js");
const createWindowApi = (providerRegistry) => {
    return {
        async getActiveWindow() {
            const windowHandle = await providerRegistry.getWindow().getActiveWindow();
            return new window_class.Window(providerRegistry, windowHandle);
        },
        async getWindows() {
            const windowHandles = await providerRegistry.getWindow().getWindows();
            return windowHandles.map((handle) => {
                return new window_class.Window(providerRegistry, handle);
            });
        },
    };
};
exports.createWindowApi = createWindowApi;