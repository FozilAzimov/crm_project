<template>
  <div class="flex items-center">
    <left-template class="leftTemplate w-2/3 bg-[rgb(244,245,250)]" />
    <right-template class="w-1/3" />
  </div>
</template>

<script>
import LeftTemplate from './LeftTemplate.vue'
import RightTemplate from './RightTemplate.vue'
export default {
  components: { LeftTemplate, RightTemplate },
}
</script>
