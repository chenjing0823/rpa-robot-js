/**
 * 用于判断给定的查询是否为颜色查询
 * @param {Object} possibleQuery 可能的查询对象
 * @returns {boolean} 如果查询对象的 `type` 属性值为 "color" 且 `by` 对象中的 `color` 属性不为空，则返回 `true`，否则返回 `false`
 */
const isColorQuery = (possibleQuery) => {
    var _a;
    return (possibleQuery === null || possibleQuery === void 0? void 0 : possibleQuery.type) === "color" && ((_a = possibleQuery === null || possibleQuery === void 0? void 0 : possibleQuery.by) === null || _a === void 0? void 0 : _a.color)!= null;
};

exports.isColorQuery = isColorQuery;
/**
 * 用于判断给定的查询是否为行查询
 * @param {Object} possibleQuery 可能的查询对象
 * @returns {boolean} 如果查询类型为 "text" 且 "by" 对象中的 "line" 不为空，则返回 true，否则返回 false
 */
const isLineQuery = (possibleQuery) => {
    var _a;
    return (possibleQuery === null || possibleQuery === void 0? void 0 : possibleQuery.type) === "text" && ((_a = possibleQuery === null || possibleQuery === void 0? void 0 : possibleQuery.by) === null || _a === void 0? void 0 : _a.line)!= null;
};
exports.isLineQuery = isLineQuery;
/**
 * 用于判断给定的查询是否为文本类型的查询
 * @param {Object} possibleQuery 可能的查询对象
 * @returns {boolean} 如果查询对象的 `type` 属性值为 "text"，则返回 `true`，否则返回 `false`
 */
const isTextQuery = (possibleQuery) => {
    return (possibleQuery === null || possibleQuery === void 0? void 0 : possibleQuery.type) === "text";
};

exports.isTextQuery = isTextQuery;