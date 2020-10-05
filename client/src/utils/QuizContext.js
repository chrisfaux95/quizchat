import React from 'react';
import Quiz from '../components/Quiz';
import { getQuestions, shuffleArray } from './quizFunctions';

const QuizContext = React.createContext({
    stage: 0,
    score: 0,
    questions: [],
    currentQ: "",
    cat: 0,
    diff: "",
    handleForm: function() {},
    handleQuiz: function() {},
    handleScoreSubmit: function () {
        // SUBMIT SCORE HERE
        this.stage = 0;
    }
});





export default QuizContext;