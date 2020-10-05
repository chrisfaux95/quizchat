import React, { useContext } from 'react';
import QuizContext from '../../utils/QuizContext';
import { shuffleArray } from '../../utils/quizFunctions';
import { CatHead, QHead, AnsBtn } from '../Quiz/questionComponents';

export default function QuizBox(props) {

    const quiz = useContext(QuizContext);

    const handleAnswer = () => {
        quiz.handleQuiz();
    }

    const handleAnswerDisplay = function(question){
        console.log(question.correct_answer);
        let ansArr = [question.correct_answer, ...question.incorrect_answers];
        shuffleArray(ansArr);
        return (
            <div>
                {ansArr.map(a => <AnsBtn handleAnswer={handleAnswer} answer={a}/>)}
            </div>
        )
    
    }

    return (
        <div>
            <CatHead>
                {quiz.currentQ.category}
            </CatHead>
            <QHead>
                {quiz.currentQ.question}
            </QHead>
            <div>
                {handleAnswerDisplay(quiz.currentQ)}
            </div>
        </div>
    )
}


