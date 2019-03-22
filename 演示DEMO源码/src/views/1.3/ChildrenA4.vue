<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="init = !init">更新删除新建</button>
    <div v-if="init">
      <ChildrenB :number="1" />
      <ChildrenB :number="2">
        <ChildrenE />
        <ChildrenF />
      </ChildrenB>
      <ChildrenB :number="3" />
    </div>
    <div v-else>
      <ChildrenB :number="2">
        <ChildrenE />
        <ChildrenF />
      </ChildrenB>
      <ChildrenB :number="1" />
      <ChildrenB :number="3" />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  components: {
    ChildrenB,
    ChildrenE,
    ChildrenF
  },
  data() {
    return {
      init: true
    };
  }
};
</script>
