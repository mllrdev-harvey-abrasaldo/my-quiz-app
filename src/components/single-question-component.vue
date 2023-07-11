<script setup lang="ts">
import getQuestion from '@/composables/use-quiz';
import type IQuestion from '@/interface/question';
import type { PropType } from 'vue';
import { ref } from 'vue';

const thisQuestion = defineProps({
  question: {
    type: Object as PropType<IQuestion>,
    required: true
  }
})

let attempted = ref(false);

function firstChoice() {
    choice.value = 1;
    checkAnswer(thisQuestion.question);
    attempted.value = true;
}

function secondChoice() {
    choice.value = 2;
    checkAnswer(thisQuestion.question);
    attempted.value = true;

}

function thirdChoice() {
    choice.value = 3;
    checkAnswer(thisQuestion.question);
    attempted.value = true;
}

function fourthChoice() {
    choice.value = 4;
    checkAnswer(thisQuestion.question);
    attempted.value = true;
}


const { checkAnswer, choice, isCorrect1, isCorrect2, isCorrect3, isCorrect4 } = getQuestion();

</script>

<template>
    <div class="quiz">
        <div class="question"> {{ question.id }}. {{ question.question }}</div>
        <div v-if = "attempted == false" class="options">
            <button class="option" @click="firstChoice()">{{ question.options[0] }}</button>
            <button class="option" @click="secondChoice()">{{ question.options[1]}}</button>
            <button class="option" @click="thirdChoice()">{{ question.options[2]}}</button>
            <button class="option" @click="fourthChoice()">{{ question.options[3]}}</button>
        </div>
        <div class="options" v-else>
            <div>
                <div v-if="isCorrect1 == false">
                    <button class="wrongAnswer">{{ question.options[0]}}</button>
                </div>
                <div v-else>
                    <button class="correctAnswer">{{ question.options[0]}}</button>
                </div>
            </div>
            <div>
                <div v-if="isCorrect2 == false">
                    <button class="wrongAnswer">{{ question.options[1]}}</button>
                </div>
                <div v-else>
                    <button class="correctAnswer">{{ question.options[1]}}</button>
                </div>
            </div>
            <div>
                <div v-if="isCorrect3 == false">
                    <button class="wrongAnswer">{{ question.options[2]}}</button>
                </div>
                <div v-else>
                    <button class="correctAnswer">{{ question.options[2]}}</button>
                </div>
            </div>
            <div>
                 <div v-if="isCorrect4 == false">
                    <button class="wrongAnswer">{{ question.options[3]}}</button>
                </div>
                <div v-else>
                    <button class="correctAnswer">{{ question.options[3]}}</button>
                </div>
            </div>
        </div>
    </div>
        
    
</template>

<style>

.quiz {
    width: 100%;
    margin: 20px;
    padding: 10px;
    border: 3px solid black;
}

.question {
    width: 100%;
	font-size: medium;
	padding: .5rem;
	max-width: 620px;
    display: flex;
}

.wrongAnswer {
	display: block;
    padding: 1rem;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
    background-color: red;
}

.correctAnswer {
    padding: 1rem;
	display: block;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
    background-color: green;
}

.options {
	margin-bottom: 1rem;
}

.option {
    padding: 1rem;
	display: block;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover{
    background-color: pink;
    transition: .3s;
}

</style>