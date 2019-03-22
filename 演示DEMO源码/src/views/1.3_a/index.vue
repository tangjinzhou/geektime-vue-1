<template>
  <div>
    <a-tabs>
      <a-tab-pane key="ChildrenA1" tab="index Key">
        <ChildrenA1 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA2" tab="静态 Key">
        <ChildrenA2 />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import ChildrenA1 from "./ChildrenA1";
import ChildrenA2 from "./ChildrenA2";
export default {
  components: {
    ChildrenA1,
    ChildrenA2
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
