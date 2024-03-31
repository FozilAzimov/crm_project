<template>
  <div class="bg-[#F4F5FA] flex flex-col items-center">
    <div class="text-center">
      <h1 class="text-[6rem] font-medium text-[rgba(46,38,61,0.9)]">401</h1>
      <span class="flex items-center justify-center gap-2 mb-2 mt-[-15px]">
        <h4 class="text-[1.5rem] font-medium text-[rgba(46,38,61,0.9)]">
          You are not authorized!
        </h4>
        <img src="@/assets/icons/padlock.png" alt="padlock" class="w-[23px]" />
      </span>
      <p class="text-[15px] text-[rgba(46,38,61,0.7)]">
        You don't have permission to access this page. Go Home!
      </p>
    </div>
    <div
      class="w-full flex items-end justify-between px-20 bg-[url('@/assets/images/401.footerImg.png')] bg-no-repeat bg-contain bg-bottom"
    >
      <span class="flex items-end gap-1 mb-16">
        <img src="@/assets/images/twoImages.png" alt="twoImages1" />
        <img
          src="@/assets/images/twoImages.png"
          alt="twoImages2"
          class="w-[40px]"
        />
      </span>
      <span class="text-center">
        <img
          src="@/assets/images/401.notFoundPage.png"
          alt="notFoundPage"
          class="w-[785px] h-[500px] mt-12"
        />
        <button-generic
          name="Back To Home"
          bg-color="#8C57FF"
          color="white"
          :size="15"
          padding="8px 20px"
          class="mt-[40px] mb-[20px]"
          @click="backToHomeAction"
        />
      </span>
      <span class="mb-16">
        <img
          src="@/assets/images/auth-login-footer-image.png"
          alt="footer-image"
        />
      </span>
    </div>
  </div>
</template>
<script>
import ButtonGeneric from '../components/Generics/ButtonGeneric.vue'
export default {
  components: { ButtonGeneric },

  layout: 'error-page',

  // Props
  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  // Methods
  methods: {
    backToHomeAction() {
      this.$router.push('login')
    },
  },
}
</script>
