<template>
  <div>
    <span class="flex items-center gap-3">
      <h1 class="text-[1.5rem] font-medium text-[rgba(46,38,61,0.9)]">
        Welcome to CRM !
      </h1>
      <img src="@/assets/icons/clapping.png" alt="clapping" class="w-[23px]" />
    </span>
    <p class="font-normal py-1 text-[rgba(46,38,61,0.7)] text-[15px]">
      Please sign-in to your account and start the adventure
    </p>
    <form class="my-3 flex flex-col gap-2">
      <input-generic
        id="username"
        name="username"
        type="text"
        :width="100"
        width-type="%"
        placeholder="johndoe"
        :text-size="15"
        :border-color="borderColorUser"
        input-type="labelInput"
        border-name="Username"
        required-text="This field is required"
        @input="getValuesInputAction"
      />
      <input-generic
        id="password"
        name="password"
        :type="password"
        :width="100"
        width-type="%"
        placeholder="*******"
        :text-size="15"
        input-type="labelInput"
        border-name="Password"
        :border-color="borderColorPass"
        :is-show-hide="isShowHide"
        required-text="This field is required"
        @click="showHideAction"
        @input="getValuesInputAction"
        @enter="getResponseAction"
      />
      <div class="flex items-center justify-between my-4">
        <span class="flex items-center gap-2">
          <InputGeneric type="checkbox" :width="18" :height="18" />
          <label for="checkbox" class="text-[15px] text-[rgb(46,38,61,0.9)]"
            >Remember me</label
          >
        </span>
        <nuxt-link to="/forgot-password" class="text-[#8C57FF] text-[15px]"
          >Forgot Password?</nuxt-link
        >
      </div>
      <button-generic
        name="Login"
        bg-color="#8C57FF"
        color="white"
        :size="15"
        @click="getResponseAction"
      />
    </form>
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
      isShowHide: false,
      password: 'password',
      inputValuesObject: {},
      usernameValue: '',
      passwordValue: '',
      borderColorUser: '',
      borderColorPass: '',
    }
  },

  // Watch
  watch: {
    isShowHide(value) {
      if (value) this.password = 'text'
      else this.password = 'password'
    },
    usernameValue(value) {
      if (value) this.borderColorUser = null
      else this.borderColorUser = 'red'
    },
    passwordValue(value) {
      if (value) this.borderColorPass = null
      else this.borderColorPass = 'red'
    },
  },

  // Methods
  methods: {
    showHideAction() {
      this.isShowHide = !this.isShowHide
    },

    getValuesInputAction(name, value) {
      if (name === 'username') this.usernameValue = value
      else if (name === 'password') this.passwordValue = value
      this.inputValuesObject[name] = value
    },

    getResponseAction() {
      if (this.usernameValue && this.passwordValue) {
        this.$axios
          .post(`/users/login`, {
            username: this.usernameValue,
            password: this.passwordValue,
          })
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem('token', res.data.token)
              // this.$router.push('/branches.htm')
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Login request failed', error)
          })
      } else if (!this.usernameValue && !this.passwordValue) {
        this.borderColorUser = 'red'
        this.borderColorPass = 'red'
      } else if (!this.usernameValue) this.borderColorUser = 'red'
      else if (!this.passwordValue) this.borderColorPass = 'red'
    },
  },
}
</script>
