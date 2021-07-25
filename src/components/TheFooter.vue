<template>
  <div id="footer">
    <div class="hr"></div>
    <div class="container">
      <p>
        <span> <strong>Vue Travel</strong>. Enjoy your choice! </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.hr {
  border-bottom: 1px solid #dbdbdb;
}

#footer p {
  font-size: 15px;
  color: #767676 !important;
}
</style>
