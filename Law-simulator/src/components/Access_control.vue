<script>
import { mapGetters,mapActions,mapState,mapMutations } from 'vuex';

export default{
  computed: {
    ...mapGetters(['getRegistrationStatus', 'getAuthErrorFlag', 'getcontinueButtonName']),
    ...mapState({
      userName: state => state.acces_control.userName,
      userSurname: state => state.acces_control.userSurname,
      userEmail: state => state.acces_control.userEmail,
      userPassword: state => state.acces_control.userPassword
    }),
    userNameInput: {
      get() {
        return this.userName;
      },
      set(value) {
        this.updateUserName(value);
      }
    },
    userSurnameInput: {
      get() {
        return this.userSurname;
      },
      set(value) {
        this.updateUserSurname(value);
      }
    },
    userEmailInput: {
      get() {
        return this.userEmail;
      },
      set(value) {
        this.updateUserEmail(value);
      }
    },
    userPasswordInput: {
      get() {
        return this.userPassword;
      },
      set(value) {
        this.updateUserPassword(value);
      }
    }
  },
  methods: {
    ...mapActions(['switchRegistration', 'authUser']),
    ...mapMutations({
      updateUserName: 'updateUserName',
      updateUserSurname: 'updateUserSurname',
      updateUserEmail: 'updateUserEmail',
      updateUserPassword: 'updateUserPassword'
    })
  }
}
</script>

<template>

<body>

  <form class="auth_div" @submit.prevent="authUser()">

    <h1>Правовой тренажёр</h1>

    <div  class="authType_div" @click="switchRegistration()">
      <h2 :class="{ 'active': !this.$store.getters.getRegistrationStatus }" >Авторизация</h2>
      <h2 :class="{ 'active': this.$store.getters.getRegistrationStatus  }" >Регистрация</h2>
    </div>

    <input id="input_Name"     type="text"      v-model="userNameInput"      placeholder="Введите имя"     v-if="this.$store.getters.getRegistrationStatus" required>
    <input id="input_Surname"  type="text"      v-model="userSurnameInput"   placeholder="Введите фамилию" v-if="this.$store.getters.getRegistrationStatus" required>
    <input id="input_Email"    type="email"     v-model="userEmailInput"     placeholder="Введите Email"  required>
    <input id="input_password" type="password"  v-model="userPasswordInput"  placeholder="Введите пароль" required>

    <p :class="['authError' ,{'activeAuthError': this.$store.getters.getAuthErrorFlag }]">Ошибка авторизации</p>

    <button type="submit"> {{ this.$store.getters.getcontinueButtonName }} </button>
  </form>

</body>
</template>

<style scoped>

body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(213, 244, 206);
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

.authError{
  display: none;
}

.activeAuthError{
  display: block;
  color: red;
}
</style>
