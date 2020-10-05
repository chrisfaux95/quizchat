import React, { Component } from 'react';
import QuizBox from '../QuizBox';
import QuizForm from '../QuizForm';
import FinalScore from './FinalScore';
import { getQuestions, shuffleArray } from '../../utils/quizFunctions';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            quizState: 0,
            quizQuestions: []
        }
    }

    handleForm = (catNum, diff) => {
        // console.log(diff,catNum)
        // console.log("handleForm")
        let q = getQuestions(diff, catNum).then(q => {
            // console.log(q);
            let qArr = [...q.data.results];
            // console.log("qArr", qArr);
            shuffleArray(qArr);
            // console.log("qArr (post shuffle)", qArr);
            // console.log("qArr Spread", [...qArr]);
            setQuizQuestions([...qArr]);
            // console.log("quizQuestions", quizQuestions);
            setQuizState(1);
        });
    };
    

    quizSwitch = () => {
        switch (quizState) {
            case 0:
                return <QuizForm handleQuizForm={handleForm} />
            case 1:
                return <QuizBox
                    q={quizQuestions}
                    quizState={quizState}
                    score={score}
                />
            case 2:
                return <FinalScore
                    score={score}
                    quizState={quizState} />
        }
    }

    render() {
        return (
            <>
                {quizSwitch()}
            </>
        )
    }
}

