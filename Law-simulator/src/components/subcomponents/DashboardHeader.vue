<script>
// export default{

// }
</script>

<template>
    <div class="header">
        <div class="leftSide">
            <img class="logo" src="@/components/icons/5269101_book_education_library_notebook_read_icon.svg" alt="Logo">
            <p class="name">Правовой тренажёр</p>
        </div>
        <P> Пройти кейсы</P>
        <P> Прогресс</P>
        <div class="rightSide">
            <img class="avatar" src="@/components/icons/9026108_user_icon.svg" alt="avatar">
            <p>Личный кабинет</p>
        </div>
        
    </div>
</template>

<style scoped>

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
    align-items: center;
    margin-left: 10px;
    
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
    height: 3vw;
    margin: 4px;
}
</style>