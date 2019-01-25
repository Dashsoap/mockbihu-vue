<template>
  <div class="container" v-if="false">header</div>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  background: #fff;
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #efefef;
  padding: 0 20px;
}
</style>