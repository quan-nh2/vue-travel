<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="$route.path" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
