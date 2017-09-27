<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    @import '../node_modules/bulma/css/bulma.css';
    body{
        margin-top:5%;
    }
</style>
