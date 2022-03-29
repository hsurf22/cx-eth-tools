<script setup>
import Web3 from 'web3';

// connect to public RPC URL
const url = 'https://rpc.ankr.com/eth';

// set the provider
const provider = new Web3(new Web3.providers.HttpProvider(url));

// display the current block number
provider.eth.getBlockNumber().then((result) => {
  console.log('Current block number: ' + result);
});
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
