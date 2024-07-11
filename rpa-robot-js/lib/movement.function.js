
// 引入必要的模块和依赖
const shared = require("../../shared");

// 创建移动API的函数
const createMovementApi = (providerRegistry, lineHelper) => {
    // 返回一个包含不同方向移动方法的对象
    return {
        // 向下移动指定像素
        down: async (px) => {
            // 获取当前鼠标位置
            const pos = await providerRegistry.getMouse().currentMousePosition();
            // 调用lineHelper的straightLine方法，从当前位置向下移动指定像素(px)
            return lineHelper.straightLine(pos, new shared.Point(pos.x, pos.y + px));
        },
        // 向左移动指定像素
        left: async (px) => {
            // 获取当前鼠标位置
            const pos = await providerRegistry.getMouse().currentMousePosition();
            // 调用lineHelper的straightLine方法，从当前位置向左移动指定像素(px)
            return lineHelper.straightLine(pos, new shared.Point(pos.x - px, pos.y));
        },
        // 向右移动指定像素
        right: async (px) => {
            // 获取当前鼠标位置
            const pos = await providerRegistry.getMouse().currentMousePosition();
            // 调用lineHelper的straightLine方法，从当前位置向右移动指定像素(px)
            return lineHelper.straightLine(pos, new shared.Point(pos.x + px, pos.y));
        },
        // 直接移动到指定目标点
        straightTo: async (target) => {
            // 等待目标点的异步解析
            const targetPoint = await target;
            // 检查目标点是否是Point类型
            if (!(0, shared.isPoint)(targetPoint)) {
                // 如果不是Point类型，抛出错误
                throw Error(`straightTo requires a Point, but received ${JSON.stringify(targetPoint)}`);
            }
            // 获取当前鼠标位置
            const origin = await providerRegistry.getMouse().currentMousePosition();
            // 调用lineHelper的straightLine方法，从当前位置移动到目标点
            return lineHelper.straightLine(origin, targetPoint);
        },
        // 向上移动指定像素
        up: async (px) => {
            // 获取当前鼠标位置
            const pos = await providerRegistry.getMouse().currentMousePosition();
            // 调用lineHelper的straightLine方法，从当前位置向上移动指定像素(px)
            return lineHelper.straightLine(pos, new shared.Point(pos.x, pos.y - px));
        }
    };
};

// 导出createMovementApi函数作为模块的接口
exports.createMovementApi = createMovementApi;
