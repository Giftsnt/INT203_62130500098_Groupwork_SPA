<template>
  <div class="home">
    <img alt="logo" src="../assets/bg.jpeg" class="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  img {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
</style>