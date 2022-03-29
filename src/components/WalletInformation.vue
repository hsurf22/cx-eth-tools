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
  <div>Wallet information</div>
</template>

<script>
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.ankr.com/eth'
);

//const signer = provider.getSigner();

//const balance = await provider.getBalance('ethers.eth');

console.log(provider);

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style
  scoped
  lang="scss"
>
div {
  font-size: 30px;
}
</style>
