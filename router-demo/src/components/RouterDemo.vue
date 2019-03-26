<template>
  <div>
    <router-link to="/foo">Go to Foo</router-link>
    <br/>
    <router-link to="/user/12">Go to /user/12</router-link>
    <br/>
    <router-link to="/user/12/profile">Go to /user/12/profile</router-link>
    <br/>
    <router-link to="/other">Go to 404</router-link>
    <br/>
    <router-link to="/a">Go to a 重定向到 bar</router-link>
    <br/>
    <a href="#/foo">Go to Foo</a>
    <br/>
    <button @click="$router.push('foo')">Go to Foo</button>
    <p>id: {{id}}</p>
    <p>{{routerInfo}}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route
      return {
        fullPath, path, name, params, query, meta
      }
    }
  }
}
</script>

