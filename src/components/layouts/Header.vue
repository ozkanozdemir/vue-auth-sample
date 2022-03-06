<template>
  <header class="header">
    <nav class="navMenu">
      <router-link v-if="isAuthenticated" :to="{name: 'home'}">
        Home
      </router-link>
      <router-link v-if="!isAuthenticated" :to="{name: 'login'}">
        Login
      </router-link>
      <a v-if="isAuthenticated" href="#" @click="logout">Logout</a>
      <div class="dot"></div>
    </nav>
  </header>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters([
        'isAuthenticated'
    ])
  },
  methods: {
    ...mapActions([
       'logout'
    ])
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background-color: #272727;
  padding: 20px;
}

.navMenu {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.navMenu a {
  color: #f6f4e6;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 80px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:hover {
  color: #ff416c;
}

.navMenu a.active {
  color: #ff416c;
}

.navMenu .dot {
  width: 6px;
  height: 6px;
  background: #ff416c;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:nth-child(1):hover ~ .dot {
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(2):hover ~ .dot {
  -webkit-transform: translateX(110px);
  transform: translateX(110px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(3):hover ~ .dot {
  -webkit-transform: translateX(200px);
  transform: translateX(200px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

</style>