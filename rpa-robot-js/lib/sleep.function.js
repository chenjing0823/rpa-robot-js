
// 异步函数：等待指定的毫秒数
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;

// 异步函数：忙等待指定的纳秒数
async function busyWaitForNanoSeconds(duration) {
    return new Promise((resolve) => {
        const start = process.hrtime.bigint();
        let isWaiting = true;
        while (isWaiting) {
            if (process.hrtime.bigint() - start > duration) {
                isWaiting = false;
            }
        }
        resolve();
    });
}
exports.busyWaitForNanoSeconds = busyWaitForNanoSeconds;
