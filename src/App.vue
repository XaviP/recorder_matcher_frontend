<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <InputsList/>
        </div>
        <div class="col">
          <CandidatesList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputsList from './components/InputsList'
import CandidatesList from './components/CandidatesList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
    InputsList,
    CandidatesList
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
