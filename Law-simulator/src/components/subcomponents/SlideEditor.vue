<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            isModalVisible: false,
            isEditMode: false,
            currentChoiceIndex: null,
            newChoiceText: '',
            newErrorMessage: '',
            emptyNameFlag: false,
        };
    },
    computed: {
        ...mapGetters(['getSlideTypes', 'getActiveIndex', 'getSlides', 'getSlideName', 'getSlideType', 'getSlideText', 'getSlideChoice']),
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
            },
            set(value) {
                if (this.getActiveIndex !== -1) {
                    this.updateSlideText(value);
                }
            }
        }
    },
    methods: {
        ...mapMutations(['updateSlideName', 'updateSlideType', 'updateSlideText', 'appendSlideChoice', 'updateSlideChoice', 'deleteSlideChoice']),
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
            <input class="slideType" v-model.lazy="slideNameInput">
            <select class="slideType" v-model="slideTypeInput">
                <option v-for="slideTypes in getSlideTypes" :value="slideTypes.value">
                    {{ slideTypes.text }}
                </option>
            </select>
        </div>
        <textarea class="text" v-model="slideTextInput"></textarea>
        
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

        <button>Создать кейс</button>

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

.slideType {
    border-radius: 20px;
    cursor: pointer;
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
