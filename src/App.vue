<script setup>
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

console.log(web3);
</script>

<template>
  <h1>Hi</h1>
</template>

<script></script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
