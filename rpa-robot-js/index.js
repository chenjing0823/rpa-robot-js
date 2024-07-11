const shared = require("../shared")
// 导入鼠标类
const { MouseClass } = require("./lib/mouse.class");
const provider_registry_class = require("./lib/provider/provider-registry.class")

const movement_function = require("./lib/movement.function.js");
const linehelper_class = require("./lib/util/linehelper.class.js");
// 导出 MouseClass
exports.MouseClass = MouseClass;
exports.providerRegistry = provider_registry_class.default;


// 创建鼠标实例
const provider_registry = require("./lib/provider/provider-registry.class")
const mouse = new MouseClass(provider_registry.default);
const lineHelper = new linehelper_class.LineHelper();
const { straightTo, up, down, left, right } = movement_function.createMovementApi(provider_registry_class.default, lineHelper);
exports.straightTo = straightTo;
exports.up = up;
exports.down = down;
exports.left = left;
exports.right = right;
exports.Point = shared.Point;

// 导出 mouse 实例
exports.mouse = mouse;