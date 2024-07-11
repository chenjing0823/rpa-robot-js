
const mouse_movement_function = require("./mouse-movement.function.js");
const sleep_function = require("./sleep.function.js");

class MouseClass {
    constructor(providerRegistry) {
        this.providerRegistry = providerRegistry;
        this.config = {
            autoDelayMs: 100,
            mouseSpeed: 1000
        };
        if (this.providerRegistry.hasMouse()) {
            this.providerRegistry.getMouse().setMouseDelay(0);
        }
    }
    async setPosition(target) {
        try {
            await this.providerRegistry.getMouse().setMousePosition(target);
            return this;
        }
        catch (e) {
            throw e;
        }
    }
    async move(path, movementType = mouse_movement_function.linear) {
        try {
            let pathSteps = await path;
            if (!Array.isArray(pathSteps)) {
                pathSteps = [pathSteps];
            }
            const timeSteps = mouse_movement_function.calculateMovementTimesteps(pathSteps.length, this.config.mouseSpeed, movementType);
            for (let idx = 0; idx < pathSteps.length; ++idx) {
                const node = pathSteps[idx];
                const minTime = timeSteps[idx];
                console.log(idx)
                this.setPosition(node);
                await sleep_function.busyWaitForNanoSeconds(minTime);
                await this.setPosition(node);
            }
            return this;
        }
        catch (e) {
            throw e;
        }
    }
}

exports.MouseClass = MouseClass;