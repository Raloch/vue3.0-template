<template>
  <div class="home">
    <h1>name: {{ home.name }}</h1>
    <h1>hobby: {{ home.obj.hobby }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { operatorInfo } from '../api/api'

export default {
  name: 'home',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      'home'
    ])
  },
  created() {
    operatorInfo().then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  h1 {
    color: teal;
  }
}
</style>
