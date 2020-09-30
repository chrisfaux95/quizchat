import React, { useState } from 'react';
import QuizBox from '../QuizBox';
import QuizForm from '../QuizForm';

export default function Quiz() {
    const [quizActive, setQuizActive] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState([]);

    const handleForm = (event) => {
        
        event.preventDefault();
        setQuizActive(true);
    };

    return (
        <>
            <QuizForm />
            <QuizBox />
        </>
    )
}