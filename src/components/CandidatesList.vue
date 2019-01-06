<template>
  <div class="container">
    <p class="h5" v-if="input">Candidates for input {{ input }}</p>
    <div class="row border-bottom" v-for="candidate in candidates" :key="candidate.id">
      <div class="col candidate-div" v-on:click="matchCandidate(candidate.id)">
          "{{ candidate.title }}"
          by {{ candidate.artist }}<br />
          {{ candidate.isrc || 'not defined isrc' }}
          ({{ candidate.duration || 'not defined duration' }})
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CandidatesList',
  data: function () {
    return {
      input: 0,
      candidates: []
    }
  },
  mounted: function () {
    this.$root.$on('getCandidates', (id) => {
      axios
        .get('http://localhost:8000/api/sound_recording/' + id + '/search_match/')
        .then(r => r.data)
        .then(candidates => {
          this.input = id
          this.candidates = candidates
        })
    })
  },
  methods: {
    matchCandidate: function (id) {
      console.log(id)
      axios
        .put('http://localhost:8000/api/input/' + this.input + '/', {
          matched_sound_recording: id
        })
        .then(response => {
          console.log(response)
          this.$root.$emit('deleteInput', this.input)
          this.input = 0
          this.candidates = []
        })
        .catch(error => {
          console.log(error)
        })
      // this.$root.$emit('getCandidates', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate-div:hover {
  cursor: pointer;
  background-color: #eee;
}
</style>
