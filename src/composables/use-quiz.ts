import questionData from "@/data/question-data";
import type IQuestion from "@/interface/question";
import  { ref } from 'vue'

const questions = ref(questionData);
let result = ref(0);
let attempts = ref(0);
let isAnswering = ref(true);
const startingMinutes = ref(2);
let time = ref(startingMinutes.value*60);


function getQuestion() {

    let choice = ref(0);
    let isCorrect1 = ref(false);
    let isCorrect2 = ref(false);
    let isCorrect3 = ref(false);
    let isCorrect4 = ref(false);
  
    function checkAnswer(thisQuestion: IQuestion) {
      attemptCounter();
      checker(thisQuestion.answer)
      if (choice.value ==  thisQuestion.answer){
        result.value += 1;
      }
    }

  function checker (questionAnswer: number) {
    if (questionAnswer == 1){
        isCorrect1.value = true;
    }
    
    if (questionAnswer == 2){
        isCorrect2.value = true;
    }
    
    if (questionAnswer == 3){
        isCorrect3.value = true;
    }
    
    if (questionAnswer == 4){
        isCorrect4.value = true;
    }
  }

  function attemptCounter() {

    if (attempts.value +1 < questions.value.length){
      attempts.value += 1;
    }

    else{
      isAnswering.value = false;
    }
    
  }

  return { result, questions, choice, checkAnswer, isCorrect1, isCorrect2, isCorrect3, isCorrect4, isAnswering, attempts, time, startingMinutes }
  }
  
  export default getQuestion;