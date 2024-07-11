

// 导出Button枚举作为模块的接口
var Button;
(function (Button) {
    // 枚举成员定义了鼠标的可点击按钮
    Button[Button["LEFT"] = 0] = "LEFT";     // 左键
    Button[Button["MIDDLE"] = 1] = "MIDDLE"; // 中键
    Button[Button["RIGHT"] = 2] = "RIGHT";   // 右键
})(Button || (exports.Button = Button = {}));

// 将Button枚举导出给外部模块使用
exports.Button = Button;
