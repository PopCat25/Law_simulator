<script>

export default{

  data()
  {
    return{ registation: false,
            continueButtonName: 'Авторизация',
            userName: '',
            userSurname: '',
            userEmail: '',
            userPassword: ''}
  },
  methods:{
    
    switchRegistration(){
      this.registation = !this.registation;
      this.continueButtonName  = this.registation ? 'Регистрация': 'Авторизация' ;
    },

    userData(){
      if (this.userName === '' && this.registation) alert("Введите имя");
      if (this.userSurname ==='' && this.registation) alert("Введите фамилию");
      if (this.userEmail === '') alert("Введите Email");
      if (this.userPassword === '') alert("Введите пароль");
    }
  }

}

</script>

<template>

<body>

  <form class="auth_div">

    <h1>Правовой тренажёр</h1>

    <div  class="authType_div" @click="switchRegistration()">
      <h2 :class="{ active: !registation }" >Авторизация</h2>
      <h2 :class="{ active: registation  }" >Регистрация</h2>
    </div>

    <input id="input_Name"     type="text"      v-model="userName"      placeholder="Введите имя"     v-if="registation">
    <input id="input_Surname"  type="text"      v-model="userSurname"   placeholder="Введите фамилию" v-if="registation">
    <input id="input_Email"    type="email"     v-model="userEmail"     placeholder="Введите Email">
    <input id="input_password" type="password"  v-model="userPassword"  placeholder="Введите пароль">

    <button @click="userData()" type="submit" > {{ continueButtonName }} </button>
  </form>

</body>
</template>

<style >

*{
  font-family: Arial, sans-serif;
}

body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth_div{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;
  border-radius: 20px;
  background-color: #39a56d;
  box-shadow: 15px 15px 15px 1px rgb(200, 200, 200);
}

.authType_div{
  margin-bottom: 10px;
}

h1,h2{
  color: white;
}

h2{
  display: inline;
  padding: 10px;
  cursor: pointer;
  
}

.active {
  text-decoration-line: overline;
  font-size: 100%;
}

h2:not(.active) {
  color: rgb(223, 223, 223);
  font-size: 90%;
}

input{
  border-radius: 10px;
  border-color: white;
  padding: 10px;
  margin: 10px;
}

input:hover{
  background-color: rgb(240, 240, 240);
  border-color: rgb(240, 240, 240);
}
input:focus{ 
  background-color: rgb(220, 220, 220);
  border-color: rgb(220, 220, 220);
  outline: none;
}

button{
  border-radius: 10px;
  border-color: white;
  margin: 10px;
  padding: 5px 20px 5px 20px;
  cursor: pointer;
}

button:hover{
  background-color: rgb(230, 226, 226);
}

button:active {
  background-color: rgb(200, 200, 200);
}
</style>
