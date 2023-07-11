<script setup lang="ts">
import getQuestion from '@/composables/use-quiz';
import { RouteName } from '@/constants/route-names';
import router from '@/router';
import SingleQuestion from '../components/single-question-component.vue'
import timer from '@/components/timer-component.vue'

const { questions, result, isAnswering } = getQuestion();

function toResult() {
    router.push( {name: RouteName.RESULT} )
}

</script>

<template>
    <div v-if="isAnswering == true">
        <timer></timer>
        <div class="score">
            score : {{ result }} / {{ questions.length }}
        </div>
        <div v-for="question in questions">
            <SingleQuestion :question="question" />
        </div>
    </div>
    <div v-else>
        <toResult></toResult>
    </div>
    
</template>

<style>
.score {
    border: 10px;
	font-size: 1.25rem;
    justify-content: space-between;
    margin-top: 10px;
}
</style>