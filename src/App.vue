<script setup>
import WalletInformation from './components/WalletInformation.vue';
import Tokens from './components/Tokens.vue';
</script>

<template>
  <div class="content-container">
    <div class="mb-1">
      Ethereum address: 0xAa682624a57b0Ac4215BeCa5126b8C2bD61609fF
    </div>
    <nav class="top-nav">
      <button
        @click="activePage = 1"
        class="mr-1"
        :class="activePage == 1 ? 'active' : 'inactive'"
      >
        Wallet information
      </button>
      <button
        @click="activePage = 2"
        :class="activePage == 2 ? 'active' : 'inactive'"
      >
        Tokens
      </button>
    </nav>
    <main>
      <WalletInformation v-show="activePage === 1" />
      <Tokens v-show="activePage === 2" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePage: 1
    };
  }
};
</script>

<style lang="scss">
@import './assets/base.scss';
</style>

<style
  scoped
  lang="scss"
>
.content-container {
  width: 700px;
  height: 500px;
  background-color: white;
  padding: 20px;
}
.top-nav {
  margin-bottom: 20px;
}
</style>
