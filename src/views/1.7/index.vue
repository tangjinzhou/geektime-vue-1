<template>
  <a-tabs>
    <a-tab-pane key="Directives" tab="内置指令">
      <Directives />
    </a-tab-pane>
    <a-tab-pane key="CustomerDirectives" tab="自定义指令">
      <CustomerDirectives />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import Directives from "./Directives";
import CustomerDirectives from "./CustomerDirectives";
export default {
  components: {
    Directives,
    CustomerDirectives
  }
};
</script>
