<script setup></script>

<template>
  <div>
    <div>Ethereum address</div>
    <div v-if="settingsStore">{{ ethAddress }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useSettingsStore } from '@/stores/settings';

export default defineComponent({
  data() {
    return { settingsStore: null };
  },
  computed: {
    ethAddress() {
      return this.settingsStore.ethAddress;
    }
  },
  methods: {},
  mounted() {
    this.settingsStore = useSettingsStore();
  }
});
</script>

<style
  scoped
  lang="scss"
></style>
