import oriComp from './subcomp'

export default {
  functional: true,
  name: 'fn-comp',
  render(h, context) {
    const subComp = oriComp
    // { ...oriComp, name: 'ff', __file: 'ff.vue' }
    const old = subComp.render
    let newRender
    if (old.ori) {
      newRender = old
    } else {
      newRender = function() {
        const staticTree = old.call(this, h)
        console.error('render fn', this, staticTree)
        const children = staticTree.children ? [...staticTree.children] : []
        children.splice(1, 0, h('div', {}, ['---common-desc---']))
        const replacedVNode = h('pre', { ...staticTree.data }, children)
        replacedVNode.context = Object.assign(
          {},
          staticTree.context,
          replacedVNode.context
        )
        return staticTree
      }

      newRender.ori = old
    }
    subComp.render = newRender
    console.warn(context, subComp, subComp.render)
    console.info('next to be h-----', subComp)
    const r = h(subComp, context.data, context.children)
    console.info('nexted', r)
    return r
  }
}
