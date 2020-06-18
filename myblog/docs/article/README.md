# 面试记录
## 雨花石一面
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