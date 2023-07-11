<script setup lang="ts">
import router from '@/router';
import { RouteName } from '@/constants/route-names';

function startQuiz(){
    router.push({ name: RouteName.QUIZ });
}

</script>

<template>
    <div> Welcome to the Quiz App
        <p>
            <button @click="startQuiz">Start Quiz</button>
        </p>
    </div>

</template>