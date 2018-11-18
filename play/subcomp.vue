<template>
    <tcomp>
        <div class="sub" @click.stop="debug('ded')" :title='what'>
            {{ console }}
            子组件内容：
            <slot>默认内容</slot>
            <button @click.stop="debug">debug {{msg}}</button>
        </div>
    </tcomp>
</template>
<script>
import tcomp from './tcomp'

export default {
  name: 'subcomp',
  components: {
    tcomp
  },
  props: {
    what: String
  },
  data() {
    return {
      msg: '---',
      console: ''
    }
  },
  methods: {
    debug(x) {
      console.info('xxx-')
      this.console = `debug ${x || this.what}`
      this.$emit('ko', 'ko from subComp', this.console)
    }
  }
}
</script>
