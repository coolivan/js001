# JS一期二阶段第三次测试Event

1.不是事件代理优点的是 （ ） 

```
A.可以为将来元素绑定事件 
B.减少事件注册 
C.减少内存消耗 
D.不用查找元素 
答案：D
```

2.onclick事件绑定的说明正确的是 （ ） 

```
A.可以多次绑定 
B.事件函数中有一个参数，是事件对象 
C.只能绑定在document上 
D.这是一个鼠标连点两次时触发的事件 
答案：B
```

3.addEventListner方法说明正确的是 （ ） 

```
A.添加事件的一种方式 
B.不能用在捕获节点绑定事件 
C.绑定同一个处理函数会被覆盖 
D.不能解除绑定 
答案：A，C
```

4.事件流的执行顺序 （ ） 

```
A.捕获，目标，冒泡 
B.目标，捕获，冒泡 
C.冒泡，目标，捕获 
D.捕获，冒泡，目标 
答案：A
```

5.目标元素指的是什么？ （ ） 

```
A.绑定了事件的元素的子元素 
B.绑定事件的元素的父元素 
C.触发事件流的元素 
D.绑定了事件的元素 
答案：C
```

6.下面有关javascript常见事件的触发情况，描述错误的是？

```
A. onmousedown：某个鼠标按键被按下
B. onselectstart：选中内容触发
C. onblur：元素获得焦点
D. onchange：用户改变域的内容

正确答案：C
```

7.下列关于事件绑定说法错误的是

```
A. addEventListener是标准浏览器下所支持的事件绑定方法
B. addEventListener 的 passive设置为true 才可以阻止默认事件
C. 事件绑定函数内的this指向是window
D. addEventListener必须要传递2个参数，分别是事件节点和绑定函数

答案：B,C,D
```

8.下列事件哪个不需要由鼠标触发的事件

    ```
   A.click
   B.contextmenu
   C.mouseout
   D.keydown
   
   答案：B,D
   ```

9.禁止事件冒泡方式正确的是： （ ） 

  ```
   A.event.preventDefault() 
   B.event.stopPropagation() 
   C.event.cancelBubble() 
   D.return false 
   答案：B
   ```

10.捕获阶段添加事件的方式是 （ ） 

```
A.addEventListner(type,fn,true) 
B.addEventListner(type,fn,false) 
C.onclick = function(event,true){} 
D.onclick = function(event,false){} 
答案：A
```

