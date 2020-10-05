import React, { useContext, useState } from 'react';
import { Button, Input } from 'reactstrap'
import QuizContext from '../../utils/QuizContext';

export default function FinalScore(props) {
    const quiz = useContext(QuizContext);
    const [username, setUsername] = useState("");

    const handleInputChange = (formEvent) => {
        formEvent.preventDefault();
        setUsername(formEvent.target.value);
    }




    const handleScoreSave = function () {
        quiz.handleScoreSubmit(username);
    }

    return (
        <>
            <h1>COMPLETE</h1>
            <h4>You scored {quiz.score} points!</h4>
            <Input
                type="text"
                id="nickname"
                placeholder="Enter Username"
                value={username}
                onChange={handleInputChange} />
            <Button onClick={handleScoreSave}>Save Your Score and Retry!</Button>
        </>
    )
}