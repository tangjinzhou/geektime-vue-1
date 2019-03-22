<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="init = !init">删除CEF，新建GEF</button>
    <div v-if="init">
      <ChildrenB />
      <ChildrenC>
        <ChildrenE />
        <ChildrenF />
      </ChildrenC>
      <ChildrenD />
    </div>
    <div v-else>
      <ChildrenB />
      <ChildrenG>
        <ChildrenE />
        <ChildrenF />
      </ChildrenG>
      <ChildrenD />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
import ChildrenG from "./ChildrenG";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD,
    ChildrenE,
    ChildrenF,
    ChildrenG
  },
  data() {
    return {
      init: true
    };
  }
};
</script>
