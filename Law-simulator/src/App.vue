<script>
import Access_control from './components/Access_control.vue'

export default{
  components:{Access_control},
  data()
  {
    
  },
  methods:{
    userData(){
      alert(this.Username)
    },
}
}

</script>

<template>
<body>

<Access_control ></Access_control>


</body>
</template>

<style scoped>


</style>
