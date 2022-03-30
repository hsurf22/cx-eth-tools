import { defineStore } from 'pinia';

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    ethAddress: ''
  }),
  getters: {
    getEthAddress: (state) => state.ethAddress
  },
  actions: {
    setEthAddress(address) {
      this.ethAddress = address;
    }
  }
});
