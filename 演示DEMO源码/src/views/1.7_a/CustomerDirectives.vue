<template>
  <div>
    <button @click="show = !show">
      销毁
    </button>
    <button @click="number++">
      按钮+1
    </button>
    <Clock v-if="show" v-append-text="`hello ${number}`" :number="number" />
  </div>
</template>
<script>
import Clock from "./Clock";
export default {
  components: {
    Clock
  },
  directives: {
    appendText: {
      bind() {
        console.log("bind");
      },
      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        console.log("inserted");
      },
      update() {
        console.log("update");
      },
      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        console.log("componentUpdated", el);
      },
      unbind() {
        console.log("unbind");
      }
    }
  },
  data() {
    return {
      number: 1,
      show: true
    };
  }
};
</script>
