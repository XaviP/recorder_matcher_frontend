<template>
  <div class="hello">
    <h2>Input's List</h2>
    <ul id="example-1">
      <li v-for="input in inputs">
        {{ input.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'InputsList',
  mounted () {
    this.$store.dispatch('loadInputs')
  },
  computed: mapState([
    'inputs'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
