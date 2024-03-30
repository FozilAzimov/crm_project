<template>
  <span v-if="inputType === 'labelInput'">
    <div class="relative">
      <input
        :id="id"
        :ref="name"
        :type="type"
        class="input my-2 block px-4 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-solid border-[#D1CFD4] appearance-none focus:outline-none focus:ring-0 focus:border-[#8C57FF] peer"
        :placeholder="placeholder"
        :style="{
          textSize: `${textSize}px`,
          border: borderColor && `1px solid ${borderColor}`,
        }"
        @input="setInputValueAction"
        @keyup.enter="enterAction"
      />
      <label
        :for="id"
        class="absolute text-sm text-gray-500 duration-300 transform-translate-y-4 scale-75 top-[-1px] z-10 origin-[0] bg-white mx-2 px-2 w-fit h-[23px] peer-focus:text-[#8C57FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        :style="{ textSize: `${textSize}px` }"
        >{{ borderName }}</label
      >
      <template v-if="type === 'password' || isShowHide">
        <img
          v-if="isShowHide"
          class="w-[22px] absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer"
          src="@/assets/icons/hidden.png"
          alt="blind"
          @click="showHideAction"
        />
        <img
          v-else
          class="w-[22px] absolute top-[50%] right-[15px] translate-y-[-50%] cursor-pointer"
          src="@/assets/icons/eye.png"
          alt="view"
          @click="showHideAction"
        />
      </template>
    </div>
  </span>
  <input
    v-else
    :type="type"
    :placeholder="placeholder"
    :style="{
      width: widthType === '%' ? `${width}%` : `${width}px`,
      height: `${width}px`,
      padding: `${py}px ${px}px`,
      border: `${borderSize}px solid ${borderColor}`,
      borderRadius: `${borderRadius}px`,
    }"
  />
</template>

<script>
export default {
  // Props
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: 0,
    },
    widthType: {
      type: String,
      default: '',
    },
    py: {
      type: Number,
      dafeult: null,
    },
    px: {
      type: Number,
      dafeult: null,
    },
    borderSize: {
      type: Number,
      dafeult: null,
    },
    borderColor: {
      type: String,
      dafeult: '',
    },
    borderRadius: {
      type: Number,
      dafeult: null,
    },
    inputType: {
      type: String,
      dafeult: '',
    },
    placeholder: {
      type: String,
      dafeult: '',
    },
    textSize: {
      type: Number,
      dafeult: null,
    },
    borderName: {
      type: String,
      dafeult: '',
    },
    isShowHide: {
      type: Boolean,
      default: false,
    },
  },

  // Mounted
  mounted() {
    if (this.name === 'username' || this.name === 'email') {
      this.$refs[this.name].focus()
    }
  },

  // Methods
  methods: {
    showHideAction() {
      this.$emit('click')
    },

    setInputValueAction({ target: { value } }) {
      this.$emit('input', this.name, value)
    },

    enterAction() {
      this.$emit('enter')
    },
  },
}
</script>

<style>
input[type='checkbox'] {
  accent-color: #8c57ff !important;
  cursor: pointer;
}

.input::placeholder {
  color: #fff;
}
.input:focus::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
</style>
