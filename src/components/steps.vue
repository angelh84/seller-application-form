<template>
  <p :class="[
      'uppercase',
      'text-xs',
      'font-semibold',
      'absolute',
      'top-0',
      'right-0'
  ]">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>