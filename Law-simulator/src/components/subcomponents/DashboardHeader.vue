<script>
import { mapActions } from 'vuex';

export default{

    methods:{
        ...mapActions(['pushToAbout','pushToCases','pushToUserDashboard','pushToUserProfile'])
    }
}
</script>

<template>
    <div class="header">
        <div class="leftSide">
            <img class="logo" src="@/components/icons/5269101_book_education_library_notebook_read_icon.svg" alt="Logo">
            <p class="about hover" :class="{'currentPage': this.$route.path == '/About'}" @click="pushToAbout()">О Правовом тренажёре</p>
            <P class="hover" :class="{'currentPage': this.$route.path == '/Cases'}" @click="pushToCases()" >Пройти кейсы</P>
            <p class="hover" :class="{'currentPage':this.$route.path == '/UserDashboard'}" @click="pushToUserDashboard()" > Прогресс</p>
        </div>
        <div class="rightSide hover" :class="{'currentPage': this.$route.path == '/Profile'}"  @click="pushToUserProfile()">
            <img class="avatar" src="@/components/icons/9026108_user_icon.svg" alt="avatar">
            <p>Личный кабинет</p>
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
    margin-right: 20px;
}
.avatar{
    height: 6vh;
    margin: 4px;
}

.currentPage{
    background-color: rgba(202, 202, 202, 0.475);
    border-radius: 15px;
}
</style>