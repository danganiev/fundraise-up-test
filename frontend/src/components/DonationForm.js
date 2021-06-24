import axios from "axios";
import currency from "currency.js";
import ButtonSet from "./ButtonSet.vue";

const presets = [39, 99, 199, 999, 2499, 4999];
const suggestion = 39;

const currencies = [
  { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
  { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
  { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
  { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 },
];

const currMapFun = (currencies) =>
  currencies.reduce((prev, curr) => {
    prev[curr.code] = curr;
    return {
      ...prev,
    };
  }, {});

const changePresets = function (presets_, rate) {
  return presets_.map((value) => {
    return convertCurrency(value, rate);
  });
};

const convertCurrency = function (value, rate) {
  let val = Number(value * rate)
    .toFixed()
    .toString();
  if (val === "0") {
    return 1;
  }
  if (val.length === 1) {
    return Number(val);
  } else if (val.length === 2) {
    return Number(Number(val) / 10).toFixed() * 10 - 1;
  } else if (val.length === 3) {
    return Number(Number(val) / 100).toFixed() * 100 - 1;
  } else {
    return Number(Number(val) / 1000).toFixed() * 1000 - 1;
  }
};

export default {
  name: "DonationForm",
  components: {
    ButtonSet,
  },
  props: {
    suggestion: { type: Number, default: suggestion },
    presets: { type: Array, default: presets },
    currencies: { type: Array, default: currencies },
  },
  data() {
    return {
      donation: this.suggestion,
      selectedCurrency: "USD",
      currMap: currMapFun(currencies),
      changedPresets: presets,
    };
  },
  computed: {
    formattedDonation: {
      // getter
      get() {
        return currency(this.donation, {
          separator: ",",
          precision: 0,
          symbol: "",
        }).format();
      },
      // setter
      set(newValue) {
        this.donation = newValue;
      },
    },
  },
  methods: {
    donate: async function () {
      try {
        await axios.post("/donate", {
          donation: this.donation,
          currency: this.selectedCurrency,
        });
        alert("Thank you for your donation!");
      } catch (e) {
        console.log(e);
      }
    },
    onButtonSetClick: function (value) {
      this.donation = value;
    },

    recalcPresets: function (e) {
      let oldCur = this.selectedCurrency;
      this.selectedCurrency = e.target.value;
      let rate = this.currMap[this.selectedCurrency].rate;
      this.formattedDonation = convertCurrency(
        this.donation / this.currMap[oldCur].rate,
        rate
      );
      this.changedPresets = changePresets(this.presets, rate);
    },
    isNumber: function (e) {
      e = e ? e : window.event;
      var charCode = e.which ? e.which : e.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        e.preventDefault();
      } else {
        return true;
      }
    },
  },
};
