<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="handle">登录</button>
</template>

<script setup>
import { loginAction } from '@/api/common';

const handle = () => {
  loginAction({
    phoneNumber:1, code:1, areaCode:1, accessToken:1, tokenType:1
  });
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
