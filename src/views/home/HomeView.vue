<template>
  <div class="Home">
    <h1>Home</h1>
    <CounterItem/>
  </div>
</template>

<script>
import CounterItem from '/src/components/counter/CounterItem.vue'
export default {
  name: 'HomeItem',
  props: {
    msg: String
  },
  components:{
    CounterItem
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
