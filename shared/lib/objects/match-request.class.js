
// 导出 MatchRequest 类
class MatchRequest {
    // 构造函数，接收 haystack（搜索对象）、needle（搜索字符串）、confidence（置信度）、providerData（提供者数据）
    constructor(haystack, needle, confidence, providerData) {
        this.haystack = haystack;         // 初始化 haystack
        this.needle = needle;             // 初始化 needle
        this.confidence = confidence;     // 初始化 confidence
        this.providerData = providerData; // 初始化 providerData
    }
}

// 导出 MatchRequest 类
exports.MatchRequest = MatchRequest;
