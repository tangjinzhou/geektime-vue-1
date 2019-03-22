<template>
  <div class="border">
    <Children v-for="key in list" :key="key">
      <button @click="() => handleDelete(key)">删除</button>
    </Children>
    <button @click="handleAdd">添加</button>
  </div>
</template>
<script>
import Children from "./Children";
let key = 1;
export default {
  components: {
    Children
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    handleAdd() {
      this.list.push(key++);
    },
    handleDelete(key) {
      const index = this.list.findIndex(k => k === key);
      this.list.splice(index, 1);
    }
  }
};
</script>
