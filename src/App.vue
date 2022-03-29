<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="content-container">
    <div class="mb-1">
      Ethereum address: 0xAa682624a57b0Ac4215BeCa5126b8C2bD61609fF
    </div>
    <nav class="top-nav">
      <button>Wallet information</button>
    </nav>
    <main>
      <HelloWorld msg="You did it!" />
    </main>
  </div>
</template>

<style lang="scss">
@import './assets/base.scss';

.content-container {
  width: 700px;
  height: 500px;
  background-color: white;
  padding: 20px;
}
.top-nav {
  margin-bottom: 20px;
}
main {
}
</style>
