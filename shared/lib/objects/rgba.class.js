
/**
 * RGBA 颜色类
 */
class RGBA {
    /**
     * 构造函数，初始化 RGBA 颜色的各个通道值
     * @param {number} R - 红色通道值（0 - 255）
     * @param {number} G - 绿色通道值（0 - 255）
     * @param {number} B - 蓝色通道值（0 - 255）
     * @param {number} A - 透明度值（0 - 1）
     */
    constructor(R, G, B, A) {
        this.R = R;
        this.G = G;
        this.B = B;
        this.A = A;
    }

    /**
     * 将 RGBA 颜色转换为字符串格式（rgba 函数形式）
     * @returns {string} 形如 'rgba(R,G,B,A)' 的字符串
     */
    toString() {
        return `rgba(${this.R},${this.G},${this.B},${this.A})`;
    }

    /**
     * 将 RGBA 颜色转换为十六进制字符串格式
     * @returns {string} 形如 '#RRGGBBAA' 的十六进制字符串
     */
    toHex() {
        return `#${this.R.toString(16).padStart(2, "0")}${this.G.toString(16).padStart(2, "0")}${this.B.toString(16).padStart(2, "0")}${this.A.toString(16).padStart(2, "0")}`;
    }
}

exports.RGBA = RGBA;
//# sourceMappingURL=rgba.class.js.map