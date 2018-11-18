<template>
    <div class="play">
        <div><h1>hello - fn</h1></div>
        <fncomp><h1>hello - div</h1></fncomp>
        <subcomp what="waht deos the fox say"><h1>hello - sub</h1></subcomp>
        <fncomp what="waht deos the fox say" @ko="debug" :ref='el' class='wa' :class='aaad'>
            <h1>hello - fn - sub</h1>
        </fncomp>
        <div class="debugg"> <pre>
            {{msg}}</pre>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import fncomp from './fn'
import subcomp from './subcomp'

export default {
  name: 'play',
  data() {
    return {
      el: 'dsa',
      msg: '',
      aaad: ['asd', 'dds', undefined]
    }
  },
  components: {
    subcomp,
    fncomp
  },
  methods: {
    debug(...x) {
      this.msg = JSON.stringify(x, null, 1)
    }
  }
}
</script>
