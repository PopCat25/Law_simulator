<script>
import { mapActions, mapGetters } from 'vuex';
import DashboardHeader from './subcomponents/DashboardHeader.vue';

    export default{
        components:{DashboardHeader},
        computed:{
            ...mapGetters(['getCurrentTab', 'getCurrentUserPick', 'getUserName', 'getUserSurname', 'getUserEmail', 'getUserPassword']),
        },
        methods:{
            ...mapActions(['setCurrentTab','setUserPic']),
        },
}
</script>
<template>
    <body>    
        <header>
        <DashboardHeader></DashboardHeader>
        </header>
    
        <div class="background">
    
            <div class="backplate dataType">
                <p @click="setCurrentTab(0)" :class="{'activeTab': getCurrentTab  == 0}">Личная информация</p>
                <p @click="setCurrentTab(1)" :class="{'activeTab': getCurrentTab  == 1}">Вкладка 2</p>
                <p @click="setCurrentTab(2)" :class="{'activeTab': getCurrentTab  == 2}">Вкладка 3</p>
            </div>

            <div class="infoBlock">
                <div class="backplate avatarDiv">
                    <label for="file-input" class="ava-label">
                        <img class="ava" :src="getCurrentUserPick" alt="Предпросмотр изображения">
                    </label>
                <input id="file-input" type="file" @change="setUserPic" accept="image/*" style="display: none;">
                </div>

                <div class="backplate rightSide">
                    <table class="user-info-table">
                        <tr>
                            <td>Имя:</td>
                            <td>{{ getUserName }}</td>
                        </tr>
                        <tr>
                            <td>Фамилия:</td>
                            <td>{{ getUserSurname }}</td>
                        </tr>
                        <tr>
                            <td>Отчество:</td>
                            <td><!-- Здесь будет отображаться отчество --></td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>{{ getUserEmail }}</td>
                        </tr>
                        <tr>
                            <td>Пароль:</td>
                            <td>{{ getUserPassword }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped>
body {
    overflow: auto;
}

.background {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    margin: 40px;
    border-radius: 20px;
}

.backplate {
    background-color: rgb(220, 220, 220);
    border-radius: 20px;
    box-shadow: 10px 10px 10px 1px rgb(230, 230, 230);
    padding: 10px 10px 10px 10px;
    margin: 10px;
}

.dataType {
    display: flex;
    gap: 10px;
    color: #575757;
    align-self: flex-start;
    cursor: pointer;
}

.activeTab {
    font-size: 110%;
    color: rgb(0, 0, 0);
    text-decoration: overline;
}

.avatarDiv {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
}

.ava {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
}

.ava-label:hover .ava {
    cursor: pointer;
    transform: scale(1.02);
}

.infoBlock {
    display: flex;
}

.rightSide {
    align-self: flex-start;
    width: 50%;
    padding-top: 15px;
}

.user-info-table {
    width: 100%;
    border-collapse: collapse;
}

.user-info-table td {
    padding: 8px;
    border: 1px solid #d1d0d0;
}

.user-info-table tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.user-info-table tr:hover {
    background-color: #eaeaea;
}

.user-info-table tr:active{
    background-color: rgb(255, 255, 255);
}
</style>
