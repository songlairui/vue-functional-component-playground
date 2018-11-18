const gen = (comp, addon) => ({
  functional: true,
  name: 'conf-fn',
  render(h, context) {
    const children = context.children ? [...context.children] : []
    children.unshift(h(addon, context.data))
    const result = h(comp, context.data, children)
    return result
  }
})

export default gen
