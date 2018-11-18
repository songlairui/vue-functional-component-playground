# vue 函数式组件

> 我遇到一个场景
```vue
<component :is="free ? 'draggable' : 'div'"
    :attrs="'attrvalue'">
  {{ #... }}
</component>
```
需要切换一个组件，但组件和div接受的参数式不一样的。

> 想要做分层，听到了函数式组件这个名字

期望： `fnComp(<slot>) => <draggable> or <div>`

> 我实验完了，想了一个很糟糕的草稿例子

- 注册组件`Vue.component、 components:{} ` 跟普通组件一样
- 使用 context.data 传递所有的 data、props、on 等示例内容

> 感受

函数式组件式最终要使用的组件，
所以在代码中，要使用此组件换成最终使用的组件。如果增加拓展性，那么在中间添加分层？

## yarn demo

执行 `yarn demo` 得到公共注入示例，因为 staticVNodeTree 并不是复制的component，在原有的component渲染之后，hack操作就不生效了
// 又一个hack方式，让原本的component永远不渲染