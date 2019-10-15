# 事件详解（三）

## 测试题答疑

## 上节课重点知识回顾
- 默认行为 和 阻止默认行为
- e.preventDefault()、return false
- addEventListener 的 options
    - capture 是否捕获
    - once 是否只执行一次
    - passive 是否禁止阻止默认事件
- 获取鼠标位置
    - e.clientX/e.clientY、e.pageX/e.pageY
- 拖拽回顾
## 课程目标
- 自定义滚动条实现原理
- 滚轮事件是怎么回事
- 完整版自定义滚动条
- 键盘事件探秘
- 碰撞检测实现
## 正课内容
- 拖拽 BUG 修复 
- 自定义滚动条实现
    - 滚动比例换算
- 滚轮事件
    - mousewheel 和 DOMMouseScroll 事件
    - e.wheelDelta 和 e.detail 滚轮方向
    - 滚轮处理兼容
- 自定义滚动条添加滚轮处理   
- 键盘事件
    - keydown、keyup
    - event.keyCode
    - event.ctrlKey、event.altKey、event.shiftKey
    - event.button
    - 组合键
- 案例：组合件提交
## 扩展
- 碰撞检测

## 总结

## 今天练习
- 自定义滚动条
- 键盘操作图片切换(下周二交，超过50份，后期奉送一个 better-scroll 的原理分析小课)

## 下节课预告
- 碰撞检测
- 框选实现
- 常用事件汇总
- 表单常用事件
扩展：自定义事件