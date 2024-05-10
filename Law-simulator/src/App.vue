<script>
import Access_control from './components/Access_control.vue'
import UserDashboard from './components/UserDashboard.vue'
import About from './components/About.vue'
import Cases from './components/Cases.vue'
import Profile from './components/Profile.vue'

import router from './router/router'

export default{
  components:{Access_control, UserDashboard, About, Cases, Profile},
}

</script>

<template>
  <router-view>

  </router-view>
</template>

<style>

</style>
