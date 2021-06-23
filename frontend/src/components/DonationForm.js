import axios from "axios";

const presets = [40, 100, 200, 1000, 2500, 5000];
const suggestion = 40;

const currencies = [
  { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
  { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
  { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
  { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 },
];

export default {
  name: "DonationForm",
  props: {
    suggestion: { type: Number, default: suggestion },
    presets: { type: Array, default: presets },
    currencies: { type: Array, default: currencies },
  },
  data() {
    return { donation: this.suggestion };
  },
  methods: {
    donate: async function () {
      try {
        await axios.post("/donate", {
          donation: this.donation,
        });
        alert("Thank you for your donation!");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
