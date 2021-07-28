<template>
  <div class="thank-you">
    <img
      class="block w-40 mx-auto mb-7"
      alt="Creative Market Logo"
      src="../assets/envelope.png"
    >
    <h1 :class="[
      'normal-case text-2xl text-center',
      'p-0 mb-7',
      'w-5/6 mx-auto'
    ]">
      Thank you for applying to become a seller with Creative Market!
    </h1>
    <p class="text-center pl-10 pr-10 mb-24">
      Our curators are reviewing your application. We’ll get back to you within <span class="font-semibold">5-7 business days</span>. Meanwhile, you already have access to your Shop Studio, so let’s start setting up your shop!
    </p>
  </div>
</template>

<script>
export default {
  name: 'ThankYou'
}
</script>