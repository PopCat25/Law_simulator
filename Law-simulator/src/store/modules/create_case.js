

export default {
    actions: {
        async appendCase({ commit, state }) {
            if (state.caseName === '') {
                alert('Введите имя кейса');
                return false;
            }

            const hasSlideWithoutType = state.slides.some(slide => {
                if (slide.type === '') {
                    alert('Есть слайды без типа');
                    return true;
                }
                return false;
            });

            if (hasSlideWithoutType) {
                return false;
            }

            const newCase = {
                name: state.caseName,
                slides: state.slides,
            }

            commit('appendCase', newCase, { root: true });
        }
    },
    mutations: {
        updateEditIndex(state, index) {
            state.editIndex = index;
        },
        updateSlideName(state, newName) {
            if (state.activeIndex !== -1) {
                state.slides[state.activeIndex].name = newName;
            }
        },
        appendSlide(state) {
            let lastSlideIndex = state.slides.length;
            state.slides.push(
                {
                    name: `Слайд ${lastSlideIndex + 1}`,
                    type: '',
                    text: '',
                    choices: []
                });
            state.editIndex = lastSlideIndex;
            state.activeIndex = lastSlideIndex;
        },
        updateActiveIndex(state, index) {
            state.activeIndex = index;
        },
        deleteActiveSlide(state) {
            if (state.activeIndex !== -1) {
                state.slides.splice(state.activeIndex, 1);
                state.activeIndex = -1;
            }
        },
        moveSlideUp(state) {
            const index = state.activeIndex;
            if (index > 0 && index != -1) {
                [state.slides[index], state.slides[index - 1]] = [state.slides[index - 1], state.slides[index]];
                state.activeIndex = index - 1;
            }
        },
        moveSlideDown(state) {
            const index = state.activeIndex;
            if (index < state.slides.length - 1 && index != -1) {
                [state.slides[index], state.slides[index + 1]] = [state.slides[index + 1], state.slides[index]];
                state.activeIndex = index + 1;
            }
        },
        updateSlideType(state, currentType){
            state.slides[state.activeIndex].type = currentType;
        },
        updateSlideText(state, newText){
            state.slides[state.activeIndex].text = newText;
        },
        appendSlideChoice(state, newChoice){
            state.slides[state.activeIndex].choices.push(newChoice);
        },
        deleteSlideChoice(state,choiceIndex){
            state.slides[state.activeIndex].choices.splice(choiceIndex, 1);
        },
        updateSlideChoice(state, payload) {
            const { index, choice } = payload;
            state.slides[state.activeIndex].choices[index] = choice;
        },
        updateCaseName(state, newCaseName){
            state.caseName = newCaseName;
        }
    },
    state: {
        caseName: '',
        slides: [{
            name: 'Начало',
            type: 'choice',
            text: '',
            choices:[{
                choiceText: 'testChoice',
                errMessage: 'Это ошибка',
            }],
            }, {
            name: 'Конец',
            type: 'fillDoc',
            text: '',
            choices:[],
            },
        ],
        editIndex: -1,
        activeIndex: -1,
        slideTypes: [
            { text: '--Выберите тип окна--', value: '' },
            { text: 'Слайд выбора', value: 'choice' },
            { text: 'Слайд документов', value: 'fillDoc' }],
    },
    getters: {
        getSlides(state) {
            return state.slides;
        },
        getEditIndex(state) {
            return state.editIndex;
        },
        getActiveIndex(state) {
            return state.activeIndex;
        },
        getSlideTypes(state) {
            return state.slideTypes;
        },
        getSlideName(state){
            return state.slides[state.activeIndex].name;
        },
        getSlideType(state){
            return state.slides[state.activeIndex].type;
        },
        getSlideText(state){
            return state.slides[state.activeIndex].text;
        },
        getSlideChoice(state){
            return state.slides[state.activeIndex].choices;
        },
        getCaseName(state){
            return state.caseName;
        }
    },

    modules: {}

}