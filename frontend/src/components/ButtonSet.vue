<template>
  <div v-for="preset in presets" :key="preset">
    <button @click="() => buttonClick(preset)">
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
