// 导入必要的模块或类
const bresenham_class = require("./bresenham.class");

// 定义 LineHelper 类
class LineHelper {
    // 构造函数
    constructor() {}

    // 定义 straightLine 方法，接收两个参数 from 和 to
    straightLine(from, to) {
        // 调用 Bresenham 类的 compute 方法来计算直线路径
        return bresenham_class.Bresenham.compute(from, to);
    }
}

// 导出 LineHelper 类，以便其他模块可以使用它
exports.LineHelper = LineHelper;
