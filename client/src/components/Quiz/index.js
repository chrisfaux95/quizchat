import React, { useState } from 'react';
import QuizBox from '../QuizBox';
import QuizForm from '../QuizForm';
import { getQuestions, shuffleArray } from '../../utils/quizFunctions';

export default function Quiz() {
    const [quizState, setQuizState] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [score, setScore] = useState(0);

    const handleForm = (catNum, diff) => {
        console.log(diff,catNum)
        console.log("handleForm")
        let q = getQuestions(diff, catNum).then(q => {
            console.log(q);
            let qArr = [...q.data.results];
            console.log("qArr", qArr);
            shuffleArray(qArr);
            console.log("qArr (post shuffle)", qArr);
            console.log("qArr Spread", [...qArr]);
            setQuizQuestions([...qArr]);
            console.log("quizQuestions", quizQuestions);
            setQuizState(1);
        });
        
    };

    const quizSwitch = () => {
        switch(quizState){
            case 0:
                return <QuizForm handleQuizForm={handleForm}/>
            case 1:
                return <QuizBox q={quizQuestions}/>
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

