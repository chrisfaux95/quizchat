import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import { shuffleArray } from '../../utils/quizFunctions';
import { CatHead, QHead, AnsBtn } from '../Quiz/questionComponents';

export default function QuizBox(props) {
    let { q, score, setScore, handleQuizState } = props;
    const [qIndex, setQIndex] = useState(0);
    const [questions, setQuestions] = useState([...q]);
    const [currentQ, setCurrentQ] = useState(questions[qIndex]);
    const handleAnswer = () => {
        console.log(qIndex)
        if (qIndex > questions.length) {
            setQIndex(0);
            handleQuizState();
        } else {
            setQIndex(qIndex + 1);
            setScore(score + 1);
        }
    }

    const handleAnswerDisplay = function(question){
        console.log(question.correct_answer);
        let ansArr = [question.correct_answer, ...question.incorrect_answers];
        shuffleArray(ansArr);
        // console.log(shuffleArray);
        return (
            <div>
                {ansArr.map(a => <AnsBtn handleAnswer={handleAnswer} answer={a}/>)}
            </div>
        )
    
    }

    return (
        // <QuestionBox question={questions[qIndex]} handleAnswer={handleAnswer} />
        <div>
            {questions[qIndex] ? <>
                <CatHead>
                    {questions[qIndex].category}
                </CatHead>
                <QHead>
                    {questions[qIndex].question}
                </QHead>
                <div>
                    {handleAnswerDisplay(questions[qIndex])}
                </div>
                {questions[qIndex-1] ? <>The Correct Answer was: {questions[qIndex-1].correct_answer} </> : null}
            </> : <>COMPLETE</>}
        </div>
    )
}


