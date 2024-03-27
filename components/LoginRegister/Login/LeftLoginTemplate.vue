<template>
  <div
    class="flex items-center bg-[url('@/assets/images/bg-image.png')] bg-no-repeat bg-contain bg-bottom"
  >
    <div
      class="w-1/4 h-screen flex flex-col justify-between pl-[35px] pt-[35px] pb-[35px]"
    >
      <div class="flex items-center gap-2 cursor-pointer">
        <img
          src="@/assets/icons/logo.svg"
          alt="logo"
          class="w-[28px] h-[22px]"
        />
        <strong class="text-[1.1rem] font-semibold">CRM</strong>
      </div>
      <div class="pl-6">
        <img
          src="@/assets/images/auth-login-footer-image.png"
          alt="footer-img"
          class="w-[40%]"
        />
      </div>
    </div>
    <div
      class="w-3/4 h-screen flex items-center justify-center pt-[35px] pb-[35px]"
    >
      <img
        src="@/assets/images/auth-login-image.png"
        alt="auth-login-image"
        class="w-[95%]"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>
