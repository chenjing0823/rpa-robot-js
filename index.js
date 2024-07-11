
const { mouse, straightTo, Point, up, down, right, left } = require('./rpa-robot-js/index')
async function test() {
    mouse.config.mouseSpeed = 2000
    await mouse.move(straightTo(new Point(100, 100)))
    mouse.config.mouseSpeed = 1000
    await mouse.move(down(800))
    mouse.config.mouseSpeed = 3000
    await mouse.move(right(800))
    mouse.config.mouseSpeed = 4000
    await mouse.move(up(800))
    mouse.config.mouseSpeed = 1000
    await mouse.move(left(800))

}
test()