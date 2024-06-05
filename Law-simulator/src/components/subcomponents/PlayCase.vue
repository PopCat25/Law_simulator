<template>
    <div class="container">
        <div class="leftSide backplate">
            <button @click="$emit('updateEditIndex',-1)">Назад</button>
            <p>Пройдено слайдов {{ slideCount.currentSlide }} из {{ slideCount.allSlides }}</p>
            <p>Количество ошибок: {{ errCount }}</p>
        </div>
        
        <div class="mainPlace backplate">

        </div>

        <div class="rightSide backplate">
            <div class="timer">
                <img src="../icons/timer.svg" alt="timer" style="height: 6vh;">
                <span class="timerText">{{ formattedCaseTime }}</span>
            </div>
            <button>Пауза</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        playedCase: Object
    },
    data() {
        return {
            currentSlide: 0,
            errCount: 0,
            caseTime: 0,
            timer: null
        }
    },
    computed: {
        slideCount() {
            return {
                currentSlide: this.currentSlide,
                allSlides: this.playedCase.slides.length,
            }
        },
        formattedCaseTime() {
            const minutes = Math.floor(this.caseTime / 60);
            const seconds = this.caseTime % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.caseTime++;
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.leftSide {
    width: 13vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mainPlace {
    width: 50vw;
}

.rightSide {
    width: 10vw;
    max-height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timer{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.timerText{
    font-weight: 600;
    font-size: large;
    grid-column: 3;
    align-self: center;
    justify-self: right;
}
</style>
