<template>
  <div class="border1">
    <h2>D 结点</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("D mounted");
  },
  updated() {
    console.log("D updated");
  },
  destroyed() {
    console.log("D destroyed");
  }
};
</script>
