<template>
  <footer class="footer">
    <a href="https://github.com/ozkanozdemir/vue-auth-sample" target="_blank">
      Vue Auth Sample
    </a>
    from
    <a href="https://github.com/ozkanozdemir" target="_blank">@ozkanozdemir</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #272727;
  padding: 12px;
  color: #f6f4e6;
  font-size: 14px;
}
a {
  color: #f6f4e6;
  margin: 0 8px;
}
</style>