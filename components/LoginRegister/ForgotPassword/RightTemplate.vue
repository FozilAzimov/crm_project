<template>
  <div class="h-screen flex justify-center items-center px-10">
    <div class="max-w-[500px]">
      <RightTitleTemplate />
      <RightFooterTemplate />
    </div>
  </div>
</template>

<script>
import RightFooterTemplate from './RightFooterTemplate.vue'
import RightTitleTemplate from './RightTitleTemplate.vue'
export default {
  components: {
    RightTitleTemplate,
    RightFooterTemplate,
  },
}
</script>
