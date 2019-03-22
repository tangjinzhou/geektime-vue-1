<template>
  <div>
    <PersonalInfo v-model="phoneInfo" :zip-code.sync="zipCode" />

    <PersonalInfo
      :phone-info="phoneInfo"
      :zip-code="zipCode"
      @change="val => (phoneInfo = val)"
      @update:zipCode="val => (zipCode = val)"
    />

    phoneInfo： {{ phoneInfo }}
    <br />
    zipCode： {{ zipCode }}
  </div>
</template>
<script>
import PersonalInfo from "./PersonalInfo";
export default {
  components: {
    PersonalInfo
  },
  data() {
    return {
      phoneInfo: {
        areaCode: "+86",
        phone: ""
      },
      zipCode: ""
    };
  }
};
</script>
