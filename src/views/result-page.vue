<script setup lang="ts">

import getQuestion from '@/composables/use-quiz';
import { RouteName } from '@/constants/route-names';
import router from '@/router';

const {result, isAnswering, attempts, questions, time, startingMinutes } = getQuestion();

function backButton() {
    isAnswering.value = true;
    attempts.value = 0;
    result.value = 0;
    time.value = startingMinutes.value*60;
    
    router.push({name: RouteName.HOME})
}

</script>

<template>
    <div class="result">
        <div class="score">
        Time is UP!! Your Final score is: {{ result }} / {{ questions.length }}
    </div>
    <div>
        <button class="back" @click="backButton()">
            Try Again
        </button>
    </div>
    </div>
    
</template>

<style>

.result {
    padding: 1rem;
    border: 5px solid black;
    margin: 1rem;
}

.back {
    font-size: medium;
    margin-top: 20px;
    height: auto;
    padding-right: 5rem;
    padding-left: 5rem;
    padding-bottom: .5rem;
    padding-top: .5rem;
    vertical-align: middle;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.back:hover{
    background-color: pink;
    transition: .3s;
}

</style>