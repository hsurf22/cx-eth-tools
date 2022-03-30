<script setup>
import Settings from './components/PageSettings/PageSettings.vue';
import EthAddress from './components/BlockEthAddress/BlockEthAddress.vue';
import WalletInfo from './components/PageWallet/PageWallet.vue';
import Tokens from './components/PageTokens/PageTokens.vue';
</script>

<template>
  <div class="content-container">
    <Settings
      :displayed="showSettings"
      @close="showSettings = false"
      v-show="showSettings"
    />

    <div v-show="!showSettings">
      <!-- ============================================================= -->
      <!-- Settings toggle button -->
      <!-- ============================================================= -->
      <div
        class="settings-button cursor--pointer"
        @click="showSettings = !showSettings"
      >
        <img
          src="@/assets/img/icons/Settings.svg"
          alt="Settings"
          height="30"
        />
      </div>

      <!-- ============================================================= -->
      <!-- Top nav -->
      <!-- ============================================================= -->
      <nav class="mb-1">
        <button
          @click="activePage = 1"
          class="mr-1"
          :class="activePage == 1 ? 'active' : ''"
        >
          Wallet information
        </button>
        <button
          @click="activePage = 2"
          :class="activePage == 2 ? 'active' : ''"
        >
          Tokens
        </button>
      </nav>

      <!-- ============================================================= -->
      <!-- Main content -->
      <!-- ============================================================= -->
      <main>
        <EthAddress class="mb-1" />
        <WalletInfo v-show="activePage === 1" />
        <Tokens v-show="activePage === 2" />
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useSettingsStore } from '@/stores/settings';

export default defineComponent({
  data() {
    return {
      settingsStore: null,
      activePage: 1,
      showSettings: false
    };
  },
  methods: {
    loadSettings() {
      this.settingsStore = useSettingsStore();
      this.settingsStore.ethAddress = localStorage.getItem('ethAddress');
    }
  },
  mounted() {
    this.loadSettings();
  }
});
</script>

<style lang="scss">
@import './assets/css/base.scss';
</style>

<style
  scoped
  lang="scss"
>
.content-container {
  width: 700px;
  height: 500px;
  background-color: white;
  padding: 15px;
  position: relative;
  margin: 0 auto;
}

.settings-button {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 100;
}
</style>
