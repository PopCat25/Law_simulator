<script>
import { mapActions, mapGetters } from 'vuex';

export default{
    computed:{
        ...mapGetters(['getUserName','getUserSurname','getCurrentUserPick']),
        usernameText(){
            if(this.$store.getters.getUserName == '' || this.$store.getters.getUserSurname == '' ){
                return 'Личный кабинет'
            } else{
                return this.$store.getters.getUserSurname + ' ' + this.$store.getters.getUserName
            }
        }
    },

    methods:{
        ...mapActions(['pushToAbout','pushToCases','pushToUserDashboard','pushToUserProfile', 'pushToEditor']),
    }
}
</script>

<template>
    <div class="header">
        <div class="leftSide">
            <img class="logo" src="@/components/icons/book_icon.svg" alt="Logo">
            <p class="about hover" :class="{'currentPage': this.$route.path == '/About'}" @click="pushToAbout()">О Правовом тренажёре</p>
            <p class="hover" :class="{'currentPage': this.$route.path == '/Cases'}" @click="pushToCases()" >Пройти кейсы</p>
            <p class="hover" :class="{'currentPage':this.$route.path == '/UserDashboard'}" @click="pushToUserDashboard()" > Прогресс</p>
            <p class="hover" :class="{'currentPage':this.$route.path == '/Editor'}" @click="pushToEditor()">Редактор кейсов</p>
        </div>
        <div class="rightSide hover" :class="{'currentPage': this.$route.path == '/Profile'}"  @click="pushToUserProfile()">
            <img class="avatar" src="@/components/icons/9026108_user_icon.svg" alt="avatar">
            <p>{{usernameText}}</p>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #39a56d;
}

.logo{
    height: 8vh;
}

.leftSide{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
}
.hover {
    padding: 10px 5px 10px 5px;
    box-sizing: border-box;
    cursor: pointer;
}

.hover:hover{
    background-color: rgba(202, 202, 202, 0.475);
    border-radius: 15px;
}
.hover:active{
    background-color: rgba(157, 157, 157, 0.475);
}

p{
    font-size: 20px;
    color: white;
}
.rightSide{
    display: flex;  
    align-items: center;
    gap: 5px;
    margin-right: 20px;
}
.avatar{
    height: 6vh;
}

.currentPage{
    background-color: rgba(202, 202, 202, 0.475);
    border-radius: 15px;
}
</style>