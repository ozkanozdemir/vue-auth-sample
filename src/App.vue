<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
  background-color: #f6f5f7;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
}

#app {
  height: 100%;
}

.main {
  height: 100%;
}
</style>
