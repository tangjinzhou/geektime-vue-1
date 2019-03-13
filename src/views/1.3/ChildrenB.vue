<template>
  <div class="border1">
    <h2>B 结点 {{ number }}</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    number: Number
  },
  mounted() {
    console.log(`B${this.number || ""} mounted`);
  },
  updated() {
    console.log(`B${this.number || ""} updated`);
  },
  destroyed() {
    console.log(`B${this.number || ""} destroyed`);
  }
};
</script>
