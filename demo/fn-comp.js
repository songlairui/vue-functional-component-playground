import item from './item'
import itemAdded from './item-added'

export default {
  functional: true,
  name: 'fn-comp',
  render(h, context) {
    console.info('execute render', item)
    const old = item.render
    let newRender
    if (old.ori) {
      newRender = old
    } else {
      newRender = function() {
        console.info('execute newRender')
        // x === h
        const staticTree = old.call(this, h)
        console.error('render fn', this, staticTree)
        const children = staticTree.children ? [...staticTree.children] : []
        children.splice(0, 0, h(itemAdded, {}, []))
        staticTree.children = children
        console.warn('return vNode', staticTree)
        return staticTree
      }
      newRender.ori = old
    }
    const cloneItem = { ...item, render: newRender }
    const oriVNode = h(cloneItem, context.data, context.children)

    console.info('cloneItem render', oriVNode, cloneItem)

    return oriVNode
  }
}
