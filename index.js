const libnut = require('bindings')('libnut');
const speed = 30
function calculateIncrementalStep(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function compute(from, to) {
    const result = [];
    let deltaX = to.x - from.x;
    let deltaY = to.y - from.y;
    const absoluteDeltaX = Math.abs(deltaX);
    const absoluteDeltaY = Math.abs(deltaY);
    const incrementX = calculateIncrementalStep(deltaX);
    const incrementY = calculateIncrementalStep(deltaY);
    if (deltaX < 0) {
        deltaX = -deltaX;
    }
    if (deltaY < 0) {
        deltaY = -deltaY;
    }
    let fastStepInX, fastStepInY, slowStepInX, slowStepInY, slowDelta, fastDelta;
    if (absoluteDeltaX > absoluteDeltaY) {
        fastStepInX = incrementX;
        fastStepInY = 0;
        slowStepInX = incrementX;
        slowStepInY = incrementY;
        slowDelta = absoluteDeltaY;
        fastDelta = absoluteDeltaX;
    }
    else {
        fastStepInX = 0;
        fastStepInY = incrementY;
        slowStepInX = incrementX;
        slowStepInY = incrementY;
        slowDelta = absoluteDeltaX;
        fastDelta = absoluteDeltaY;
    }
    let error = fastDelta / 2;
    for (let idx = 0, x = from.x, y = from.y; idx < fastDelta; ++idx) {
        result.push({ x, y});
        error -= slowDelta;
        if (error < 0) {
            error += fastDelta;
            x += slowStepInX;
            y += slowStepInY;
        }
        else {
            x += fastStepInX;
            y += fastStepInY;
        }
    }
    result.push(to);
    return result;
}
const currentPosition = libnut.getMousePos();
console.log(currentPosition)
const targetPosition = { x: 100, y: 100 };
const path = compute(currentPosition, targetPosition);
console.log(path);
for (let idx = 0; idx < path.length; idx += speed) {
    const node = path[idx];
    libnut.moveMouse(node.x, node.y);
}
libnut.moveMouse(targetPosition.x, targetPosition.y);
// libnut.moveMouse(120,120)
