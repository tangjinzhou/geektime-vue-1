<template>
  <div>
    <PersonalInfo
      v-model="phoneInfo"
      required
      :validate="validate"
      message="手机号为空或不合法"
      :zip-code.sync="zipCode"
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
  },
  methods: {
    validate(phone = "") {
      return phone && /^1[0-9]{10}$/.test(phone);
    }
  }
};
</script>
