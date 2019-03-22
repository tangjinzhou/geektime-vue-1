<template>
  <div>
    <a-tabs>
      <a-tab-pane key="1" tab="章节1">
        <First />
      </a-tab-pane>
      <a-tab-pane key="2" tab="章节2">
        <Second />
      </a-tab-pane>
      <a-tab-pane key="3" tab="章节3">
        <Third />
      </a-tab-pane>
      <a-tab-pane key="6" tab="章节6">
        <Sixth />
      </a-tab-pane>
      <a-tab-pane key="7" tab="章节7">
        <Seventh />
      </a-tab-pane>
      <a-tab-pane key="10" tab="章节10">
        <Tenth />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import First from "../1.1_a";
import Second from "../1.2_a";
import Third from "../1.3_a";
import Sixth from "../1.6_a";
import Seventh from "../1.7_a";
import Tenth from "../1.10_a";

export default {
  components: {
    First,
    Second,
    Third,
    Sixth,
    Seventh,
    Tenth
  }
};
</script>
