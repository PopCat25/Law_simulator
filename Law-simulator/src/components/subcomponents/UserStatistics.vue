<template>
    <h3 class="backplate">Сводная статистика</h3>

    <div class="chartContainer">
        <div>
            <h4>Распределение кейсов</h4>
            <div><Pie :data="caseDistributionData" :options="chartOptions" /></div>
        </div>    
        <div>
            <h4>Время выполнения кейсов</h4>
            <div><Line :data="caseTimeData" :options="chartOptions" /></div>
        </div>
        <div>
            <h4>Количество ошибок в кейсах</h4>
            <div><Bar :data="caseErrorData" :options="chartOptions" /></div>
        </div>
            
    </div>
    <hr style="color: black; width: 90%; background-color: grey">
    <div class="tableContainer backplate">
        <table class="user-info-table">
            <tr>
                <td><p>Количество завершённых кейсов: {{ completedCases }}</p></td>
                <td><p>Покинуто кейсов: {{ abandonedCases }}</p></td>
            </tr>
            <tr>
                <td><p>Среднее время на выполнение кейса: {{ averageCaseTime.toFixed(2) }}</p></td>
                <td><p>Среднее количество ошибок на кейс: {{ averageErrorsPerCase.toFixed(2) }}</p></td>
            </tr>
            <tr>
                <td><p>Количество ошибок: {{ totalErrors }}</p></td>
                <td><p>Самый длинный кейс по времени: {{ longestCaseTime }}</p></td>
            </tr>
        </table>
    </div>
    <!-- <button @click="otladka" > Otladka</button> -->


</template>

<script>
import { Line, Pie, Doughnut, Radar, PolarArea, Bubble, Bar } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    components: { Line, Pie, Doughnut, Radar, PolarArea, Bubble, Bar},
    methods:{
        ...mapGetters(['getStatisticData']),
    },
    mounted(){
        let allCaseTime  = 0;
        this.$store.state.statisticData.forEach((caseRecord, index) => {
            if (caseRecord.endFlag) {
                this.completedCases += 1;
            } else {
                this.abandonedCases += 1;
            }

            if(caseRecord.caseTime > this.longestCaseTime){
                this.longestCaseTime = caseRecord.caseTime;
            }

            allCaseTime += caseRecord.caseTime;
            this.averageCaseTime = allCaseTime / index;
            this.totalErrors += caseRecord.errCount;
            this.averageErrorsPerCase = this.totalErrors / index;
        });

    },
    data() {
        return {
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            },
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39]
                    }
                ]
            },
            completedCases: 0,
            abandonedCases: 0,
            averageCaseTime: 0,
            averageErrorsPerCase: 0,
            totalErrors: 0,
            longestCaseTime: 0,
        }
    },
    computed:{
        caseDistributionData() {
            return {
                labels: ['Закончено кейсов', 'Покинуто кейсов'],
                datasets: [
                    {
                        label:'Распределение кейсов',
                        backgroundColor: ['#42b983', '#ff6384'],
                        data: [ this.completedCases, this.abandonedCases]
                    }
                ]
            }
        },
        caseTimeData(){
            const cases = this.$store.state.statisticData;
            const last10Cases = cases.slice(-10); 
            const sequence = last10Cases.map((_, i) => `Кейс №: ${i}`);
            return {
                labels: sequence,
                datasets: [
                    {
                        label: 'Время выполнения кейса',
                        backgroundColor: '#ff6384',
                        data: last10Cases.map(caseRecord => caseRecord.caseTime)
                    }
                ]
            }
        },
        caseErrorData(){
            const cases = this.$store.state.statisticData;
            const last10Cases = cases.slice(-10); 
            const sequence = last10Cases.map((_, i) => `Кейс №: ${i}`);
            return {
                labels: sequence,
                datasets: [
                    {
                        label: 'ОШибок в кейсах',
                        backgroundColor: '#ff6384',
                        data:last10Cases.map(caseRecord => caseRecord.errCount)
                    }
                ]
            }
        }
    },
}
</script>

<style scoped>
h3{
    align-self: center;
}

.tableContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 80%;
}

.user-info-table {
    width: 100%;
    border-collapse: collapse;
}

.user-info-table td {
    padding: 8px;
    border: 1px solid #d1d0d0;
    text-align: center;
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

.chartContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>