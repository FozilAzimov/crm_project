<template>
  <button
    type="button"
    data-ripple-light="true"
    class="font-medium transition-all py-2 rounded-lg active:opacity-[0.8]"
    :style="{
      background: `${bgColor}`,
      color: `${color}`,
      fontSize: `${size}px`,
      padding: padding,
    }"
    @click="clickAction"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  // Props
  props: {
    name: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
      default: '8px',
    },
    size: {
      type: Number,
      default: 0,
    },
  },

  // Methods
  methods: {
    clickAction() {
      this.$emit('click')
    },
  },
}
</script>
