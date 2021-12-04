<template>
  <div class="p-3 flex flex-col items-center rounded-xl bg-gray-200 shadow-md cursor-pointer">
    <div class="w-full flex justify-end">
      <button class="font-semibold text-lg text-red-400 hover:text-red-500" @click="deleteWallet">X</button>
    </div>

    <div class="p-3 w-1/3 flex justify-center items-center rounded border-2 border-gray-300">
      <span class="text-4xl font-bold" :class="lastChangeClass">
        {{ lastChange }}
      </span>
    </div>

    <h3 class="mt-5 text-xl font-semibold">{{ name }}</h3>
  </div>
</template>

<script>
import { DELETE_WALLET } from '@/store/wallets/constants';

export default {
  name: 'AppWalletCard',

  props: {
    id: String,

    name: String,

    lastChange: {
      type: Number,
      default: 10,
    },
  },

  computed: {
    lastChangeClass() {
      if (this.lastChange >= 0) {
        return `text-green-500`;
      }

      return `text-red-500`;
    },
  },

  methods: {
    deleteWallet() {
      this.$store.dispatch(DELETE_WALLET);
    },
  },
};
</script>
