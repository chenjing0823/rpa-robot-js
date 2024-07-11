// 常量：每秒的纳秒数
const nanoSecondsPerSecond = 1000000000;

// 计算每步的持续时间
function calculateStepDuration(speedInPixelsPerSecond) {
    return (1 / speedInPixelsPerSecond) * nanoSecondsPerSecond;
}
exports.calculateStepDuration = calculateStepDuration;

// 计算移动的时间步数
function calculateMovementTimesteps(amountOfSteps, speedInPixelsPerSecond, easingFunction = linear) {
    const isEasingFunction = typeof easingFunction === "function";

    return Array(amountOfSteps)
        .fill(speedInPixelsPerSecond)
        .map((speed, idx) => {
            let speedInPixels = speed;
            if (isEasingFunction) {
                speedInPixels += easingFunction(idx / amountOfSteps) * speedInPixels;
            }
            const stepDuration = calculateStepDuration(speedInPixels);
            return isFinite(stepDuration) && stepDuration > 0 ? stepDuration : 0;
        });
}
exports.calculateMovementTimesteps = calculateMovementTimesteps;

// 线性缓动函数
function linear(_) {
    return 0;
}
exports.linear = linear;
