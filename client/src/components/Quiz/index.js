import React, { Component, useContext } from 'react';
import QuizBox from '../QuizBox';
import QuizForm from '../QuizForm';
import FinalScore from './FinalScore';
import { getQuestions, shuffleArray } from '../../utils/quizFunctions';
import QuizContext from '../../utils/QuizContext';


export default function Quiz(props) {
    const quiz = useContext(QuizContext);
    const handleForm = (catNum, diff) => {
        // console.log(diff,catNum)
        // console.log("handleForm")
        let q = getQuestions(diff, catNum).then(q => {
            // console.log(q);
            let qArr = [...q.data.results];
            // console.log("qArr", qArr);
            shuffleArray(qArr);
            // console.log("qArr (post shuffle)", qArr);
            // console.log("qArr Spread", [...qArr]);
            // console.log("quizQuestions", quizQuestions);
        });
    };


    const quizSwitch = () => {
        switch (quiz.stage) {
            case 0:
                return <QuizForm />
            case 1:
                return <QuizBox />
            case 2:
                return <FinalScore />
        }
    }
    return (
        <>
            {quizSwitch()}
        </>
    )
}

