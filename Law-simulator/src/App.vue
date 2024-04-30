<script>

export default{

  data()
  {
    return{ info: 'text.txt',
            userLogin: '',
            userPassword: ''}
  },
  methods:{
    userData(){
      this.info = 'ТЕКСТИК'
    }
  }

}

</script>

<template>

<body>

  <form className="auh_div">
    <h1>Авторизация</h1>

    <input id="input_login"    type="text"     v-model="userLogin"    placeholder="Введите логин">
    <input id="input_password" type="password" v-model="userPassword" placeholder="Введите пароль">

    <button @click="userData()">Ответить</button>
  </form>

  <!-- <p>{{ info }}</p> -->
  <p>{{ userLogin }}</p>
  <p>{{ userPassword }}</p>

</body>
</template>

<style >

.auh_div{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;
  border-radius: 20px;
  background-color: #39a56d;
  box-shadow: 10px 10px 10px 1px rgb(153, 153, 153);
}

h1{
  color: white;
}

input{
  border-radius: 10px;
  border-color: white;
  padding: 10px;
  margin: 10px;
}

button{
  margin: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
