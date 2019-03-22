<template>
  <div>
    <a-tabs>
      <a-tab-pane key="1" tab="习题1">
        <Proxy :info="info" @change="handleProxyChange" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="习题2">
        <Event :name="name" @change="handleEventChange" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="习题3">
        <h2>2.6 新语法</h2>
        <SlotDemo>
          <p>default slot</p>
          <template v-slot:title>
            <p>title slot1</p>
            <p>title slot2</p>
          </template>
          <template v-slot:title>
            <p>new title slot1</p>
            <p>new title slot2</p>
          </template>
          <template v-slot:item="props">
            <p>item slot-scope {{ props }}</p>
          </template>
          <template v-slot:item="props">
            <p>new item slot-scope {{ props }}</p>
          </template>
        </SlotDemo>
        <br />
        <h2>老语法</h2>
        <SlotDemo>
          <p>default slot</p>
          <p slot="title">title slot1</p>
          <p slot="title">new title slot2</p>
          <p slot="item" slot-scope="props">item slot-scope {{ props }}</p>
          <p slot="item" slot-scope="props">new item slot-scope {{ props }}</p>
        </SlotDemo>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Event from "./Event";
import Proxy from "./Proxy.vue";
import Slot from "./Slot";
export default {
  components: {
    Event,
    SlotDemo: Slot,
    Proxy
  },
  data: () => {
    return {
      name: "",
      type: "success",
      info: {}
    };
  },
  mounted() {
    window.info1 = this.info;
  },
  methods: {
    handleProxyChange(val) {
      window.isUpdatingChildComponent = true;
      this.info.name = val;
      this.info = { name: val };
    },
    handleEventChange(val, callback) {
      this.name = val;
      callback("hello");
      return "hello";
    }
  }
};
</script>
