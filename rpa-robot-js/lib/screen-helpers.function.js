
const shared = require("../../shared");
function isPointResultFindInput(input) {
    return shared.isColorQuery(input);
}
exports.isPointResultFindInput = isPointResultFindInput;
function isImageMatchRequest(matchRequest) {
    return shared.isImage(matchRequest.needle);
}
exports.isImageMatchRequest = isImageMatchRequest;
function isTextMatchRequest(matchRequest) {
    return shared.isTextQuery(matchRequest.needle);
}
exports.isTextMatchRequest = isTextMatchRequest;
function isColorMatchRequest(matchRequest) {
    return shared.isColorQuery(matchRequest.needle);
}
exports.isColorMatchRequest = isColorMatchRequest;
function createMatchRequest(providerRegistry, needle, searchRegion, minMatch, screenImage, params) {
    let logMessage = '';
    let matchRequest;

    if (shared.isImage(needle)) {
        // logMessage = `Searching for image ${needle.id} in region ${searchRegion.toString()}.${minMatch != null ? ` Required confidence: ${minMatch}` : ""}`;
    } else if (shared.isTextQuery(needle)) {
        // logMessage = `Searching for ${shared.isLineQuery(needle) ? "line" : "word"} ${shared.isLineQuery(needle) ? needle.by.line : needle.by.word} in region ${searchRegion.toString()}.${minMatch != null ? ` Required confidence: ${minMatch}` : ""}`;
    } else if (shared.isColorQuery(needle)) {
        // const color = needle.by.color;
        // logMessage = `Searching for color RGBA(${color.R},${color.G},${color.B},${color.A}) in region ${searchRegion.toString()}.`;
        minMatch = 1; // Default confidence for color queries
    } else {
        throw new Error(`Unknown input type: ${JSON.stringify(needle)}`);
    }
    matchRequest = new shared.MatchRequest(screenImage, needle, minMatch, params?.providerData);
    
    return matchRequest;
}

exports.createMatchRequest = createMatchRequest;

async function getMatchResults(providerRegistry, matchRequest) {
    if (isImageMatchRequest(matchRequest)) {
        return providerRegistry.getImageFinder().findMatches(matchRequest);
    }
    else if (isTextMatchRequest(matchRequest)) {
        return providerRegistry.getTextFinder().findMatches(matchRequest);
    }
    else if (isColorMatchRequest(matchRequest)) {
        return providerRegistry.getColorFinder().findMatches(matchRequest);
    }
    throw new Error(`Unknown match request type: ${JSON.stringify(matchRequest.needle)}`);
}
exports.getMatchResults = getMatchResults;