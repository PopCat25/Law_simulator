<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';


export default {
    created() {
        this.localUserName = this.userName;
        this.localUserSurname = this.userSurname;
        this.localUserPatronymic = this.userPatronymic;
        this.localUserEmail = this.userEmail;
        this.localUserPassword = this.userPassword;
    },


    computed: {
        ...mapGetters(['getCurrentUserPick']),
        ...mapState({
            userName: state => state.acces_control.userName,
            userSurname: state => state.acces_control.userSurname,
            userPatronymic: state => state.acces_control.userPatronymic,
            userEmail: state => state.acces_control.userEmail,
            userPassword: state => state.acces_control.userPassword
        }),
    },

    methods: {
        ...mapActions(['setUserPic']),
        ...mapMutations(['updateUserName', 'updateUserSurname', 'updateUserPatronymic', 'updateUserEmail', 'updateUserPassword']),

        saveField() {
            this.updateUserName(this.localUserName);
            this.updateUserSurname(this.localUserSurname);
            this.updateUserPatronymic(this.localUserPatronymic);
            this.updateUserEmail(this.localUserEmail);
            this.updateUserPassword(this.localUserPassword);
        },
    },
}
</script>

<template>
    <div class="infoBlock">
        <div class="backplate avatarDiv">
            <label for="file-input" class="ava-label">
                <img class="ava" :src="getCurrentUserPick" alt="Предпросмотр изображения">
            </label>
            <input id="file-input" type="file" @change="setUserPic" accept="image/*" style="display: none;">
        </div>

        <div class="backplate rightSide">
            <form @submit.prevent="saveField">
                <table class="user-info-table">
                    <tr>
                        <td> <label for="nameInput">Имя:</label> </td>
                        <td>
                            <input type="text" id="nameInput" placeholder="Введите имя" :value="localUserName"
                                @input="localUserName = $event.target.value" required>
                        </td>
                    </tr>
                    <tr>
                        <td> <label for="surnameInput">Фамилия:</label> </td>
                        <td>
                            <input type="text" id="surnameInput" placeholder="Введите фамилию" :value="localUserSurname"
                                @input="localUserSurname = $event.target.value" required>
                        </td>
                    </tr>
                    <tr>
                        <td> <label for="patronymicInput">Отчество:</label> </td>
                        <td>
                            <input type="text" id="patronymicInput" placeholder="Введите отчество"
                                :value="localUserPatronymic" @input="localUserPatronymic = $event.target.value"
                                required>
                        </td>
                    </tr>
                    <tr>
                        <td> <label for="emailInput">E-mail:</label> </td>
                        <td> <input type="email" id="emailInput" placeholder="Введите E-mail" :value="localUserEmail"
                                @input="localUserEmail = $event.target.value" required>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="passwordInput">Пароль:</label></td>
                        <td>
                            <input type="password" id="passwordInput" placeholder="Введите пароль"
                                :value="localUserPassword" @input="localUserPassword = $event.target.value" required>
                        </td>
                    </tr>
                </table>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.infoBlock {
    display: flex;
}

.backplate {
    background-color: rgb(220, 220, 220);
    border-radius: 20px;
    box-shadow: 10px 10px 10px 1px rgb(230, 230, 230);
    padding: 10px 10px 10px 10px;
    margin: 10px;
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

.user-info-table tr:active {
    background-color: rgb(255, 255, 255);
}

input {
    width: 100%;
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    font-size: medium;
}
button{
    float: right;
}
</style>
