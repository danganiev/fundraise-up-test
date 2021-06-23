<template>
  <div class="donation-form-container">
    <form class="donation-form">
      <div>
        <label for="donation-input">$</label>
        <input name="donation-input" v-model="donation" />
      </div>
      <div>
        <button @click="donate" type="button">Donate</button>
      </div>
    </form>
  </div>
</template>

<script src="./DonationForm.js"></script>
<style src="./DonationForm.css"></style>
