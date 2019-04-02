<template>
  <div>
    <span>count: {{ count }}</span>
    <button @click="handleClick">count++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.count++;
      this.$emit("change", this.count);
    }
  }
};
</script>

<style></style>
