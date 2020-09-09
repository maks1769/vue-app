<template>
  <div class="col-md-12 py-4">
    <ul class="list-group list-group-flush text-secondary">
      <HistoryItem v-for="item in this.$store.state.history"
                   :item="item"
                   :key="item.id"
      />
    </ul>
  </div>
</template>

<script>
  import HistoryItem from './HistoryItem';

  export default {
    name: "HistoryList",

    components: {
      HistoryItem,
    }
  }
</script>
