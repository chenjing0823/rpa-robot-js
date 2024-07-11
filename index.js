
const { mouse, straightTo, Point, up, down, right, left, pixelWithColor, RGBA, screen, sleep } = require('./rpa-robot-js/index')
async function test1() {
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

async function test2() {
    const arr = await screen.findAll(pixelWithColor(new RGBA(240, 74, 62, 255)))
    console.log('chenjing', arr)
    for (const item of arr) {
        await mouse.move(straightTo(item))
        await sleep(50)
    }
    const width = await screen.width()
    const height = await screen.height()
    console.log(width, height)
}
// test1()
test2()