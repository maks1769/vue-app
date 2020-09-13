import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currency: '$',
        history: [],
    },
    getters: {
        total: (state) => {
            return state.history.reduce((sum, row) => {
                return row.type === 'debit' ? sum + row.amount : sum - row.amount;
            }, 0).toFixed(2);
        }
    },
    mutations: {
        addHistory(state, {amount, comment, date}) {
            axios.post('http://kinoha.itis.today/api/history', {
                amount: amount,
                comment: comment,
                date: date,
            }).then(() => {
                store.dispatch('fetchHistory');
            }).catch(e => {
                console.log(e);
            });
        },

        changeCurrency(state, newCurrency) {
            state.currency = newCurrency;
        }
    },
    actions: {
        fetchHistory({state}) {
            axios.get('http://kinoha.itis.today/api/history')
                .then(response => state.history = response.data)
                .catch(e => {
                    console.log(e);
                });
        },

        async addHistory({commit}, history) {
            commit('addHistory', history);
        },
    }
});

export default store;