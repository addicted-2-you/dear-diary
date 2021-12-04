<template>
  <div class="p-2">
    <ul class="grid grid-cols-4 gap-5">
      <li>
        <button
          class="group p-3 h-full w-full flex justify-center items-center rounded-xl bg-gray-100 border-2 border-gray-300 cursor-pointer hover:border-gray-400"
        >
          <img
            class="opacity-60 group-hover:opacity-100"
            height="18"
            width="18"
            :src="require('@/assets/icons/plus.svg')"
            alt="plus"
          />
        </button>
      </li>

      <li v-for="wallet in wallets" :key="wallet.id">
        <app-wallet-card :name="wallet.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppWalletsView',
};
</script>

<style></style>
