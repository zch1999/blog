# 面试记录
## 雨花石一面凉
1. var let const
  let，const产生块级作用域，不能重复声明,不会绑定全局对象，var会绑定全局对象，var会变量提升，let,const变量提升后会处于一个暂时性死区，
2. 深浅拷贝
  浅拷贝如果拷贝的是基本数据类型就直接拷贝值，如果拷贝的是对象，是拷贝一个指向对象堆内存的地址指针。也就是说它们引用的还是同一个对象，浅拷贝例如
    - Object.assign()
    - Array.slice(),Array.concat()
    - 
    ```js
      function shallClone(target) {
        if(typeof(target) == 'object' && target !== null) {//拷贝的对象为引用类型
          let targetClone = Array.isArray(target) ? [] : {}
          for(let prop in target) {
            if(target.hasOwnProperty(prop)) { //是否是target的属性
              targetClone[prop] = target[prop]
            }
          }
        } else {
          return target
        }
      }
    ```
  深拷贝，简单来说就是拷贝一个一样的全新的对象，它和被拷贝对象没有关联

3. 谈谈promise，promise的优缺点
4. jsonp的原理及缺点
5. 一道算法题
6. vue和react在技术层面上你更喜欢哪个？(个人认为可以转化为挑一个框架，说说区别和优势)

## 纷享销客一二面凉
- 一
1. 内联标签和块标签分别有那些
  内联标签： a b span img strong input button label select textarea
  块标签：p div ul li h1~6
2. 说说em，rem, px
- px是虚拟长度单位，Windows系统默认是96dpi，Apple系统默认是72dpi。
- em是相对单位，通常1em = 16px，声明Font-size=62.5%，这就使em值变为16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。
- rem也是相对长度单位， 它是相对于html根元素的大小来的
3. nextTick
4. 事件委托
- 二
1. 项目做了那些性能优化？(例如京东618界面如何优化)
  - 减少http请求
    1. js/css打包
    2. 图标使用iconfont
    3. 使用base64格式的图片
  - 减少静态资源的体积
    1. 静态资源的压缩
    2. 服务端开启gzip压缩，如果部署express作服务器的话，使用中间件compression即可开启gzip压缩
    3. 使用缓存，express.static()
2. 遇到了什么安全性问题？
3. express的缓存了解吗
express.static
4. promise解决异步的原理async的了解
5. 排序算法，复杂度怎么分析
快排平均时间复杂度O(nlogn),空间复杂度O(logn)
6. xss攻击怎么造成的，csof

7. http1.0 1.1 2.0了解吗
8. 深拷贝怎么解决循环引用的问题
  - 用个map记录一下，因为map的key允许为对象
9. osi七层模型
  - 应用层
  - 表示层
  - 会话层 DNS
  - 传输层 tcp/udp
  - 网络层 ip
  - 数据链路层
  - 物理层 
TCP/IP四层
  - 应用层
  - 传输层
  - 网络层
  - 网络接口层
五层模型
  - 应用层
  - 传输层 tcp/udp
  - 网络层 ip
  - 数据链路层
  - 物理层 
6. 伪类和伪元素
  - 伪类是DOM元素的一种特殊状态，例如:hover,
  :disabled 选择禁用的表单元素
  :checked 选择被选中的表单元素
  :nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n
  :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数
  - 伪元素，
  ::after 已选中元素的最后一个子元素
  ::before 已选中元素的第一个子元素
  ::first-letter 选中某个款级元素的第一行的第一个字母
  ::first-line 匹配某个块级元素的第一行

7. 为什么会有微任务
页面任务活起来，主要是一个消息队列，所有的任务都会进入消息队列，