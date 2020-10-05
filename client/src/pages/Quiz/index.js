import React, { useState, useContext } from "react";
import {
    Jumbotron,
    Container
} from 'reactstrap';
import Scoreboard from "../../components/Scoreboard";
import Quiz from '../../components/Quiz'
import QuizContext from '../../utils/QuizContext';
import { getQuestions, shuffleArray, saveScore } from '../../utils/quizFunctions'
import "./style.css"

function QuizPg(props) {
    const quiz = useContext(QuizContext);
    const [,setUpdate] = useState();
    const [pageState, setPageState] = useState({
        stage: 0,
        score: 0,
        questions: [],
        handleForm: function (cat, diff) {
            this.cat = cat;
            this.diff = diff;
            getQuestions(diff, cat).then((res) => {
                let q = res.data.results;
                shuffleArray(q);
                this.questions = [...q];
                this.currentQ = this.questions[0];
                this.stage = 1;
                setUpdate({})
            });
        },
        handleQuiz: function (answer) {
            if (answer === this.currentQ.correct_answer) {
                this.score += 100;
            }
            let nextQindex = this.questions.indexOf(this.currentQ) + 1;
            if (nextQindex >= this.questions.length) {
                this.stage = 2;
            } else {
                this.currentQ = this.questions[nextQindex];
            }
            setUpdate({})
        },
        handleScoreSubmit: function (username) {
            // SUBMIT SCORE HERE
            
            this.stage = 0;
            setUpdate({})
        }

    })

    return (
        <QuizContext.Provider value={pageState}>
            <div className="row">
                <Scoreboard />
                <Jumbotron className="col-lg-9 my-0" fluid>
                    <Quiz />
                </Jumbotron>
            </div>
        </QuizContext.Provider>
    );
};

export default QuizPg;