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
    handleForm: function (cat, diff) {
        this.cat = cat;
        this.diff = diff;
        let q = await getQuestions(diff, cat);
        shuffleArray(q);
        this.questions = [...q];
        this.currentQ = this.questions[0];
        this.stage = 1;
    },
    handleQuiz: function (answer) {
        if (answer === this.currentQ.correct_answer) {
            this.score += 100;
        }
        let nextQindex = this.questions.indexOf(this.currentQ) + 1;
        if (nextQindex >= this.questions.length) {
            this.stage = 2;
        }
    },
    handleScoreSubmit: function (username) {
        // SUBMIT SCORE HERE
        this.stage = 0;
    }
});





export default QuizContext;