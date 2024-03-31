<template>
  <div class="flex items-center">
    <left-login-template class="w-2/3 bg-[rgb(244,245,250)]" />
    <right-template-login class="w-1/3" />
  </div>
</template>

<script>
import LeftLoginTemplate from './LeftLoginTemplate.vue'
import RightTemplateLogin from './RightTemplateLogin.vue'
export default {
  components: { LeftLoginTemplate, RightTemplateLogin },
}
</script>
