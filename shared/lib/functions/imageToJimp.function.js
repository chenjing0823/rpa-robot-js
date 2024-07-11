
// 导入 Jimp 模块和颜色模式枚举
const Jimp = require("jimp");
const { ColorMode } = require("../enums/colormode.enum.js");

// 定义函数 imageToJimp，接收一个包含图像数据的对象 image
function imageToJimp(image) {
    // 使用图像数据创建 Jimp 图像对象 jimpImage
    const jimpImage = new Jimp({
        data: image.data,
        width: image.width,
        height: image.height
    });

    // 如果图像的颜色模式是 BGR，则需要交换红色和蓝色通道
    if (image.colorMode === ColorMode.BGR) {
        jimpImage.scan(0, 0, jimpImage.bitmap.width, jimpImage.bitmap.height, function (_, __, idx) {
            const red = this.bitmap.data[idx];
            this.bitmap.data[idx] = this.bitmap.data[idx + 2];
            this.bitmap.data[idx + 2] = red;
        });
    }

    // 返回处理后的 Jimp 图像对象
    return jimpImage;
}

// 导出 imageToJimp 函数，使其可以在其他文件中使用
exports.imageToJimp = imageToJimp;
