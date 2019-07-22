<template>
  <div class="about">
    <h1>name: {{ about.name }}</h1>
    <h1>hobby: {{ about.obj.hobby }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'about',
  computed: {
    ...mapGetters([
      'about'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  h1 {
    color: teal;
  }
}
</style>
