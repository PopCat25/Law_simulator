

export default {
    actions: {
        editName(ctx, index) {
            ctx.commit('updateEditIndex',index);
        },
        appendSlide(ctx){
            ctx.commit('appendSlide');
        },
    },
    mutations: {
        updateEditIndex(state,index){
            state.editIndex = index;
        },
        updateSlideName(state, newName) {
            if (state.editIndex !== -1) {
                state.slides[state.editIndex].name = newName;
            }
        },
        appendSlide(state){
            let num = state.slides.length 
            state.slides.push(
                {name:`Слайд ${num + 1}`,
                type: 'text',
                text: ''})
        }
    },
    state: {

        slides: [{
            name: 'Слайд 1',
            type: 'text',
            text: '',
        }, {
            name: 'Слайд 2',
            type: 'text',
            text: '',
        },
        ],
        editIndex: -1,

    },
    getters: {
        getSlides(state) {
            return state.slides;
        },
        getEditIndex(state) {
            return state.editIndex;
        },
    },

    modules: {}

}