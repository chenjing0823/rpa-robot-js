## RPA 
可控制鼠标移动

## 使用1 鼠标移动
```
const { mouse, straightTo, Point, up, down, right, left } = require('./rpa-robot-js/index')
async function test1() {
    mouse.config.mouseSpeed = 2000 // 鼠标移动速度
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

test1()
```

## 使用2 移动到指定颜色区域
```
const { pixelWithColor, RGBA, screen, sleep } = require('./rpa-robot-js/index')
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
test2()
```