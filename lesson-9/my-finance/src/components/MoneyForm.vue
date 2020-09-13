<template>
  <div class="row">
    <div class="col-md-4">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
              <img src="https://www.iconspng.com/images/calendar-icon.jpg" width="16" alt="">
          </span>
          <Datepicker v-model="inputDate"
                      placeholder="Date"
          />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-group" :class="{ 'input-group--error': $v.inputComment.$error }">
          <div class="input-group-prepend">
          <span class="input-group-text">
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-toolkit-1/32/comment-speak-social-media-tools-ui-512.png" width="16" alt="">
          </span>
        </div>
        <input class="form-control" v-model.trim="inputComment" @blur="$v.inputComment.$touch()" placeholder="Comment">
        <span class="col-12 error-message" v-if="$v.inputComment.$error">
          Минимум 4 символа
        </span>
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-group" :class="{ 'input-group--error': $v.inputAmount.$error }">
        <div class="input-group-prepend">
          <span class="input-group-text">{{ this.$store.state.currency }}</span>
        </div>
        <input type="number" class="form-control" v-model="inputAmount" @blur="$v.inputAmount.$touch()" placeholder="0.00">
        <div class="input-group-append">
          <button class="btn btn-danger" type="button" @click="addHistory('credit')" :disabled="$v.$invalid">-</button>
          <button class="btn btn-success" type="button" @click="addHistory('debit')" :disabled="$v.$invalid">+</button>
        </div>
        <span class="col-12 error-message" v-if="$v.inputAmount.$error">
          Без отрицательных чисел
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import { required, minLength, between } from 'vuelidate/lib/validators';

  export default {
    name: "MoneyForm",

    components: {
      Datepicker
    },

    data() {
      return {
        inputComment: '',
        inputAmount: '',
        inputDate: '',
      }
    },

    methods: {
      async addHistory(type) {
        const amount = parseFloat(this.inputAmount);

        if (Number.isNaN(amount) === false && amount > 0) {
          await this.$store.dispatch('addHistory', {
            type,
            amount,
            comment: this.inputComment,
            date: this.inputDate,
          })

          this.inputComment = '';
          this.inputAmount = '';
          this.inputDate = '';
          this.$v.$reset();

          this.$toasted.show('Транзакция успешно добавлена!', {
            theme: "toasted-primary",
            position: "bottom-left",
            duration : 3000
          });
        }
      },
    },

    validations: {
      inputComment: {
        required,
        minLength: minLength(4)
      },
      inputAmount: {
        required,
        between: between(0, Infinity)
      }
    }
  }
</script>

<style>
  .vdp-datepicker input {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .input-group--error input {
    border-color: tomato;
  }

  .input-group--error .error-message {
    color: tomato;
  }
</style>
