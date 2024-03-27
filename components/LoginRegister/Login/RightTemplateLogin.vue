<template>
  <div class="h-screen flex justify-center items-center px-10">
    <div class="max-w-[500px]">
      <RightTitleAndForm />
      <RightFooter />
    </div>
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
