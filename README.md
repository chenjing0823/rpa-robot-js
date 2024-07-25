## RPA 
目前仅限windows平台使用

## 安装
```
npm install rpa-robot-js
```

## demo1 鼠标移动
```
const { mouse, straightTo, Point, up, down, right, left } = require('rpa-robot-js')
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

## demo2 移动到指定颜色区域
```
const { pixelWithColor, RGBA, screen, sleep } = require('rpa-robot-js')
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

## demo3 读取/写入 剪贴板
```
const { clipboard } = require('rpa-robot-js')
async function test3() {
    const getContent = await clipboard.getContent()
    console.log('读取剪贴板内容：', getContent)
    await clipboard.setContent('将这段信息存到剪贴板')
    
    const getContent2 = await clipboard.getContent()
    console.log('读取剪贴板--代码写入內容：', getContent2)
}
test3()
```
## demo4 键盘输入
```
const { keyboard, Key } = require('rpa-robot-js')
async function test4() {
    await keyboard.pressKey(Key.A)
    await keyboard.releaseKey(Key.A)
    
    await keyboard.type('HELLO WORLD')

    await keyboard.pressKey(Key.LeftControl, Key.V)
    await keyboard.releaseKey(Key.LeftControl, Key.V)
}
test4()
```