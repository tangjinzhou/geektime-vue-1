<template>
  <div class="border2">
    <h3>F 结点</h3>
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    console.log("F mounted");
  },
  updated() {
    console.log("F updated");
  },
  destroyed() {
    console.log("F destroyed");
  }
};
</script>
