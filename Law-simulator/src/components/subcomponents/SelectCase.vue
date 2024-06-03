<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: {
        editMode: Boolean,
    },
    data() {
        return {
            searchQuery: '',
            slideFilter: 'all', // new property for filtering
        };
    },
    computed: {
        ...mapGetters(['getCases']),
        filteredCases() {
            const query = this.searchQuery.toLowerCase();
            let cases = this.getCases.map((caseItem, index) => ({ caseItem, index }))
                .filter(({ caseItem }) => caseItem.caseName.toLowerCase().includes(query));
                
            if (this.slideFilter === 'bigFirst') {
                cases = cases.sort((a, b) => b.caseItem.slides.length - a.caseItem.slides.length);
            } else if (this.slideFilter === 'smallFirst') {
                cases = cases.sort((a, b) => a.caseItem.slides.length - b.caseItem.slides.length);
            }
            
            return cases;
        },
    },
    methods: {
        ...mapMutations(['deleteCase']),
    },
};
</script>

<template>
    <div style="display: flex; flex-direction: row;gap: 50px;">
        <div class="caseFilter backplate">
            <p>Фильтры</p>
            <label>
                Количество слайдов:
                <select v-model="slideFilter">
                    <option value="all">Все</option>
                    <option value="bigFirst">Большее число слайдов</option>
                    <option value="smallFirst">меньшее число слайдов</option>
                </select>
            </label>
        </div>

        <div class="caseSelector">
            <input class="backplate" v-model="searchQuery" type="text" placeholder="Поиск кейса по заголовку" />
            <p v-if="this.filteredCases.length == 0" class="backplate">Не найдено ни одного кейса</p>
            <div v-else class="backplate" v-for="({ caseItem, index }, i) in filteredCases" :key="i">
                <h3>{{ caseItem.caseName }}</h3>
                <p class="htmlText" v-html="caseItem.slides[0].text"> </p>
                <div class="CardBottom">
                    <button @click="this.$emit('updateEditIndex',index)">Выбрать</button>
                    <button v-if="editMode" id="deleteBtn" @click="deleteCase(index)">Удалить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.caseFilter {
    max-width: 15vw;
    align-self: flex-start;
    margin-right: 1rem; 
}

.caseSelector {
    display: flex;
    flex-direction: column;
    
}

.backplate {
    display: flex;
    align-self: flex-start; 
    justify-content: space-between;
    flex-direction: column;
    width: 50vw;
    text-align: center;
}

.htmlText {
    word-wrap: break-word;
    overflow: hidden;
    max-height: 300px;
}

.CardBottom {
    align-self: flex-end;
}

#deleteBtn {
    background-color: brown;
    border-color: brown;
}

#deleteBtn:hover {
    background-color: rgb(134, 32, 32);
    border-color: rgb(134, 32, 32);
}

#deleteBtn:active {
    background-color: rgb(109, 24, 24);
    border-color: rgb(109, 24, 24);
}
</style>
