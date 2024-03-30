<template>
  <!-- isLoginPage ga tekshiriladi default ko'rinadigan elementlar -->

  <Nuxt />
</template>

<script>
export default {
  // DATA
  data() {
    return {}
  },

  // COMPUTED
  computed: {},

  // WATCH
  watch: {
    $route(to, from) {
      const token = localStorage.getItem('token')
      if (!token && to.path === '/forgot-password')
        this.$router.push('/forgot-password')
      else if (!token && to.path !== '/login') this.$router.push('/login')
    },
  },

  // CREATED
  created() {
    const token = localStorage.getItem('token')
    if (token === 'undefined' || token === '') {
      localStorage.removeItem('token')
    }
    if (!token && this.$route.path === '/forgot-password')
      this.$router.push('/forgot-password')
    else if (!token && this.$route.path !== '/login')
      this.$router.push('/login')
  },

  // MOUNTED
  mounted() {},

  // METHODS
  methods: {},
}
</script>
