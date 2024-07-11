
// 引入相关模块
const imageToJimpFunction = require("../functions/imageToJimp.function.js");
const ColorModeEnum = require("../enums/colormode.enum.js");

/**
 * Image 类，用于表示通用的图像数据
 */
class Image {
    /**
     * 构造函数
     * @param {number} width 图像的宽度（以像素为单位）
     * @param {number} height 图像的高度（以像素为单位）
     * @param {Buffer} data 图像的数据
     * @param {number} channels 图像的通道数量
     * @param {string} id 图像的标识符
     * @param {number} bitsPerPixel 每个像素的位数
     * @param {number} byteWidth 每行图像的字节总数
     * @param {ColorModeEnum} colorMode 图像的颜色模式，默认为 ColorModeEnum.BGR
     * @param {{scaleX: number, scaleY: number}} pixelDensity 包含缩放信息的对象，例如处理 Retina 显示屏数据（默认: {scaleX: 1.0, scaleY: 1.0}）
     */
    constructor(width, height, data, channels, id, bitsPerPixel, byteWidth, colorMode = ColorModeEnum.ColorMode.BGR, pixelDensity = { scaleX: 1.0, scaleY: 1.0 }) {
        // 初始化属性
        this.width = width;
        this.height = height;
        this.data = data;
        this.channels = channels;
        this.id = id;
        this.bitsPerPixel = bitsPerPixel;
        this.byteWidth = byteWidth;
        this.colorMode = colorMode;
        this.pixelDensity = pixelDensity;

        // 检查通道数量是否合法
        if (channels <= 0) {
            throw new Error("Channel <= 0");
        }
    }

    /**
     * 判断图像是否具有 Alpha 通道
     * @returns {boolean} 如果通道数量大于 3，则返回 true，否则返回 false
     */
    get hasAlphaChannel() {
        return this.channels > 3;
    }

    /**
     * 将图像从 BGR 颜色模式转换为 RGB 颜色模式
     * @returns {Image} 转换后的图像对象
     */
    async toRGB() {
        if (this.colorMode === ColorModeEnum.ColorMode.RGB) {
            return this;
        }
        const rgbImage = imageToJimpFunction.imageToJimp(this);
        return new Image(this.width, this.height, rgbImage.bitmap.data, this.channels, this.id, this.bitsPerPixel, this.byteWidth, ColorModeEnum.ColorMode.RGB, this.pixelDensity);
    }

    /**
     * 将图像从 RGB 颜色模式转换为 BGR 颜色模式
     * @returns {Image} 转换后的图像对象
     */
    async toBGR() {
        if (this.colorMode === ColorModeEnum.ColorMode.BGR) {
            return this;
        }
        const bgrImage = imageToJimpFunction.imageToJimp(this);
        return new Image(this.width, this.height, bgrImage.bitmap.data, this.channels, this.id, this.bitsPerPixel, this.byteWidth, ColorModeEnum.ColorMode.BGR, this.pixelDensity);
    }

    /**
     * 从提供的 RGB 数据创建图像
     * @static
     * @param {number} width 图像的宽度（以像素为单位）
     * @param {number} height 图像的高度（以像素为单位）
     * @param {Buffer} data 图像的数据
     * @param {number} channels 图像的通道数量
     * @param {string} id 图像的标识符
     * @param {number} bitsPerPixel 每个像素的位数
     * @param {number} byteWidth 每行图像的字节总数
     * @returns {Image} 创建的图像对象
     */
    static fromRGBData(width, height, data, channels, id, bitsPerPixel, byteWidth) {
        const rgbImage = new Image(width, height, data, channels, id, bitsPerPixel, byteWidth);
        const jimpImage = imageToJimpFunction.imageToJimp(rgbImage);
        return new Image(width, height, jimpImage.bitmap.data, channels, id, bitsPerPixel, byteWidth);
    }
}

// 导出 Image 类
exports.Image = Image;

// 创建测试图像
const testImage = new Image(100, 100, Buffer.from([]), 4, "typeCheck", 4, 100 * 4);

// 获取测试图像的键
const imageKeys = Object.keys(testImage);

/**
 * 检查给定对象是否为 Image 类型
 * @param {Object} possibleImage 可能的图像对象
 * @returns {boolean} 如果是 Image 类型则返回 true，否则返回 false
 */
function isImage(possibleImage) {
    if (typeof possibleImage!== "object") {
        return false;
    }
    for (const key of imageKeys) {
        if (!(key in possibleImage)) {
            return false;
        }
        const possibleImageKeyType = typeof possibleImage[key];
        const imageKeyType = typeof testImage[key];
        if (possibleImageKeyType!== imageKeyType) {
            return false;
        }
    }
    return true;
}

// 导出 isImage 函数
exports.isImage = isImage;