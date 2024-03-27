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
    $route(to) {
      this.isLoginPage = to.path === '/login'
      const token = localStorage.getItem('token')
      if (!token && to.path !== '/login') {
        this.$router.push('/login')
      }
    },
  },

  // CREATED
  created() {
    this.isLoginPage = this.$route.path === '/login'
    const token = localStorage.getItem('token')
    if (token === 'undefined' || token === '') {
      localStorage.removeItem('token')
    }
    if (!token && this.$route.path !== '/login') {
      this.$router.push('/login')
    }
  },

  // MOUNTED
  mounted() {},

  // METHODS
  methods: {},
}
</script>
