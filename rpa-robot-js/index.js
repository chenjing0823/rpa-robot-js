const shared = require("../shared")
// 导入鼠标类
const { MouseClass } = require("./lib/mouse.class.js");
const provider_registry_class = require("./lib/provider/provider-registry.class.js")
const screen_class = require("./lib/screen.class.js");


const movement_function = require("./lib/movement.function.js");
const linehelper_class = require("./lib/util/linehelper.class.js");

// 导出 MouseClass
exports.MouseClass = MouseClass;
exports.providerRegistry = provider_registry_class.default;


// 创建鼠标实例
const provider_registry = require("./lib/provider/provider-registry.class.js")
const sleep_function = require("./lib/sleep.function.js");
exports.sleep = sleep_function.sleep;

const mouse = new MouseClass(provider_registry.default);
const lineHelper = new linehelper_class.LineHelper();
const { straightTo, up, down, left, right } = movement_function.createMovementApi(provider_registry_class.default, lineHelper);
exports.straightTo = straightTo;
exports.up = up;
exports.down = down;
exports.left = left;
exports.right = right;
exports.Point = shared.Point;
exports.RGBA = shared.RGBA;
exports.Region = shared.Region;
exports.Image = shared.Image;
const screen = new screen_class.ScreenClass(provider_registry_class.default);
exports.screen = screen;

// 导出 mouse 实例
exports.mouse = mouse;

const pixelWithColor = (color) => {
    return {
        type: "color",
        id: `pixel-by-color-query-RGBA(${color.R},${color.G},${color.B},${color.A})`,
        by: {
            color
        }
    };
};
exports.pixelWithColor = pixelWithColor;