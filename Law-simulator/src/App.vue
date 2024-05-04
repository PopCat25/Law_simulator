<script>
import Access_control from './components/Access_control.vue'
import UserDashboard from './components/UserDashboard.vue';

import router from './router/router';

export default{
  components:{Access_control, UserDashboard},
}

</script>

<template>
<body>
  <router-view></router-view>
</body>
</template>

<style>



</style>
