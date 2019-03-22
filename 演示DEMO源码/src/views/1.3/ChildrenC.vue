<template>
  <div class="border1">
    <h2>C 结点</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("C mounted");
  },
  updated() {
    console.log("C updated");
  },
  destroyed() {
    console.log("C destroyed");
  }
};
</script>
