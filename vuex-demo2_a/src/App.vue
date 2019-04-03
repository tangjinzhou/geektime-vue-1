<template>
  <div id="app">
    {{count}}
    {{$store.getters.doubleCount}}
    <button @click="$store.commit('increment')">count++</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
