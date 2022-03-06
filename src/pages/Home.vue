<template>
  <div class="home-page">
    <h2>
      Welcome
    </h2>
    <div>
      {{ token }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Home",
  computed: {
    ...mapGetters(['token'])
  }
}
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
}
h2 {
  font-size: 68px;
  color: #272727;
}
</style>