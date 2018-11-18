<template>
    <div class="item">
        <pre>原来的item项</pre>
        <slot></slot>
    </div>
</template>
<style>
.item {
  border: thin solid yellowgreen;
  border-radius: 5px;
  display: flex;
  margin: 1em;
}
</style>
