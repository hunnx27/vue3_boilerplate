<template>
  <div class="About">
    <h1>About</h1>
    <ModuleAItem/>
  </div>
</template>

<script>
import ModuleAItem from '/src/components/moduleA/ModuleAItem.vue'

export default {
  name: 'AboutView',
  props: {
    msg: String
  },
  components:{
    ModuleAItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
