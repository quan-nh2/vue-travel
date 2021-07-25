<template>
  <nav id="nav">
    <p class="logo">Vue Travel</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home</router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.id"
        class="links"
      >
        <router-link
          :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '../store/index.js';

export default {
  name: 'TheNavigation',
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations,
    };
  },
};
</script>

<style lang="scss" scoped>
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .nav-links {
    display: flex;
  }

  .links {
    padding-right: 20px;
    list-style: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .logo {
    font-size: 30px;
    font-weight: bold;
    color: green;
    text-align: left;
    margin: 0 40px;
  }
}
</style>
