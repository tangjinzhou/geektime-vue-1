<template>
  <div>
    {{ fullName }}

    <div>firstName: <input v-model="firstName" /></div>
    <div>lastName: <input v-model="lastName" /></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar"
    };
  },
  watch: {
    firstName: function(val) {
      clearTimeout(this.firstTimeout);
      this.firstTimeout = setTimeout(() => {
        this.fullName = val + " " + this.lastName;
      }, 500);
    },
    lastName: function(val) {
      clearTimeout(this.lastTimeout);
      this.lastTimeout = setTimeout(() => {
        this.fullName = this.firstName + " " + val;
      }, 500);
    }
  }
};
</script>
