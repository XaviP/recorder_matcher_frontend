<template>
  <div id="app">
    <InputsList/>
  </div>
</template>

<script>
import InputsList from './components/InputsList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
    InputsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
