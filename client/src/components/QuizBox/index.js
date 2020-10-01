import React, { useState } from 'react';
import { Button, Container} from 'reactstrap';
import { shuffleArray } from '../../utils/quizFunctions';

export default function QuizBox(props) {
    let { q } = props;
    const [qIndex, setQIndex] = useState(0);
    const [questions, setQuestions] = useState({...q});
    const handleAnswer = () => {
        console.log(qIndex)
        if (qIndex > questions.length){
            setQIndex(0)
        } else {
            setQIndex(qIndex + 1);
        }
    }
    return (
        // <QuestionBox question={questions[qIndex]} handleAnswer={handleAnswer} />
        <div>
            <h1>{questions[qIndex].category}</h1>
            <h2>{questions[qIndex].question}</h2>
            <ul>
                <li>
                    {questions[qIndex].correct_answer}
                </li>
                {questions[qIndex].incorrect_answers.map(i =>{
                    return <li>{i}</li>
                })}
            </ul>
            <Button onClick={handleAnswer}>NEXT QUESTION</Button>
        </div>
    )
}


function QuizButton({ answer, onClick }) {
    return (
        <Button onClick={onClick}>
            {answer}
        </Button>
    )
}

function QuestionBox(props) {
    const { question, handleAnswer } = props;
    const answers = [question.correct_answer, ...question.incorrect_answer];
    shuffleArray(answers);
    return (
        <>
            <h1>{ question.category }</h1>
            <br />
            <h4>{ question.question }</h4>
            <br />
            {answers.map((ans) => <QuizButton answer={ans} onClick={handleAnswer} />)}
        </>
    )

}
