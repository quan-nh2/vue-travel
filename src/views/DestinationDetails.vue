<template>
  <section>
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
import store from '../store/index';

export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      require: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
  float: left;
  margin: 0 40px;
}

.destination-detail {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
