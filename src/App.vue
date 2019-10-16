<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#app {
  /* background: white; */
  font-family: 'Montserrat', sans-serif;
}
</style>