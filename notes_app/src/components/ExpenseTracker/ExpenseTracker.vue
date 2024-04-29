<template>
  <ExpenseHeader :totalIncome="state.totalIncome" />
  <Form :state="state" @add-income="AddIncome" />
  <IncomeList :state="state" />
</template>

<script>
import { reactive, computed } from "vue";
import ExpenseHeader from "./ExpenseHeader.vue";
import Form from "./Form.vue";
import IncomeList from "././IncomeList.vue";

export default {
  components: {
    ExpenseHeader,
    Form,
    IncomeList,
  },
  setup() {
    const state = reactive({
      income: [],
      totalIncome: computed(() => {
        let temp = 0;
        if (state.income.length > 0) {
          for (let i = 0; i < state.income.length; i++) {
            temp += state.income[i].value;
          }
        }
        return temp;
      }),

      sortedIncome: computed(() => {
        let temp = [];

        temp = state.income.sort(function (a, b) {
          return b.date - a.date;
        });
        return temp;
      }),
    });

    function AddIncome(data) {
      console.log("hi");
      let d = data.date;
      let newD = new Date(d[0], d[1], d[2]);

      state.income = [
        ...state.income,
        {
          id: Date.now(),
          desc: data.desc,
          value: parseInt(data.value),
          date: newD.getTime(),
          //   date: data.value,
        },
      ];
      console.log(state.income);
    }

    return {
      state,
      AddIncome,
    };
  },
};
</script>

<style></style>
