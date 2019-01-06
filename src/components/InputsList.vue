<template>
  <div class="container">
    <p class="h5">Sound recordings Report Inputs</p>
    <div class="row border-bottom" v-for="input in inputs" :key="input.id">
      <div class="col input-div" v-on:click="showCandidates(input.id)">
        {{ input.id }}.
        "{{ input.title }}"
        by {{ input.artist }}<br />
        {{ input.isrc || 'not defined isrc' }}
        ({{ input.duration || 'not defined duration' }})
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'InputsList',
  mounted () {
    this.$store.dispatch('loadInputs')
    this.$root.$on('deleteInput', (id) => {
      console.log(id)
      this.$store.commit('DELETE_INPUT', id)
    })
  },
  computed: mapState([
    'inputs'
  ]),
  methods: {
    showCandidates: function (id) {
      this.$root.$emit('getCandidates', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-div:hover {
  cursor: pointer;
  background-color: #eee;
}
</style>
