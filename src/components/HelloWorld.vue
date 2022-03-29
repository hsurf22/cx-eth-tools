<script setup>
/*
defineProps({
  msg: {
    type: String,
    required: true
  }
});
*/
</script>

<template>
  <div>Hi</div>
</template>

<script>
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.ankr.com/eth'
);

//const signer = provider.getSigner();

const balance = await provider.getBalance('ethers.eth');

console.log(balance);
</script>

<style
  scoped
  lang="scss"
>
div {
  font-size: 30px;
}
</style>
