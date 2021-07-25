<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/brazil">About</router-link>
    <router-link to="/panama">About</router-link>
    <router-link to="/hawaii">About</router-link>
    <router-link to="/jamaica">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
