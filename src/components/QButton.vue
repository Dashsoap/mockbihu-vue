<template>
  <button :class="`${qtype}`" type="button" @click="handleClick()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    qtype: {
      type: String,
      default: "default"
    }
  },
  methods: {
    handleClick() {
      this.$emit("qclick");
    }
  }
};
</script>
<style lang="less" scoped>
.Forget_button {
}
.default {
  display: inline-block;
  padding: 0;
  font-size: 14px;
  line-height: 32px;
  color: #8590a6;
  text-align: center;
  cursor: pointer;
  background: none;
  border: 0px solid;
}
.primary {
  display: inline-block;
  padding: 0;
  font-size: 14px;
  line-height: 32px;
  color: #175199;
  text-align: center;
  cursor: pointer;
  background: none;
  border: 0px solid;
}
.login {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  width: 100%;
  margin-top: 30px;
  height: 36px;
  color: #ffffff;
  background-color: #0084ff;
  border: #0084ff;
  cursor: pointer;
  border: 1px solid;
  border-radius: 3px;
}
.login:hover {
  background-color: #0048ff;
}
</style>

