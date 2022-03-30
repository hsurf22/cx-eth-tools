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
  <div>
    <h2>Wallet information</h2>
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>Network</td>
          <td>{{ network.name }}</td>
        </tr>
        <tr>
          <td>Balance(Eth)</td>
          <td>{{ balance }}</td>
        </tr>
        <tr>
          <td>Sent transaction count</td>
          <td>{{ txCount }}</td>
        </tr>
        <tr>
          <td>ENS address for this wallet</td>
          <td>{{ ensAddress }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import { defineComponent } from 'vue';
//import { mapState } from 'pinia';
import { useSettingsStore } from '@/stores/settings';

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.ankr.com/eth'
);

export default defineComponent({
  data() {
    return {
      settingsStore: null,
      ethAddress: '',
      network: '',
      balance: '',
      txCount: 0,
      ensAddress: null
    };
  },
  computed: {
    //...mapState(useSettingsStore, ['ethAddress'])
    /* async balance() {
      const balance = await provider.getBalance('ricmoo.eth');
      console.log(balance);

      return balance;
    } */
  },
  watch: {},
  methods: {
    async loadWalletInfo() {
      const balance = await provider.getBalance(this.ethAddress);
      const balanceInEth = ethers.utils.formatEther(balance);
      this.balance = balanceInEth;

      this.txCount = await provider.getTransactionCount(this.ethAddress);

      this.ensAddress = await provider.lookupAddress(this.ethAddress);

      this.network = await provider.getNetwork();
    }
  },
  async mounted() {
    this.settingsStore = await useSettingsStore();
    this.ethAddress = this.settingsStore.ethAddress;
    await this.loadWalletInfo();
  }
});
</script>

<style
  scoped
  lang="scss"
>
table td {
  border: 1px solid grey;
  padding: 0 5px;
}
</style>
