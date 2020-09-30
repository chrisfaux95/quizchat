import React, { useState } from 'react';
import QuizBox from '../QuizBox';
import QuizForm from '../QuizForm';
import { getQuestions, shuffleArray } from '../../utils/quizFunctions';

export default function Quiz() {
    const [quizState, setQuizState] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [qIndex, setQIndex] = useState(0);

    const handleForm = (catNum, diff) => {
        let q = getQuestions({ category: catNum, difficulty: diff })
        setQuizQuestions(q);
        setQuizState(1);
    };

    const quizSwitch = () => {
        switch(quizState){
            case 0:
                return <QuizForm handleQuizForm={handleForm}/>
            case 1:
                return <QuizBox questions={quizQuestions}/>
            case 2:
                // return <FinalScore />
        }
    }

    return (
        <>
            {quizSwitch(quizState)}
        </>
    )
}

