<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="init = !init">更新新建(无key)</button>
    <div v-if="init">
      <ChildrenB :number="1" />
      <ChildrenB :number="2" />
      <ChildrenB :number="3" />
    </div>
    <div v-else>
      <ChildrenB :number="1" />
      <ChildrenB :number="4" />
      <ChildrenB :number="2" />
      <ChildrenB :number="3" />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";

export default {
  components: {
    ChildrenB
  },
  data() {
    return {
      init: true
    };
  }
};
</script>
