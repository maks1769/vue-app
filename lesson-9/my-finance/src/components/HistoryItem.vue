<template>
  <li class="list-group-item">
    <span :class="item.type === 'debit' ? 'text-success' : 'text-danger'">
      {{ item.type === 'debit' ? '+' : '-'}}
      {{ item.amount }} {{ this.$store.state.currency }}
    </span>
    <br>
    <span class="float-left"><small>{{ item.comment }}</small></span>
    <span class="float-right"><small>{{ item.created_at.replace('Z', '').replace('T', ' ').substring(0, item.created_at.length-8) }}</small></span>
    <button class="btn btn-danger" @click="deleteItem(item.id)">delete</button>
  </li>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "HistoryList",

    props: ['item'],

    methods: {
      deleteItem(id) {
        axios.delete(`http://kinoha.itis.today/api/history/${id}`)
            .then(() => this.$store.dispatch('fetchHistory'));
      }
    },
  }
</script>

<style>
  button {
    position: absolute;
    right: -65px
  }
</style>
