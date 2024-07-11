
const process = require("process");
const shared = require('../../shared')
const screen_helpers_function = require("./screen-helpers.function.js");

class ScreenClass {

    constructor(providerRegistry, findHooks = new Map()) {
        this.providerRegistry = providerRegistry;
        this.findHooks = findHooks;
        this.config = {
            confidence: 0.99,
            autoHighlight: false,
            highlightDurationMs: 500,
            highlightOpacity: 0.25,
            resourceDirectory: process.cwd()
        }
    }
    width() {
        return this.providerRegistry.getScreen().screenWidth();
    }
    height() {
        return this.providerRegistry.getScreen().screenHeight();
    }
    async findAll(searchInput, params) {
        const needle = await searchInput;
        try {
            if (screen_helpers_function.isPointResultFindInput(needle)) {
                const { screenSize, searchRegion, screenImage } = await this.getFindParameters(params);
                const matchRequest = screen_helpers_function.createMatchRequest(this.providerRegistry, needle, searchRegion, 0, screenImage, params);
                const matchResults = await screen_helpers_function.getMatchResults(this.providerRegistry, matchRequest);

                return matchResults.map((matchResult) => {
                    const resultPoint = new shared.Point(searchRegion.left + matchResult.location.x, searchRegion.top + matchResult.location.y);
                    return resultPoint;
                });
            }
        } catch (error) {
            console.log(error)
        }
        // const { screenSize, searchRegion, screenImage } = await this.getFindParameters(params);

    }
    async getFindParameters(params) {
        // 获取 params 对象中的 confidence 属性，如果不存在则为 undefined
        const minMatch = params?.confidence;
        // 获取屏幕尺寸，使用 providerRegistry 获取屏幕信息并调用 screenSize 方法
        const screenSize = await this.providerRegistry.getScreen().screenSize();
        // 获取搜索区域，首先异步获取 params 对象中的 searchRegion 属性，如果不存在则使用 screenSize
        const searchRegion = (await params?.searchRegion) ?? screenSize;
        // 获取屏幕图像，使用 providerRegistry 获取屏幕信息并调用 grabScreenRegion 方法
        const screenImage = await this.providerRegistry.getScreen().grabScreenRegion(searchRegion);
        // 构建 findParameters 对象，包含 minMatch、screenSize、searchRegion 和 screenImage
        const findParameters = {
            minMatch,
            screenSize,
            searchRegion,
            screenImage
        };
        // 记录调试信息，使用 providerRegistry 获取日志提供者并调用 debug 方法
        // this.providerRegistry.getLogProvider().debug(`Running on-screen search with parameters`, {
        //     minMatch,
        //     screenSize,
        //     searchRegion
        // });
    
        // 返回 findParameters 对象作为异步操作的结果
        return findParameters;
    }
    
}

exports.ScreenClass = ScreenClass