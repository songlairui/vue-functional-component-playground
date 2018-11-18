<template>
    <div class="add-common-part">
        <div class="right">
            after：
            <fn-comp v-for="i in [1,2,3]" :key='i'>{{i}}</fn-comp>
        </div>
        <div class="left">
            ori：
            <item v-for="i in [1,2,3]" :key='i'>{{i}}</item>
        </div>
        <div class="right">
            after：
            <fn-comp v-for="i in [1,2,3]" :key='i'>{{i}}</fn-comp>
        </div>
    </div>
</template>
<script>
import item from './item'
import fnComp from './fn-comp'

export default {
  name: 'add-common-part',
  components: {
    item,
    fnComp
  }
}
</script>
<style>
.add-common-part {
  display: flex;
}
.left,
.right {
  flex: 1;
  border: thin solid grey;
  margin: 2em;
}
</style>


