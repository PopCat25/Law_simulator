<template>
    <div class="container">
        <div class="leftSide backplate">
            <button @click="$emit('updateEditIndex',-1)">Назад</button>
            <p>Пройдено слайдов {{ currentSlideIndex }} из {{ playedCase.slides.length }}</p>
            <p>Количество ошибок: {{ errCount }}</p>
        </div>
        
        <div class="mainPlace backplate">
            <div v-if="currentSlideData.type != 'fillDoc'" class="caseText" v-html="currentSlideData.text"></div>
            <Editor v-else :init="editorInit" api-key="dghtrtfpm5jfvlzg7auirq3ncphh1se5otwnux8dl953sj38"
            v-model="currentSlideText"></Editor>

            <div class="btnDiv">
                <div v-if="currentSlideData.type == 'fillDoc'" style="margin-top: 5vh;">
                    <button  @click="filldockCheckHandler">Проверить</button>
                    <button @click="resetEditor">Восстановить шаблон</button>
                </div>
                <button v-else v-for="(btn,index) in currentSlideData.choices"
                :key="index" @click="choiceCheckHandler(btn.errMessage)">{{ btn.choiceText }}</button>
            </div>
        </div>

        <div class="rightSide backplate">
            <div class="timer">
                <img src="../icons/timer.svg" alt="timer" style="height: 6vh;">
                <span class="timerText">{{ formattedCaseTime }}</span>
            </div>
            <button @click="invertModalPauseFlag">Пауза</button>
        </div>
    </div>
    <!-- <button @click="console.log(dockFilluserText)">Отладка</button> -->
    <!-- modals -->

    <div v-if="errorModalFlag" class="modal">
        <div class="modalContent" >
            <h3>Ошибка</h3>
            <p>{{errorModalText}}</p>
            <button @click="closeErrModal">Ок</button>
        </div>
    </div>

    <div v-if="pauseModalFlag" class="modal">
            <div class="modalContent">
                <h3>Пауза</h3>
                <button @click="invertModalPauseFlag">Продолжить</button>
            </div>
        </div>

</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
    components:{Editor},
    props: {
        playedCase: Object
    },
    emits: ['updateEditIndex'],
    data() {
        return {
            currentSlideIndex: 0,
            errCount: 0,
            caseTime: 0,
            dockFilluserText: '',
            pauseModalFlag: false,
            errorModalFlag: false,
            errorModalText: '',
            editorInit: {
                height: '50vh',
                width: '100%',
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold underline italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
            }
        }
    },
    computed: {
        formattedCaseTime() {
            const minutes = Math.floor(this.caseTime / 60);
            const seconds = this.caseTime % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        currentSlideData:{
            get(){
                return {
                    name: this.playedCase.slides[this.currentSlideIndex].name,
                    type: this.playedCase.slides[this.currentSlideIndex].type,
                    text: this.playedCase.slides[this.currentSlideIndex].text,
                    choices: this.playedCase.slides[this.currentSlideIndex].choices,
                };
            }
        },
        currentSlideText:{
            get(){
                return this.dockFilluserText;
            },
            set(value){
                this.dockFilluserText = value;
            }
        }

    },
    watch: {
        currentSlideIndex() {
            if (this.currentSlideData.type === 'fillDoc') {
                this.dockFilluserText = this.cleanText(this.currentSlideData.text);
            }
        }
    },
    mounted() {
        if (this.currentSlideData.type === 'fillDoc') {
            this.dockFilluserText = this.cleanText(this.currentSlideData.text);
        }
        this.timer = setInterval(() => {
            if(!this.pauseModalFlag){
                this.caseTime++;
            }
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
    methods:{
        invertModalPauseFlag(){
            this.pauseModalFlag = !this.pauseModalFlag;
        },
        closeErrModal(){
            this.errorModalFlag = false;
        },
        currentSlideIndexIncrement(){
            if(this.currentSlideIndex >= this.playedCase.slides.length -1){
                alert('вы закончили кейс')
            } else {
                this.currentSlideIndex++
            }
        },
        choiceCheckHandler(errorText){
            if(errorText.length != 0){
                this.errCount++;
                this.errorModalFlag = true;
                this.errorModalText = errorText;
            } else{
                this.currentSlideIndexIncrement()
            }
        },
        filldockCheckHandler(){
            this.currentSlideIndexIncrement()
        },
        cleanText(text) {
            return text.replace(/{[^}]*}/g, '______');
        },
        resetEditor(){
            this.dockFilluserText = this.cleanText(this.currentSlideData.text);
        },
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
    width: 60vw;
    display: flex;
    flex-direction: column;
}

.caseText{
    background-color:white;
    width: 100%;
    border-radius: 20px;
    height: 50vh;
    align-self: flex-end;
    overflow: auto;
    padding: 10px;
    box-sizing: border-box;
}

.btnDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
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
/* Стили модального окна */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1050;
}

.modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}
</style>
