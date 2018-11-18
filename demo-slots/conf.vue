<template>
    <div class="conf">
        conf-page with multi items in conf-wrapper
        <conf-wrapper>
            <conf-items v-for="i in [1,2,3]" :key="i">{{i}}</conf-items>
        </conf-wrapper>
    </div>
</template>
<script>
import confWrapper from './conf-wrapper'
import confItems from './conf-items'

import itemAdd from './conf-items-addon'
import confFn from './conf-fn'

export default {
  name: 'conf',
  components: {
    confWrapper: confFn(confWrapper, itemAdd),
    confItems
  }
}
</script>
