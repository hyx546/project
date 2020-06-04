# useState
  - 是react自带的一个hook函数，它的作用就是用来声明状态变量。
  - useState是可以多次调用的
    - useState接受的初始值没有规定一定要是string/number/boolean这种简单数据类型
    它完全可以接受对象或者数组作为参数。

# 注意
  - this.setState做的是合并状态后返回一个新状态
  - useState是直接替换老状态后返回新状态

  - react是根据useState出现的顺序来定的，所以react规定我们必须把hooks写在函数的最外层，不能写在if else等条件语句当中，来确保hooks的执行顺序一致

# useEffect

  - 写有状态组件，通常会产生很多的副作用，比如发起ajax请求，手动修改dom等等。我们都把这些有副作用的函数写在生命周期函数钩子里。比如componentDidMount，componentDidUpdate和componentWillUnmount
  - useEffect就相当于与这些生命周期函数钩子的集合体。以一抵三

# useEffect的注意
  1. react首次渲染和之后的每次渲染都会调用一遍传给useEffect的函数，之前我们要用两个生命周期函数来分别表示首次渲染(componentDidMount)，和之后的更新导致的重新渲染(componentDidUpdate)
  2. useEffect中定义的副作用函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的，而之前的生命周期函数是同步执行的。但特殊情况不适用，比如我们有时候需要先根据DOM计算出某个元素的尺寸再重新渲染，这时候重新渲染就是同步发生的。

# useEffect 清楚
  - 让传给useEffect的副作用函数返回一个新的函数即可。
  - 这个新的函数将会在组件下一次重新渲染之后执行。