<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Editor from '@tinymce/tinymce-vue';

export default {
    components: {
        Editor
    },
    data() {
        return {
            isModalVisible: false,
            isEditMode: false,
            currentChoiceIndex: null,
            newChoiceText: '',
            newErrorMessage: '',
            emptyNameFlag: false,
            editorInit: {
                height: 300,
                width: '100%',
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold underline italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                menubar: 'file edit view insert format tools'
            }
        };
    },
    computed: {
        ...mapGetters(['getSlideTypes', 'getActiveIndex', 'getSlides', 'getSlideName', 'getSlideType', 'getSlideText', 'getSlideChoice','getCaseName','getEditedCaseIndex']),
        isDisabled(){
            return this.getActiveIndex === -1;
        },
        caseNameInput:{
            get(){
                return this.getCaseName;
            },
            set(value){
                this.updateCaseName(value);
            }
        },
        slideNameInput: {
            get() {
                if (this.getActiveIndex !== -1) {
                    return this.getSlideName;
                } else {
                    return 'Выберите слайд';
                }
            },
            set(value) {
                if (this.getActiveIndex !== -1 && value.length !== 0) {
                    this.updateSlideName(value);
                }
            },
        },
        slideTypeInput: {
            get() {
                if (this.getActiveIndex !== -1) {
                    return this.getSlideType;
                }
                return this.getSlideTypes[0].value;
            },
            set(value) {
                if (this.getActiveIndex !== -1) {
                    this.updateSlideType(value);
                }
            }
        },
        slideTextInput: {
            get() {
                if (this.getActiveIndex !== -1) {
                    return this.getSlideText;
                }
                return '';
            },
            set(value) {
                if (this.getActiveIndex !== -1) {
                    this.updateSlideText(value);
                }
            }
        }
    },
    methods: {
        ...mapMutations(['updateSlideName', 'updateSlideType', 'updateSlideText', 'appendSlideChoice', 'updateSlideChoice', 'deleteSlideChoice','updateCaseName']),
        ...mapActions(['appendCase']),
        showModal(isEdit = false, index = null) {
            this.isEditMode = isEdit;
            this.currentChoiceIndex = index;

            if (isEdit && index !== null) {
                const choice = this.getSlideChoice[index];
                this.newChoiceText = choice.choiceText;
                this.newErrorMessage = choice.errMessage;
            } else {
                this.newChoiceText = '';
                this.newErrorMessage = '';
            }

            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
            this.emptyNameFlag = false;
        },
        saveChoice() {
            this.emptyNameFlag = false;
            if(this.newChoiceText.length == 0){
                this.emptyNameFlag = true;
                return;
            }

            if (this.isEditMode && this.currentChoiceIndex !== null) {
                this.updateSlideChoice({
                    index: this.currentChoiceIndex,
                    choice: {
                        choiceText: this.newChoiceText,
                        errMessage: this.newErrorMessage
                    }
                });
            } else {
                this.appendSlideChoice({
                    choiceText: this.newChoiceText,
                    errMessage: this.newErrorMessage
                });
            }

            this.newChoiceText = '';
            this.newErrorMessage = '';
            this.closeModal();
        }
    }
};
</script>

<template>
    <div class="slideEditor">
        <div class="typeNameDiv">
            <input class="caseName" placeholder="Название кейса" v-model="caseNameInput">
            <input class="slideType" v-model.lazy="slideNameInput" :disabled="isDisabled">
            <select class="slideType" v-model="slideTypeInput" :disabled="isDisabled">
                <option v-for="slideTypes in getSlideTypes" :value="slideTypes.value">
                    {{ slideTypes.text }}
                </option>
            </select>
        </div>
        <!-- <textarea class="text" v-model="slideTextInput"></textarea> -->
        <Editor v-model="slideTextInput" :init="editorInit" api-key="dghtrtfpm5jfvlzg7auirq3ncphh1se5otwnux8dl953sj38" :disabled="isDisabled"></Editor>
        
        <div class="choicesDiv" v-if="slideTypeInput == 'choice'">
            <div class="choice" v-for="(choice, index) in getSlideChoice" :key="index">
                <button class="choiceButton" @click="showModal(true, index)">
                    {{ choice.choiceText }}
                </button>
                <img src="../icons/trashbin_icon.svg" alt="bin" class="deleteImage" @click="deleteSlideChoice(index)">
            </div>
            <div class="appendChoice" @click="showModal(false)">
                <img src="../icons/green cross.svg" alt="cross" class="appendChoiceImg">
                Добавить выбор
            </div>
        </div>

        <button @click="appendCase">{{ this.getEditedCaseIndex < 0  ? 'Создать кейс':'Редактировать кейс' }}</button>

        <div v-if="isModalVisible" class="modal">
            <div class="modalContent">
                <h3>{{ isEditMode ? 'Редактировать выбор' : 'Добавить выбор' }}</h3>
                <input v-model="newChoiceText" placeholder="Введите текст выбора">
                <input v-model="newErrorMessage" placeholder="Введите текст ошибки">
                <p v-if="this.emptyNameFlag" style="color: red;">Введите текст выбора</p>
                <button @click="saveChoice">Сохранить</button>
                <button @click="closeModal">Отмена</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.backplate{
    width: 70vw;
}

.slideEditor {
    display: flex;
    gap: 10px;
    flex-direction: column;
    flex-shrink: 0;
    flex-basis: auto;
    overflow: auto;
}

.typeNameDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.caseName{
    background-color: rgba(255, 255, 255, 0.5);
    border: rgba(0, 0, 0, 0);
    text-align: center;
    font-size: larger;
    cursor: auto;
    border-radius: 5px;
}
.slideType {
    border-radius: 20px;
    cursor: auto;
}

.text {
    height: auto;
    width: 65vw;
    background-color: rgb(255, 255, 255);
    min-height: 200px;
    min-width: 200px;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 10px;
}

button {
    align-self: flex-end;
}

.choicesDiv {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.choice {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.choiceButton {
    white-space: normal;
    word-wrap: break-word;
    max-width: 500px;
}

.deleteImage {
    height: 20px;
    width: 20px;
    padding: 5px;
    cursor: pointer;
    border-radius: 20px;
}

.deleteImage:hover {
    background-color: rgb(170, 170, 170);
}

.deleteImage:active {
    background-color: rgb(150, 150, 150);
}

.appendChoice {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    padding-right: 5px;
}

.appendChoice:hover {
    background-color: rgb(180, 180, 180);
}

.appendChoice:active {
    background-color: rgb(160, 160, 160);
}

.appendChoiceImg {
    width: 40px;
    height: 40px;
}

/* Стили для модального окна */
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
    z-index: 1050; /*Ебаный тулбар TinyMCE вылазит поверх модального окна без этой строки */
}

.modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.modalContent input {
    display: block;
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
</style>
