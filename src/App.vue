<template>
  <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
  #nav {
    padding: 30px;
    a{
      font-weight: bold;
      color: #2c3e50;
    }
    a.router-link-exact-active{
      color: #42b983;  
    }
  }
</style>