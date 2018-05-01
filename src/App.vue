<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div.level {
  display: flex;
  flex-direction: row;
  align-items: center;

  .g1 {
    flex-grow: 1;
  }

  .g2 {
    flex-grow: 1;
  }
}
</style>
