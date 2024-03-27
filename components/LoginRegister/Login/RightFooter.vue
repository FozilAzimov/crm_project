<template>
  <div>
    <p class="text-[#676372] text-center my-3 text-[15px]">
      New to our platform?
      <nuxt-link to="login" class="text-[#8C57FF]">Meet the admin</nuxt-link>
    </p>
    <span class="flex items-center gap-3 text-[#6C6777] font-light my-5">
      <span
        class="block w-full border-[1px] border-solid border-[#E5E4E6]"
      ></span>
      or
      <span
        class="block w-full border-[1px] border-solid border-[#E5E4E6]"
      ></span>
    </span>
    <div class="flex items-center justify-center gap-1">
      <span
        class="p-2 hover:bg-[#F0F3F9] active:bg-[#4267b252] rounded-full cursor-pointer transition-all"
      >
        <img
          src="@/assets/icons/facebook.png"
          alt="facebook"
          class="w-[15px]"
        />
      </span>
      <span
        class="p-2 hover:bg-[#EDF8FE] active:bg-[#1da0f242] rounded-full cursor-pointer transition-all"
      >
        <img src="@/assets/icons/twitter.png" alt="twitter" class="w-[15px]" />
      </span>
      <span
        class="p-2 hover:bg-[#EEEEEE] active:bg-[#27272748] rounded-full cursor-pointer transition-all"
      >
        <img src="@/assets/icons/github.png" alt="github" class="w-[15px]" />
      </span>
      <span
        class="p-2 hover:bg-[#FDF0EF] active:bg-[#db45375c] rounded-full cursor-pointer transition-all"
      >
        <img src="@/assets/icons/google.png" alt="google" class="w-[15px]" />
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>
