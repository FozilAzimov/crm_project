<template>
  <span v-if="inputType === 'labelInput'">
    <div class="relative">
      <input
        :id="id"
        :ref="name"
        :type="type"
        class="input mt-2 block p-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-solid border-[#D1CFD4] appearance-none focus:outline-none focus:ring-0 focus:border-[#8C57FF] peer"
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
        class="absolute text-sm text-gray-500 duration-300 transform-translate-y-4 scale-75 top-[-4px] z-10 origin-[0] bg-white px-2 w-fit h-[23px] peer-focus:text-[#8C57FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        :style="{
          textSize: `${textSize}px`,
          color: isRequiredText[name] ? 'red' : none,
        }"
        >{{ borderName }}</label
      >
      <template v-if="type === 'password' || isShowHide">
        <img
          v-if="isShowHide"
          class="w-[22px] absolute top-[50%] right-[15px] translate-y-[-25%] cursor-pointer"
          src="@/assets/icons/hidden.png"
          alt="blind"
          @click="showHideAction"
        />
        <img
          v-else
          class="w-[22px] absolute top-[50%] right-[15px] translate-y-[-25%] cursor-pointer"
          src="@/assets/icons/eye.png"
          alt="view"
          @click="showHideAction"
        />
      </template>
    </div>
    <span
      v-if="isRequiredText[name]"
      class="sticky text-[12px] ml-2"
      :class="isRequiredText[name] && 'text-[red]'"
      >{{ requiredText }}</span
    >
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
    requiredText: {
      type: String,
      default: '',
    },
  },

  // Mounted
  mounted() {
    if (this.name === 'username' || this.name === 'email') {
      this.$refs[this.name].focus()
    }
  },

  watch: {
    inputValues: {
      handler(newVal) {
        if (newVal?.[this.name]) this.isRequiredText[this.name] = false
        else this.isRequiredText[this.name] = true
      },
      deep: true,
    },
  },

  data() {
    return {
      inputValues: {},
      isRequiredText: {},
    }
  },

  // Methods
  methods: {
    showHideAction() {
      this.$emit('click')
    },

    setInputValueAction({ target: { id, value } }) {
      this.$set(this.inputValues, id, value)
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
