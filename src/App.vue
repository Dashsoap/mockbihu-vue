<template>
  <div id="app">
    <my-header>
    </my-header>
    <router-view/>
    
  </div>
</template>
<script>
import MyHeader from './components/MyHeader.vue';
export default {
  name:"app",
  components:{
    MyHeader,
  }
}
</script>


<style>
body{
  margin: 0;
}
#app {
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
