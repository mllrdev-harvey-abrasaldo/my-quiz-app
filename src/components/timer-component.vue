<script setup lang="ts">
import { ref } from 'vue';
import getQuestion from '@/composables/use-quiz';

const { time, isAnswering } = getQuestion();
let currentTime = ref('');

const myInterval = ref(setInterval(start, 1000))

function start() {
    time.value--;
    const minutes = ref(Math.floor(time.value/60));
    let seconds = ref(time.value%60);
    currentTime.value = `${minutes.value} : ${seconds.value}`;
    if(time.value == 0 || isAnswering.value==false){
        clearInterval(myInterval.value);
        isAnswering.value=false;
    }
}

</script>

<template>
    <div class="timer">
        Remaining Time {{currentTime}}
    </div>
</template>

<style>
.timer {
    padding-top: 50px;
    margin-left: 20rem;
    font-size: x-large;
}
</style>