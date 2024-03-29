<template>
  <div>
    <form class="my-3 flex flex-col gap-3">
      <input-generic
        id="email"
        name="email"
        type="email"
        :width="100"
        width-type="%"
        placeholder="johndoe@gmail.com"
        :text-size="15"
        input-type="labelInput"
        border-name="Email"
        @input="getValuesInputAction"
      />
      <button-generic
        name="Send Reset Link"
        bg-color="#8C57FF"
        color="white"
        :size="15"
        @click="getResponseAction"
      />
    </form>
    <div
      class="flex items-center justify-center text-[#8C57FF] mt-8 text-[15px]"
    >
      <nuxt-link to="login" class="flex items-center gap-[6px]">
        <img
          src="@/assets/icons/left-arrow.png"
          alt="left-arrow"
          class="w-[12px]"
        />
        Back to login</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import ButtonGeneric from '../../Generics/ButtonGeneric.vue'
import InputGeneric from '../../Generics/InputGeneric.vue'
export default {
  // Components
  components: {
    InputGeneric,
    ButtonGeneric,
  },

  // Data
  data() {
    return {
      emailValue: '',
    }
  },

  // Methods
  methods: {
    getValuesInputAction(name, value) {
      this.emailValue = value
    },

    getResponseAction() {
      if (this.emailValue) {
        this.$axios
          .post(`/forgetPassword`, {
            email: this.emailValue,
          })
          .then((res) => {})
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Login request failed', error)
          })
      }
    },
  },
}
</script>
