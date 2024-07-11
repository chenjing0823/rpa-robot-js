
// 定义一个枚举 ColorMode，用于描述图像的颜色模式
var ColorMode;
(function (ColorMode) {
    ColorMode[ColorMode["BGR"] = 0] = "BGR"; // 表示 BGR 颜色模式，值为 0
    ColorMode[ColorMode["RGB"] = 1] = "RGB"; // 表示 RGB 颜色模式，值为 1
})(ColorMode || (exports.ColorMode = ColorMode = {}));

