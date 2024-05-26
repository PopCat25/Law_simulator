<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {

    computed: {
        ...mapGetters(['getSlideTypes','getActiveIndex', 'getSlides']),
        slideNameInput:{
            get(){
                if(this.getActiveIndex !== -1){
                    return this.getSlides[this.getActiveIndex].name;
                } else{
                    return 'Выберите слайд';
                }
            },
            set(value){
                if (this.getActiveIndex !== -1 && value.length !== 0) {
                    this.updateSlideName(value);
                }
            },
        },
        slideTypeInput:{
                get(){
                    if(this.getActiveIndex !== -1){
                        return this.getSlides[this.getActiveIndex].type;
                    }
                },
                set(value){
                    if(this.getActiveIndex !== -1){
                        this.updateSlideType(value);
                    }
                }
            },
    },
    methods: {
        ...mapMutations(['updateSlideName', 'updateSlideType'])
    },
}

</script>

<template>
    <div class="slideEditor">
        <div class="typeNameDiv">
            <input  class="slideType" v-model.lazy="slideNameInput">
            <select class="slideType" v-model="slideTypeInput">
                <option v-for="slideTypes in getSlideTypes" :value="slideTypes.value">
                {{ slideTypes.text }}
                </option>
            </select>
        </div>
        <textarea class="text">
            <div style="float: right;">TEKS TEKS TEKSawawdwdaw</div>
            <p>Lorem ipsum dolor sit amet _______ adipisicing elit. Cumque labore excepturi aspernatur, beatae nobis dicta repellat dolorem nemo non vero optio voluptas neque pariatur quasi natus repudiandae animi possimus? Nostrum.</p>
        </textarea>
        <button>Создать кейс</button>
    </div>

</template>

<style scoped>
.slideEditor{
    display: flex;
    gap: 10px;
    flex-direction: column;
    max-height: 500px;

    flex-shrink: 0; /* Не сжимается */
    flex-basis: auto; /* Размер в соответствии с содержимым */
    overflow: auto; 
}

.typeNameDiv{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.slideType{
    border-radius: 20px;
    cursor: pointer;
}

.text{
    height: auto;
    width: 65vw;
    background-color: rgb(255, 255, 255);
    min-height:200px;
    border-radius: 20px;
    padding: 10px 10px 10px 10px;
}

button{
    justify-self: center;
    align-self: center;
}
</style>