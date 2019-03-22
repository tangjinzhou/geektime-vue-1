<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="orderAsc = !orderAsc">移动</button>
    <div v-if="orderAsc">
      <ChildrenB />
      <ChildrenC> </ChildrenC>
      <ChildrenD />
    </div>
    <div v-else>
      <ChildrenC> </ChildrenC>
      <ChildrenD />
      <ChildrenB />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  data() {
    return {
      orderAsc: true
    };
  }
};
</script>
