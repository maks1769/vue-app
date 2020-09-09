<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="changeCurrency( 'USD')"
            class="btn btn-success">USD</button>
    <button @click="changeCurrency('EUR')"  class="btn btn-primary">EUR</button>
    <button @click="changeCurrency('UAH')"  class="btn btn-warning">UAH</button>
  </div>
</template>

<script>
  export default {
    name: "CurrencySwitcher",

    methods: {
      changeCurrency(currency) {
        this.$store.commit('changeCurrency', currency);
      },
    },
  }
</script>
