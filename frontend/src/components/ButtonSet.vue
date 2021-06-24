<template>
  <div class="bs-container">
    <button
      v-for="preset in presets"
      :key="preset"
      @click="() => buttonClick(preset)"
      class="btn-amount"
      :class="{ selected: donation === Number(preset) }"
    >
      {{ `${symbol} ${formatCurr(preset)}` }}
    </button>
  </div>
</template>

<script>
import currency from "currency.js";

export default {
  name: "ButtonSet",
  props: {
    presets: Array,
    symbol: String,
    donation: Number,
  },
  methods: {
    formatCurr: function (value) {
      return currency(value, {
        separator: ",",
        precision: 0,
        symbol: "",
      }).format();
    },
    buttonClick: function (value) {
      this.$emit("buttonsetclick", value);
    },
  },
  emits: ["buttonsetclick"],
};
</script>

<style>
.bs-container {
  width: 350px;
  margin: auto;
  display: grid;
  grid-template-columns: 33% 33% 32%;
  grid-template-rows: 33%;
  grid-gap: 3px;
  margin-bottom: 5px;
}
.btn-amount {
  font-family: IBMPlexSans, sans-sarif;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: center;
  height: 40px;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  padding: 0 2px;
  margin: 0;
  border: 0;
  border-radius: 5px;
  color: #515151;
  width: 100%;
  background-image: -webkit-linear-gradient(top, #fff 0, #f9f9f9 100%);
  background-image: -o-linear-gradient(top, #fff 0, #f9f9f9 100%);
  background-image: linear-gradient(to bottom, #fff 0, #f9f9f9 100%);
  background-repeat: repeat-x;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  outline: 0;
  letter-spacing: -0.03em;
}
.selected {
  background-image: linear-gradient(to bottom, #5087d9 0, #4579c7 100%);
  color: white;
}
</style>
