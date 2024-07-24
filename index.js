
const {
    mouse,
    straightTo,
    Point,
    up,
    down,
    right,
    left,
    pixelWithColor,
    RGBA,
    screen,
    sleep,
    clipboard,
    keyboard,
    Key
} = require('./rpa-robot-js')
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
// test1()

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
// test2()
async function test3() {
    const getContent = await clipboard.getContent()
    console.log('读取剪贴板内容：', getContent)
    await clipboard.setContent('将这段信息存到剪贴板')
    
    const getContent2 = await clipboard.getContent()
    console.log('读取剪贴板--代码写入內容：', getContent2)


    // getContent
}
// test3()
async function test4() {
    setTimeout(async () => {
        await keyboard.pressKey(Key.A)
        await keyboard.releaseKey(Key.A)
        
        await keyboard.type('HELLO WORLD')

        await keyboard.pressKey(Key.LeftControl, Key.V)
        await keyboard.releaseKey(Key.LeftControl, Key.V)
    }, 3000)

}
test4()