<template>
  <div class="donation-form-container">
    <form class="donation-form">
      <div class="group-price-control">
        <div class="d-table w-100 p-rel z-index-2">
          <label for="v-1624441413442-amount" class="d-table-cell text-middle"
            ><div class="price-symbol">
              <span class="sr-only">Donation Amount</span>
              <span qa="currency-symbol">₽</span>
            </div></label
          >
          <div class="d-table-cell text-middle w-100">
            <input
              autocomplete="off"
              class="price-control control-price"
              type="text"
              pattern="[\d,]*"
              inputmode="numeric"
              qa="amount"
              placeholder=""
              v-model="donation"
            />
          </div>
          <div class="d-table-cell text-middle p-rel currency-select">
            <div class="currency-select-label">
              <div class="d-table">
                <div class="d-table-cell text-middle pr-1">RUB</div>
                <div class="d-table-cell text-middle">
                  <svg
                    svg-inline=""
                    focusable="false"
                    role="presentation"
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="d-block"
                  >
                    <path d="M8 0H0l4 4 4-4z" fill="#515151"></path>
                  </svg>
                </div>
              </div>
            </div>
            <label for="v-1624441413442-currency" class="sr-only"
              >Donation Currency</label
            >
            <select
              qa="currency-selector"
              id="v-1624441413442-currency"
              class="currency-select-control"
            >
              <optgroup label="">
                <option value="USD">USD | US Dollar</option>
                <option value="RUB">RUB | Russian Ruble</option>
                <option value="EUR">EUR | Euro</option>
                <option value="GBP">GBP | British Pound</option>
              </optgroup>
            </select>
            <div
              class="p-abs top-left bottom-right currency-select-control-focus"
            ></div>
          </div>
        </div>
      </div>

      <div class="button-container">
        <button @click="donate" type="button" class="donate-button">
          <div class="button-inner-container">Donate</div>
        </button>
      </div>
    </form>
  </div>
</template>

<script src="./DonationForm.js"></script>
<style src="./DonationForm.css"></style>
