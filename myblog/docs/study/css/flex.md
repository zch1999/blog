# flex系列学习
2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。
## flex是什么
- flex
- flex
- flex

## flex面试点
>left:500px; right:400px
 当子盒子 left + right > flex盒子的宽度
 默认时子盒子都按比例缩放
 当flex-shrink为2：1时:<br/>
 缩放比例为 500*2：400 = 5:2 既自身值乘以比的比例

- 当子盒子有padding时
flex-shrink: left2 right1
标准盒模型中 content-box
  - 500+2*40 + 400+2*20 - 400 = 420
  left = 500 - 420 * 5/7
  right = 400 - 420 * 2/7

- box-sizeing: border-box, ie盒模型
  - 500+400-600=300
  - 超出部分 420 * 2 ：360 = 7：3
