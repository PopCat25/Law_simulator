<script>
import Access_control from './components/Access_control.vue'

export default{
  components:{Access_control},
  data()
  {
    return{
      authErrorFlag: false
    }
  },
  methods:{
    userData(userName){
      let x = Math.random();
      console.log(x);
      if(x > 0.5){
        this.authErrorFlag = true;
        console.log('ERROR');
      }
      else{
        this.authErrorFlag = false;
        console.log('not')
      }
    },
  }
}

</script>

<template>
<body>

<Access_control @authorization_data="userData" :authErrorFlag="authErrorFlag"></Access_control>

</body>
</template>

<style>

*{
  font-family: Arial, sans-serif;
}

</style>
