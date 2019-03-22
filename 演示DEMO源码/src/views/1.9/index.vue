<template>
  <div>
    <ChildrenA />
  </div>
</template>
<script>
import ChildrenA from "./ChildrenA";
export default {
  components: {
    ChildrenA
  }
};
</script>
<style>
.border,
.border1,
.border2 {
  border: 1px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  border-color: #ccc;
}
.border2 {
  border-color: #eee;
}
</style>
