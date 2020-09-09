<template>
  <div class="container" id="app">
    <CurrencySwitcher/>
    <div class="row">
      <div class="col-md-12 mt-5">
        <Total/>
      </div>
    </div>
    <MoneyForm/>
    <div class="row">
      <HistoryList/>
    </div>
  </div>
</template>

<script>
  import CurrencySwitcher from './components/CurrencySwitcher';
  import Total from './components/Total';
  import MoneyForm from './components/MoneyForm';
  import HistoryList from './components/HistoryList';

  export default {
    name: 'App',
    components: {
      HistoryList,
      MoneyForm,
      CurrencySwitcher,
      Total,
    },

    async mounted() {
      await this.$store.dispatch('fetchHistory');
    },
  }
</script>
