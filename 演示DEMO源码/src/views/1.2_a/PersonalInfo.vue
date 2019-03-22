<template>
  <div>
    <select
      :value="phoneInfo.areaCode"
      placeholder="区号"
      @change="handleAreaCodeChange"
    >
      <option value="+86">+86</option>
      <option value="+60">+60</option>
    </select>
    <input
      :value="phoneInfo.phone"
      type="number"
      placeholder="手机号"
      @input="handlePhoneChange"
    />
    <input
      :value="zipCode"
      type="number"
      placeholder="邮编"
      @input="handleZipCodeChange"
    />
    <br />
    <span v-if="showMessage" style="color: red;">{{ message }}</span>
  </div>
</template>
<script>
export default {
  name: "PersonalInfo",
  model: {
    prop: "phoneInfo", // 默认 value
    event: "change" // 默认 input
  },
  props: {
    phoneInfo: Object,
    zipCode: String,
    required: Boolean,
    message: String,
    validate: Function
  },
  data() {
    return {
      showMessage: false
    };
  },
  watch: {
    "phoneInfo.phone": function(val) {
      this.handleValidate(val);
    }
  },
  methods: {
    handleAreaCodeChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        areaCode: e.target.value
      });
    },
    handlePhoneChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value
      });
    },
    handleZipCodeChange(e) {
      this.$emit("update:zipCode", e.target.value);
    },
    handleValidate(val) {
      const res = this.validate(val);
      this.showMessage = !res;
    }
  }
};
</script>
