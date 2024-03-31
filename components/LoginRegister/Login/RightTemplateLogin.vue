<template>
  <div class="h-screen flex flex-col justify-center items-center px-10">
    <right-title-and-form class="w-full" />
    <right-footer class="w-full" />
  </div>
</template>

<script>
import RightFooter from './RightFooter.vue'
import RightTitleAndForm from './RightTitleAndForm.vue'
export default {
  components: {
    RightTitleAndForm,
    RightFooter,
  },
}
</script>
