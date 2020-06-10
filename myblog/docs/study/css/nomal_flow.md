# 正常流中的块和内联布局

>CSS 2.1规范定义了常规流（Normal Flow），并规定一个格式化上下文（formatting context）是由常规流中的盒子构成的。盒子可以是块级盒子也可以是内联盒子，但不能同时是块级和内联盒子。块级盒子构成块级格式化上下文（block formatting context），内联盒子构成内联格式化上下文（inline formatting context）。

## 块布局
在块格式上下文中，从包含块的顶部开始，一个接一个地垂直排列框。两个同级框之间的垂直距离由“Margin”属性确定。块格式上下文中相邻块级框之间的垂直边距折叠。
根据书写模式的不同，排列也不同：
1. 水平书写模式
![avatar](./block1.png)
2. 垂直书写模式
![avatar](./block2.png)

