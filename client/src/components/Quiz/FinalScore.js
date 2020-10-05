import React, { useContext } from 'react';
import { Button } from 'reactstrap'
import QuizContext from '../../utils/QuizContext';

export default function FinalScore(props){
    const quiz = useContext(QuizContext);

    const handleReset = function () {
        quiz.handleScoreSubmit();
    }
    return (
        <>
            <h1>COMPLETE</h1>
            <h4>You scored {quiz.score} points!</h4>
            <Button onClick={handleReset}>Retry</Button>
        </>
    )
}