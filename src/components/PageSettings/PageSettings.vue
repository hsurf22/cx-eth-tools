<script setup>
/*
defineProps({
  displayed: {
    type: Boolean,
    default: false,
    required: true
  }
});
*/
</script>

<template>
  <div>
    <h1 class="green">Settings</h1>

    <div class="mb-1">
      <div>Your Ethereum wallet address</div>
      <input v-model="settings.ethAddress" />
    </div>

    <div v-if="error">{{ errorMsg }}</div>

    <div>
      <button
        :disabled="error"
        @click="saveSettings"
        class="mr-1"
      >
        Save
      </button>
      <button
        @click="closeSettings"
        class="mr-1"
      >
        Cancel
      </button>
      <button @click="clearSettings">Clear settings</button>
    </div>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import { defineComponent } from 'vue';
import { useSettingsStore } from '@/stores/settings';

export default defineComponent({
  emits: ['close'],
  data() {
    return {
      settingsStore: null,
      settings: { ethAddress: '' },
      get ethAddress() {
        const ethAddress = localStorage.getItem('ethAddress');
        return ethAddress;
      },
      set ethAddress(ethAddress) {
        // Save eth address to store
        this.settingsStore.ethAddress = ethAddress;
        localStorage.setItem('ethAddress', ethAddress);
      },
      error: false,
      errorMsg: ''
    };
  },
  props: {
    displayed: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  watch: {
    displayed() {
      this.loadSettings();
    },
    settings: {
      handler(val) {
        // Error checking
        // Check if valid ethereum address
        if (!ethers.utils.isAddress(val.ethAddress)) {
          this.error = true;
          this.errorMsg = 'Invalid Ethereum wallet address';
        } else {
          this.error = false;
          this.errorMsg = '';
        }
      },
      deep: true
    }
  },
  methods: {
    saveSettings() {
      this.ethAddress = this.settings.ethAddress;
      this.closeSettings();
    },
    loadSettings() {
      this.settings.ethAddress = this.ethAddress;
    },
    clearSettings() {
      this.settings.ethAddress = '';
      localStorage.clear();
    },
    closeSettings() {
      this.$emit('close');
    }
  },
  mounted() {
    this.settingsStore = useSettingsStore();
  }
});
</script>

<style
  scoped
  lang="scss"
></style>
