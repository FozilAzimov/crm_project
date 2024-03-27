<template>
  <div class="flex items-center">
    <LeftTemplate class="leftTemplate w-2/3 bg-[rgb(244,245,250)]" />
    <RightTemplate class="w-1/3" />
  </div>
</template>

<script>
import LeftTemplate from './LeftTemplate.vue'
import RightTemplate from './RightTemplate.vue'
export default {
  components: { LeftTemplate, RightTemplate },
}
</script>
